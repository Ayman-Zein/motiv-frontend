import IconRounded from "@components/ui/IconRounded";
import Energy from "@assets/icons/Shape.svg?react";
import Arrow from "@assets/icons/arrow.svg?react";
import Drop from "@assets/icons/drop.svg?react";
import Coin from "@assets/icons/coin.svg?react";
import StatsCard from "./StatsCard";
import { StatisticsProps } from "@customTypes/statistic";

const StatsList = () => {
  const ListItems: StatisticsProps[] = [
    {
      title: "Energy",
      Icon: <Energy />,
      value: 45,
      bgColor: "#A162F7",
      progressColor: "#A162F7",
    },
    {
      title: "Range",
      Icon: <Arrow />,
      value: 50,
      bgColor: "rgba(255, 126, 134, 0.1)",
      progressColor: "#FF7E86",
    },
    {
      title: "Break fluid",
      Icon: <Drop />,
      value: 9,
      bgColor: "rgba(161, 98, 247, 0.1)",
      progressColor: "#A162F7",
    },
    {
      title: "Tire Wear",
      Icon: <Coin />,
      value: 25,
      bgColor: "rgba(246, 204, 13, 0.1)",
      progressColor: "#F6CC0D",
    },
  ];
  return (
    <div className="flex flex-wrap  gap-4">
      {ListItems.map((item: StatisticsProps) => (
        <StatsCard
          key={item.title}
          title={item.title}
          Icon={
            <IconRounded icon={item.Icon} bgColor={item.bgColor || "#A162F7"} />
          }
          value={item.value}
          progressColor={item.progressColor}
        />
      ))}
    </div>
  );
};

export default StatsList;
