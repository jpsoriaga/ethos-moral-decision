import HeroSection from "./HeroSection";
import RiskCard from "./RiskCard";
import EthicsMetrics from "./EthicsMetrics";
import RiskMetrics from "./RiskMetrics";
import WeeklyChart from "./WeeklyChart";
import { apiFetch } from "../../lib/api";
import { useEffect, useState } from "react";

type Insight = {
    total_decisions: number;
    ethics_distribution: {
        ethics: string;
        count: number;
    }[];
    risk_distribution: {
        risk_level: string;
        count: number;
    }[];
};

type WeeklyDecisionCount = {
    sunday: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
};

type WeeklyInsight = {
    today: keyof WeeklyDecisionCount;
    weekly_decision_count: WeeklyDecisionCount;
};

export default function Insight() {

    const [insight, setInsight] = useState<Insight | null>(null);
    const [weekly, setWeekly] = useState<WeeklyInsight | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInsight = async () => {
            setLoading(true);
            try {
                const resInsight = await apiFetch("https://ethos-moral-decision-logger-api.onrender.com/api/insights/");
                const dataInsight = await resInsight.json();
                
                const resWeekly = await apiFetch("https://ethos-moral-decision-logger-api.onrender.com/api/decisions/weekly-count/");
                const dataWeekly = await resWeekly.json();

                setInsight(dataInsight);
                setWeekly(dataWeekly);
            } catch (err) {
                console.error("Failed to fetch insight:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchInsight();
    }, []);

    const getEthicsStats = (data: Insight["ethics_distribution"]) => {
        const result = {
            grey: 0,
            high: 0,
            questionable: 0,
            unacceptable: 0,
        };

        data.forEach((item) => {
            const key = item.ethics.toLowerCase();

            if (key === "grey") result.grey += item.count;
            if (key === "high") result.high += item.count;
            if (key === "questionable") result.questionable += item.count;
            if (key === "unacceptable") result.unacceptable += item.count;
        });

        return result;
    };

    const getRiskStats = (data: Insight["risk_distribution"]) => {
        const result = {
            low: 0,
            medium: 0,
            high: 0,
        };

        data.forEach((item) => {
            const key = item.risk_level.toLowerCase();

            if (key === "low") result.low += item.count;
            if (key === "medium") result.medium += item.count;
            if (key === "high") result.high += item.count;
        });

        return result;
    };

    if (loading) return <div>Loading...</div>;
    if (!insight) return <div>No data</div>;
    if (!weekly) return <div>No data</div>;

    const ethics = getEthicsStats(insight.ethics_distribution);
    const risk = getRiskStats(insight.risk_distribution);


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
                                sunday: weekly.weekly_decision_count.sunday,
                                monday: weekly.weekly_decision_count.monday,
                                tuesday: weekly.weekly_decision_count.tuesday,
                                wednesday: weekly.weekly_decision_count.wednesday,
                                thursday: weekly.weekly_decision_count.thursday,
                                friday: weekly.weekly_decision_count.friday,
                                saturday: weekly.weekly_decision_count.saturday,
                            }}
                            activeDay={weekly.today}
                        />
                    </div>
                </div>

                <EthicsMetrics grey={ethics.grey}
                    high={ethics.high}
                    questionable={ethics.questionable}
                    unacceptable={ethics.unacceptable} />

                <RiskMetrics low={risk.low} medium={risk.medium} high={risk.high} />
            </div>
        </>
    );
}