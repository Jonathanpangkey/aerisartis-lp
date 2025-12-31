"use client";
import Link from "next/link";
import {useState} from "react";

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {!isVideoLoaded && (
        <div className='absolute inset-0 z-20 flex items-center justify-center bg-black'>
          <div className='w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin'></div>
        </div>
      )}

      <div className='absolute inset-0 z-0'>
        <video
          src='/assets/bg.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70' />
      </div>

      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center ${
          !isVideoLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}>
        <h1 className='text-5xl md:text-6xl lg:text-7xl mb-6'>
          <span className='text-accent block m-0'>Abadikan Estetika</span>
          <span className='text-white'>Dalam Timpaan Logam</span>
        </h1>

        <p className='text-muted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed'>
          Kerajinan tembaga dan kuningan yang dikerjakan dengan ketelitian, menghadirkan nilai estetika dan fungsi dalam satu kesatuan.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link href='/featured'>
            <button className='bg-primary cursor-pointer text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-primary'>
              Jelajahi Koleksi
            </button>
          </Link>

          <Link href='#contact'>
            <button className='border-2 cursor-pointer border-accent text-accent px-7.5 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-accent'>
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>

      <div className='absolute top-1/4 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl' />
    </section>
  );
};
