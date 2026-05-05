import { useState } from "react";
import Header from "./Header";
import type { FormData } from "../../types/registerType";

type NameFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
    backStep: () => void;
}

export default function EmailForm({ formData, setFormData, nextStep, backStep }: NameFormProps) {

    const [errorEmail, setErrorEmail] = useState(false);

    const handleContinue = () => {
        if(!formData.email) {
            setErrorEmail(true);
            return;
        }

        nextStep();
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col my-25">
                <Header />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">What's your email?</h1>
                    <span className="text-white/70 mb-20">We’ll use this to send updates and important info.</span>
                </div>

                <div className="flex flex-col px-5 gap-y-5">
                    <div className="flex flex-col gap-y-1">
                        <span>Email</span>

                        <div>
                            <input
                                type="text"
                                placeholder="Enter your email name"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onClick={() => setErrorEmail(false)}
                                className={`pl-3 pr-3 ${errorEmail ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorEmail && <span className='text-error'>Email is required</span>}
                    </div>

                    <button onClick={handleContinue} className='button-primary mt-5'>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}