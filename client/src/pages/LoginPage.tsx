import { useEffect } from "react";
import LoginForm from "../components/login/LoginForm";

export default function LoginPage() {

    useEffect(() => {
        document.title = "Login - Ethos";
    }, []);

    return(
        <>
            <LoginForm />
        </>
    );
}