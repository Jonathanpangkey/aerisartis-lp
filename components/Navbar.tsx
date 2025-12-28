"use client";
import {useState, useEffect} from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    ["Beranda", "#beranda"],
    ["Tentang", "#tentang"],
    ["Koleksi", "#koleksi"],
    ["Galeri", "#galeri"],
    ["Kontak", "#kontak"],
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled ? "bg-black/60 backdrop-blur-md py-4 " : "bg-transparent py-6"}
        `}>
        <div className='max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300'>
          <div
            className={`
              flex items-center gap-3 transition-all duration-300
              ${isScrolled ? "scale-70" : "scale-100"}
            `}>
            <img src='/assets/img/logo.png' alt='Logo Toko Tembaga' className='w-30 object-contain' />
          </div>
          <div className='hidden md:flex items-center gap-8 text-md font-medium'>
            {menuItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className='
                  relative text-white
                  hover:text-accent
                  transition-colors duration-200
                  after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5
                  after:bg-accent after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                  hover:after:w-full
                  py-2
                '>
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-white hover:text-accent transition-colors z-50 relative'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isMobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`
          fixed top-0 right-0 h-full w-[65%] bg-black/95 backdrop-blur-lg z-40 md:hidden
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
        <div className='flex flex-col gap-2 pt-24 px-8'>
          {menuItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={handleMenuClick}
              className='
                text-white text-lg font-medium py-4 border-b border-white/10
                hover:text-accent hover:pl-2
                transition-all duration-200
              '>
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
