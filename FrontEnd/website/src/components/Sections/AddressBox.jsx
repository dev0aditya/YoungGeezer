import React from "react";
import { ButtonWithBorder } from "../UI/Buttons";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function AddressBox({ address }) {
  return (
    <div>
      <div className="addressBox bg-[#f5f4f4] rounded-md  py-2 px-4">
        <div className="userinfo">
          <p className="text-base flex justify-between mb-1 items-end">
            <span className="name text-color-secondary">Aditya Mishra</span>
            <span className="phone text-sm opacity-80">+917276000996</span>
          </p>
          <p className="mb-1 opacity-80">aditya@gmail.com</p>
        </div>
        <p className="useraddress opacity-80">
          {address.street} {address.locality} {address.city} {address.state}{" "}
          {address.zip}
        </p>
        <div className="edit flex justify-end mt-3">
          <ButtonWithBorder
            value={<FaPencil />}
            className={"h-[1.75rem] rounded-lg w-10 border-none"}
          />
          <ButtonWithBorder
            value={<MdDelete />}
            className={"h-[1.75rem] rounded-lg w-10 border-none text-xl"}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressBox;
