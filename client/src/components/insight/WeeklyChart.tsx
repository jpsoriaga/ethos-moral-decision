import { useMemo } from "react";

type WeeklyData = {
    sunday: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
};

type WeeklyChartProps = {
    data: WeeklyData;
    activeDay?: keyof WeeklyData;
};

const dayOrder: (keyof WeeklyData)[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];

const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

export default function WeeklyChart({ data, activeDay }: WeeklyChartProps) {
    const max = Math.max(...Object.values(data), 1);

    const normalized = useMemo(() => {
        return dayOrder.map((day) => ({
            day,
            value: data[day],
            height: (data[day] / max) * 100,
        }));
    }, [data, max]);

    return (
        <div className="w-full bg-[#1c1c1c] p-4 rounded-3xl">
            <h2 className="text-white text-sm font-semibold mb-2">
                Weekly Activity
            </h2>

            <div className="flex items-end justify-between">
                {normalized.map((item, i) => {
                    const isActive = activeDay === item.day;

                    return (
                        <div key={item.day} className="flex flex-col items-center gap-1 flex-1">

                            {/* Bar */}
                            <div className="w-4 flex items-end h-[56px]">
                                <div
                                    className={`w-full rounded-sm bg-green-500 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30"
                                        }`}
                                    style={{ height: `${item.height}%` }}
                                />
                            </div>

                            {/* Label */}
                            <span
                                className={`text-[10px] ${isActive ? "text-white" : "text-white/30"
                                    }`}
                            >
                                {dayLabels[i]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}