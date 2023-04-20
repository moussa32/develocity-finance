import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import useTranslation from "@/shared/Hooks/useTranslation";


const FrequentlyQuestions = () => {
  const { t } = useTranslation("fqs");
  const data = useMemo(
    () => [
      {
        id: 1,
        title: `${t?.FQ1?.q}`,
        description:`${t?.FQ1?.a}`},
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
  
  <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{t?.FQ1?.q}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{t?.FQ1?.a}</Disclosure.Panel>
                </div>

                <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{t?.FQ2?.q}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{t?.FQ2?.a}</Disclosure.Panel>
                </div>

                <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{t?.FQ3?.q}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{t?.FQ3?.a}</Disclosure.Panel>
                </div>

                <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{t?.FQ4?.q}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{t?.FQ4?.a}</Disclosure.Panel>
                </div>

                <div className="py-8 first:pt-0 border-neutral-400 border-b-1">
                  <Disclosure.Button className="flex w-full justify-between bg-white text-left text-sm font-medium focus:outline-none">
                    <span className="text-lg font-medium text-neutral-900">{t?.FQ5?.q}</span>
                    {open ? (
                      <BiMinusCircle className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <BiPlusCircle className="h-5 w-5 text-neutral-400" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-neutral-700 text-base pt-3">{t?.FQ5?.a}</Disclosure.Panel>
                </div>


            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
