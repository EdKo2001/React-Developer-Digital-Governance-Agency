"use client";

import Image from "next/image";

import { axiosInstance } from "@/config";

import { clearCachesByServerAction } from "@/utils";

export interface EventButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

function RemoveCourseButton({ id, ...props }: EventButtonProps) {
  const removeCourse = async () => {
    try {
      await axiosInstance.delete(`/courses/delete/${id}`);
      clearCachesByServerAction("/courses");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={removeCourse} {...props}>
      <Image src="/images/trash.svg" alt="remove" width={16} height={18} />
    </button>
  );
}

export default RemoveCourseButton;
