import React from "react";
import Navbar from "../components/navbar";
import caret from "../src/assets/svgs/caret-circle-down 1.svg";
import Image from "next/image";
import bell from "../src/assets/svgs/bell 1.svg";
import graduate from "../src/assets/svgs/graduation-cap 1-2.svg";
import bookmark from "../src/assets/svgs/bookmark 1-2.svg";
import vektor from "../src/assets/svgs/Vector.svg";
import user from "../src/assets/svgs/Vector-2.svg";

const DashBoard = () => {
  return (
    <div className="flex bg-white h-full">
      <Navbar />

      <div className="content w-4/5">
        <div className="flex justify-between h-16 px-16">
          <Image src={caret} width={18} height={18} alt="caret" />
          <Image src={bell} width={18} height={18} alt="bell" />
        </div>
        <div className="flex justify-center">
          <div className="w-64 color-second h-40 rounded-lg flex justify-between m-2">
            <div className="p-4">
              <Image src={graduate} width={48} height={28} alt="caret" />
              <p className="text-gray text-sm font-Montserrat font-medium">
                Students
              </p>
            </div>
            <div className="flex text-black items-end ">
              <p className="font-Montserrat font-bold text-3xl p-5"> 243</p>
            </div>
          </div>
          <div className="w-64 color-pink h-40 rounded-lg flex justify-between m-2">
            <div className="p-4">
              <Image src={bookmark} width={28} height={35} alt="caret" />
              <p className="text-gray text-sm font-Montserrat font-medium">
                Course
              </p>
            </div>
            <div className="flex text-black items-end ">
              <p className="font-Montserrat font-bold text-3xl p-5"> 13</p>
            </div>
          </div>
          <div className="w-64 color-yellow h-40 rounded-lg flex justify-between m-2">
            <div className="p-4">
              <Image src={vektor} width={35} height={35} alt="caret" />
              <p className="text-gray text-sm font-Montserrat font-medium">
                Payments
              </p>
            </div>
            <div className="flex text-black items-end ">
              <p className="font-Montserrat font-bold text-3xl p-5">556,000₺</p>
            </div>
          </div>
          <div className="w-64 bg-yellow  h-40 rounded-lg flex justify-between m-2">
            <div className="p-4">
              <Image src={user} width={34} height={34} alt="caret" />
              <p className="text-white text-sm font-Montserrat font-medium">
                Users
              </p>
            </div>
            <div className="flex text-black items-end ">
              <p className="font-Montserrat font-bold text-3xl p-5"> 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
