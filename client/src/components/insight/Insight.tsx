import HeroSection from "./HeroSection";
import RiskCard from "./RiskCard";
import EthicsMetrics from "./EthicsMetrics";
import RiskMetrics from "./RiskMetrics";
import WeeklyChart from "./WeeklyChart";

export default function Insight() {
    return (
        <>
            <div className="w-full flex flex-col top-19 fixed h-[calc(100vh-52px)] overflow-y-auto p-5 pb-27 gap-y-5">
                <HeroSection />
                <div className="justify-between flex gap-x-3">
                    <div className="w-1/2">
                        <RiskCard />
                    </div>
                    <div className="w-1/2">
                        <WeeklyChart
                            data={{
                                sunday: 0,
                                monday: 0,
                                tuesday: 0,
                                wednesday: 0,
                                thursday: 8,
                                friday: 0,
                                saturday: 1,
                            }}
                            activeDay="saturday"
                        />
                    </div>
                </div>

                <EthicsMetrics grey={1}
                    high={5}
                    questionable={1}
                    unacceptable={3} />

                <RiskMetrics low={2} medium={8} high={3} />
            </div>
        </>
    );
}