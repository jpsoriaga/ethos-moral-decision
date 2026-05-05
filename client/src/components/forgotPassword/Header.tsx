

export default function Header() {
    return (
        <>
            <div className="flex items-center fixed top-0 w-full py-4 px-5 z-50 bg-[#1c1c1c] border-b border-white/20">
                <div className="flex flex-col">
                    <span className=" font-bold tracking-wide text-xl">
                        Reset Password
                    </span>

                    <p className='text-xs text-white/80 tracking-wide'>Enter your email to receive a verification code</p>
                </div>
            </div>
        </>
    );
}