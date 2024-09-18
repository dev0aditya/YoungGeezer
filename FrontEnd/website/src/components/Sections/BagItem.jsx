import React from "react";
import { productsData } from "../../utils/MockData";
import BagItemControl from "./BagItemControl";

function BagItem() {
  return (
    <>
      {productsData.slice(0, 2).map((product) => (
        <div className="itemContainer flex justify-normal gap-5 mb-5 last:mb-0">
          <div className="img w-2/5 h-40 overflow-hidden">
            <img src={product.img} alt="" />
          </div>
          <div className="itemInnerContainer w-3/5 flex flex-col justify-between">
            <div className="data">
              <h2 className=" font-light">{product?.title}</h2>
              <div className="price mt-2">
                <h3 className="font-semibold text-color-secondary">
                  INR {product?.priceDropped}{" "}
                  <span className="text-sm text-gray-400 line-through ">
                    {product?.price}
                  </span>
                </h3>
              </div>
            </div>
            <div className="controls pb-4 pr-7">
              {product.stock > 0 ? (
                <BagItemControl value={1} />
              ) : (
                <>
                  <p className="text-sm text-red-400 pb-1">out of stock</p>
                  <BagItemControl
                    className={"opacity-45 pointer-events-none"}
                    value={0}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BagItem;
