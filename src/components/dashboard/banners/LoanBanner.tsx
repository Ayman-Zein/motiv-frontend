import SecImage from "@assets/icons/sec1.svg?react";
const LoanBanner = () => {
  return (
    <div className="flex bg-[#FFE0BA] pt-4  px-4 gap-2 rounded-md lg:h-full">
      <div className="w-full flex flex-col justify-center">
        <h2 className="font-abeezee text-2xl italic">Apply for a car loan !</h2>
        <p className="py-2 font-abeezee text-[1rem] w-60">
          This is a sample of a generated text
        </p>
        <button className="font-abeezee font-normal italic text-sm bg-[#0F2837] text-white py-3 px-6 rounded-[4px] w-fit mb-5 md-mb-0">
          Discover More
        </button>
      </div>
      <div className="md:flex hidden max-w-28 md:max-w-full">
        <SecImage className="w-fit" />
      </div>
    </div>
  );
};

export default LoanBanner;
