import Header from "@components/layout/Header";
import SideNav from "@components/layout/SideNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <SideNav />
        <div>
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
