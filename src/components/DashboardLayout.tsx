import React from "react";

import { Sidebar } from ".";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
      <Sidebar />
      {children}
    </div>
  );
}
