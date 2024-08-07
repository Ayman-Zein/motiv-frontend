import BookingCarsList from "@components/cars/BookingCarsList";
import Filtration from "@components/cars/Filtration";
import Heading from "@components/ui/Heading";
import { useTranslation } from "react-i18next";

const Cars = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading text={t("Booking")} />
      <Filtration />
      <BookingCarsList />
    </>
  );
};

export default Cars;
