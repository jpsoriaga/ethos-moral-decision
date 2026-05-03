import RiskBar from "./RiskBar";

export default function RiskCard() {
    return (
        <>
            <div className="flex flex-col justify-between py-4 px-5 w-full h-[135px] bg-yellow-500 rounded-3xl">
                <div>
                    <h1 className="text-sm text-black">Average Risk</h1>
                    <h1 className="font-bold text-lg text-black">Medium</h1>
                </div>

                <RiskBar low={3} medium={5} high={2} />
            </div>
        </>
    );
}