import Image from "next/image";
import React from "react";

import { Navigation } from ".";
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <div className="bg-brown mx-auto flex w-[19%] flex-col  items-stretch  px-10 pb-8 pt-24 max-md:ml-0 max-md:w-full max-md:px-5">
      <Image
        src="/images/profile.png"
        alt="John Doe"
        className="mx-auto rounded-full object-contain object-center"
        width={128}
        height={128}
      />
      <Navigation />
      <Logout />
    </div>
  );
}
