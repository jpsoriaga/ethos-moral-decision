import { House, User, ClipboardList, PencilLine } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="z-50 flex items-center justify-center fixed bottom-0 h-16 w-full secondary-bg rounded-t-3xl border-t border-white/20">
      <div className="flex items-center justify-center gap-x-7">

        <NavLink to="/dashboard"   className="flex items-center gap-x-2">
          {({ isActive }) => (
            <>
              <House className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span
                className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
                }`}
              >
                Home
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/create-decision" className="flex items-center gap-x-2">
          {({ isActive }) => (
            <>
              <PencilLine className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span
                className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
                }`}
              >
                Decision
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/list-of-decisions" className="flex items-center gap-x-2">
          {({ isActive }) => (
            <>
              <ClipboardList className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span
                className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
                }`}
              >
                List
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/profile" className="flex items-center gap-x-2">
          {({ isActive }) => (
            <>
              <User className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary-color" : "text-white"}`} />
              <span
                className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
                }`}
              >
                Profile
              </span>
            </>
          )}
        </NavLink>

      </div>
    </div>
  );
}