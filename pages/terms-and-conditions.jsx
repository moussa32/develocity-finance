import StaticPageHeader from "../shared/Components/StaticPageHeader";
import useTranslation from "@/shared/Hooks/useTranslation";

const TermsConditions = () => {
  const { t } = useTranslation("terms-and-conditions");
  return (
    <>
      <StaticPageHeader
        summary={t?.termsAndCondition?.lable}
        title={t?.termsAndCondition?.header}
        description={t?.termsAndCondition?.mainText}
      />
      <section className="container mx-auto md:my-24 text-[#475467] font-medium text-base px-10 lg:px-0">
        <div className="max-w-[826px]">
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              {t?.termsAndCondition?.privacyPolicy?.mainText}
            </h2>
            <p>{t?.termsAndCondition?.privacyPolicy?.paragraphs[0]}</p>
            <p className="my-8">
              {t?.termsAndCondition?.privacyPolicy?.paragraphs[1]}
            </p>
            <p>{t?.termsAndCondition?.privacyPolicy?.paragraphs[2]}</p>
          </section>
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              {t?.termsAndCondition?.informationWeCollect?.mainText}
            </h2>
            <p>{t?.termsAndCondition?.informationWeCollect?.paragraphs[0]}</p>
            <p className="my-6">
              {t?.termsAndCondition?.informationWeCollect?.paragraphs[1]}
            </p>
            <p>{t?.termsAndCondition?.informationWeCollect?.paragraphs[2]}</p>
          </section>
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              {t?.termsAndCondition?.howWeUse?.mainText}
            </h2>
            <p>{t?.termsAndCondition?.howWeUse?.paragraph}</p>
            <ul className="mt-6">
              <li>{t?.termsAndCondition?.howWeUse?.listItems[0]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[1]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[2]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[3]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[4]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[5]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[6]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[7]}</li>
              <li>{t?.termsAndCondition?.howWeUse?.listItems[8]}</li>
            </ul>
          </section>
        </div>
        <section className="my-8 max-w-[1000px]">
          <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
            {t?.termsAndCondition?.logFiles?.mainText}
          </h2>
          <p>{t?.termsAndCondition?.logFiles?.paragraph}</p>
        </section>
        <section className="my-8 max-w-[1000px]">
          <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
            {t?.termsAndCondition?.advertisingPolicies?.mainText}
          </h2>
          <p>{t?.termsAndCondition?.advertisingPolicies?.paragraphs[0]}</p>
          <p className="py-8">
            {t?.termsAndCondition?.advertisingPolicies?.paragraphs[1]}
          </p>
          <p>{t?.termsAndCondition?.advertisingPolicies?.paragraphs[2]}</p>
        </section>
      </section>
    </>
  );
};

export default TermsConditions;
