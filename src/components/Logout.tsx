"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Logout() {
  const [isRediect, setRediect] = useState(false);

  useEffect(() => {
    if (isRediect) {
      // TODO: Implement destroying the token in cookies
      redirect("/");
    }
  }, [isRediect]);

  return (
    <button
      className="mx-auto mt-auto flex w-[91px] items-center gap-[23px] text-sm font-medium text-black max-md:mt-10"
      onClick={() => setRediect(true)}
    >
      Logout
      <Image src="/images/logout.svg" alt="Logout" width={17} height={17} />
    </button>
  );
}
