import Header from "@components/layout/Header";
import SideNav from "@components/layout/SideNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <SideNav />
        <main className="pt-6 px-4 page-height overflow-y-auto w-full">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
