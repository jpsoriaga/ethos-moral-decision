import { useEffect, useState } from "react";

type RiskBarProps = {
  low: number;
  medium: number;
  high: number;
};

export default function RiskMetrics({
  low = 0,
  medium = 0,
  high = 0,
}: RiskBarProps) {
  const total = low + medium + high;

  const score = low * 1 + medium * 2 + high * 3;
  const maxScore = total * 3;

  const percentage = total === 0 ? 0 : (score / maxScore) * 100;

  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(percentage);
  }, [percentage]);

  const getLabel = () => {
    if (percentage < 30) return "Low";
    if (percentage < 70) return "Medium";
    return "High";
  };

  return (
    <div className="w-full bg-[#1c1c1c] py-4 px-5 rounded-3xl">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-white text-sm">Average Risk</p>
          <p className="text-white font-semibold text-lg">{getLabel()}</p>
        </div>
        <p className="text-white font-semibold text-lg">
          {Math.round(percentage)}%
        </p>
      </div>

      <div className="relative w-full h-2 bg-white/10 rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 opacity-40" />

        <div
          className="absolute h-full rounded-full transition-all duration-700"
          style={{
            width: `${position}%`,
            background: "linear-gradient(to right, #22c55e, #facc15, #ef4444)",
          }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transition-all duration-700"
          style={{
            left: `${position}%`,
            transform: "translate(-50%)",
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-white/40 mt-2">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
    </div>
  );
}
