import Link from "next/link";

const SignIn = () => {
  return (
    //     background: linear-gradient(71deg, #FEAF00 19.35%, #F8D442 90.12%);

    // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    <div className="flex h-screen flex-col items-center bg-[#FEAF00] px-5">
      {/* {box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.10);} */}
      <form className="mb-32 mt-48 flex w-[475px] max-w-full flex-col rounded-3xl bg-white px-8 pb-14 pt-32 shadow-sm max-md:my-10 max-md:px-5 max-md:pt-24">
        <h1 className="self-center whitespace-nowrap text-2xl font-semibold uppercase text-black">
          Sign In
        </h1>
        <p className="mt-5 self-center whitespace-nowrap text-sm text-neutral-500">
          Enter your credentials to access your account
        </p>
        <label
          htmlFor="email"
          className="mt-14 self-stretch whitespace-nowrap text-sm font-medium text-neutral-500 max-md:mt-10"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-3.5 self-stretch whitespace-nowrap rounded border border-solid border-neutral-200 bg-white px-4 py-4 text-xs text-stone-300"
          placeholder="Enter your email"
        />
        <div className="mt-6 self-stretch whitespace-nowrap text-sm font-medium text-neutral-500">
          Password
        </div>
        <input
          type="password"
          id="password"
          className="mt-3.5 self-stretch whitespace-nowrap rounded border border-solid border-neutral-200 bg-white px-4 py-4 text-xs text-stone-300"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="mt-8 items-center self-stretch whitespace-nowrap rounded bg-[#FEAF00] px-5 py-4 text-sm font-medium text-white"
        >
          SIGN IN
        </button>
        <div className="mt-3.5 self-center  whitespace-nowrap text-sm font-medium">
          <span className="text-neutral-500">Forgot your password?</span>
          <span className="font-semibold text-black"> </span>
          <Link href="#" className="text-[#FEAF00] underline">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
