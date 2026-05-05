import { ChevronLeft } from 'lucide-react';

type BackHeaderProps = {
    backStep: () => void;
}

export default function BackHeader({ backStep }: BackHeaderProps) {
    return (
        <>
            <div className="flex items-center fixed top-0 w-full h-[77px] py-4 px-5 z-50 bg-[#1c1c1c] border-b border-white/20">
    
                    <button onClick={backStep}>
                        <ChevronLeft size={35} />
                    </button>

                    <span className="absolute left-1/2 -translate-x-1/2 font-bold tracking-wide text-xl">
                        Registration
                    </span>
            </div>
        </>
    );
}