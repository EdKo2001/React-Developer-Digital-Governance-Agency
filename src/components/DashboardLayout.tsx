import React from "react";

import { Header, Sidebar } from ".";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full  max-md:flex-col max-md:items-stretch max-md:gap-0">
      <Sidebar />
      <div className="bg flex w-full flex-col gap-[36px] bg-[#F8F8F8]">
        <Header />
        {children}
      </div>
    </div>
  );
}
