import { useState } from "react";
import type { FormData } from "../../types/forgotPasswordType";
import Header from "./Header";
import NProgress from "nprogress";
import { publicFetch } from "../../lib/api";

type NameFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
}

export default function EmailForm({ formData, setFormData, nextStep }: NameFormProps) {

    const [errorEmail, setErrorEmail] = useState(false);
    const [loading, setLoading] = useState(false);

    {/* const handleContinue = async () => {
        if(!formData.email) {
            setErrorEmail(true);
            return;
        }

        try {
            NProgress.start();
            setLoading(true);
            const res = await publicFetch("https://ethos-moral-decision-logger-api.onrender.com/api/reset/request-code/", {
                method: "POST",
                body: JSON.stringify({
                    email: formData.email,
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Send verification code failed");
            }

            nextStep();

        } catch(err: string | any) {
            throw new Error(err.message);
        } finally {
            setLoading(false);
        }
    }*/}

    return (
        <>
            <div className="w-full min-h-screen flex flex-col my-25">
                <Header />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">What's your email?</h1>
                    <span className="text-white/70 mb-20">We’ll send a verification code to this email.</span>
                </div>

                <div className="flex flex-col px-5 gap-y-5">
                    <div className="flex flex-col gap-y-1">
                        <span>Email</span>

                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onClick={() => setErrorEmail(false)}
                                className={`pl-3 pr-3 ${errorEmail ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorEmail && <span className='text-error'>Email is required</span>}
                    </div>

                    <button onClick={nextStep} className='button-primary mt-5'>
                        {loading ? "Loading..." : "Continue"}
                    </button>
                </div>
            </div>
        </>
    );
}