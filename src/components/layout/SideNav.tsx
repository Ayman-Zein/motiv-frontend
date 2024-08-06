import { IoCarOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="w-16 md:w-[248px] bg-white h-full nav-height px-3 pt-6 flex flex-col justify-between">
      <div className="flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-neutral-100 flex items-center justify-center md:justify-start gap-4 mb-2 px-1 py-2"
              : "flex gap-4 mb-2 px-1 py-2  items-center justify-center md:justify-start"
          }
        >
          <RxDashboard size={20} className="text-[##72767C]" />
          <span className="font-sans font-medium text-sm text-[#5F6165] hidden text-center md:block">
            Dashboard
          </span>
        </NavLink>
        <NavLink
          to="/cars"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-neutral-100 flex items-center justify-center md:justify-start gap-4 mb-2 px-1 py-2"
              : "flex gap-4 mb-2 px-1 py-2  items-center justify-center md:justify-start"
          }
        >
          <IoCarOutline size={20} className="text-[##72767C]" />
          <span className="font-sans font-medium text-sm text-[#5F6165] hidden text-center md:block">
            Cars
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-neutral-100 flex items-center justify-center md:justify-start gap-4 mb-2 px-1 py-2"
              : "flex gap-4 mb-2 px-1 py-2  items-center justify-center md:justify-start"
          }
        >
          <IoSettingsOutline size={20} className="text-[##72767C]" />
          <span className="font-sans font-medium text-sm text-[#5F6165] hidden text-center md:block">
            Settings
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-neutral-100 flex items-center justify-center md:justify-start gap-4 mb-2 px-1 py-2"
              : "flex gap-4 mb-2 px-1 py-2 items-center justify-center md:justify-start"
          }
        >
          <TbLogout2 size={20} className="text-[##72767C]" />
          <span className="font-sans font-medium text-sm text-[#5F6165] hidden text-center md:block">
            Log Out
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNav;
