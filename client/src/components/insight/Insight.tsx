import HeroSection from "./HeroSection";
import RiskCard from "./RiskCard";

export default function Insight() {
    return(
        <>
            <div className="w-full flex flex-col top-13 fixed h-auto p-5 gap-y-5">
                <HeroSection />
                <div className="justify-between flex gap-x-3">
                    <div className="w-1/2">
                        <RiskCard />
                    </div>
                    <div className="w-1/2">
                        
                    </div>
                </div>
            </div>
        </>
    );
}