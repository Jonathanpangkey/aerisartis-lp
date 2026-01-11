"use client";
import {Heart} from "lucide-react";
import {useLanguage} from "@/context/LanguageContext";

export const Footer = () => {
  const {dict} = useLanguage();

  if (!dict) return null;

  const quickLinks = [
    {label: dict.footer.links.home, href: "#home"},
    {label: dict.footer.links.about, href: "#about"},
    {label: dict.footer.links.collection, href: "#Products"},
    {label: dict.footer.links.portfolio, href: "#gallery"},
    {label: dict.footer.links.ordering, href: "#how-to-order"},
    {label: dict.footer.links.faq, href: "#faq"},
    {label: dict.footer.links.partnership, href: "#partnership"},
    {label: dict.footer.links.contact, href: "#contact"},
  ];

  const operationalHours = [{day: dict.footer.operational.days, time: dict.footer.operational.hours}];

  return (
    <footer className='relative border-t border-[#292524] overflow-hidden'>
      <div className='absolute bottom-0 left-1/5 w-76 h-76 bg-[#b85c2e]/5 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <div className='space-y-6'>
            <img src='/assets/img/logo/logo.png' alt='Logo Aerisartis' className='w-32 h-auto object-contain' />
            <p className='text-white/60 leading-relaxed text-sm'>{dict.footer.description}</p>
          </div>

          <div>
            <h3 className='text-white font-bold text-lg mb-6'>{dict.footer.quick_links_title}</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className='text-white/60 hover:text-accent transition-colors duration-200 text-sm'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-bold text-lg mb-6'>{dict.footer.operational_title}</h3>
            <ul className='space-y-3'>
              {operationalHours.map((schedule, index) => (
                <li key={index} className='text-sm'>
                  <span className='text-white/80'>{schedule.day}</span>
                  <br />
                  <span className='text-white/60'>{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-[#292524] flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/50 text-sm'>{dict.footer.copyright}</p>
          <p className='text-white/50 text-sm flex items-center gap-2'>
            {dict.footer.made_with} <Heart className='w-4 h-4 text-accent fill-accent' /> {dict.footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
