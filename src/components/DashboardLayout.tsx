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
      <div className="flex w-full flex-col gap-[36px]">
        <Header />
        {children}
      </div>
    </div>
  );
}
