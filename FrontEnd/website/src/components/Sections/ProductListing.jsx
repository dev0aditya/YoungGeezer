import React, { useState, useEffect, useRef } from "react";
import ProductBox from "../UI/ProductBox";
import { productsData } from "../../utils/MockData";
import ProductFilterBtn from "./ProductFilterBtn";
import ProductSort from "./ProductSort";
import SortModal from "./SortModal";
import { gsap } from "gsap";

function ProductListing() {
  const [modalActive, setModalActive] = useState(false);

  const modalRef = useRef(null);
  const hasRunInitialEffect = useRef(false);

  const showModal = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {
    if (hasRunInitialEffect.current) {
      if (modalActive) {
        gsap.to(modalRef.current, {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: "power3.inOut",
          display: "block",
        });
      } else {
        gsap.to(modalRef.current, {
          duration: 0.5,
          y: "100%",
          opacity: 0,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(modalRef.current, { display: "none" });
          },
        });
      }
    } else {
      gsap.set(modalRef.current, {
        y: "100%",
        opacity: 0,
        display: "none",
      });
      hasRunInitialEffect.current = true;
    }
  }, [modalActive]);

  return (
    <div style={{ transition: "all 0.5s ease-in-out" }}>
      <div className="NoOfProduct mt-20 mb-2 text-sm opacity-50 flex justify-end mx-5">
        {productsData.length} Products
      </div>
      <div className="grid grid-cols-2 gap-x-2 mx-5">
        {productsData.map((product) => (
          <ProductBox
            className="h-[26rem]"
            key={product.id}
            img={product.img}
            desc={product.desc}
            alt={product.alt}
            price={product.price}
            priceDropped={product.priceDropped}
            title={product.title}
            stock={product.stock}
          />
        ))}
      </div>
      <div className="filterSec flex w-full justify-between items-center sticky bottom-0 mt-5">
        <ProductSort showModal={showModal} />
        <ProductFilterBtn />
      </div>
      <SortModal setModalActive={setModalActive} ref={modalRef} />
    </div>
  );
}

export default ProductListing;
