import { useEffect } from "react";
import CreateDecision from "../components/createDecision/CreateDecision";

export default function CreateDecisionPage() {

    useEffect(() => {
        document.title = "Create Decision | Ethos";
    }, []);

    return(
        <>
            <div>
                <CreateDecision />
            </div>
        </>
    );
}