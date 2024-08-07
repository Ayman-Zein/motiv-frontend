import { useTranslation } from "react-i18next";
import EarnBanner from "./EarnBanner";
import LoanBanner from "./LoanBanner";
import FirstBanner from "@assets/icons/sec2.svg?react";
import SecondBanner from "@assets/icons/sec3.svg?react";

const BannerItems = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-col xl:flex-row gap-3">
      <div className="sm:w-[75%] xl:w-[58%]">
        <LoanBanner />
      </div>
      <div className="sm:w-[75%]  xl:w-[21%]">
        <EarnBanner
          discountText={t("Badges")}
          discountValue={20}
          title={t("YouHaveEarned")}
          subTitle={t("HoorayWayToGoMohammed")}
          Icon={<FirstBanner />}
          bgColor="#0F2837"
          mainColor="#FF9619"
        />
      </div>
      <div className="sm:w-[75%]  xl:w-[21%]">
        <EarnBanner
          discountText={t("Points")}
          discountValue={1500}
          title={t("YouHaveEarned")}
          subTitle={t("RedeemAndClaimRewards")}
          Icon={<SecondBanner />}
          bgColor="#6E1946"
          mainColor="#FAC39B"
        />
      </div>
    </div>
  );
};

export default BannerItems;
