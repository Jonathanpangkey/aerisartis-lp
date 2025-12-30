"use client";
import {ArrowLeft, Share2, Heart, ShoppingCart, Phone} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

export default function ProductDetailPage({params}: {params: {id: string}}) {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: params.id,
    title: "Golden Elegance Vase",
    category: "Dekorasi Rumah",

    description:
      "Vas tembaga dengan finishing emas yang memukau, dibuat dengan teknik tradisional oleh pengrajin berpengalaman. Setiap detail diukir dengan presisi tinggi untuk menghasilkan karya seni yang tidak hanya indah dipandang, tetapi juga tahan lama.",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800",
    ],
  };

  const handleOrderWhatsApp = () => {
    const whatsappMessage = `Halo, saya tertarik dengan produk:

*${product.title}*
Kategori: ${product.category}
Saya ingin mengetahui lebih lanjut tentang produk ini dan proses pemesanannya. Terima kasih!`;

    const phoneNumber = "6281328390414";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <div className='min-h-screen bg-[#0a0908]'>
      <div className='sticky top-0 z-40 bg-[#0a0908]/95 backdrop-blur-md border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/featured' className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors'>
              <ArrowLeft className='w-5 h-5' />
              <span>Kembali</span>
            </Link>
            <div className='flex items-center gap-4'>
              <button className='p-2 text-white/70 hover:text-accent transition-colors'>
                <Share2 className='w-5 h-5' />
              </button>
              <button className='p-2 text-white/70 hover:text-accent transition-colors'>
                <Heart className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <div className='relative aspect-square bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden'>
              <img src={product.images[selectedImage]} alt={product.title} className='w-full h-full object-cover' />
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
              <h3 className='text-lg font-semibold text-white mb-3'>Deskripsi Produk</h3>
              <p className='text-white/70 leading-relaxed'>{product.description}</p>
            </div>

            <div className='border-t border-[#292524] pt-6 space-y-3'>
              <button
                onClick={handleOrderWhatsApp}
                className='w-full bg-linear-to-r from-primary to-[#d46e3d] hover:from-[#d46e3d] hover:to-primary text-white py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3'>
                <ShoppingCart className='w-5 h-5' />
                Pesan Sekarang
              </button>
            </div>

            <div className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-xl p-4'>
              <p className='text-white/60 text-sm leading-relaxed'>
                <span className='text-accent font-semibold'>Catatan:</span> Setiap produk dibuat dengan tangan sehingga mungkin terdapat sedikit
                perbedaan dengan gambar. Hal ini justru membuat setiap produk menjadi unik dan istimewa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
