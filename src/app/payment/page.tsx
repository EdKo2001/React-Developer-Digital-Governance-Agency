import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

import { DashboardLayout } from "@/components";

import { Table } from "@/components/reusables";

import { axiosInstance } from "@/config";

export const metadata: Metadata = {
  title: "Payment Details",
};

async function getPayments() {
  "use server";

  revalidatePath("/payment");

  try {
    const res = await axiosInstance.get("/payment");

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Payment() {
  const payments = (await getPayments()) || [];
  const headerData = [
    "Name",
    "Payment Schedule",
    "Bill Number",
    "Amount Paid",
    "Balance amount",
    "Date",
  ];

  console.log("payments", payments);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between border-b border-borderColor pb-[20.5px] ">
        <h2 className="text-[22px] font-bold">Payment Details</h2>
        <button>
          <Image src="/images/sort.svg" alt="sort" width={14} height={19.25} />
        </button>
      </div>
      <Table headerData={headerData} bodyData={payments} />
    </DashboardLayout>
  );
}
