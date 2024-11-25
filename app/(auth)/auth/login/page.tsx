"use client";
import FormControl from "@/components/common/FormControl";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import AuthLayout from "../_component/authLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { MoonLoader } from "react-spinners";
import { OnSubmitProps } from "@/types";
import { postData } from "@/services/api/axiosAuth";
import { SIGN_IN_ACCOUNT } from "@/services/endpoints";

function Login() {
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/dashboard");
  const [redirectToCreateProfile, setRedirectToCreateProfile] =
    useState("/auth/create-profile");

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OnSubmitProps>({ mode: "onChange" });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const from = searchParams.get("from");
    if (from) {
      setRedirectTo(from);
    }
  }, []);

  const onSubmit = async ({ email, password }: OnSubmitProps) => {
    const payload = { email, password };
    const response = await postData(SIGN_IN_ACCOUNT, payload);
    console.log(response);

    if (response.status == 200 || response?.tokens?.accessToken) {
      console.log(response);
      if (response.data.user.role === "pollingUnitAgent") {
        router.push(redirectToCreateProfile);
      } else router.push(redirectTo);

      toast.success(response?.data?.message);
    } else {
      console.log(response);
      toast.error(response?.response?.data?.message);
    }
    // try {
    //     const result = await signIn("credentials", {
    //         email,
    //         password,
    //         redirect: false,
    //     });

    //     if (result?.ok) {
    //         toast.success("Login successful!");
    //         router.push(redirectTo);
    //     }
    //     else if (result?.error) {
    //         switch (result.error) {
    //             case "CredentialsSignin":
    //                 toast.error("Invalid credentials. Please try again.");
    //                 break;
    //             default:
    //                 toast.error(result.error || "An unexpected error occurred");
    //         }
    //     }
    // } catch (error: any) {
    //     toast.error(`An unexpected error occurred: ${error.message}`);
    // }
  };

  const headerTitle = "Login";
  const headerSubTitle = "Create an account to get started with us.";

  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return undefined;
  };

  return (
    <AuthLayout
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      bgImg="login.png"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full border-red-500">
        <div className="flex flex-col gap-6 mt-6 w-full px-[10%]">
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
                as="input"
                labelText="Email"
                placeholder="Enter your email address"
                type="email"
                {...field}
                error={getErrorMessage(errors.email)}
              />
            )}
          />

          {/* Password input */}
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <FormControl
                as="input"
                labelText="Password"
                placeholder="Enter your password"
                type="password"
                {...field}
                error={getErrorMessage(errors.password)}
              />
            )}
          />
          <div className="w-full flex justify-between">
            <label htmlFor="rememberMe" className="flex items-center gap-1">
              <input type="checkbox" id="rememberMe" />
              Remember me
            </label>
            <Link href={"/auth/forgot-password"}>Forgot password?</Link>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <MoonLoader color="white" size={18} /> : "Login"}
          </Button>
        </div>
        <div className="flex justify-center text-sm mt-4 font-light text-[#525252]">
          <p>Don&apos;t have an account? </p>
          <Link
            href={"/auth/create-account"}
            className="font-bold hover:opacity-80 ml-1 text-black"
          >
            Create account
          </Link>
        </div>
        <div className="flex items-center gap-1 font-light text-sm mt-4 text-[#525252]">
          <span className="size-4">
            <ShieldCheck size={16} strokeWidth={1.5} />
          </span>
          <p>
            By logging in, you agree to our{" "}
            <Link href={"#"} className="font-bold text-black">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={"#"} className="font-bold text-black">
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
