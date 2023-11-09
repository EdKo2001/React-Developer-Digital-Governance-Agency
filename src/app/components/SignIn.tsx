import Link from "next/link";

const SignIn = () => {
  return (
    //     background: linear-gradient(71deg, #FEAF00 19.35%, #F8D442 90.12%);

    // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    <div className="h-screen flex flex-col items-center px-5 bg-[#FEAF00]">
      {/* {box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.10);} */}
      <form className="shadow-sm bg-white flex w-[475px] max-w-full flex-col mt-48 mb-32 pt-32 pb-14 px-8 rounded-3xl max-md:my-10 max-md:pt-24 max-md:px-5">
        <h1 className="text-black text-2xl font-semibold uppercase self-center whitespace-nowrap">
          Sign In
        </h1>
        <p className="text-neutral-500 text-sm self-center whitespace-nowrap mt-5">
          Enter your credentials to access your account
        </p>
        <label
          htmlFor="email"
          className="text-neutral-500 text-sm font-medium self-stretch whitespace-nowrap mt-14 max-md:mt-10"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="text-stone-300 text-xs whitespace-nowrap rounded border border-neutral-200 bg-white self-stretch mt-3.5 px-4 py-4 border-solid"
          placeholder="Enter your email"
        />
        <div className="text-neutral-500 text-sm font-medium self-stretch whitespace-nowrap mt-6">
          Password
        </div>
        <input
          type="password"
          id="password"
          className="text-stone-300 text-xs whitespace-nowrap rounded border border-neutral-200 bg-white self-stretch mt-3.5 px-4 py-4 border-solid"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="text-white text-sm font-medium whitespace-nowrap rounded bg-[#FEAF00] self-stretch items-center mt-8 px-5 py-4"
        >
          SIGN IN
        </button>
        <div className="text-sm font-medium  self-center whitespace-nowrap mt-3.5">
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
