import ListDecisions from "../components/ListDecisions/ListDecisions";
import { useEffect } from "react";

export default function ListDecisionsPage() {

    useEffect(() => {
        document.title = "List of Decisions | Ethos";
    }, []);

    return (
        <>
            <ListDecisions />
        </>
    );
}