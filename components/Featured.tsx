import Link from "next/link";

export const Featured = () => {
  const collections = [
    {
      title: "Golden Elegance Vase",
      description: "Vas tembaga dengan finishing emas yang memukau",
      category: "Dekorasi Rumah",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    },
    {
      title: "Golden Elegance Vase",
      description: "Vas tembaga dengan finishing emas yang memukau",
      category: "Dekorasi Rumah",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    },
    {
      title: "Golden Elegance Vase",
      description: "Vas tembaga dengan finishing emas yang memukau",
      category: "Dekorasi Rumah",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    },
    {
      title: "Golden Elegance Vase",
      description: "Vas tembaga dengan finishing emas yang memukau",
      category: "Dekorasi Rumah",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    },
    {
      title: "Artisan Bowl Collection",
      description: "Koleksi mangkuk kuningan dengan ukiran tradisional",
      category: "Seni Makan",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800",
    },
    {
      title: "Heritage Wall Art",
      description: "Hiasan dinding tembaga dengan motif tradisional modern",
      category: "Seni Dinding",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800",
    },
  ];

  return (
    <section id='featured' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 right-1/4 w-95 h-95 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/3 w-95 h-95 bg-[#d4a373]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>KOLEKSI PILIHAN</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Karya <span className='text-accent'>Eksklusif</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Setiap karya kami yang dirancang dengan penuh perhatian terhadap detail dan kualitas
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {collections.map((item, index) => (
            <div
              key={index}
              className='group relative bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden  transition-all duration-300'>
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
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors'>{item.title}</h3>
                <p className='text-white/60 text-sm leading-relaxed'>{item.description}</p>
              </div>
              <div className='absolute inset-0 border-2 border-[#d4a373] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link href='/featured'>
            <button className='bg-linear-to-r cursor-pointer from-primary to-[#d46e3d] hover:from-[#d46e3d] hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
              Lihat Semua Koleksi
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
