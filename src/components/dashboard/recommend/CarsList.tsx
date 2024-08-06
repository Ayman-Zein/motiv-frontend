import { useGetCarsQuery } from "@store/cars";
import CarCard from "./CarCard";
import { TCar } from "@customTypes/car";

const CarsList = () => {
  const { data, isLoading, error } = useGetCarsQuery({
    isRecommended: true,
    _page: 1,
    _limit: 3,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
      {data?.length ? (
        data?.map((car: TCar) => <CarCard key={car.id} item={car} />)
      ) : (
        <h2 className="font-bold text-3xl mt-5">No Data Found</h2>
      )}
    </div>
  );
};

export default CarsList;
