"use client";

import Image from "next/image";

import { axiosInstance } from "@/config";

import { clearCachesByServerAction } from "@/app/utils";

export interface EventButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

function RemoveStudentButton({ id, ...props }: EventButtonProps) {
  const removeStudent = async () => {
    try {
      await axiosInstance.delete(`/students/delete/${id}`);
      clearCachesByServerAction("/students");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={removeStudent} {...props}>
      <Image src="/images/trash.svg" alt="remove" width={16} height={18} />
    </button>
  );
}

export default RemoveStudentButton;
