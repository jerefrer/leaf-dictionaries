import dictionariesFromJson from "@assets/dictionaries.json";

function langsFromString(string) {
  return string.split(',').map((s) => s.trim());
}

export function languagesFor(dictionary) {
  return langsFromString(dictionary.origin).concat(langsFromString(dictionary.destination));
}

function allLanguagesFor(dictionaries) {
  let array = [];
  dictionaries.map((dictionary) => {
    languagesFor(dictionary).forEach((lang) => array[lang] = true);
  });
  return Object.keys(array).sort();
}

export const dictionaries = dictionariesFromJson;
export const languages = allLanguagesFor(dictionaries);