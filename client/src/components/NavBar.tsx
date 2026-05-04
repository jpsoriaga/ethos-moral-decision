import { House, User, ClipboardList, PencilLine } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="z-50 flex items-center justify-center fixed bottom-8 px-5 py-5 mx-5 secondary-bg rounded-full border border-white/20">
      <div className="flex items-center justify-center gap-x-4">

        <NavLink to="/dashboard"   className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <House className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span className={`text-sm ${isActive ? "text-primary-color" : "text-white"}`}>
                  Home
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/create-decision" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <PencilLine className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span className={`text-sm ${isActive ? "text-primary-color" : "text-white"}`}>
                Decision
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/list-of-decisions" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <ClipboardList className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span className={`text-sm ${isActive ? "text-primary-color" : "text-white"}`}>
                List
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/profile" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <User className={`w-5 h-5 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span className={`text-sm ${isActive ? "text-primary-color" : "text-white"}`}>
                Profile
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}