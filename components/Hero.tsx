export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <video src='/assets/bg.mp4' autoPlay loop muted playsInline className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-6 text-center'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl  mb-6'>
          <span className='text-accent block m-0'>Seni dalam</span>
          <span className='text-white'>Setiap Detail</span>
        </h1>

        <p className='text-muted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed'>
          Kerajinan tembaga & kuningan yang menggabungkan tradisi dengan sentuhan modern untuk menciptakan karya seni yang tak terlupakan
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='bg-primary cursor-pointer text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-primary'>
            Jelajahi Koleksi
          </button>

          <button className='border-2 cursor-pointer border-accent text-accent px-7.5 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-accent'>
            Hubungi Kami
          </button>
        </div>
      </div>

      <div className='absolute top-1/4 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl' />
    </section>
  );
};
