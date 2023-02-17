import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTranslation = translationFile => {
  const { locale } = useRouter();
  const [translation, setTranslation] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!locale) {
      setErrors("Couldn't find translation directory");
      return;
    }

    const dynamicImportTranslationFile = async () => {
      try {
        const translationFilePath = await import(`../../public/locales/${locale}/${translationFile}.json`);
        if (mounted) setTranslation(translationFilePath.default);
      } catch (error) {
        if (mounted) setErrors(`Couldn't find translation file with name ${translationFile}`);
      }
    };

    dynamicImportTranslationFile(translationFile);
    return () => (mounted = false);
  }, [locale, translationFile]);

  return { t: translation, errors };
};

export default useTranslation;
