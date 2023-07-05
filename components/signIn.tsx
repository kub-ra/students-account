import React from "react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Logo from "../src/assets/svgs/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, "email");

    // Giriş işlemleri

    if (email === "oguzhan.oya@sikayetvar.dev" && password == "1234") {
      // Kullanıcı doğrulandıysa yönlendirme yapabilirsiniz
      router.push("/dashboard");
    } else {
      // Kullanıcı doğrulanmadıysa hata mesajı gösterebilirsiniz
      alert("Giriş başarısız. Lütfen doğru email ve şifre girin.");
    }
  };
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow ">
        <div className="bg-white rounded-2xl w-1/3 h-2/3 p-10 ">
          <div className="w-full ">
            <Image src={Logo} alt="logo" width={335} height={40} />
          </div>
          <p className="text-xl font-semibold text-center text-black leading-6 pt-7 font-Montserrat">
            SIGN IN
          </p>
          <p className="text-gray font-Montserrat text-center font-normal text-sm leading-4 pt-2">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSignIn}>
            <div className=" pt-12">
              <label
                className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="pt-12">
              <label
                className=" text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn-color text-white w-full h-11 rounded mt-12 font-medium text-sm font-Montserrat"
              type="submit"
            >
              SIGN IN
            </button>
          </form>
          <p className="text-gray font-Montserrat text-sm text-center font-normal leading-4 pt-8">
            Forgot your password?
            <Link
              className="text-primary font-medium pl-2 underline"
              href="/resetPassword"
            >
              Reset Password
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
