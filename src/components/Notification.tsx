import { FaTruckFast } from "react-icons/fa6";
import React from "react";

const Notification = () => {
  return (
    <div className="h-12 bg-green-500 text-white px-4 flex gap-2 items-center justify-center text-center  cursor-pointer">
      <FaTruckFast />
      <p className="text-sm md:text-base">
        Free Delivery for all orders above ₦50k. Order your food now!
      </p>
    </div>
  );
};

export default Notification;
