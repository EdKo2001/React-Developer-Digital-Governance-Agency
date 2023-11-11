import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { Form } from "@/components/reusables";

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
      // TODO: Implement storing the token in cookies
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
  const fields = [
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" },
  ];

  return (
    <div className="flex h-full flex-col items-center bg-authBG px-5 shadow-authShadow">
      <Form
        fields={fields}
        title="SIGN IN"
        text="Enter your credentials to access your account"
        buttonText="SIGN IN"
        action={signInHandler}
        className="mb-32 mt-48 bg-white px-[30px] pb-[58px] pt-[126px] shadow-formShadow"
      />
    </div>
  );
};

export default SignIn;
