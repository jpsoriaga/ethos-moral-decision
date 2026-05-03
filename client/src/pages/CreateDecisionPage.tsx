import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function CreateDecisionPage() {
    useEffect(() => {
        document.title = "Create Decision | Ethos";
    }, []);

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");

    return (
        <div>
            <Outlet context={{ title, setTitle, context, setContext }} />
        </div>
    );
}