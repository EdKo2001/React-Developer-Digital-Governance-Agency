import React from "react";

import { DashboardLayout } from "@/components";
import Image from "next/image";

const paymentData = [
  {
    name: "Karthi",
    schedule: "First",
    billNumber: "00012223",
    amountPaid: "INR 35,000",
    balance: "INR 55,000",
    date: "08-Dec, 2021",
  },
  {
    name: "Karthi",
    schedule: "First",
    billNumber: "00012223",
    amountPaid: "INR 35,000",
    balance: "INR 55,000",
    date: "08-Dec, 2021",
  },
  {
    name: "Karthi",
    schedule: "First",
    billNumber: "00012223",
    amountPaid: "INR 35,000",
    balance: "INR 55,000",
    date: "08-Dec, 2021",
  },
];

export default function Payment() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between border-b border-borderColor pb-[20.5px] text-[22px] font-bold">
        <h2>Payment Details</h2>
        <button>
          <Image src="/images/sort.svg" alt="sort" width={14} height={19.25} />
        </button>
      </div>
      <table className="table w-full text-left">
        <thead className="h-[51px] text-xs font-semibold text-[#ACACAC]">
          <tr>
            <th className="w-[20%] p-[13px]">Name</th>
            <th className="w-[16%] p-[13px]">Payment Schedule</th>
            <th className="w-[16%] p-[13px]">Bill Number</th>
            <th className="w-[16%] p-[13px]">Amount Paid</th>
            <th className="w-[16%] p-[13px]">Balance amount</th>
            <th className="w-[16%] p-[13px]">Date</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {paymentData.map((payment, idx) => (
            <tr
              key={idx}
              className={`h-[51px] ${idx % 2 === 0 ? "bg-white" : ""}`}
            >
              <td className="p-[13px]">{payment.name}</td>
              <td className="p-[13px]">{payment.schedule}</td>
              <td className="p-[13px]">{payment.billNumber}</td>
              <td className="p-[13px]">{payment.amountPaid}</td>
              <td className="p-[13px]">{payment.balance}</td>
              <td className="p-[13px]">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
