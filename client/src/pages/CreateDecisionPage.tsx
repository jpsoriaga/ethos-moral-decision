import { useEffect } from "react";
import Header from "../components/createDecision/Header";

export default function CreateDecisionPage() {

    useEffect(() => {
        document.title = "Create Decision | Ethos";
    }, []);

    return(
        <>

            <Header />
            <div>
                
            </div>
        </>
    );
}