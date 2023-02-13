import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTranslation = translationFile => {
  const { locale } = useRouter();
  const [translation, setTranslation] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!locale) {
      setErrors("Couldn't find translation directory");
      return;
    }

    const dynamicImportTranslationFile = async () => {
      try {
        const translationFilePath = await import(`../../public/locales/${locale}/${translationFile}.json`);
        setTranslation(translationFilePath.default);
      } catch (error) {
        setErrors(`Couldn't find translation file with name ${translationFile}`);
      }
    };

    dynamicImportTranslationFile(translationFile);
  }, [locale, translationFile]);

  return { t: translation, errors };
};

export default useTranslation;