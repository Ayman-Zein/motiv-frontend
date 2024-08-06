import CircularProgress from "@components/ui/CircularProgress";
import { StatisticsProps } from "@customTypes/statistic";
import React from "react";

const StatsCard: React.FC<StatisticsProps> = ({
  title,
  Icon,
  value,
  progressColor,
}) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white py-5 px-14 min-w-full sm:min-w-[266px] rounded-xl">
      {Icon}
      <h2 className="font-sans font-bold text-[28px] mt-2 mb-5"> {title}</h2>
      <CircularProgress value={value} pathColor={progressColor} />
    </div>
  );
};

export default StatsCard;
