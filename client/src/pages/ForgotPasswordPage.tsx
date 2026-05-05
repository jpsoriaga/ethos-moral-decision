import { useEffect, useState } from "react";
import EmailForm from "../components/forgotPassword/EmailForm";
import CodeForm from "../components/forgotPassword/CodeForm";

export default function ForgotPasswordPage() {
    useEffect(() => {
        document.title = "Register | Ethos";
    }, []);

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        email: "",
        code: 0,
        newPassword: ""
    });

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const backStep = () => {
        setStep(prev => prev - 1);
    }

    return (
        <div>
            {step === 1 && <EmailForm formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <CodeForm />}
        </div>
    );
}