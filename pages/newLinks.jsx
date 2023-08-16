import Image from "next/image";
import { RxRocket, RxLink1 } from "react-icons/rx";
import { GrFacebookOption, GrTwitter, GrStatusGood } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoInstagramAlt, BiStore } from "react-icons/bi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { GiCrownCoin } from "react-icons/gi";
import { useEffect, useState } from "react";

const LinkComponent = ({ Icon, label, isComing, url }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <button className="flex items-center justify-start group gap-4 text-xl ease-in-out hover:bg-black hover:text-white w-full hover:rounded py-2.5 hover:px-4 hover:pr-4 transition-all duration-300">
      <Icon size={32} className="rounded-full" /> {label}
      {isComing ? (
        <span className="text-gray-700 text-xs ml-auto group-hover:text-white">Coming soon</span>
      ) : (
        <div className="flex items-center gap-4 ltr:ml-auto">
          <div className="bg-white p-1 rounded-full text-black" onClick={() => setIsCopied(true)}>
            {isCopied ? <GrStatusGood /> : <RxLink1 />}
          </div>
          {!!url && (
            <a href={url} target="_blank" rel="noreferrer" className="bg-white p-1 rounded-full text-black">
              <RxRocket />
            </a>
          )}
        </div>
      )}
    </button>
  );
};

const NewLinks = () => {
  return (
    <>
      <section className="bg-indigo-500 pt-40"></section>
      <section className="container bg-white py-20 flex items-start justify-center gap-x-12">
        <section className="relative flex-shrink-0 w-[600px] h-full">
          <Image
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            width={600}
            height={600}
            className="rounded-xl relative shadow-lg"
            alt="Logo"
            title="Logo"
          />
          <h1 className="absolute top-10 text-5xl w-full text-center text-white font-bold">Develocity Pre sale</h1>
          <button className="absolute flex items-center gap-2 justify-center bg-indigo-500 bottom-8 transform left-1/2 -translate-x-1/2 text-white rounded py-3 px-7">
            <RxRocket size={20} />
            Let's go
          </button>
        </section>
        <section className="w-full">
          <h2 className="border-b-1 w-full mb-4 text-[#101828] font-PolySans font-bold text-2xl pb-2">
            Checkout our links:
          </h2>
          <div className="flex flex-col gap-2 items-start mb-4">
            <LinkComponent Icon={GiCrownCoin} label="Develocity PreSale" url="https://develocity.finance" />
            <LinkComponent Icon={AiOutlineSecurityScan} label="Develocity ScanTool" url="https://develocity.finance" />
            <LinkComponent Icon={BiStore} label="Develocity Store" isComing />
          </div>
          <div className="mt-12">
            <h2 className="border-b-1 w-full mb-4 text-[#101828] font-PolySans font-bold text-2xl pb-2">
              Social Media:
            </h2>
            <div className="flex gap-4 flex-wrap items-start mb-4">
              <a
                href="https://facebook.com"
                className="flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <GrFacebookOption
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                Facebook
              </a>
              <a
                href="https://facebook.com"
                className="flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <GrTwitter
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                X
              </a>
              <a
                href="https://facebook.com"
                className="flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <FaTelegramPlane
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                Telegram
              </a>
              <a
                href="https://facebook.com"
                className="flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <BiLogoInstagramAlt
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default NewLinks;
