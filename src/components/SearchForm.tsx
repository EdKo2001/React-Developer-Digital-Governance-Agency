"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <form
      className="relative flex h-[37px]   w-[212px] flex-col items-center gap-[10px] max-md:w-full"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-[37px] w-full rounded-lg border border-solid border-borderColor p-[13px] text-sm text-black placeholder-lightGray"
        placeholder="Search..."
        required
      />
      <button type="submit" className="absolute bottom-0 right-[14px] top-0">
        <Image src="/images/search.svg" alt="search" width={14} height={14} />
      </button>
    </form>
  );
}
