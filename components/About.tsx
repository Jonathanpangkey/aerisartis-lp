"use client";
import {Wrench, Handshake, MapPin, Truck, Globe, CreditCard, MessageSquare, Hammer} from "lucide-react";
import {useLanguage} from "@/context/LanguageContext";

export const About = () => {
  const {dict} = useLanguage();

  if (!dict) return null;

  const features = [
    {
      icon: <Wrench className='w-6 h-6' />,
      title: dict.about.features.customization.title,
      description: dict.about.features.customization.description,
    },
    {
      icon: <Handshake className='w-6 h-6' />,
      title: dict.about.features.collaboration.title,
      description: dict.about.features.collaboration.description,
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: dict.about.features.survey.title,
      description: dict.about.features.survey.description,
    },
    {
      icon: <Truck className='w-6 h-6' />,
      title: dict.about.features.delivery.title,
      description: dict.about.features.delivery.description,
    },
    {
      icon: <Hammer className='w-6 h-6' />,
      title: dict.about.features.craftsman.title,
      description: dict.about.features.craftsman.description,
    },
    {
      icon: <CreditCard className='w-6 h-6' />,
      title: dict.about.features.payment.title,
      description: dict.about.features.payment.description,
    },
  ];

  const stats = [
    {label: dict.about.stats.handmade_quality, value: "100%"},
    {label: dict.about.stats.quality_control, value: dict.about.stats.quality_control_value},
    {label: dict.about.stats.material_quality, value: dict.about.stats.material_quality_value},
    {label: dict.about.stats.consultation, value: dict.about.stats.consultation_value},
  ];

  return (
    <section id='about' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-20 left-1/7 w-100 h-100 bg-primary-background/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-1/7 w-100 h-100 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>{dict.about.subtitle}</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {dict.about.title.part1} <span className='text-accent'>{dict.about.title.part2}</span> {dict.about.title.part3}
          </h2>
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

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-2xl md:text-4xl font-bold text-accent mb-2'>{stat.value}</div>
              <div className='text-white/50 text-xs'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
