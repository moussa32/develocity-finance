import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const FrequentlyQuestions = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "When will the $DEVE token be launched?",
        description:
          "The $DEVE token will be launched once the Pre-sale reaches 100% sales and all the tokens have been sold. During the presale, 50% of the total supply (250,000,000 tokens) will be sold. You can monitor the number of tokens remaining and the pre-sale progress on the develocity.finance homepage.",
      },
      {
        id: 2,
        title: "How can I buy the $DEVE token?",
        description:
          "The $DEVE token will be launched once the Pre-sale reaches 100% sales and all the tokens have been sold. During the presale, 50% of the total supply (250,000,000 tokens) will be sold. You can monitor the number of tokens remaining and the pre-sale progress on the develocity.finance homepage.",
      },
      {
        id: 3,
        title: "How can I obtain a referral link and how does it work?",
        description:
          "The $DEVE token will be launched once the Pre-sale reaches 100% sales and all the tokens have been sold. During the presale, 50% of the total supply (250,000,000 tokens) will be sold. You can monitor the number of tokens remaining and the pre-sale progress on the develocity.finance homepage.",
      },
      {
        id: 4,
        title: "When will I receive my $DEVE tokens after purchasing?",
        description:
          "The $DEVE token will be launched once the Pre-sale reaches 100% sales and all the tokens have been sold. During the presale, 50% of the total supply (250,000,000 tokens) will be sold. You can monitor the number of tokens remaining and the pre-sale progress on the develocity.finance homepage.",
      },
      {
        id: 5,
        title: "What is the difference between packages and regular payments?",
        description:
          "The $DEVE token will be launched once the Pre-sale reaches 100% sales and all the tokens have been sold. During the presale, 50% of the total supply (250,000,000 tokens) will be sold. You can monitor the number of tokens remaining and the pre-sale progress on the develocity.finance homepage.",
      },
    ],
    []
  );

  return (
    <section className="max-w-[800px] mx-auto mb-32">
      <div className="text-center">
        <h2 className="mb-3 text-[52px] font-semibold text-neutral-900">Frequently asked questions</h2>
        <p className="text-lg text-neutral-700">
          If you have any further questions, please do not hesitate to{" "}
          <Link href="/contact-us" className="underline text-indigo-500 font-normal underline-offset-3">
            Contact us
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
