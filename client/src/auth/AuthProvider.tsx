import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );

    const [username, setusername] = useState("");

    const login = (token: string, username: string) => {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("name", username);
        setusername(username);
        setIsAuthenticated(true);
    };

    const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("name");
    setusername("");
    setIsAuthenticated(false);
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}