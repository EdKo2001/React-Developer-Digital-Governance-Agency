"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  text: string;
  imageSrc: string;
}

const NavigationLink = ({ href, text, imageSrc }: NavigationLinkProps) => {
  const pathname = usePathname();

  const isActive = (linkHref: string) => {
    return pathname === linkHref ? "bg-orange rounded" : "";
  };

  return (
    <Link
      href={href}
      className={`mx-auto ${
        href === "/dashboard" ? "mt-[148px]" : ""
      } mb-[18px] flex w-full items-center justify-center gap-[15px] py-[12px] text-sm font-medium max-md:mt-10 max-md:px-5 ${isActive(
        href,
      )}`}
    >
      <div className="w-[19px]">
        <Image
          src={imageSrc}
          className="object-contain object-center"
          width={0}
          height={0}
          alt={`navigation-${text.toLowerCase()}`}
          style={{ width: "fit-content", height: "auto" }}
        />
      </div>
      {text}
    </Link>
  );
};

const navigationLinks: NavigationLinkProps[] = [
  { href: "/dashboard", text: "Home", imageSrc: "/images/navigation-home.svg" },
  {
    href: "/course",
    text: "Course",
    imageSrc: "/images/navigation-course.svg",
  },
  {
    href: "/students",
    text: "Students",
    imageSrc: "/images/navigation-students.svg",
  },
  {
    href: "/payment",
    text: "Payment",
    imageSrc: "/images/navigation-payment.svg",
  },
];

const Navigation = () => {
  return (
    <>
      {navigationLinks.map((link) => (
        <NavigationLink key={link.href} {...link} />
      ))}
    </>
  );
};

export default Navigation;
