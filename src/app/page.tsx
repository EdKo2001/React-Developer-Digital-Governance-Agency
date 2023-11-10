import { redirect } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { Button } from "@/components/reusables";

import { axiosInstance } from "@/config";

async function signInHandler(formData: FormData) {
  "use server";

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  let isRediect = false;

  try {
    const res = await axiosInstance.post("/sign-in", {
      email,
      password,
    });

    if (res.data.message === "User logged in") {
      // TODO: Set cookie (token)
      // cookies().set("token", "userToken", {
      //   secure: true,
      //   maxAge: 60 * 60,
      // });
      isRediect = true;
    } else {
      console.error("Authentication failed");
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/");
  isRediect && redirect("/dashboard");
}
const SignIn = () => {
  return (
    <div className="flex h-full flex-col items-center bg-authBG px-5 shadow-authShadow">
      <form
        className="mb-32 mt-48 flex w-[475px] max-w-full flex-col rounded-[20px] bg-white px-[30px] pb-[58px] pt-[126px] shadow-formShadow"
        // ⚠️ NOTE: Due to React type error, this feature is still in beta and experimental.
        // @ts-ignore
        action={signInHandler}
      >
        <h1 className="text-center text-[22px] font-semibold uppercase leading-normal text-black">
          Sign In
        </h1>
        <p className="mb-[50px] mt-[9px] text-center text-sm text-gray">
          Enter your credentials to access your account
        </p>
        {["email", "password"].map((field, idx, arr) => (
          <div
            key={field}
            className={`flex flex-col gap-[10px] ${
              idx !== arr.length - 1 ? "mb-5" : ""
            }`}
          >
            <label
              htmlFor={field}
              className="self-stretch text-sm font-medium text-gray"
            >
              {field === "email" ? "Email" : "Password"}
            </label>
            <input
              type={field === "email" ? "email" : "password"}
              id={field}
              name={field}
              className="self-stretch rounded border border-solid border-borderColor bg-white px-[15px] py-[13px] text-xs text-black placeholder-lightGray"
              placeholder={`Enter your ${field}`}
              required
            />
          </div>
        ))}
        <Button type="submit" className="mt-[30px]">
          SIGN IN
        </Button>
        <div className="mt-[10px] text-center text-sm">
          <span className="text-gray">Forgot your password?</span>{" "}
          <Link href="#" className="font-medium text-orange underline">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
