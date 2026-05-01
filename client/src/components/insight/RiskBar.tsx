
export default function RiskBar({
    low = 0,
    medium = 0,
    high = 0,
}) {
    const total = low + medium + high;

    const score = low * 1 + medium * 2 + high * 3;
    const maxScore = total * 3;

    const percentage = total === 0 ? 0 : (score / maxScore) * 100;

    return (
        <div className="w-full">
            <div className="text-sm text-black text-xl font-bold mb-1">
                {Math.round(percentage)}%
            </div>

            <div className="w-full h-2 bg-[rgba(0,0,0,0.2)] rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#2a2a2a] rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}