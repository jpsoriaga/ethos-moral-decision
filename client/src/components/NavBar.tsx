import { useState } from "react";
import { House, User, ClipboardList, PencilLine } from "lucide-react";

export default function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex items-center justify-center fixed bottom-0 h-16 w-full secondary-bg rounded-t-3xl border-t border-white/20">
      <div className="flex items-center justify-center gap-x-7">

        <button
          onClick={() => setActive("home")}
          className="flex items-center gap-x-2"
        >
          <House className={`w-5 h-5 transition-colors duration-300 ${active === "home" ? "text-primary-color" : "text-white"}`} />
          
          <span
            className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
              active === "home" ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
            }`}
          >
            Home
          </span>
        </button>

        <button
          onClick={() => setActive("decision")}
          className="flex items-center gap-x-2"
        >
          <PencilLine className={`w-5 h-5 transition-colors duration-300 ${active === "decision" ? "text-primary-color" : "text-white"}`} />
          
          <span
            className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
              active === "decision" ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
            }`}
          >
            Decision
          </span>
        </button>

        <button
          onClick={() => setActive("view decisions")}
          className="flex items-center gap-x-2"
        >
          <ClipboardList className={`w-5 h-5 transition-colors duration-300 ${active === "view decisions" ? "text-primary-color" : "text-white"}`} />
          
          <span
            className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
              active === "view decisions" ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
            }`}
          >
            List
          </span>
        </button>

        <button
          onClick={() => setActive("profile")}
          className="flex items-center gap-x-2"
        >
          <User className={`w-5 h-5 transition-colors duration-300 ${active === "profile" ? "text-primary-color" : "text-white"}`} />
          
          <span
            className={`text-primary-color text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
              active === "profile" ? "max-w-[80px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
            }`}
          >
            Profile
          </span>
        </button>

        

      </div>
    </div>
  );
}