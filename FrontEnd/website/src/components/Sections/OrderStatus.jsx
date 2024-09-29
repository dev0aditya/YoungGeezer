import React, { useEffect, useState } from "react";
import { ButtonWithBorder, DefaultButtonG } from "../UI/Buttons";
import CompletedOrder from "./CompletedOrder";
import InProgressOrder from "./InProgressOrder";

function OrderStatus() {
  const [completed, setCompleted] = useState(true);
  useEffect(() => {
    const firstButton = document.querySelector(".statusButton button");
    if (firstButton) {
      firstButton.classList.add("bg-color-secondary/80", "text-color-primary");
      firstButton.classList.remove("text-color-secondary");
    }
  }, []);
  const ChangeStatus = (e) => {
    if (e.target.tagName === "BUTTON") {
      const buttons = document.querySelectorAll(".statusButton button");

      buttons.forEach((button) => {
        button.classList.add("text-color-secondary");
        button.classList.remove("bg-color-secondary/80", "text-color-primary");
      });

      e.target.classList.remove("text-color-secondary");
      e.target.classList.add("bg-color-secondary/80", "text-color-primary");
    }
    setCompleted(!completed);
  };

  return (
    <>
      <div
        className="statusButton flex gap-2 justify-center my-6"
        onClick={ChangeStatus}
      >
        <ButtonWithBorder value={"Completed"} className={"text-sm"} />
        <ButtonWithBorder value={"In-Progress"} className={"text-sm"} />
      </div>
      <div className="orderData">
        {completed ? <CompletedOrder /> : <InProgressOrder />}
      </div>
    </>
  );
}

export default OrderStatus;
