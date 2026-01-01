"use client";
import {useState, useEffect} from "react";
import {ArrowLeft, Search, Filter, Loader2} from "lucide-react";
import Link from "next/link";
import {supabase, type Product} from "@/lib/supabase";

export default function page() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [collections, setCollections] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ["Semua", "Dekorasi Rumah", "Seni Makan", "Seni Dinding", "Vas & Pot", "Lampu", "Peralatan"];

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const {data, error} = await supabase.from("products").select("*").order("created_at", {ascending: false});

        if (error) throw error;

        setCollections(data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Gagal memuat produk. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredCollections = collections.filter((item) => {
    const matchCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className='min-h-screen bg-[#0a0908]'>
      <div className='relative bg-linear-to-b from-[#1c1917] to-[#0a0908] border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-8'>
          <Link href='/' className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-6'>
            <ArrowLeft className='w-5 h-5' />
            <span>Kembali</span>
          </Link>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative w-full md:w-96'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
              <input
                type='text'
                placeholder='Cari produk...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-full pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='sticky top-0 z-40 bg-[#0a0908]/95 backdrop-blur-md border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
            <Filter className='w-5 h-5 text-white/60 shrink-0' />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${selectedCategory === category ? "bg-accent text-white" : "bg-[#1c1917]/50 text-white/70 hover:text-white hover:bg-[#1c1917]"}
                `}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
            <p className='text-white/60'>Memuat produk...</p>
          </div>
        ) : error ? (
          <div className='text-center py-20'>
            <p className='text-red-400 text-lg mb-4'>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/80 transition-colors'>
              Coba Lagi
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6 text-white/60 text-sm'>Menampilkan {filteredCollections.length} produk</div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredCollections.map((item) => (
                <Link
                  key={item.id}
                  href={`/featured/${item.id}`}
                  className='group relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 block'>
                  <div className='relative aspect-square overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full'>{item.category}</span>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60'></div>
                  </div>

                  <div className='p-5'>
                    <h3 className='text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-1'>{item.title}</h3>
                    <p className='text-white/60 text-sm leading-relaxed mb-4 line-clamp-2'>{item.description}</p>
                    <div className='flex items-center justify-between'>
                      <span className='bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all ml-auto'>
                        Detail
                      </span>
                    </div>
                  </div>

                  <div className='absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                </Link>
              ))}
            </div>

            {filteredCollections.length === 0 && !loading && (
              <div className='text-center py-20'>
                <p className='text-white/60 text-lg'>Tidak ada produk ditemukan</p>
                <button
                  onClick={() => {
                    setSelectedCategory("Semua");
                    setSearchQuery("");
                  }}
                  className='mt-4 text-accent hover:underline'>
                  Reset Filter
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
