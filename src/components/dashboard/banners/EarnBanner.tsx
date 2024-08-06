import { DiscountProps } from "@customTypes/discount";
import React from "react";

const EarnBanner: React.FC<DiscountProps> = ({
  title,
  subTitle,
  discountText,
  discountValue,
  Icon,
  bgColor,
  mainColor,
}) => {
  return (
    <div
      className="flex flex-col bg-white rounded-md h-full p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex ">
        <h2 className="font-abeezee text-[20px] text-white sm-w-5 leading-6">
          {title}
        </h2>
        <div className="lg:w-full justify-end md:flex  hidden">{Icon}</div>
      </div>
      <div className="">
        <h3
          className="font-abeezee italic text-[40px] relative md:top-[-15px] leading-10"
          style={{ color: mainColor }}
        >
          {discountValue}
        </h3>
        <p className="font-abeezee italic text-[20px] text-white leading-6">
          {discountText}
        </p>
        <p
          className="font-abeezee text-xs leading-6"
          style={{ color: mainColor }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default EarnBanner;
