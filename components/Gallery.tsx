"use client";
import Link from "next/link";
import {useLanguage} from "@/context/LanguageContext";

export const Gallery = () => {
  const {dict} = useLanguage();

  if (!dict) return null;

  const galleryItems = [
    {
      id: 1,
      image: "/assets/img/portofolio/portfolio-brass-logo-direktorat-jenderal-pemasyarakatan.jpeg",
      title: "Brass Logo Direktorat Jenderal Pemasyarakatan",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 2,
      image: "/assets/img/portofolio/portfolio-brass-logo-polres-cimahi.jpg",
      title: "Brass Logo Polres Cimahi",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      image: "/assets/img/portofolio/portfolio-brass-statue_buddha.jpg",
      title: "Brass Statue Buddha",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      image: "/assets/img/portofolio/portfolio-brass-wall-art-logo-denjaka.jpg",
      title: "Brass Wall Art Logo Denjaka",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      image: "/assets/img/portofolio/portfolio-brass-wall-art-the-one-hotel-canggu.jpg.png",
      title: "Brass Wall Art The One Hotel Canggu",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      image: "/assets/img/portofolio/portfolio-brass-wall-logo-the-one-hotel-canggu.jpg",
      title: "Brass Wall Logo The One Hotel Canggu",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 7,
      image: "/assets/img/portofolio/portfolio-copper-globe-garuda.jpg",
      title: "Copper Globe Garuda",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      image: "/assets/img/portofolio/portfolio-copper-logo-art-logo-psi-1.jpg",
      title: "Copper Logo Art PSI",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 9,
      image: "/assets/img/portofolio/portfolio-copper-logo-art-logo-psi.jpg",
      title: "Copper Logo Art PSI Variant",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 10,
      image: "/assets/img/portofolio/portfolio-copper-statue_moh-hatta.jpg",
      title: "Copper Statue Mohammad Hatta",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 11,
      image: "/assets/img/portofolio/portfolio-copper-statue_soekarno-hatta.jpg",
      title: "Copper Statue Soekarno Hatta",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 12,
      image: "/assets/img/portofolio/portfolio-gunung-tidar-monument-copper-art-magelang.jpg",
      title: "Gunung Tidar Monument Copper Art Magelang",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 13,
      image: "/assets/img/portofolio/portfolio-logo-wall-art-sekretariat-negara-republik-indonesia.jpg",
      title: "Logo Wall Art Sekretariat Negara RI",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 14,
      image: "/assets/img/portofolio/portfolio-logo-wall-art-sekretariat-negara-republik-indonesia.png",
      title: "Logo Wall Art Sekretariat Negara RI",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 15,
      image: "/assets/img/portofolio/portfolio-wall-decor-hotel-maxone-boyolali-1.jpg",
      title: "Wall Decor Hotel Maxone Boyolali",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 16,
      image: "/assets/img/portofolio/portfolio-wall-decor-hotel-maxone-boyolali-2.jpg",
      title: "Wall Decor Hotel Maxone Boyolali",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 17,
      image: "/assets/img/portofolio/portfolio-wall-decor-hotel-maxone-boyolali-3.jpg",
      title: "Wall Decor Hotel Maxone Boyolali",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 18,
      image: "/assets/img/portofolio/portfolio-wall-decor-hotel-maxone-boyolali.jpg",
      title: "Wall Decor Hotel Maxone Boyolali",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id='gallery' className='relative py-24 px-6 overflow-hidden bg-background-dark'>
      <div className='absolute top-1/3 left-0 w-96 h-96 bg-primary-background/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/3 right-0 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>{dict.gallery.subtitle}</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            {dict.gallery.title.part1} <span className='text-accent'>{dict.gallery.title.part2}</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>{dict.gallery.description}</p>
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
                    <span className='text-accent text-sm font-medium'>{dict.gallery.view_detail}</span>
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
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-white/70 mb-6'>{dict.gallery.cta_description}</p>
          <Link href='#contact'>
            <button className='bg-linear-to-r cursor-pointer from-primary to-[#d46e3d] hover:brightness-110 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
              {dict.gallery.cta_button}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
