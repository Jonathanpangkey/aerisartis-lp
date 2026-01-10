import "server-only";

const dictionaries = {
  en: () => import("./dict/en.json").then((module) => module.default),
  id: () => import("./dict/id.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
