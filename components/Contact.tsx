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
    const {name, email, whatsapp, message} = formData;

    // Format pesan untuk dikirim ke WhatsApp
    const whatsappMessage = `Halo, saya ${name}.%0AEmail: ${email}%0ANomor WhatsApp: ${whatsapp}%0APesan: ${message}`;

    // Nomor WhatsApp tujuan
    const phoneNumber = "6281328390414";

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
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

  return (
    <section id='contact' className='relative py-24 px-6 overflow-hidden'>
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
                className='w-full cursor-pointer bg-linear-to-r from-accent to-primary hover:from-primary hover:to-accent text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:shadow-primary flex items-center justify-center gap-2'>
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
