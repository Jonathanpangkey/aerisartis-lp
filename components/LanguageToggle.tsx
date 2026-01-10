"use client";
import {useLanguage} from "@/context/LanguageContext";
import {useState, useEffect, useRef} from "react";

export const LanguageToggle = ({iconOnly = false}: {iconOnly?: boolean}) => {
  const {locale, setLocale} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    {code: "id", flag: "🇮🇩", name: "Bahasa Indonesia"},
    {code: "en", flag: "🇬🇧", name: "English"},
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageSelect = (code: "id" | "en") => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 hover:opacity-80 transition-opacity'
        title={currentLanguage?.name}>
        <span className='text-2xl'>{currentLanguage?.flag}</span>
        {!iconOnly && <span className='text-white'>{locale.toUpperCase()}</span>}
      </button>

      {isOpen && (
        <div
          className='
          absolute top-full right-0 mt-2 w-48
          bg-black/95 backdrop-blur-md border border-white/10 rounded-lg
          shadow-lg
          overflow-hidden
          z-50
        '>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code as "id" | "en")}
              className={`
                w-full flex items-center gap-3 px-4 py-3
                text-white hover:bg-white/5 hover:text-accent
                transition-colors duration-200
                ${locale === lang.code ? "bg-white/10" : ""}
              `}>
              <span className='text-2xl'>{lang.flag}</span>
              <span className='text-sm'>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
