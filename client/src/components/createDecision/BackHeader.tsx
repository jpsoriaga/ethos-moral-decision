import { ChevronLeft } from 'lucide-react';

export default function Header() {
    return(
        <div className="flex items-center fixed top-0 w-full py-3 px-5">
            
            <button className="rounded-full flex items-center justify-center border border-white/20 p-3 cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <span className="absolute left-1/2 -translate-x-1/2 font-bold tracking-wide text-xl">
                Insights
            </span>

        </div>
    );
}