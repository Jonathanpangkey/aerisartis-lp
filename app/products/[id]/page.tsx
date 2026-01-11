"use client";
import {ArrowLeft, Share2, ShoppingCart, Loader2} from "lucide-react";
import Link from "next/link";
import {useState, useEffect, use} from "react";
import {ProductService} from "@/lib/service/product-service";
import type {Product} from "@/lib/service/product-service";
import {useLanguage} from "@/context/LanguageContext";

export default function ProductDetailPage({params}: {params: Promise<{id: string}>}) {
  const {id} = use(params);
  const {dict, locale} = useLanguage();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const {data, error} = await ProductService.getProductById(id);

      if (error) {
        setError(error);
      } else {
        setProduct(data);
      }
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  if (!dict) return null;

  const handleOrderWhatsApp = () => {
    if (!product) return;

    const whatsappMessage =
      locale === "id"
        ? `Halo, saya tertarik dengan produk:

*${product.title}*
Kategori: ${product.category}
Saya ingin mengetahui lebih lanjut tentang produk ini dan proses pemesanannya. Terima kasih!`
        : `Hello, I am interested in this product:

*${product.title}*
Category: ${product.category}
I would like to know more about this product and the ordering process. Thank you!`;

    const phoneNumber = "6281328390414";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(dict.productDetail.share_success);
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-[#0a0908] flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
          <p className='text-white/60'>{dict.productDetail.loading}</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className='min-h-screen bg-[#0a0908] flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-400 text-lg mb-4'>{error || dict.productDetail.not_found}</p>
          <Link
            href='/products'
            className='inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/80 transition-colors'>
            <ArrowLeft className='w-5 h-5' />
            {dict.productDetail.back_to_catalog}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#0a0908]'>
      <div className='sticky top-0 z-40 bg-[#0a0908]/95 backdrop-blur-md border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/products' className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors'>
              <ArrowLeft className='w-5 h-5' />
              <span>{dict.productDetail.back_button}</span>
            </Link>
            <div className='flex items-center gap-4'>
              <button onClick={handleShare} className='p-2 text-white/70 hover:text-accent transition-colors'>
                <Share2 className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <div className='relative aspect-square bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden'>
              <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
            </div>
          </div>

          <div className='space-y-6'>
            <div>
              <span className='inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full'>{product.category}</span>
            </div>

            <div>
              <h1 className='text-4xl font-bold text-white mb-4'>{product.title}</h1>
            </div>

            <div className='border-t border-[#292524] pt-6'>
              <h3 className='text-lg font-semibold text-white mb-3'>{dict.productDetail.description_title}</h3>
              <p className='text-white/70 leading-relaxed'>{product.description}</p>
            </div>

            <div className='border-t border-[#292524] pt-6 space-y-3'>
              <button
                onClick={handleOrderWhatsApp}
                className='w-full bg-linear-to-r from-primary to-[#d46e3d] hover:from-[#d46e3d] hover:to-primary text-white py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3'>
                <ShoppingCart className='w-5 h-5' />
                {dict.productDetail.order_button}
              </button>
            </div>

            <div className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-xl p-4'>
              <p className='text-white/60 text-sm leading-relaxed'>
                <span className='text-accent font-semibold'>{dict.productDetail.note_label}</span> {dict.productDetail.note_text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
