import { Link, useLocation } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import AdminLogo from "../../../assets/images/logo2.png";
import "./AdminSidebar.css";
import { useState } from "react";
const AdminSidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation()
  return (
    <>
      <div
        className={`${
          open ? "w-[400px]" : "w-[80px]"
        } duration-500 h-screen p-4 pt-8 bg-blue-950 relative`}
      >
        {/* toggle button for sidebar*/}
        <div
          className={`absolute cursor-pointer top-4 border-2
                  border-blue-950 bg-white rounded-full right-[-13px]
                    ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <Icon.ArrowLeft className="cursor-pointer p-[3px] text-blue-950 text-2xl" />
        </div>
        <div className="flex gap-x-4">
          <img
            src={AdminLogo}
            alt=""
            className={`text-white w-[45px] h-[35px] bg-white 
                        cursor-pointer duration-500 p-1 ${
                          open && "rotate-[360deg]"
                        }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl
                        duration-300 ${!open && "scale-0"}`}
          >
            Ritchy Stores
          </h1>
        </div>

        {/* link items */}
        <ul className="pt-6 flex flex-col gap-y-5">
          <li
            className={`hover:bg-slate-500 rounded-md text-gray-300 text-lg 
             cursor-pointer p-2 ${!open && "bg-slate-500"} ${location.pathname=="/admin"?"bg-purple-600":""}`}
          >
            <Link to="/admin" className="flex items-center gap-x-4">
              <Icon.Speedometer className="text-white " />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li
            className={`hover:bg-slate-500 rounded-md text-gray-300 text-lg 
             cursor-pointer p-2 ${!open && "bg-slate-500"} ${location.pathname=="/adminss"?"bg-purple-600":""}`}
          >
            <Link to="/admin" className="flex items-center gap-x-4">
              <Icon.Speedometer className="text-white " />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
