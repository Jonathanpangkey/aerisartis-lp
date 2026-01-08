"use client";
import {useState, useEffect} from "react";
import {ChevronDown} from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
    {label: "Tentang", href: "/about"},
    {label: "Katalog", href: "/products"},
    {
      label: "Kolaborasi",
      submenu: [
        {label: "Galeri", href: "#gallery"},
        {label: "Kemitraan", href: "#partnership"},
      ],
    },
    {
      label: "Pemesanan",
      submenu: [
        {label: "Pemesanan/Kolaborasi", href: "#how-to-order"},
        {label: "FAQ", href: "#faq"},
      ],
    },
    {label: "Artikel", href: "/articles"},
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled ? "bg-black/60 backdrop-blur-md py-4" : "bg-transparent py-6"}
        `}>
        <div className='max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300'>
          <a
            href='#home'
            className={`
              flex items-center gap-3 transition-all duration-300
              ${isScrolled ? "scale-70" : "scale-100"}
            `}>
            <img src='/assets/img/logo/logo.png' alt='Logo Toko Tembaga' className='w-30 object-contain' />
          </a>

          <div className='hidden md:flex items-center gap-8 text-md font-medium'>
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className='relative group'>
                  <button
                    className='
                      flex items-center gap-1 text-white
                      hover:text-accent
                      transition-colors duration-200
                      py-2
                    '>
                    {item.label}
                    <ChevronDown className='w-4 h-4 transition-transform group-hover:rotate-180' />
                  </button>

                  <div
                    className='
                      absolute top-full left-0 mt-2 w-48
                      bg-black/95 backdrop-blur-md border border-white/10 rounded-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300
                      shadow-lg
                    '>
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className='
                          block px-4 py-3 text-white
                          hover:text-accent hover:bg-white/5
                          transition-colors duration-200
                          first:rounded-t-lg last:rounded-b-lg
                        '>
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className='
                    relative text-white
                    hover:text-accent
                    transition-colors duration-200
                    after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5
                    after:bg-accent after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                    hover:after:w-full
                    py-2
                  '>
                  {item.label}
                </a>
              )
            )}
            <a
              href='/admin/login'
              onClick={handleMenuClick}
              className='
                    relative text-white
                    bg-primary
                    hover:bg-accent
                    transition-colors duration-200
                    hover:after:w-full
                    px-4 py-2
                    rounded-full
                '>
              Admin
            </a>
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
          fixed top-0 right-0 h-full w-[75%] bg-black/95 backdrop-blur-lg z-40 md:hidden
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
        <div>
          <div className='flex flex-col gap-2 pt-24 px-8 pb-8'>
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className='
                    w-full flex items-center justify-between
                    text-white text-lg font-medium py-4 border-b border-white/10
                    hover:text-accent
                    transition-all duration-200
                  '>
                    <span>{item.label}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`
                    overflow-hidden transition-all duration-300
                    ${openSubmenu === item.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}>
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={handleMenuClick}
                        className='
                        block text-white/80 text-base py-3 pl-4
                        hover:text-accent hover:pl-6
                        transition-all duration-200
                        border-l-2 border-white/10
                      '>
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleMenuClick}
                  className='
                  text-white text-lg font-medium py-4 border-b border-white/10
                  hover:text-accent hover:pl-2
                  transition-all duration-200
                '>
                  {item.label}
                </a>
              )
            )}
            <a
              href='/admin/login'
              onClick={handleMenuClick}
              className='
                    relative text-white
                    bg-primary
                    hover:bg-accent
                    transition-colors duration-200
                    hover:after:w-full
                    px-4 py-2
                    mt-8
                    w-fit
                    text-center
                    rounded-full
                '>
              Admin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
