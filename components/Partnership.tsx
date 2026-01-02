"use client";

export const Partnership = () => {
  const partners = [
    {
      name: "Coat of Arms Yogyakarta",
      logo: "/assets/img/partnership-01.webp",
    },
    {
      name: "Denjaka",
      logo: "/assets/img/partnership-02.webp",
    },
    {
      name: "Marinir",
      logo: "/assets/img/partnership-03.webp",
    },
    {
      name: "Kota Magelang",
      logo: "/assets/img/partnership-04.webp",
    },
    {
      name: "Kota Semarang",
      logo: "/assets/img/partnership-05.webp",
    },
    {
      name: "PSI",
      logo: "/assets/img/partnership-06.webp",
    },
    {
      name: "MaxOne Hotel",
      logo: "/assets/img/partnership-07.webp",
    },
    {
      name: "Polres Cimahi",
      logo: "/assets/img/partnership-08.webp",
    },
    {
      name: "Sekretariat Kabinet",
      logo: "/assets/img/partnership-09.webp",
    },
    {
      name: "Provinsi Bali",
      logo: "/assets/img/partnership-10.webp",
    },
    {
      name: "Kabupaten Banyuasin",
      logo: "/assets/img/partnership-11.webp",
    },
    {
      name: "Kabupaten Kutai Kartanegara",
      logo: "/assets/img/partnership-12.webp",
    },
    {
      name: "Provinsi Kalimantan Timur",
      logo: "/assets/img/partnership-13.webp",
    },
  ];

  return (
    <section id='partnership' className='relative py-24 px-6 overflow-hidden bg-[#0a0908]'>
      <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-primary-background/8 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#b85c2e]/8 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>MITRA KAMI</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Dipercaya oleh <span className='text-accent'>Partner Terbaik</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Kami bangga telah bekerja sama dengan berbagai institusi dan perusahaan terkemuka di Indonesia
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className='md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6'>
          {partners.map((partner, index) => (
            <img key={index} src={partner.logo} alt={partner.name} className='shrink-0 w-32 h-32 object-contain snap-center' />
          ))}
        </div>

        {/* Desktop: Flex Wrap */}
        <div className='hidden md:flex flex-wrap justify-center items-center gap-6'>
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className='max-w-35 h-35 object-contain grayscale hover:grayscale-0 transition-all duration-300'
            />
          ))}
        </div>
      </div>

      <div className='mt-16 text-center'>
        <div className='inline-flex items-center gap-3 bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-full px-8 py-4'>
          <div className='w-3 h-3 bg-accent rounded-full animate-pulse'></div>
          <p className='text-white/80 text-sm font-medium'>
            Dipercaya oleh <span className='text-accent font-bold'>10+</span> partner sejak 2004
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

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
    <section id='gallery' className='relative py-24 px-6 overflow-hidden bg-background-dark'>
      <div className='absolute top-1/3 left-0 w-96 h-96 bg-primary-background/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/3 right-0 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>KARYA KAMI</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Hasil <span className='text-accent'>Kolaborasi</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>Jelajahi koleksi kerajinan pilihan yang telah kami ciptakan dengan penuh dedikasi</p>
        </div>

        <div className='md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6'>
          {galleryItems.map((item) => (
            <div key={item.id} className='group relative rounded-2xl overflow-hidden cursor-pointer shrink-0 w-70 h-87.5 snap-center'>
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

        <div className='hidden md:grid grid-cols-3 auto-rows-[200px] gap-4'>
          {galleryItems.map((item) => (
            <div key={item.id} className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}>
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
          <button className='bg-linear-to-r cursor-pointer from-primary to-[#d46e3d] hover:brightness-110 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};
