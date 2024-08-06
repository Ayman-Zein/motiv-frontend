import React from "react";

type IconProps = {
  bgColor: string;
  icon: React.ReactNode;
};
const IconRounded: React.FC<IconProps> = ({ bgColor, icon }) => {
  return (
    <div
      className="size-10 rounded-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {icon}
    </div>
  );
};

export default IconRounded;
