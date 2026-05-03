import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function CreateDecisionPage() {
    useEffect(() => {
        document.title = "Create Decision | Ethos";
    }, []);

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");

    const [action, setAction] = useState("");

    const [reasoning, setReasoning] = useState("");

    return (
        <div>
            <Outlet context={{ title, setTitle, context, setContext,
            action, setAction, reasoning, setReasoning
             }} />
        </div>
    );
}