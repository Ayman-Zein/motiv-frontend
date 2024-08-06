import { TCar } from "@customTypes/car";
import ClockArrows from "@assets/icons/clockArrow.svg?react";
import SquareArrow from "@assets/icons/squareArrow.svg?react";
import Setting from "@assets/icons/setting.svg?react";
import Energy from "@assets/icons/energy.svg?react";

const COLORS = ["#E1DFA4", "#E3ECF1", "#F4E3E5"];

const CarCard = ({ item }: { item: TCar }) => {
  return (
    <div
      className="bg-white w-full sm:w-1/2 md:w-1/3 flex flex-col py-[15px] px-[27px] rounded-2xl"
      style={{ backgroundColor: COLORS[item.id - 1] }}
    >
      <div className="flex gap-3 mb-3">
        <ClockArrows />
        <h2 className="font-sans font-bold text-[#242731] text-base">
          {item.recommendationPercentage} % Recommend
        </h2>
      </div>
      <img src={`src/assets/images/cars/${item.imageUrl}`} alt="car image" />
      <h3 className="font-sans font-bold text-[#1F2128] text-xl mt-2">
        {item.model}
      </h3>
      <div className="flex mt-4">
        <div className="flex gap-3">
          <SquareArrow />
          <span className="font-medium text-sm text-[#72767C]">
            {item.kilometersAge / 1000}K
          </span>
          <Setting />
          <Energy />
        </div>
        <div className="ml-auto font-medium text-sm text-[#72767C]">
          ${item.pricePerHour}/h
        </div>
      </div>
    </div>
  );
};

export default CarCard;
