"use client";
import React, {useState} from "react";
import {Phone, Mail, MapPin, Send} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda telah terkirim.");
  };

  const contactInfo = [
    {
      icon: <Phone className='w-5 h-5' />,
      label: "Telepon",
      value: "+62 812 3456 7890",
    },
    {
      icon: <Mail className='w-5 h-5' />,
      label: "Email",
      value: "hello@aerisartis.com",
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: "Lokasi",
      value: "Yogyakarta, Indonesia",
    },
  ];

  const socialMedia = [
    {
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      ),
      label: "Instagram",
      link: "#",
    },
    {
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      ),
      label: "Facebook",
      link: "#",
    },
  ];

  return (
    <section className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 left-1/3 w-100 h-100 bg-accent/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>HUBUNGI KAMI</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Mari <span className='text-accent'>Berkolaborasi</span>
          </h2>
          <p className='text-muted text-lg max-w-2xl mx-auto'>
            Punya ide untuk karya custom? Atau ingin tahu lebih lanjut tentang produk kami? Kami siap mendengarkan Anda
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className='group bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-6 hover:border-accent/50 transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-linear-to-br from-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <div className='text-white'>{item.icon}</div>
                  </div>
                  <div>
                    <p className='text-white/60 text-sm mb-1'>{item.label}</p>
                    <p className='text-white font-semibold text-lg'>{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className='pt-6'>
              <h3 className='text-white font-bold text-lg mb-4'>Ikuti Kami</h3>
              <div className='flex gap-4'>
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className='w-12 h-12 bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-xl flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300'>
                    <div className='text-white'>{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-8'>
            <div className='space-y-6'>
              <div>
                <label className='text-white/70 text-sm mb-2 block'>Nama Anda</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Masukkan nama Anda'
                  className='w-full bg-background-dark border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='email@example.com'
                  className='w-full bg-background-dark border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Nomor WhatsApp</label>
                <input
                  type='tel'
                  name='whatsapp'
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder='+62 812 xxxx xxxx'
                  className='w-full bg-background-dark border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Pesan Anda</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Ceritakan tentang proyek atau pertanyaan Anda...'
                  rows={4}
                  className='w-full bg-background-dark border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none'
                />
              </div>

              <button
                onClick={handleSubmit}
                className='w-full cursor-pointer bg-linear-to-r from-accent to-primary hover:from-primary hover:to-accent text-white px-8 py-4 rounded-full font-semibold transition-all transform  hover:shadow-primary flex items-center justify-center gap-2'>
                Kirim Pesan
                <Send className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
