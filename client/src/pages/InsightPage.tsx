import { useEffect } from "react";
import Header from "../components/insight/Header";
import Insight from "../components/insight/Insight";

export default function InsightPage() {
    useEffect(() => {
        document.title = "Insight | Ethos";
    }, []);

    return(
        <>
            <Header />
            <div>
                <Insight />
            </div>
        </>
    );
}