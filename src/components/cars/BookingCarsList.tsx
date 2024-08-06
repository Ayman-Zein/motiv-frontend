import { TCar } from "@customTypes/car";
import { useGetCarsQuery } from "@store/cars";
import BookingCarCard from "./BookingCarCard";
import { useSearchParams } from "react-router-dom";

const BookingCarsList = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  const { data, isLoading, error } = useGetCarsQuery({ ...queryParams });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {data?.length ? (
        data?.map((car: TCar) => <BookingCarCard key={car.id} item={car} />)
      ) : (
        <h2 className="font-bold text-3xl mt-5">No Data Found</h2>
      )}
    </div>
  );
};

export default BookingCarsList;
