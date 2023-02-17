export const getLanguageNameByLocale = locale => {
  switch (locale) {
    case "en":
      return "english";
    case "ar":
      return "arabic";
    case "tr":
      return "turkish";
    case "ru":
      return "russian";
    case "ka":
      return "georgian";
    case "zh":
      return "chinese";
  }
};