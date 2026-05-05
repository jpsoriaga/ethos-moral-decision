import RiskBar from "./RiskBar";

type RiskCardProps = {
    low: number;
    medium: number;
    high: number;
}

export default function RiskCard({ low, medium, high }: RiskCardProps) {
    return (
        <>
            <div className="flex flex-col justify-between py-4 px-5 w-full h-[135px] bg-yellow-500 rounded-3xl">
                <div>
                    <h1 className="text-sm text-black">Average Risk</h1>
                    <h1 className="font-bold text-lg text-black">Medium</h1>
                </div>

                <RiskBar low={low} medium={medium} high={high} />
            </div>
        </>
    );
}