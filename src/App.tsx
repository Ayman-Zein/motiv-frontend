import CircularProgress from "@components/ui/CircularProgress";
import { useGetCarsQuery } from "@store/cars";

function App() {
  const { data, isLoading, error } = useGetCarsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline sm:font-thin">
        Hello world!
        <CircularProgress />
        {data?.map((car) => (
          <div key={car.id}>
            <h2>
              {car.make} {car.model}
            </h2>
          </div>
        ))}
      </h1>
    </>
  );
}

export default App;
