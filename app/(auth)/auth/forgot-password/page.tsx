"use client";
import FormControl from "@/components/common/FormControl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Controller, FieldValues, useForm } from "react-hook-form";
import AuthLayout from "../_component/authLayout";
import { MoonLoader } from "react-spinners";
import useSendPasswordLink from "@/hooks/mutations/auth/useSendPasswordLink";
import { toast } from "sonner";
import { postData } from "@/services/api/axiosAuth";
import { PASSWORD_RESET_LINK } from "@/services/endpoints";

function ForgotPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  const { mutate, isPending } = useSendPasswordLink();

  const onSubmit = async (data: FieldValues) => {
    const payload = {
      email: data.email,
      resetUrl: "/auth/one-time-password",
    };
    const response = await postData(PASSWORD_RESET_LINK, payload);
    if (response.status == 200 || response.status == 201) {
      console.log(response);
      toast.success(
        "A link to reset your password has been sent to your email"
      );
      // toast.success(response?.data?.message);
    } else {
      console.log(response);
      toast.error(response?.response?.data?.message);
    }
    // mutate(payload, {
    //   onSuccess: () => {
    //     toast.success(
    //       "A link to reset your password has been sent to your email"
    //     );
    //   },
    //   onError: (error: any) => {
    //     toast.error(error.data.message);
    //   },
    // });
  };

  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return undefined;
  };

  const headerTitle = "Forgot Password";
  const headerSubTitle =
    "Enter the email address you used to create the account to receive instructions on how to reset your password";

  return (
    <AuthLayout
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      bgImg="login-bg.png"
      space={true}
    >
      <form className=" w-full px-[5%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-12 mt-6">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => (
              <FormControl
                className="w-full"
                as="input"
                labelText="Email/Phone number"
                placeholder="Enter your email address"
                type="email"
                {...field}
                error={getErrorMessage(errors.email)}
              />
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? <MoonLoader color="white" size={18} /> : "Send"}
          </Button>
        </div>
        <div className="flex justify-center text-sm mt-4 font-light">
          <p>Remember your password? </p>
          <Link
            href={"/auth/login"}
            className="font-bold hover:opacity-80 ml-1"
          >
            {" "}
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
