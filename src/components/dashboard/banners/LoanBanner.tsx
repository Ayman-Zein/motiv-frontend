import SecImage from "@assets/icons/sec1.svg?react";
import { useTranslation } from "react-i18next";
const LoanBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-[#FFE0BA] pt-4  px-4 gap-2 rounded-md lg:h-full">
      <div className="w-full flex flex-col justify-center">
        <h2 className="font-abeezee text-2xl italic">{t("ApplyForCarLoan")}</h2>
        <p className="py-2 font-abeezee text-[1rem] w-60">
          {t("SampleGeneratedText")}
        </p>
        <button className="font-abeezee font-normal italic text-sm bg-[#0F2837] text-white py-3 px-6 rounded-[4px] w-fit mb-5 md-mb-0">
          {t("DiscoverMore")}
        </button>
      </div>
      <div className="md:flex hidden max-w-28 md:max-w-full">
        <SecImage className="w-fit" />
      </div>
    </div>
  );
};

export default LoanBanner;
