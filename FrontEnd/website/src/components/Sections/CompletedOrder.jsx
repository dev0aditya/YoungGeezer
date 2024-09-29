import React, { useState } from "react";
import { usersData, productsData } from "../../utils/MockData";
import OrderDetails from "./OrderDetails";

function CompletedOrder() {
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
    <div className="flex flex-col gap-3">
      {user?.length > 0 ? (
        user
          ?.filter((order) => order.deliveryStatus === "Delivered")

          .map((order) => {
            const product = productsData.find(
              (product) => product.id === order.products[0].productId
            );
            return (
              <div key={order.orderId}>
                <div className="bg-[#f5f4f4] px-3 py-3 rounded-md flex gap-3">
                  <div className="orderImg w-1/3">
                    <img
                      src={product.img}
                      alt="img"
                      width="100"
                      className="object-cover h-20"
                    />
                  </div>
                  <div className="w-2/3">
                    <h4 className="text-xs opacity-90">{order.orderDate}</h4>
                    <h3 className="opacity-90 text-sm">
                      Order ID: {order.orderId}
                    </h3>

                    <h3 className="opacity-90 ">
                      Total Amount: INR{" "}
                      <span className="text-color-secondary font-bold">
                        {order.total}
                      </span>
                    </h3>
                    <h5
                      className="text-xs underline text-color-secondary"
                      onClick={() => displayDetail(order.orderId)}
                    >
                      Details
                    </h5>
                  </div>
                </div>

                {displayId === order.orderId && (
                  <OrderDetails
                    order={order}
                    product={product}
                    setDisplayId={setDisplayId}
                  />
                )}
              </div>
            );
          })
      ) : (
        <p className="mt-3 tracking-wide opacity-50 text-center capitalize">
          No Orders Have been completed as of now
        </p>
      )}
    </div>
  );
}

export default CompletedOrder;
