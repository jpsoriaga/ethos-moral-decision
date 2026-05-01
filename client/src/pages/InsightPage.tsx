import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Insight from "../components/insight/Insight";

export default function InsightPage() {
    useEffect(() => {
        document.title = "Insight | Ethos";
    }, []);

    return(
        <>
            <Header />
            <NavBar />
            <div>
                <Insight />
            </div>
        </>
    );
}