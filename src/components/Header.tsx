import Image from "next/image";
import React from "react";
import { SearchForm } from ".";

export default function Header() {
  return (
    <div className="flex h-[60px] w-full items-center justify-between gap-5 py-3 pl-8 pr-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <button type="button">
        <Image
          src="/images/sidebar-close.svg"
          alt="close sidebar"
          width={18}
          height={18}
        />
      </button>
      <div className="flex items-center  gap-[27px]">
        <SearchForm />
        <button type="button">
          <Image
            src="/images/notification.svg"
            alt="show notification"
            width={17}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
