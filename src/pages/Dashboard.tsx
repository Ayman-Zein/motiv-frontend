import BannerItems from "@components/dashboard/banners/BannerItems";
import CarsList from "@components/dashboard/recommend/CarsList";
import StatsList from "@components/dashboard/Statistics/StatsList";

const Dashboard = () => {
  return (
    <>
      <StatsList />
      <BannerItems />
      <CarsList />
    </>
  );
};

export default Dashboard;
