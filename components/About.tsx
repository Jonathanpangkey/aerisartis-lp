import React from "react";
import {Sparkles, Flame, Users} from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Sparkles className='w-6 h-6' />,
      title: "Desain Eksklusif",
      description: "Setiap karya dirancang dengan detail yang memukau dan desain yang unik",
    },
    {
      icon: <Flame className='w-6 h-6' />,
      title: "Pengrajin Ahli",
      description: "Dibuat oleh tangan-tangan terampil dengan pengalaman lebih dari 20 tahun",
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Custom Order",
      description: "Kami menerima pesanan khusus sesuai dengan kebutuhan dan keinginan Anda",
    },
  ];

  const stats = [
    {value: "20+", label: "Tahun Pengalaman"},
    {value: "500+", label: "Karya Tercipta"},
    {value: "300+", label: "Pelanggan Puas"},
    {value: "100%", label: "Handmade"},
  ];

  return (
    <section id="about" className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-20 left-1/7 w-100 h-100 bg-[#d4a373]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-1/7 w-100 h-100 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>TENTANG KAMI</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Menciptakan <span className='text-accent'>Keindahan Abadi</span>
          </h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto leading-relaxed'>
            Aerisartis adalah studio kerajinan yang mengkhususkan diri dalam pembuatan karya seni tembaga dan kuningan. Kami percaya bahwa setiap
            karya adalah cerminan dari dedikasi dan passion kami terhadap seni metalworking.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group relative bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-8 hover:border-accent/50 transition-all duration-300'>
              <div className='w-14 h-14 bg-linear-to-br from-accent to-[#b85c2e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <div className='text-white'>{feature.icon}</div>
              </div>

              <h3 className='text-xl font-bold text-white mb-3'>{feature.title}</h3>
              <p className='text-white/60 leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-accent mb-2'>{stat.value}</div>
              <div className='text-white/60 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
