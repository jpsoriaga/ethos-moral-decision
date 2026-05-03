import { TriangleAlert } from 'lucide-react';
import EthicsProgress from './EthicsProgress';

export default function HeroSection() {
    return(
        <>
            <div className="w-full bg-[#00cc73] rounded-3xl py-4 px-5 h-auto flex justify-between ">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-y-1">
                    <h1 className="text-sm text-black">Common Ethics</h1>
                    <h1 className="font-bold text-lg text-black">High</h1>
                </div>

                <span className='text-black text-xs font-medium'>11 Total Decisions</span>
                </div>

                <EthicsProgress high={2} total={10} />
            </div>
        </>
    );
}