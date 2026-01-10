"use client";
import {createContext, useContext, useState, useEffect, ReactNode} from "react";
import idDict from "@/lib/dict/id.json";
import enDict from "@/lib/dict/en.json";

type Locale = "en" | "id";

type Dictionary = typeof idDict;

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = {
  id: idDict,
  en: enDict,
};

export function LanguageProvider({children}: {children: ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>("id");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "en" || saved === "id")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (isMounted) {
      localStorage.setItem("locale", newLocale);
    }
  };

  const dict = dictionaries[locale];

  return <LanguageContext.Provider value={{locale, setLocale, dict}}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
