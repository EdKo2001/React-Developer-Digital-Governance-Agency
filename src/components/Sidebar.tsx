import Image from "next/image";
import React from "react";

import { Navigation } from ".";
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <div className="mx-auto  flex w-[19%] flex-col items-stretch  bg-brown  px-10 pb-8 pt-24 max-md:ml-0 max-md:w-full max-md:px-5">
      <Image
        src="/images/profile.png"
        alt="John Doe"
        className="mx-auto rounded-full object-contain object-center"
        width={128}
        height={128}
      />
      <h1 className="mb-[10px] mt-[20px] text-center text-[17px] font-bold">
        Karthi Madesh
      </h1>
      <h2 className="text-center text-sm font-medium text-orange">Admin</h2>
      <Navigation />
      <Logout />
    </div>
  );
}
