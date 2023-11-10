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
      <div className="mx-auto flex w-[80%] justify-evenly	  max-md:ml-0 max-md:w-full max-md:max-w-full max-md:flex-col max-md:gap-0">
        <div className="  flex  w-[255px]   flex-col rounded-lg bg-sky-50 p-5 max-md:ml-0 max-md:mt-10 max-md:w-full max-md:pr-5">
          <Image
            src="/images/students.svg"
            alt="students count"
            width={48}
            height={38}
          />
          <h2 className="mt-5   text-sm font-medium text-gray">Students</h2>
          <p className="mt-5  text-right  text-3xl font-bold  text-black">
            {studentsCount}
          </p>
        </div>
        <div className="  flex w-[255px]   flex-col rounded-lg bg-fuchsia-50  p-5  max-md:ml-0 max-md:mt-10 max-md:w-full">
          <Image
            src="/images/courses.svg"
            alt="courses count"
            width={28}
            height={35}
          />
          <h2 className="mt-6   text-sm font-medium text-gray">Courses</h2>
          <p className="mt-5  text-right text-3xl font-bold  text-black">
            {coursesCount}
          </p>
        </div>
        <div className="  flex w-[255px] flex-col rounded-lg bg-amber-50 p-5 max-md:ml-0 max-md:mt-10 max-md:w-full">
          <Image
            src="/images/payments.svg"
            alt="payments count"
            width={35}
            height={40}
          />
          <h2 className="mt-5   text-sm font-medium  text-gray">Payments</h2>
          <p className="mt-5  text-right text-3xl font-bold  text-black">
            <span className="text-lg">INR</span> {payment}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
