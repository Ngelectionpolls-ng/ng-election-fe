"use client";
import { useEffect, useState } from "react";
import AuthLayout from "../_component/authLayout";
import FormControl from "@/components/common/FormControl";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Controller, FieldValues, useForm } from "react-hook-form";
import GoogleAuthSection from "./_GoogleAuthSection";
import useCreateAccount from "@/hooks/mutations/auth/useCreateAccount";
import { MoonLoader } from "react-spinners";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ResendOTPPayload } from "@/services/api/auth";
import useResendOTP from "@/hooks/mutations/auth/useResendOTP";
import { postData } from "@/services/api/axiosAuth";
import { RESEND_OTP, SIGN_IN_ACCOUNT } from "@/services/endpoints";

function CreateAccount() {
  const [selectedTab, setSelectedTab] = useState<string>("iWitness");
  const [confirmationParam, setConfirmationParam] = useState<string>("");
  const [headerTitle, setHeaderTitle] = useState<string>("Sign up");
  const [headerSubTitle, setHeaderSubTitle] = useState<string>(
    "Create an account to get started with us."
  );
  const [email, setEmail] = useState<string>("your email");

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  const { mutate, isPending } = useCreateAccount();
  const { mutate: mutateResendOTP } = useResendOTP();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const confirmation = searchParams.get("confirmation");

    if (confirmation === "pending") {
      setConfirmationParam(confirmation);
    }
  }, [confirmationParam]);

  useEffect(() => {
    if (confirmationParam === "pending") {
      setHeaderTitle("");
      setHeaderSubTitle("");
    }
  }, [confirmationParam]);

  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return undefined;
  };

  const onSubmit = async (data: FieldValues) => {
    let accountType = selectedTab;

    if (selectedTab === "iWitness") {
      accountType = "iwitness";
    } else if (selectedTab === "pollingUnitAgent") {
      accountType = "agent";
    }

    const payload =
      // accountType,
      { ...data, redirectUrl: "/auth/verify-account" };

    console.log(payload);

    const response = await postData(`/auth/${accountType}/register`, payload);
    if (response.status == 200 || response.status == 201) {
      console.log(response);
      toast.success(response?.data?.message);
      setConfirmationParam("pending");
      router.push("?confirmation=pending");
    } else {
      console.log(response);
      toast.error(response?.response?.data?.message);
    }
    // mutate(payload, {
    //     onSuccess: (response) => {
    //         toast.success(response?.data?.message)
    //         setEmail(data.email)
    //         router.push("?confirmation=pending")
    //         setConfirmationParam("pending");
    //     },
    //     onError: (error: any) => {
    //         toast.error(error?.response?.data?.message)
    //     },
    // });
  };

  // Function to resend OTP
  const handleResendOTP = async () => {
    const payload: ResendOTPPayload = {
      email: email,
      channel: "registration",
      redirectUrl: "/auth/verify-account",
    };
    const response = await postData(RESEND_OTP, payload);
    if (response.status == 200 || response.status == 201) {
      console.log(response);
      toast.success(response?.data?.message);
    } else {
      console.log(response);
      toast.error(response?.response?.data?.message);
    }

    // mutateResendOTP(payload, {
    //   onSuccess: (response) => {
    //     toast.success(response.data.message);
    //   },
    //   onError: (error: any) => {
    //     toast.error(error.response.data.message[0]);
    //   },
    // });
  };

  return (
    <AuthLayout
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      bgImg="Signup.png"
    >
      {confirmationParam === "pending" ? (
        <div>
          <div>
            <h2 className="text-black-500 text-[28px] text-center font-semibold leading-[120%] mb-1">
              You’re almost finished
            </h2>
            <p className="text-center">
              We just sent an email to{" "}
              <span className="text-[#4649E5] font-bold">{email}</span>{" "}
              containing an activation link and a code. Click on the link and
              enter the code to finish setting up your account.
            </p>
          </div>
          <div className="bg-gray-600 w-3/4 h-px mx-auto my-6"></div>
          <div className="flex justify-center text-sm mt-4 font-light">
            <p>Didn’t get a code?</p>
            <button
              type="button"
              onClick={handleResendOTP}
              className="font-bold hover:opacity-80 ml-1"
            >
              Click to Resend
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="iWitness">Eyewitness</TabsTrigger>
              <TabsTrigger value="pollingUnitAgent">
                Polling Unit Agent
              </TabsTrigger>
            </TabsList>

            <TabsContent value="iWitness">
              <GoogleAuthSection role={selectedTab} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6 mt-6">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormControl
                        as="input"
                        labelText="Full Name"
                        placeholder="Enter full name"
                        {...field}
                        error={getErrorMessage(errors.name)}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormControl
                        as="input"
                        labelText="Email Address"
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                        error={getErrorMessage(errors.email)}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    }}
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
                  <Button type="submit">
                    {isPending ? (
                      <MoonLoader color="white" size={18} />
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </div>
                <div className="flex justify-center text-sm mt-4 font-light">
                  <p>Have an account? </p>
                  <Link
                    href={"/auth/login"}
                    className="font-bold hover:opacity-80 ml-1"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex items-center gap-1 font-light text-sm mt-4">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                  <p>
                    By logging in, you agree to the
                    <Link href={"#"} className="font-bold">
                      {" "}
                      Terms of Service{" "}
                    </Link>
                    and
                    <Link href={"#"} className="font-bold">
                      {" "}
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="pollingUnitAgent">
              <GoogleAuthSection role={selectedTab} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6 mt-6">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormControl
                        as="input"
                        labelText="Full Name"
                        placeholder="Enter full name"
                        {...field}
                        error={getErrorMessage(errors.name)}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <FormControl
                        as="input"
                        labelText="Email Address"
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                        error={getErrorMessage(errors.email)}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    }}
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
                  <Button type="submit">
                    {isPending ? (
                      <MoonLoader color="white" size={18} />
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </div>
                <div className="flex justify-center text-sm mt-4 font-light">
                  <p>Have an account? </p>
                  <Link
                    href={"/auth/login"}
                    className="font-bold hover:opacity-80 ml-1"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex items-center gap-1 font-light text-sm mt-4">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                  <p>
                    By logging in, you agree to the
                    <Link href={"#"} className="font-bold">
                      {" "}
                      Terms of Service{" "}
                    </Link>
                    and
                    <Link href={"#"} className="font-bold">
                      {" "}
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </AuthLayout>
  );
}

export default CreateAccount;
