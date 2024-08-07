import CustomSelect from "@components/ui/CustomSelect";
import IconRounded from "@components/ui/IconRounded";
import Dashboard from "@assets/icons/dashboard.svg?react";
import Filter from "@assets/icons/filter.svg?react";
import { useSearchParams } from "react-router-dom";

const makers = [
  { value: "", label: "Select Maker" },
  { value: "Cooper", label: "Cooper" },
  { value: "Toyota", label: "Toyota" },
  { value: "Audi", label: "Audi" },
  { value: "Porsche", label: "Porsche" },
  { value: "Suzuki", label: "Suzuki" },
];

const transmission = [
  { value: "", label: "Select Type" },
  { value: "manual", label: "Manual" },
  { value: "automatic", label: "Automatic" },
];
const Filtration = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);

  const handleTransmissionChange = (value: string) => {
    if (value) {
      newSearchParams.set("transmission", value);
    } else {
      newSearchParams.delete("transmission");
    }
    setSearchParams(newSearchParams);
  };
  const handleMakersChange = (value: string) => {
    if (value) {
      newSearchParams.set("make", value);
    } else {
      newSearchParams.delete("make");
    }
    setSearchParams(newSearchParams);
  };
  return (
    <div className="flex flex-col sm:flex-row mt-8 ">
      <div className="flex gap-3">
        <CustomSelect options={makers} onChange={handleMakersChange} />
        <CustomSelect
          options={transmission}
          onChange={handleTransmissionChange}
        />
      </div>
      <div className="mt-2 sm:mt-0 sm:ml-auto rtl:sm:mr-auto rtl:sm:ml-0 flex gap-4">
        <IconRounded bgColor="white" icon={<Dashboard />} />
        <IconRounded bgColor="#A162F7" icon={<Filter />} />
      </div>
    </div>
  );
};

export default Filtration;
