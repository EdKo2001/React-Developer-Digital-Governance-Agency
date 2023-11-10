import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import { DashboardLayout } from "@/components";

import { Button, Table } from "@/components/reusables";

import { axiosInstance } from "@/config";

export const metadata: Metadata = {
  title: "Students List",
};

async function getStudents() {
  "use server";

  try {
    const res = await axiosInstance.get("students");
    res.data.forEach((student: { date_of_admission: string }) => {
      student.date_of_admission = "08-Dec, 2021";
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Payment() {
  const students = await getStudents();
  const headerData = [
    "Avatar",
    "Name",
    "Email",
    "Phone",
    "Personal Number",
    "Date of admission",
    "Actions",
  ];

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between border-b border-borderColor pb-[20.5px] ">
        <h2 className="text-[22px] font-bold">Students List</h2>
        <div className="flex items-center gap-[30px]">
          <button>
            <Image
              src="/images/sort.svg"
              alt="sort"
              width={14}
              height={19.25}
            />
          </button>
          <Button>ADD NEW STUDENT</Button>
        </div>
      </div>
      <Table type="seperate" headerData={headerData} bodyData={students} />
    </DashboardLayout>
  );
}
