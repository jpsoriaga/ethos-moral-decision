import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
    useEffect(() => {
        document.title = "Dashboard | Ethos";
    }, []);

    return(
        <>
            <div>
                Dashboard Page
            </div>
        </>
    );
}