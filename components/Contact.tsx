"use client";
import React, {useState} from "react";
import {Phone, Mail, MapPin, Send, Instagram} from "lucide-react";
import {useLanguage} from "@/context/LanguageContext";

export const Contact = () => {
  const {dict, locale} = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  if (!dict) return null;

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const {name, email, whatsapp, message} = formData;

    const whatsappMessage =
      locale === "id"
        ? `Halo, saya ${name}.\nEmail: ${email}\nNomor WhatsApp: ${whatsapp}\nPesan: ${message}`
        : `Hello, I am ${name}.\nEmail: ${email}\nWhatsApp Number: ${whatsapp}\nMessage: ${message}`;

    const phoneNumber = "6281328390414";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className='w-5 h-4' />,
      label: dict.contact.info.phone,
      name: "Azfa N.Y",
      value: "081775432061",
      link: "tel:081775432061",
    },
    {
      icon: <Phone className='w-4 h-4' />,
      label: dict.contact.info.phone,
      name: "Ryan A.Y",
      value: "085848440140",
      link: "tel:085848440140",
    },
    {
      icon: <Mail className='w-4 h-4' />,
      label: dict.contact.info.email,
      value: "aerisartisart@gmail.com",
      link: "mailto:aerisartisart@gmail.com",
    },
    {
      icon: <MapPin className='w-4 h-4' />,
      label: dict.contact.info.location,
      value: "Tumang, Boyolali, Indonesia",
      link: "https://www.google.com/maps/search/?api=1&query=Tumang+Boyolali+Indonesia",
    },
    {
      icon: <Instagram className='w-4 h-4' />,
      label: dict.contact.info.instagram,
      value: "aeris_artis",
      link: "https://www.instagram.com/aeris_artis/",
    },
  ];

  const handleContactClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id='contact' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 left-1/3 w-100 h-100 bg-accent/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>{dict.contact.subtitle}</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {dict.contact.title.part1} <span className='text-accent'>{dict.contact.title.part2}</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>{dict.contact.description}</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                onClick={() => handleContactClick(item.link)}
                className='group bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-4.5 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:bg-[#1c1917]/70'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-linear-to-br from-accent to-[#b85c2e] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <div className='text-white'>{item.icon}</div>
                  </div>
                  <div>
                    <p className='text-white/60 text-[9px] md:text-sm mb-1'>{item.label}</p>
                    {item.name && <p className='text-white/80 text-[9px] md:text-sm font-medium mb-0.5'>({item.name})</p>}
                    <p className='text-white font-semibold text-[12px] md:text-lg group-hover:text-accent transition-colors'>{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-8'>
            <div className='space-y-6'>
              <div>
                <label className='text-white/70 text-sm mb-2 block'>{dict.contact.form.name_label}</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={dict.contact.form.name_placeholder}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>{dict.contact.form.email_label}</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={dict.contact.form.email_placeholder}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>{dict.contact.form.whatsapp_label}</label>
                <input
                  type='tel'
                  name='whatsapp'
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder={dict.contact.form.whatsapp_placeholder}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>{dict.contact.form.message_label}</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={dict.contact.form.message_placeholder}
                  rows={4}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none'
                />
              </div>

              <button
                onClick={handleSubmit}
                className='w-full cursor-pointer bg-linear-to-r from-accent to-[#b85c2e] hover:from-[#b85c2e] hover:to-accent text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2'>
                {dict.contact.form.submit_button}
                <Send className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
