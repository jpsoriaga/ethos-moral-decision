import { House, User, ClipboardList, PencilLine, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">

        <div className="flex gap-x-5 gap-y-5 px-3 py-3 bg-[#1c1c1c] border border-white/20 rounded-full w-full">
          <NavLink to="/dashboard" className="flex flex-col items-center flex-1">
            {({ isActive }) => (
              <>
                <House className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
                <span className={`text-[10px] sm:text-xs ${isActive ? "text-primary-color" : "text-white"}`}>
                  Home
                </span>
              </>
            )}
          </NavLink>

          <NavLink to="/create-decision" className="flex flex-col items-center flex-1">
            {({ isActive }) => (
              <>
                <PencilLine className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
                <span className={`text-[10px] sm:text-xs ${isActive ? "text-primary-color" : "text-white"}`}>
                  Decision
                </span>
              </>
            )}
          </NavLink>

          <NavLink to="/list-of-decisions" className="flex flex-col items-center flex-1">
            {({ isActive }) => (
              <>
                <ClipboardList className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
                <span className={`text-[10px] sm:text-xs ${isActive ? "text-primary-color" : "text-white"}`}>
                  List
                </span>
              </>
            )}
          </NavLink>

          <NavLink to="/profile" className="flex flex-col items-center flex-1">
            {({ isActive }) => (
              <>
                <User className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
                <span className={`text-[10px] sm:text-xs ${isActive ? "text-primary-color" : "text-white"}`}>
                  Profile
                </span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
}