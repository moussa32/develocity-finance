import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import useTranslation from "@/shared/Hooks/useTranslation";


const FrequentlyQuestions = () => {
  const { t } = useTranslation("FQs");
  const data = useMemo(
    () => [
      {
        id: 1,
        title: `${t?.FQ1?.q}`,
        description:`${t?.FQ1?.a}`},
      {  
        id: 2,
        title: `${t?.FQ2?.q}`,
        description:`${t?.FQ2?.a}`},
      {
        id: 3,
        title: `${t?.FQ3?.q}`,
        description:`${t?.FQ3?.a}`},
      {
        id: 4,
        title: `${t?.FQ4?.q}`,
        description:`${t?.FQ4?.a}`},
      {
        id: 5,
        title: `${t?.FQ5?.q}`,
        description:`${t?.FQ5?.a}`},
    ],
    []
  );

  return (
    <section className="max-w-[800px] mx-auto mb-32">
      <div className="text-center">
        <h2 className="mb-3 text-[52px] font-semibold text-neutral-900">
        {t?.title?.mainText}
        </h2>
        <p className="text-lg text-neutral-700">
        {t?.title?.subText}
          <Link href="/contact-us" className="underline text-indigo-500 font-normal underline-offset-3">
          {t?.title?.contact}
          </Link>
        </p>
      </div>

      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full bg-white p-2">
          {data.map(({ id, title, description }) => (
            <Disclosure key={id}>
              {({ open }) => (
                <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{title}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{description}</Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
