"use client";

export const Partnership = () => {
  const partners = [
    {
      name: "Hotel Tentrem",
      logo: "/assets/img/logo.png",
    },
    {
      name: "The Royal Surakarta",
      logo: "/assets/img/logo.png",
    },
    {
      name: "Museum Batik",
      logo: "/assets/img/logo.png",
    },
    {
      name: "Taman Sari Gallery",
      logo: "/assets/img/logo.png",
    },
    {
      name: "Keraton Jogja",
      logo: "/assets/img/logo.png",
    },
    {
      name: "Grand Aston Hotel",
      logo: "/assets/img/logo.png",
    },
  ];

  return (
    <section id='partnership' className='relative py-24 px-6 overflow-hidden bg-[#0a0908]'>
      <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4a373]/8 rounded-full blur-3xl'></div>
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

        <div className='flex flex-wrap justify-center items-center gap-8'>
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className='w-50 object-contain grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-300'
            />
          ))}
        </div>
      </div>
      <div className='mt-16 text-center'>
        <div className='inline-flex items-center gap-3 bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-full px-8 py-4'>
          <div className='w-3 h-3 bg-accent rounded-full animate-pulse'></div>
          <p className='text-white/80 text-sm font-medium'>
            Dipercaya oleh <span className='text-accent font-bold'>50+</span> partner sejak 2004
          </p>
        </div>
      </div>
    </section>
  );
};
