import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import axios, { AxiosResponse } from "axios";

import { DashboardLayout } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface MetricsData {
  studentsCount: number;
  coursesCount: number;
  payment: number;
}

async function getMetrics() {
  "use server";

  try {
    const responses = await Promise.allSettled([
      axios.get("http://localhost:3000/api/students"),
      axios.get("http://localhost:3000/api/courses"),
      axios.get("http://localhost:3000/api/payment"),
    ]);

    const settledResponses = responses.map((response) => {
      if (response.status === "fulfilled") {
        return response.value.data;
      } else {
        console.error(response.reason);
        return "Failed";
      }
    });

    return {
      studentsCount: settledResponses[0].length,
      coursesCount: settledResponses[1].length,
      payment: settledResponses[2].reduce(
        (acc: number, cur: { "Amount Paid": number }) =>
          (acc += +cur["Amount Paid"]),
        0,
      ),
    };
  } catch (error) {
    console.error(error);
    return {
      studentsCount: "Failed",
      coursesCount: "Failed",
      payment: "Failed",
    };
  }
}

export default async function Dashboard() {
  const { studentsCount, coursesCount, payment }: MetricsData =
    await getMetrics();

  return (
    <DashboardLayout>
      <div className="ml-5 flex w-[81%] flex-col items-stretch max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-stretch max-md:max-w-full">
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
                    {studentsCount}
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
                    {coursesCount}
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
                    INR {payment}
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
