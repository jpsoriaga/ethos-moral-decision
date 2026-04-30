import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
    useEffect(() => {
        document.title = "Dashboard | Ethos";
    }, []);

    toast.success("Successfully logged in!");

    return(
        <>
            <div>
                Dashboard Page
            </div>
        </>
    );
}