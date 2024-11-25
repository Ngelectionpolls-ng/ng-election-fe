import Link from "@/node_modules/next/link";
import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  passwordResetConfirmation?: boolean;
  verifyEmailConfirmation?: boolean;
  headerTitle: string;
  headerSubTitle?: string;
  bgImg: string;
  space?: boolean;
}

function AuthLayout({
  children,
  passwordResetConfirmation,
  verifyEmailConfirmation,
  headerTitle,
  headerSubTitle,
  bgImg,
  space,
}: AuthLayoutProps) {
  return (
    <section className="bg-white  py-9 pl-6 2xl:pl-20 pr-6 xl:pl-10 2x:pr-[34px] flex gap-7 xl:gap-[120px] sm:flex-row-reverse xl:flex-row justify-between min-h-screen text-neutral-dark-2">
      <div className="flex md:items-center md:w-[90%] justify-center item-center  relative pt-[120px] md:pt-0">
        <div className="md:w-[80%] h-full flex flex-col justify-center items-center absolute top-0">
          <div className=" border-red-500">
            <div className="">
              <Link href="/">
                <div className=" left-[30%] top-5 flex justify-center  border-red-600">
                  <Image
                    src={"/ng-election-logo-5.png"}
                    width={235}
                    height={100}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="h-5 w-full"></div>
          </div>
          <div
            className={`h-full border-red-600 flex flex-col justify-center items-center `}
          >
            <div className="">
              <h2 className="text-black-500 text-[28px] text-center font-semibold leading-[120%] mb-3">{`${
                passwordResetConfirmation
                  ? "Successful Password reset!"
                  : verifyEmailConfirmation
                  ? "Your email has been verified successfully"
                  : headerTitle
              }`}</h2>
              <p className="text-neutral-dark-1 text-center leading-[24px]">{`${
                passwordResetConfirmation
                  ? "You can now use your new password to login to your account."
                  : verifyEmailConfirmation
                  ? "You can now login to your account."
                  : headerSubTitle
              }`}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div
        className="relative hidden md:block w-full max-w-[852px] text-white-full-500 bg-no-repeat bg-cover bg-center rounded-[20px] min-h-[675px] "
        style={{ backgroundImage: `url(/assets/images/${bgImg})` }}
      >
        <div className="absolute inset-0  rounded-[20px] flex flex-col justify-end px-[49px] pb-10">
          {/* <div>
            <h1 className="text-5xl font-semibold leading-tight">
              Making positive impact in our great nation.
            </h1>
            <p className="text-2xl">
              Create a free account and join millions of others to shape
              Nigeria’s election.
            </p>
          </div> */}
          <p className="my-12">Open to all. 1 million+ people.</p>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
