
import { useState } from "react";
import type { FormData } from "../../types/forgotPasswordType";
import BackHeader from "./BackHeader";
import NProgress from "nprogress";
import { publicFetch } from "../../lib/api";

type NameFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    backStep: () => void;
}

export default function NewPasswordForm({ formData, setFormData, backStep }: NameFormProps) {

    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


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
                <BackHeader backStep={backStep} />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">Reset your password</h1>
                    <span className="text-white/70 mb-20">Enter a new password to secure your account.</span>
                </div>

                <div className="flex flex-col px-5 gap-y-5">
                    <div className="flex flex-col gap-y-1">
                        <span>Password</span>

                        <div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={formData.newPassword}
                                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                onClick={() => setErrorPassword(false)}
                                className={`pl-3 pr-3 ${errorPassword ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorPassword && <span className='text-error'>Password is required</span>}
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <span>Confirm Password</span>

                        <div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onClick={() => {setErrorConfirmPassword(false); setError(false);}}
                                className={`pl-3 pr-3 ${errorConfirmPassword || error ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorConfirmPassword ? <span className="text-error">Confirm password is required</span>
                        : error ? <span className="text-error">Password don't match. Please try again</span> : null}
                    </div>

                    <button className='button-primary mt-5'>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </>
    );
}