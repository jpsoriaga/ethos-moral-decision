

export default function Header() {
    return (
        <>
            <div className="flex items-center fixed top-0 w-full py-4 px-5 z-50 bg-[#1c1c1c] border-b border-white/20">
                <div className="flex flex-col">
                    <span className=" font-bold tracking-wide text-xl">
                        Get started
                    </span>

                    <p className='text-xs text-white/80 tracking-wide'>Create your account to continue</p>
                </div>
            </div>
        </>
    );
}