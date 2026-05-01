import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function DashboardPage() {
    useEffect(() => {
        document.title = "Dashboard | Ethos";
    }, []);

    return(
        <>
            <Header />
            <NavBar />
            <div>
                
            </div>
        </>
    );
}