import Image from "next/image";
import React from "react";
import { Navigation } from ".";

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
      <button className="mx-auto  mt-auto flex w-[91px]  items-center  gap-[23px]  text-sm font-medium text-black max-md:mt-10">
        Logout
        <Image src="/images/logout.svg" alt="Logout" width={17} height={17} />
      </button>
    </div>
  );
}
