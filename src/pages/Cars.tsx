import BookingCarsList from "@components/cars/BookingCarsList";
import Filtration from "@components/cars/Filtration";
import Heading from "@components/ui/Heading";

const Cars = () => {
  return (
    <>
      <Heading text="Booking" />
      <Filtration />
      <BookingCarsList />
    </>
  );
};

export default Cars;
