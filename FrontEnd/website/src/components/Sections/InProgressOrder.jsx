import React, { useState } from "react";
import { usersData, productsData } from "../../utils/MockData";
import { Link } from "react-router-dom";
import ProgressOrderDetails from "./ProgressOrderDetails";

function InProgressOrder() {
  let [displayId, setDisplayId] = useState(null);

  const displayDetail = (orderId) => {
    if (displayId === orderId) {
      setDisplayId(null);
    } else {
      setDisplayId(orderId);
    }
  };

  let user = usersData[0].orders;

  return (
    <div className="flex flex-col gap-3 min-h-[26rem] items-center">
      {user?.length > 0 ? (
        user
          ?.filter((order) => order.deliveryStatus === "In-Progress")

          .map((order) => {
            const product = productsData.find(
              (product) => product.id === order.products[0].productId
            );
            return (
              <div
                key={order.orderId}
                className="w-full md:w-1/2 items-center xl:w-2/5 2xl:w-2/6"
              >
                <div className="bg-[#f5f4f4] px-3 py-3 rounded-md flex gap-3 items-center">
                  <div className="orderImg w-1/3 md:w-2/5 xl:w-1/3">
                    <img
                      src={product.img}
                      alt="img"
                      width="100"
                      className="object-cover h-24 md:h-28 md:w-full lg:h-32 object-top"
                    />
                  </div>
                  <div className="w-2/3 md:w-3/5 xl:w-2/3">
                    <h4 className="text-xs opacity-90 lg:text-sm">
                      {order.orderDate}
                    </h4>
                    <h3 className="opacity-90 text-sm lg:text-base">
                      Order ID: {order.orderId}
                    </h3>

                    <h3 className="opacity-90 lg:text-lg">
                      Total Amount: INR{" "}
                      <span className="text-color-secondary font-bold">
                        {order.total}
                      </span>
                    </h3>
                    <h5 className="text-xs lg:text-sm underline text-color-secondary mt-4">
                      <Link to="/profile/inprogress/orderId">Details</Link>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })
      ) : (
        <p className="mt-3 tracking-wide opacity-50 text-center capitalize">
          No Orders Have been placed
        </p>
      )}
    </div>
  );
}

export default InProgressOrder;
