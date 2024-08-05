import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const CircularProgress = () => {
  return (
    <div className="size-28 flex relative">
      <CircularProgressbar
        value={70}
        circleRatio={0.7}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1.2 / 8,
          strokeLinecap: "round",
          trailColor: "#eee",
          pathColor: `#ff0`,
          textSize: "3.8vh",
        })}
      />
      <span className="font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        70%
      </span>
    </div>
  );
};

export default CircularProgress;
