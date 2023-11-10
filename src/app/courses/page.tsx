import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

import { DashboardLayout } from "@/components";
import { Button, Table } from "@/components/reusables";
import RemoveCourseButton from "./RemoveCourseButton";

import { axiosInstance } from "@/config";

export const metadata: Metadata = {
  title: "Courses List",
};

async function getCourses() {
  "use server";

  revalidatePath("/courses");

  try {
    const res = await axiosInstance.get("/courses");
    res.data.forEach((course: { instructor: string }) => {
      course.instructor = "Name";
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Courses() {
  const courses = (await getCourses()) || [];
  const headerData = [
    "Avatar",
    "Course Name",
    "Course Difficulty",
    "Instructor",
    "Start Date",
    "End Date",
    "Actions",
  ];

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between border-b border-borderColor pb-[20.5px] ">
        <h2 className="text-[22px] font-bold">Courses List</h2>
        <div className="flex items-center gap-[30px]">
          <button>
            <Image
              src="/images/sort.svg"
              alt="sort"
              width={14}
              height={19.25}
            />
          </button>
          <Button>ADD NEW COURSE</Button>
        </div>
      </div>
      <Table
        type="seperate"
        headerData={headerData}
        bodyData={courses}
        RemoveComponent={RemoveCourseButton}
      />
    </DashboardLayout>
  );
}
