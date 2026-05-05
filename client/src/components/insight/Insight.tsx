import HeroSection from "./HeroSection";
import RiskCard from "./RiskCard";
import EthicsMetrics from "./EthicsMetrics";
import RiskMetrics from "./RiskMetrics";
import WeeklyChart from "./WeeklyChart";
import { privateFetch } from "../../lib/api";
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
                const resInsight = await privateFetch("https://ethos-moral-decision-logger-api.onrender.com/api/insights/");
                const dataInsight = await resInsight.json();
                
                const resWeekly = await privateFetch("https://ethos-moral-decision-logger-api.onrender.com/api/decisions/weekly-count/");
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
            neutral: 0,
            right: 0,
            doubtful: 0,
            wrong: 0,
        };

        data.forEach((item) => {
            const key = item.ethics.toLowerCase();

            if (key === "neutral") result.neutral += item.count;
            if (key === "right") result.right += item.count;
            if (key === "doubtful") result.doubtful += item.count;
            if (key === "wrong") result.wrong += item.count;
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
                        <RiskCard low={risk.low} medium={risk.medium} high={risk.high} />
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

                <EthicsMetrics neutral={ethics.neutral}
                    right={ethics.right}
                    doubtful={ethics.doubtful}
                    wrong={ethics.wrong} />

                <RiskMetrics low={risk.low} medium={risk.medium} high={risk.high} />
            </div>
        </>
    );
}
