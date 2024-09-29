import React from "react";
import { usersData } from "../../utils/MockData";
import OrderStatus from "./OrderStatus";

function OrderHistory() {
  let user = usersData[1];
  console.log(user);
  return (
    <div className="px-6 py-4 relative">
      <h2 className="text-xl opacity-70 tracking-normal font-medium">
        Order History
      </h2>
      <div className="previousOrders ">
        {user.orders ? (
          <OrderStatus />
        ) : (
          <p className="mt-3 tracking-wide opacity-50 text-center">
            No orders placed yet
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
