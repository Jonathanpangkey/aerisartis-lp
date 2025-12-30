import {Heart} from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    {label: "Beranda", href: "#home"},
    {label: "Tentang", href: "#about"},
    {label: "Koleksi", href: "#featured"},
    {label: "Galeri", href: "#gallery"},
    {label: "Pemesanan", href: "#how-to-order"},
    {label: "FAQ", href: "#faq"},
    {label: "Kemitraan", href: "#partnership"},
    {label: "Kontak", href: "#contact"},
  ];

  const operationalHours = [
    {day: "Senin - Jumat", time: "08:00 - 17:00"},
    {day: "Sabtu", time: "08:00 - 15:00"},
    {day: "Minggu", time: "Tutup"},
  ];

  return (
    <footer className='relative border-t border-[#292524] overflow-hidden'>
      <div className='absolute bottom-0 left-1/5 w-76 h-76 bg-[#b85c2e]/5 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <div className='space-y-6'>
            <img src='/assets/img/logo/logo.png' alt='Logo Aerisartis' className='w-32 h-auto object-contain' />
            <p className='text-white/60 leading-relaxed text-sm'>
              Menghadirkan keindahan dan keahlian dalam setiap karya kerajinan tembaga dan kuningan sejak 2004.
            </p>
          </div>

          <div>
            <h3 className='text-white font-bold text-lg mb-6'>Tautan Cepat</h3>
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
            <h3 className='text-white font-bold text-lg mb-6'>Jam Operasional</h3>
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
          <p className='text-white/50 text-sm'>© 2025 Aerisartis. All rights reserved.</p>
          <p className='text-white/50 text-sm flex items-center gap-2'>
            Dibuat dengan <Heart className='w-4 h-4 text-accent fill-accent' /> di Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
};
