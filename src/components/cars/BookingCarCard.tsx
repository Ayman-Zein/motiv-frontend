import { TCar } from "@customTypes/car";
import Like from "@assets/icons/like.svg?react";
import Liked from "@assets/icons/liked.svg?react";
import Avatar from "@assets/icons/avatar.svg?react";
import Arrows from "@assets/icons/purpleArrows.svg?react";

const BookingCarCard = ({ item }: { item: TCar }) => {
  return (
    <div className="bg-white w-full  md:w-[48%] lg:w-[32%] flex flex-col py-[15px] px-[27px] rounded-2xl mb-4">
      <div className="flex ">
        <h2 className="font-sans font-bold text-[#242731] text-base">
          {item.model}
        </h2>
        {item.isLiked ? (
          <Liked className="ml-auto" />
        ) : (
          <Like className="ml-auto" />
        )}
      </div>
      <span className="font-sans font-normal text-base text-[#72767C]">
        {item.make}
      </span>
      <img
        src={`src/assets/images/cars/${item.imageUrl}`}
        alt="car image"
        className="h-28 w-fit"
      />
      <div className="flex mt-4">
        <div className="flex gap-5">
          <span className="flex gap-1">
            <Avatar /> {item.seats}
          </span>
          <span className="flex gap-1">
            <Arrows />
            {item.transmission}
          </span>
        </div>
        <div className="ml-auto font-medium text-sm text-[#72767C]">
          ${item.pricePerDay}/d
        </div>
      </div>
    </div>
  );
};

export default BookingCarCard;
