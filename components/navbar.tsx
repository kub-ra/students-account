import React from "react";
import Logo from "../src/assets/svgs/Logo.svg";
import Image from "next/image";
import Avatar from "../src/assets/svgs/avatar.svg";
import Link from "next/link";
import Home from "../src/assets/svgs/home-lg-alt 1.svg";
import Course from "../src/assets/svgs/bookmark 1.svg";
import Students from "../src/assets/svgs/graduation-cap 1.svg";
import payment from "../src/assets/svgs/usd-square 1.svg";
import report from "../src/assets/svgs/file-chart-line 1.svg";
import setting from "../src/assets/svgs/sliders-v-square 1.svg";
import logOut from "../src/assets/svgs/sign-out-alt 1-2.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname === "/dashboard", "router");
  return (
    <div className="navbar nav-bg w-72 h-full ">
      <Image
        className="m-auto p-2 pt-8"
        src={Logo}
        alt="logo"
        width={213}
        height={24}
      />
      <div className="admin">
        <Image
          className="rounded-full m-auto"
          src={Avatar}
          alt="avatar"
          width={200}
          height={50}
        />
        <p className="text-black font-Montserrat text-center py-2 font-bold text-base leading-5">
          John Doe
        </p>
        <p className="text-primary ont-Montserrat font-medium text-sm text-center py-2  ">
          Admin
        </p>
      </div>
      <nav className="w-48 m-auto mt-16">
        <ul>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/dashboard" ? "btn-color" : ""
              }`}
              href="/"
            >
              <Image
                className="mx-2"
                src={Home}
                alt="home"
                width={19}
                height={17}
              />
              <span className="mx-2">Home</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/course" ? "btn-color" : ""
              }`}
              href="/profil"
            >
              <Image
                className="mx-2"
                src={Course}
                alt="home"
                width={12}
                height={12}
              />
              <span className="mx-2">Course</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/students" ? "btn-color" : ""
              }`}
              href="/students"
            >
              <Image
                className="mx-2"
                src={Students}
                alt="home"
                width={19}
                height={17}
              />
              <span className="mx-2">Students</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/payment" ? "btn-color" : ""
              }`}
              href="/ayarlar"
            >
              <Image
                className="mx-2"
                src={payment}
                alt="home"
                width={12}
                height={12}
              />
              <span className="mx-2">Payment</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/report" ? "btn-color" : ""
              }`}
              href="/ayarlar"
            >
              <Image
                className="mx-2"
                src={report}
                alt="home"
                width={15}
                height={15}
              />
              <span className="mx-2">Report</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 ${
                router.pathname === "/settings" ? "btn-color" : ""
              }`}
              href="/ayarlar"
            >
              <Image
                className="mx-2"
                src={setting}
                alt="home"
                width={15}
                height={15}
              />
              <span className="mx-2">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        className="flex text-black font-Montserrat text-sm font-medium justify-center  p-2.5 mt-32"
        href={"/"}
      >
        <span className="mx-2">Logout</span>
        <Image
          className="mx-2"
          src={logOut}
          alt="home"
          width={15}
          height={15}
        />
      </Link>
    </div>
  );
};

export default Navbar;
