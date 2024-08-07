import React, { useState } from "react";
import Rectangle from "@assets/icons/Rectangle.svg?react";

interface OptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionType[];
  onChange: (value: string) => void;
}

const CustomSelect = ({ options, onChange }: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    options[0]?.value || ""
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <select
        className={`appearance-none w-36 bg-white rounded-full py-2 px-4 text-[#5F6165] text-base leading-tight focus:outline-none focus:shadow-outline`}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 rtl:left-0 rtl:right-auto flex items-center px-2 pointer-events-none">
        <Rectangle />
      </div>
    </div>
  );
};

export default CustomSelect;
