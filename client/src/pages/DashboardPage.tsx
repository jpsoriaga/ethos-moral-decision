import { useEffect } from "react";
import NavBar from "../components/NavBar";

export default function DashboardPage() {
    useEffect(() => {
        document.title = "Dashboard | Ethos";
    }, []);

    return(
        <>
            <NavBar />
            <div>
                Dashboard Page
            </div>
        </>
    );
}