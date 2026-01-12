"use client";
import {useState, useEffect} from "react";
import {ArrowLeft, Search, Filter, Loader2} from "lucide-react";
import Link from "next/link";
import {ProductService} from "@/lib/service/product-service";
import type {Product} from "@/lib/service/product-service";
import {useLanguage} from "@/context/LanguageContext";

export default function ProductsPage() {
  const {dict, locale} = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [collections, setCollections] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (!dict) return null;

  const categories = [
    {id: "all", label: dict.productsPage.categories.all},
    {id: "home_decor", label: dict.productsPage.categories.home_decor},
    {id: "dining_art", label: dict.productsPage.categories.dining_art},
    {id: "wall_art", label: dict.productsPage.categories.wall_art},
    {id: "vases_pots", label: dict.productsPage.categories.vases_pots},
    {id: "lamps", label: dict.productsPage.categories.lamps},
    {id: "equipment", label: dict.productsPage.categories.equipment},
  ];

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const {data, error} = await ProductService.getAllProducts();

      if (error) {
        setError(error);
      } else {
        setCollections(data || []);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  const categoryMapping: {[key: string]: {id: string; en: string}} = {
    all: {id: "Semua", en: "All"},
    home_decor: {id: "Dekorasi Rumah", en: "Home Decor"},
    dining_art: {id: "Seni Makan", en: "Dining Art"},
    wall_art: {id: "Seni Dinding", en: "Wall Art"},
    vases_pots: {id: "Vas & Pot", en: "Vases & Pots"},
    lamps: {id: "Lampu", en: "Lamps"},
    equipment: {id: "Peralatan", en: "Utensils"},
  };

  const filteredCollections = collections.filter((product) => {
    const localized = ProductService.getLocalizedProduct(product, locale);

    const matchCategory =
      selectedCategory === "all" ||
      product.category === categoryMapping[selectedCategory].id ||
      product.category_en === categoryMapping[selectedCategory].en;

    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.title_en?.toLowerCase().includes(searchLower) ||
      false ||
      product.description_en?.toLowerCase().includes(searchLower) ||
      false;

    return matchCategory && matchSearch;
  });

  return (
    <div className='min-h-screen bg-background-dark'>
      <div className='relative bg-linear-to-b from-[#1c1917] to-[#0a0908] border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-8'>
          <Link href='/' className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-6'>
            <ArrowLeft className='w-5 h-5' />
            <span>{dict.productsPage.back_button}</span>
          </Link>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative w-full md:w-96'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
              <input
                type='text'
                placeholder={dict.productsPage.search_placeholder}
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
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${selectedCategory === category.id ? "bg-accent text-white" : "bg-[#1c1917]/50 text-white/70 hover:text-white hover:bg-[#1c1917]"}
                `}>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
            <p className='text-white/60'>{dict.productsPage.loading}</p>
          </div>
        ) : error ? (
          <div className='text-center py-20'>
            <p className='text-red-400 text-lg mb-4'>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/80 transition-colors'>
              {dict.productsPage.retry}
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6 text-white/60 text-sm'>
              {dict.productsPage.showing} {filteredCollections.length} {dict.productsPage.products}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredCollections.map((item) => {
                const localized = ProductService.getLocalizedProduct(item, locale);

                return (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className='group relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 block'>
                    <div className='relative aspect-square overflow-hidden'>
                      <img
                        src={item.image}
                        alt={localized.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute top-4 left-4'>
                        <span className='bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full'>{localized.category}</span>
                      </div>
                      <div className='absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60'></div>
                    </div>

                    <div className='p-5'>
                      <h3 className='text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-1'>{localized.title}</h3>
                      <p className='text-white/60 text-sm leading-relaxed mb-4 line-clamp-2'>{localized.description}</p>
                      <div className='flex items-center justify-between'>
                        <span className='bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all ml-auto'>
                          {dict.productsPage.detail_button}
                        </span>
                      </div>
                    </div>

                    <div className='absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                  </Link>
                );
              })}
            </div>

            {filteredCollections.length === 0 && !loading && (
              <div className='text-center py-20'>
                <p className='text-white/60 text-lg'>{dict.productsPage.no_products}</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className='mt-4 text-accent hover:underline'>
                  {dict.productsPage.reset_filter}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
