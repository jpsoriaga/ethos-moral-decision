import { useEffect } from "react";


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