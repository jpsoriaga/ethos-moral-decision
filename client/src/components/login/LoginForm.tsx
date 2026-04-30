import { User, KeyRound } from 'lucide-react';
import Logo from "../../assets/logo-and-text.png"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [error, setError] = useState("This field is required");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setErrorUsername(false);
        setErrorPassword(false);
        setError("");

        if (!username) {
            setErrorUsername(true);
        }

        if (!password) {
            setErrorPassword(true);
        }

        if (!username || !password) {
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("https://ethos-moral-decision-logger-api.onrender.com/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

          //    const data = await res.json();

            if(res.ok) {
                console.log("Login successful");
            } else {
                console.log("Login failed");
            }

        } catch (err: string | any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    };

    return (
        <>
            <div className="flex flex-col justify-center min-h-screen py-10 px-5 sm:hidden">
                <img src={Logo} alt="Ethos Logo" className="w-30 h-auto mb-10" />

                <div className="flex flex-col gap-y-3 mb-10">
                    <h2 className="text-primary-color text-xl">Welcome Back!</h2>
                    <p className="font-semibold text-4xl">Login to continue your ethical journey</p>
                    <span className="text-white/70">Log your decisions. Understand your patterns. <br /> Grow with insight</span>
                </div>

                <div className="flex flex-col gap-y-5 mb-5">
                    <div className="flex flex-col gap-y-1">
                        <span>Username</span>

                        <div className="relative">
                            <User className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onClick={() => setErrorUsername(false)}
                                className={`pl-9 pr-3 ${errorUsername ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorUsername && <span className='text-error'>Username is required</span>}
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <span>Password</span>

                        <div className="relative">
                            <KeyRound className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onClick={() => setErrorPassword(false)}
                                className={`pl-9 pr-3 ${errorPassword ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorPassword && <span className='text-error'>Password is required</span>}
                    </div>
                </div>

                <button className='text-primary-color flex w-full justify-end mb-5'>Forgot Password?</button>

                <button onClick={handleLogin} className='button-primary mb-5'>Login</button>

                <span className='flex items-end justify-center gap-x-1'>Don't have an account? <button className='text-primary-color'>Register</button></span>
            </div>
        </>
    );
}