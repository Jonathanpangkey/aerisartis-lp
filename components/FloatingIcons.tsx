"use client";
import {MessageCircle, X, Phone} from "lucide-react";
import {useState, useEffect} from "react";

export const WhatsAppFloating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const contacts = [
    {
      name: "Azfa N.Y",
      phone: "081775432061",
      label: "Telepon/WhatsApp",
    },
    {
      name: "Ryan A.Y",
      phone: "085848440140",
      label: "Telepon/WhatsApp",
    },
  ];

  const handleWhatsAppClick = (phoneNumber: string, name: string) => {
    const message = `Halo ${name}, saya tertarik dengan produk Aerisartis. Bisakah saya mendapatkan informasi lebih lanjut?`;
    window.open(`https://wa.me/62${phoneNumber.substring(1)}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label='Chat via WhatsApp'>
        <MessageCircle className='w-6 h-6' />
        {/* Tooltip */}
        <span className='absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
          Chat dengan kami
        </span>

        <span className='absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20'></span>
      </button>

      {showModal && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4' onClick={() => setShowModal(false)}>
          <div className='bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all' onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-2xl font-bold text-gray-900 flex items-center gap-3'>
                <div className='w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center'>
                  <MessageCircle className='w-5 h-5 text-white' />
                </div>
                Hubungi Kami
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors'>
                <X className='w-5 h-5 text-gray-500' />
              </button>
            </div>

            <div className='space-y-3'>
              {contacts.map((contact, index) => (
                <div key={index} className='bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#25D366] hover:shadow-md transition-all'>
                  <div className='mb-3'>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>{contact.name}</h4>
                    <p className='text-sm text-gray-500'>{contact.label}</p>
                  </div>

                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleWhatsAppClick(contact.phone, contact.name)}
                      className='flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2'>
                      <MessageCircle className='w-4 h-4' />
                      WhatsApp
                    </button>

                    <button
                      onClick={() => handlePhoneClick(contact.phone)}
                      className='flex-1 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2'>
                      <Phone className='w-4 h-4' />
                      Telepon
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className='text-center text-gray-500 text-sm mt-6'>Pilih kontak yang ingin Anda hubungi</p>
          </div>
        </div>
      )}
    </>
  );
};
