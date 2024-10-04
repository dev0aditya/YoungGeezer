import React, { useState } from "react";
import { usersData } from "../../utils/MockData";
import AddressBox from "./AddressBox";
import { DefaultButtonG } from "../UI/Buttons";

function AddressContainer() {
  const [Address, setAddress] = useState([]);
  const user = usersData[0];
  const defaultAddress = user.addresses[user.addresses.length - 1];

  return (
    <div className="mt-3 flex flex-col gap-3">
      <AddressBox address={defaultAddress} />
      <div className=" flex flex-col gap-3">
        <p className="text-xs opacity-50">Saved address</p>
        {user.addresses.slice(0, -1).map((address, index) => (
          <AddressBox address={address} key={index} />
        ))}
      </div>

      <div className="addAddress flex justify-end mt-5">
        <DefaultButtonG value={"Add"} />
      </div>
    </div>
  );
}

export default AddressContainer;
