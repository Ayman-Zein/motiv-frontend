import { useGetCarsQuery } from "@store/cars";

const Dashboard = () => {
  const { data, isLoading, error } = useGetCarsQuery({
    isRecommended: true,
    make: "Toyota",
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      {data?.map((car) => (
        <div key={car.id}>
          <h2>
            {car.make} {car.model}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
