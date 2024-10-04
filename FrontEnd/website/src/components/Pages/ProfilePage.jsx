import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import OrderHistory from "../Sections/OrderHistory";
import AddressContainer from "../Sections/AddressContainer";

function ProfilePage() {
  return (
    <>
      <div className="bagHeading mt-[4.5rem] flex justify-between items-end px-6 py-5 drop-shadow-2xl border-b-2 border-color-secondary/5 md:mb-5 ">
        <h1 className="text-2xl text-color-secondary tracking-normal font-medium xl:px-10">
          Account
        </h1>
        <p className="text-color-secondary tracking-normal font-medium underline opacity-60 hover:opacity-80 flex items-center gap-1 xl:px-10">
          logout
          <IoLogOutOutline />
        </p>
      </div>
      <OrderHistory />
      <div className="px-6">
        <h2 className="text-xl lg:text-2xl opacity-70 tracking-normal font-medium mt-5">
          Address
        </h2>
        <p className="text-xs opacity-50">Default address</p>
        <AddressContainer />
      </div>
    </>
  );
}

export default ProfilePage;
