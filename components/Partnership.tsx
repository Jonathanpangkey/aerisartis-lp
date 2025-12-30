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

        <div className='flex flex-wrap justify-center items-center gap-6'>
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className='max-w-35 h-35 object-contain grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-300 '
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
