export const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800",
      title: "Mangkuk Tembaga Klasik",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800",
      title: "Lampu Gantung Kuningan",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800",
      title: "Dekorasi Dinding Modern",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
      title: "Vas Bunga Elegan",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
      title: "Set Peralatan Makan",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className='relative py-24 px-6 overflow-hidden bg-[#0a0a0a]'>
      <div className='absolute top-1/3 left-0 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/3 right-0 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>GALERI KAMI</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Karya <span className='text-accent'>Terpilih</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Jelajahi koleksi kerajinan tembaga dan kuningan yang telah kami ciptakan dengan penuh dedikasi
          </p>
        </div>

        {/* Grid Container: Default 1 kolom (HP), md ke atas 3 kolom */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:auto-rows-[200px] gap-4'>
          {galleryItems.map((item) => (
            <div key={item.id} className={`group relative rounded-2xl overflow-hidden cursor-pointer h-62.5 md:h-auto ${item.span}`}>
              <img src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />

              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-white font-bold text-lg mb-1'>{item.title}</h3>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-0.5 bg-accent'></div>
                    <span className='text-accent text-sm font-medium'>Lihat Detail</span>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-white/70 mb-6'>Tertarik dengan karya kami? Mari diskusikan proyek impian Anda</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='bg-linear-to-r cursor-pointer from-primary to-[#d46e3d] hover:brightness-110 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
              Hubungi Kami
            </button>
            <button className='border-2 cursor-pointer border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 '>
              Lihat Katalog Lengkap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
