import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

import { DashboardLayout } from "@/components";
import { Button, Form, Modal, Table } from "@/components/reusables";
import RemoveStudentButton from "./RemoveStudentButton";

import { axiosInstance } from "@/config";

export const metadata: Metadata = {
  title: "Students List",
};

async function getStudents() {
  "use server";

  revalidatePath("/students");

  try {
    const res = await axiosInstance.get("/students");
    res.data.forEach((student: { date_of_admission: string }) => {
      student.date_of_admission = "08-Dec, 2021";
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function addStudent(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const personal_number = formData.get("personal_number")?.toString();

  try {
    await axiosInstance.post("/students/create", {
      name,
      email,
      phone,
      personal_number,
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/students");
}

async function updateStudent(formData: FormData) {
  "use server";

  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const personal_number = formData.get("personal_number")?.toString();

  try {
    await axiosInstance.put(`/students/update/${id}`, {
      name,
      email,
      phone,
      personal_number,
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/students");
}

export default async function Students() {
  const students = (await getStudents()) || [];
  const headerData = [
    "Avatar",
    "Name",
    "Email",
    "Phone",
    "Personal Number",
    "Date of admission",
    "Actions",
  ];
  const fields = [
    { type: "text", name: "name", label: "Name" },
    { type: "email", name: "email", label: "Email" },
    { type: "tel", name: "phone", label: "Phone" },
    {
      type: "text",
      name: "personal_number",
      label: "Personal Number",
    },
    // {
    //   type: "date",
    //   name: "admission_date",
    //   label: "Date of Admission",
    // },
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
          <Modal OpenComponent={<Button>ADD NEW STUDENT</Button>}>
            <Form
              title="add student"
              buttonText="add"
              fields={fields}
              action={addStudent}
            />
          </Modal>
        </div>
      </div>
      <Table
        type="seperate"
        headerData={headerData}
        bodyData={students}
        RemoveComponent={RemoveStudentButton}
        editAction={updateStudent}
        fields={fields}
      />
    </DashboardLayout>
  );
}
