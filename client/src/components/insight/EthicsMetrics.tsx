import { useEffect, useState } from "react";

type MetricRowProps = {
  label: string;
  count: number;
  total: number;
  color: string;
};

function MetricRow({ label, count, total, color }: MetricRowProps) {
  const percentage = total === 0 ? 0 : (count / total) * 100;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-white text-sm mb-1">{label}</span>
        <span className="text-white font-medium">
          {count} ({Math.round(percentage)}%)
        </span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${width}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

type EthicsMetricsProps = {
  neutral: number;
  right: number;
  doubtful: number;
  wrong: number;
};

export default function EthicsMetrics({
  neutral = 0,
  right = 0,
  doubtful = 0,
  wrong = 0,
}: EthicsMetricsProps) {
  const total = neutral + right + doubtful + wrong;

  return (
    <div className="w-full bg-[#1c1c1c] py-4 px-5 rounded-3xl">
      <h2 className="text-white font-semibold mb-4">Ethics Breakdown</h2>

      <div className="flex flex-col gap-y-1">
        <MetricRow label="Right" count={right} total={total} color="#22c55e" />

        <MetricRow label="Neutral" count={neutral} total={total} color="#9ca3af" />

        <MetricRow
          label="Doubtful"
          count={doubtful}
          total={total}
          color="#facc15"
        />

        <MetricRow
          label="Wrong"
          count={wrong}
          total={total}
          color="#ef4444"
        />
      </div>
    </div>
  );
}
