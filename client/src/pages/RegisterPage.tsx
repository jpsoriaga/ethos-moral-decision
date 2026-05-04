import { useEffect, useState } from "react";
import NameForm from "../components/register/NameForm";
import EmailForm from "../components/register/EmailForm"
import PasswordForm from "../components/register/AccountForm";
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
        username: "",
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
            {step === 1 && <NameForm formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <EmailForm formData={formData} setFormData={setFormData} nextStep={nextStep} backStep={backStep} />}
            {step === 3 && <PasswordForm formData={formData} setFormData={setFormData} backStep={backStep} />}
        </div>
    );
}