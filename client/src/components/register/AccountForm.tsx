import { useState } from "react";
import BackHeader from "./BackHeader";
import type { FormData } from "../../types/registerType";
import NProgress from "nprogress";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";

type AccountFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    backStep: () => void;
}

export default function AccountForm({ formData, setFormData, backStep }: AccountFormProps) {

    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [errorUsername, setErrorUsername] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [openDialog, setOpenDialog] = useState(false);

    const navigate = useNavigate();

    const registerForm = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password
    }

    const handleSubmit = () => {

        if(!formData.username) {
            setErrorUsername(true);
        }

        if (!formData.password) {
            setErrorPassword(true);
        }

        if (!confirmPassword) {
            setErrorConfirmPassword(true);
        }

        if (!formData.password || !confirmPassword || !formData.username) {
            return;
        }

        if (confirmPassword !== formData.password) {
            return setError(true);
        }

        setOpenDialog(true);
    }

    const submitForm = async () => {
        try {
            NProgress.start();
            setLoading(true);

            const res = await fetch("https://ethos-moral-decision-logger-api.onrender.com/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerForm),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            toast.success("Successfully Registered!");
            setTimeout(() => {
                navigate("/");
            }, 300);

        } catch (err: string | any) {
            throw new Error(err.message);
        } finally {
            NProgress.done();
            setLoading(false);
        }
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col my-25">
                <BackHeader backStep={backStep} />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">What's your account?</h1>
                    <span className="text-white/70 mb-20">So you can securely access your account.</span>
                </div>

                <div className="flex flex-col px-5 gap-y-5">

                    <div className="flex flex-col gap-y-1">
                        <span>Username</span>

                        <div>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                onClick={() => setErrorUsername(false)}
                                className={`pl-3 pr-3 ${errorUsername ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorUsername && <span className='text-error'>Username is required</span>}
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <span>Password</span>

                        <div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                    <button onClick={handleSubmit} className='button-primary'>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
            <ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog} submitForm={submitForm} />
        </>
    );
}