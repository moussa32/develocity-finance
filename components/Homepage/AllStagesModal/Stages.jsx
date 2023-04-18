import numberFormatter from "@/shared/Util/numberFormatter";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment, memo } from "react";
import CloseButtonIcon from "@/images/close-all-stages-modal.png";
import Image from "next/image";

const data = [
  {
    status: "sold",
    stages: 1,
    price: "0.20",
    tokens: 5000000,
    total: 1000000,
  },
  {
    status: "live",
    stages: 2,
    price: "0.25",
    tokens: 7000000,
    total: 1750000,
  },
  {
    status: "soon",
    stages: 3,
    price: "0.28",
    tokens: 7500000,
    total: 2100000,
  },
  {
    status: "soon",
    stages: 4,
    price: "0.31",
    tokens: 8500000,
    total: 2635000,
  },
  {
    status: "soon",
    stages: 5,
    price: "0.35",
    tokens: 9000000,
    total: 3150000,
  },
  {
    status: "soon",
    stages: 6,
    price: "0.38",
    tokens: 9000000,
    total: 3420000,
  },
  {
    status: "soon",
    stages: 7,
    price: "0.40",
    tokens: 9000000,
    total: 3600000,
  },
];

const Stages = ({ show, onClose }) => {
  const { local } = useRouter();

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center backdrop-blur back justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[672px] transform rounded-lg bg-white align-middle shadow-xl transition-all">
                  <Image
                    src={CloseButtonIcon}
                    onClick={onClose}
                    className="absolute cursor-pointer z-80 right-0 top-[-35px]"
                    alt="Close button"
                  />
                  <Dialog.Title
                    as="h2"
                    className="bg-gradient-to-r from-gray-600 to-gray-800 h-[72px] rounded-t-lg flex items-center justify-center font-PolySans text-xl md:text-3xl text-neutral-50"
                  >
                    Develocity Pre-sale Stages
                  </Dialog.Title>
                  <div className="flex w-full flex-row overflow-auto">
                    <div className="w-[136.5px]">
                      <div className=" bg-[#EAECF0] w-full">
                        <h3 className="ml-4 xl:mx-auto text-xs font-medium text-neutral-500 w-[80px] pt-[11px] pb-[10px] uppercase">
                          Status
                        </h3>
                      </div>
                      {data.map(({ status }) => (
                        <p
                          key={status}
                          className={`w-[80px] ml-4 xl:mx-auto h-6 flex items-center justify-center font-medium ${
                            status === "sold" && "bg-red-200 text-xs text-red-600 border-1 border-red-600"
                          } ${status === "live" && "bg-green-200 text-xs text-green-600 border-1 border-green-600"} ${
                            status === "soon" && "text-neutral-400 text-sm"
                          } capitalize my-[14px]`}
                        >
                          {status === "sold" && "SOLD OUT"}
                          {status === "soon" && "SOON"}
                          {status === "live" && "LIVE"}
                        </p>
                      ))}
                    </div>
                    <div className="w-[80px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Stages
                        </h3>
                      </div>
                      {data.map(({ status, stages }) => (
                        <p
                          key={`${status}${stages}`}
                          className={`my-[14px] w-[80px] mx-auto ${
                            status === "sold" && "line-through"
                          } text-neutral-400`}
                        >
                          {stages}
                        </p>
                      ))}
                    </div>
                    <div className="w-[110px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Price
                        </h3>
                      </div>
                      {data.map(({ price, status }) => (
                        <p
                          className={`my-[14px] w-[80px] mx-auto ${
                            status === "sold" ? "line-through text-neutral-400" : "text-indigo-500"
                          }`}
                        >
                          ${price}
                        </p>
                      ))}
                    </div>
                    <div className="w-[170px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Tokens
                        </h3>
                      </div>
                      {data.map(({ status, tokens }) => (
                        <p
                          className={`my-[14px] w-[140px] mx-auto ${
                            status === "sold" && "line-through text-neutral-400"
                          }`}
                        >
                          {numberFormatter(local, tokens)}
                        </p>
                      ))}
                    </div>
                    <div className="w-[170px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Total
                        </h3>
                      </div>
                      {data.map(({ status, total }) => (
                        <p
                          className={`my-[14px] w-[140px] mx-auto ${
                            status === "sold" && "line-through text-neutral-400"
                          }`}
                        >
                          {numberFormatter(local, total)}
                        </p>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default memo(Stages);
