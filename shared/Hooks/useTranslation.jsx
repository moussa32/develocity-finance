import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTranslation = fileName => {
  const { locale } = useRouter();
  const [translation, setTranslation] = useState(null);
  const [errors, setErrors] = useState(null);
  let oldTranslation;

  useEffect(() => {
    const cachedTranslations = localStorage.getItem(`translations-${fileName}`);

    if (!locale) {
      setErrors("Couldn't find translation directory");
      return;
    }

    if (cachedTranslations) {
      setTranslation(JSON.parse(cachedTranslations));
      oldTranslation = cachedTranslations;
    }

    const dynamicImportTranslationFile = async () => {
      try {
        const translationFilePath = await import(`../../public/locales/${locale}/${fileName}.json`);
        localStorage.setItem(fileName, JSON.stringify(translationFilePath.default));
        setTranslation(translationFilePath.default);
      } catch (error) {
        setErrors(`Couldn't find translation file with name ${fileName}`);
      }
    };

    dynamicImportTranslationFile(fileName);
  }, [locale, fileName]);

  return { t: translation, errors };
};

export default useTranslation;
