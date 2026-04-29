import Logo from "../assets/logo-and-text.png"

export default function LoginPage() {
    return(
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
                        <span className="text-primary-color text-sm">Username</span>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                </div>
            </div>
        </>
    );
}