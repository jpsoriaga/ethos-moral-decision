import Logo from "../assets/logo-and-text.png"

export default function LoginPage() {
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen sm:hidden">
                <img src={Logo} alt="Ethos Logo" className="w-100 h-auto" />
                <h1 className="text-3xl font-bold">Ethos</h1>
            </div>
        </>
    );
}