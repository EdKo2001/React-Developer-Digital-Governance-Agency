import React from "react";
import { Metadata } from "next";

import { DashboardLayout } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="ml-5 flex w-[81%] flex-col items-stretch max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-stretch max-md:max-w-full">
          <div className="flex w-full items-center justify-between gap-5 bg-white py-3 pl-8 pr-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              src=""
              className="my-auto aspect-square w-[18px] max-w-full shrink-0 rotate-90 overflow-hidden object-contain object-center"
            />
            <div className="flex items-stretch justify-between gap-5 self-stretch">
              <div className="flex justify-between gap-5 rounded-lg border border-solid border-neutral-200 bg-white py-3 pl-3.5 pr-3.5">
                <div className="text-sm text-stone-300">Search...</div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-square w-3.5 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
                />
              </div>
              <img
                loading="lazy"
                src=""
                className="my-auto aspect-[0.85] w-[17px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
              />
            </div>
          </div>
          <div className="mt-8 w-full max-w-[1015px] self-center px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex w-[34%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                <div className="mx-auto mt-1.5 flex w-full grow flex-col rounded-lg bg-sky-50 pb-7 pl-5 pr-5 pt-5 max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src=""
                    className="aspect-[5.63] w-full self-stretch overflow-hidden object-contain object-center"
                  />
                  <div className="mt-5 self-stretch whitespace-nowrap text-sm font-medium text-neutral-500">
                    Students
                  </div>
                  <div className="mt-5 whitespace-nowrap text-3xl font-bold uppercase text-black">
                    243
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[34%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                <div className="mx-auto mt-2 flex w-full grow flex-col rounded-lg bg-fuchsia-50 px-5 pb-7 pt-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src=""
                    className="aspect-[6.14] w-full self-stretch overflow-hidden object-contain object-center"
                  />
                  <div className="mt-6 self-stretch whitespace-nowrap text-sm font-medium text-neutral-500">
                    Course
                  </div>
                  <div className="mt-5 whitespace-nowrap text-right text-3xl font-bold uppercase text-black">
                    13
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[31%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                <div className="mx-auto flex w-full flex-col rounded-lg bg-amber-50 px-5 pb-6 pt-4 max-md:mt-10">
                  <img
                    loading="lazy"
                    src=""
                    className="aspect-[5.38] w-full self-stretch overflow-hidden object-contain object-center"
                  />
                  <div className="mt-5 self-stretch whitespace-nowrap text-sm font-medium uppercase text-neutral-500">
                    Payments
                  </div>
                  <div className="mt-5 whitespace-nowrap text-right text-3xl font-bold uppercase text-black">
                    INR 556,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
