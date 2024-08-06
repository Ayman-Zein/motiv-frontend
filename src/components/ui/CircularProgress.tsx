import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const CircularProgress = ({
  value,
  pathColor = "#FF7E86",
}: {
  value: number;
  pathColor?: string;
}) => {
  return (
    <div className="size-28 flex relative">
      <CircularProgressbar
        value={value}
        circleRatio={0.7}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1.2 / 8,
          strokeLinecap: "round",
          trailColor: "#eee",
          pathColor: `${pathColor}`,
          textSize: "3.8vh",
        })}
      />
      <span className="font-bold text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        {value}%
      </span>
    </div>
  );
};

export default CircularProgress;
