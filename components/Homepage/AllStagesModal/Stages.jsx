import numberFormatter from "@/shared/Util/numberFormatter";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment, memo } from "react";
import CloseButtonIcon from "@/images/close-all-stages-modal.png";
import Image from "next/image";

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
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Status
                        </h3>
                      </div>
                      <p className="w-[80px] mx-auto text-sm font-medium bg-red-200 text-red-600 border-1 border-red-600 capitalize my-[14px]">
                        Sold
                      </p>
                      <p className="w-[80px] mx-auto bg-green-200 text-green-600 border-1 border-green-600 capitalize my-[14px]">
                        live
                      </p>
                      <p className="w-[80px] mx-auto text-sm font-medium text-neutral-400 uppercase my-[14px]">soon</p>
                      <p className="w-[80px] mx-auto text-sm font-medium text-neutral-400 uppercase my-[14px]">soon</p>
                    </div>
                    <div className="w-[110px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Stages
                        </h3>
                      </div>

                      <p className="my-[14px] w-[80px] mx-auto text-neutral-400 line-through">1</p>
                      <p className="my-[14px] w-[80px] mx-auto text-neutral-400">2</p>
                      <p className="my-[14px] w-[80px] mx-auto text-neutral-400">3</p>
                      <p className="my-[14px] w-[80px] mx-auto text-neutral-400">4</p>
                    </div>
                    <div className="w-[110px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Price
                        </h3>
                      </div>

                      <p className="my-[14px] w-[80px] mx-auto line-through text-neutral-400">$0.20</p>
                      <p className="my-[14px] w-[80px] mx-auto text-indigo-500">$0.25</p>
                      <p className="my-[14px] w-[80px] mx-auto text-indigo-500">$0.28</p>
                      <p className="my-[14px] w-[80px] mx-auto text-indigo-500">$0.31</p>
                    </div>
                    <div className="w-[160px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Tokens
                        </h3>
                      </div>

                      <p className="my-[14px] w-[140px] mx-auto line-through text-neutral-400">
                        {numberFormatter(local, 5000000)}
                      </p>
                      <p className="my-[14px] w-[140px] mx-auto">{numberFormatter(local, 7000000)}</p>
                      <p className="my-[14px] w-[140px] mx-auto">{numberFormatter(local, 7500000)}</p>
                      <p className="my-[14px] w-[140px] mx-auto">{numberFormatter(local, 8500000)}</p>
                    </div>
                    <div className="w-[160px]">
                      <div className="bg-[#EAECF0] w-full">
                        <h3 className="text-xs font-medium text-neutral-500 w-[80px] mx-auto pt-[11px] pb-[10px] uppercase">
                          Total
                        </h3>
                      </div>

                      <p className="my-[14px] w-[140px] mx-auto line-through text-neutral-400">
                        {numberFormatter(local, 1000000)}
                      </p>
                      <p className="my-[14px] w-[140px] mx-auto">${numberFormatter(local, 1750000)}</p>
                      <p className="my-[14px] w-[140px] mx-auto">${numberFormatter(local, 2100000)}</p>
                      <p className="my-[14px] w-[140px] mx-auto">${numberFormatter(local, 2635000)}</p>
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
