"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {Loader2} from "lucide-react";
import {ProductService} from "@/lib/service/product-service";
import type {Product} from "@/lib/supabase";

export const Featured = () => {
  const [collections, setCollections] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      setLoading(true);
      const {data, error} = await ProductService.getFeaturedProducts(3);

      if (error) {
        setError(error);
      } else {
        setCollections(data || []);
      }

      setLoading(false);
    }

    fetchFeaturedProducts();
  }, []);

  return (
    <section id='featured' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 right-1/4 w-95 h-95 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/3 w-95 h-95 bg-primary-background/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>Katalog Kami</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Karya <span className='text-accent'>Eksklusif</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Setiap karya kami yang dirancang dengan penuh perhatian terhadap detail dan kualitas
          </p>
        </div>

        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
            <p className='text-white/60'>Memuat koleksi...</p>
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
        ) : collections.length > 0 ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {collections.map((item) => (
                <Link
                  key={item.id}
                  href={`/featured/${item.id}`}
                  className='group relative bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden transition-all duration-300 block hover:border-accent/50'>
                  <div className='relative aspect-4/3 overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />

                    <div className='absolute top-4 left-4'>
                      <span className='bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full'>{item.category}</span>
                    </div>

                    <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60'></div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-1'>{item.title}</h3>
                    <p className='text-white/60 text-sm leading-relaxed line-clamp-2'>{item.description}</p>
                  </div>
                  <div className='absolute inset-0 border-2 border-primary-background rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                </Link>
              ))}
            </div>

            <div className='text-center mt-12'>
              <Link href='/featured'>
                <button className='bg-linear-to-r cursor-pointer from-primary to-[#d46e3d] hover:from-[#d46e3d] hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
                  Lihat Semua Koleksi
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className='text-center py-20'>
            <p className='text-white/60 text-lg'>Belum ada produk tersedia</p>
          </div>
        )}
      </div>
    </section>
  );
};
