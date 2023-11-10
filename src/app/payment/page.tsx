import React from "react";
import Image from "next/image";

import { DashboardLayout } from "@/components";

import { Table } from "@/components/reusables";

const headerData = [
  "Name",
  "Payment Schedule",
  "Bill Number",
  "Amount Paid",
  "Balance amount",
  "Date",
];

const paymentData = [
  ["Karthi", "First", "00012223", "INR 35,000", "INR 55,000", "08-Dec, 2021"],
];

// In your component render, use the Table component

export default function Payment() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between border-b border-borderColor pb-[20.5px] text-[22px] font-bold">
        <h2>Payment Details</h2>
        <button>
          <Image src="/images/sort.svg" alt="sort" width={14} height={19.25} />
        </button>
      </div>
      <Table headerData={headerData} bodyData={paymentData} />
    </DashboardLayout>
  );
}
