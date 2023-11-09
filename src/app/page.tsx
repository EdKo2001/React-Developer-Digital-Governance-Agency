import { redirect } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";

import axios from "axios";

async function signInHandler(formData: FormData) {
  "use server";

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const res = await axios.post("http://localhost:3000/api/sign-in", {
    email,
    password,
  });

  if (res.data.message === "User logged in") {
    cookies().set("token", "userToken", {
      secure: true,
      maxAge: 60 * 60,
    });
    redirect("/dashboard");
  } else {
    console.error("Authentication failed");
  }
}

const SignIn = async () => {
  return (
    <div className="bg-authBG  shadow-authShadow flex h-screen flex-col items-center px-5">
      <form
        className="shadow-formShadow mb-32 mt-48 flex w-[475px] max-w-full flex-col rounded-[20px] bg-white px-[30px] pb-[58px] pt-[126px]"
        // ⚠️ NOTE: Due to React type error, this feature is still in beta and experimental.
        // @ts-ignore
        action={signInHandler}
      >
        <h1 className="text-center  text-[22px] font-semibold uppercase leading-normal text-black">
          Sign In
        </h1>
        <p className="text-gray mb-[50px] mt-[9px]  text-center text-sm">
          Enter your credentials to access your account
        </p>
        <div className="mb-5 flex flex-col gap-[10px]">
          <label
            htmlFor="email"
            className="text-gray  self-stretch text-sm font-medium "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value="SuperAdmin@gmail.com"
            className="placeholder-lightGray border-borderColor  self-stretch rounded border border-solid bg-white px-[15px] py-[13px] text-xs text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="password"
            className="text-gray  self-stretch text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value="123456"
            className="placeholder-lightGray border-borderColor  self-stretch rounded border border-solid bg-white px-[15px] py-[13px] text-xs text-black"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange mt-[30px] items-center  self-stretch rounded px-5 py-4 text-sm font-medium text-white"
        >
          SIGN IN
        </button>
        <div className="mt-[10px] text-center text-sm">
          <span className="text-gray">Forgot your password? </span>
          <Link href="#" className="text-orange font-medium underline">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
