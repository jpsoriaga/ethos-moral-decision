import { useEffect, useState } from "react";
import NameForm from "../components/register/NameForm";
import EmailForm from "../components/register/EmailForm"
import PasswordForm from "../components/register/PasswordForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    useEffect(() => {
        document.title = "Register | Ethos";
    }, []);

    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const backStep = () => {
        setStep(prev => prev - 1);
    }

    return (
        <div>
            {step === 1 && NameForm()}
            {step === 2 && EmailForm()}
            {step === 3 && PasswordForm()}
        </div>
    );
}