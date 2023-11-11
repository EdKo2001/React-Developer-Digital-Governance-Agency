import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

import { DashboardLayout } from "@/components";
import { Button, Form, Modal, Table } from "@/components/reusables";
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

async function addCourse(formData: FormData) {
  "use server";

  const course_name = formData.get("course_name")?.toString();
  const course_difficulty = formData.get("course_difficulty")?.toString();
  const teacher = formData.get("teacher")?.toString();
  const start_date = formData.get("start_date")?.toString();
  const end_date = formData.get("end_date")?.toString();

  try {
    await axiosInstance.post("/courses/create", {
      course_name,
      course_difficulty,
      teacher,
      start_date,
      end_date,
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/students");
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

  const fields = [
    { type: "text", name: "course_name", label: "Course Name" },
    { type: "text", name: "course_difficulty", label: "Course Difficulty" },
    { type: "text", name: "teacher", label: "Teacher" },
    {
      type: "date",
      name: "start_date",
      label: "Start Date",
    },
    {
      type: "date",
      name: "end_date",
      label: "End Date",
    },
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

          <Modal OpenComponent={<Button>ADD NEW COURSE</Button>}>
            <Form
              title="add course"
              text="Add more courses"
              buttonText="add"
              fields={fields}
              action={addCourse}
            />
          </Modal>
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
