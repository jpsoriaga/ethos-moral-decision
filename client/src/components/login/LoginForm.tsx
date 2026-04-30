import { User } from 'lucide-react';
import Logo from "../../assets/logo-and-text.png"

export default function LoginForm() {
    return (
        <>
            <div className="flex flex-col justify-center min-h-screen py-10 px-5 sm:hidden">
                <img src={Logo} alt="Ethos Logo" className="w-30 h-auto mb-15" />

                <div className="flex flex-col gap-y-3 mb-10">
                    <h2 className="text-primary-color text-xl">Welcome Back!</h2>
                    <p className="font-semibold text-4xl">Log in to continue your ethical journey</p>
                    <span className="text-sm text-white/70">Log your decisions. Understand your patterns. <br /> Grow with insight</span>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <span className="text-sm">Username</span>

                        <div className="relative">
                            <User className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />

                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="pl-9 pr-3 py-2 w-full text-sm rounded-md text-white placeholder-white/50 border border-white/50
                                 focus:outline-none focus:ring-1 focus:ring-primary-color focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <span className="text-sm">Password</span>

                        <div className="relative">
                            <User className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="pl-9 pr-3 py-2 w-full text-sm rounded-md text-white placeholder-white/50 border border-white/50
                                 focus:outline-none focus:ring-1 focus:ring-primary-color focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}