import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center dark:bg-auth-dark bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10">
      <section
        className=" light-border background-light800_dark200 shadow-light100 min-w-full rounded-[10px] border px-4 py-10 shadow-md
      sm:min-w-[520px] sm:px-8"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark-100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get you questions answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="DevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
