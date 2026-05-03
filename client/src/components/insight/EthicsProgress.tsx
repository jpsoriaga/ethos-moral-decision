import { useEffect, useState } from "react";

export default function EthicsProgress({
    high = 0,
    total = 10,
    size = 100,
    strokeWidth = 10,
}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const percentage = total === 0 ? 0 : (high / total) * 100;

    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const progressOffset =
            circumference - (percentage / 100) * circumference;
        setOffset(progressOffset);
    }, [percentage, circumference]);

    return (
        <div className="relative flex items-center justify-center">
            <svg width={size} height={size}>
                <circle
                    stroke="rgba(0, 0, 0, 0.2)"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />

                <circle
                    stroke="#2a2a2a"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: "stroke-dashoffset 0.6s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
            </svg>

            <div className="absolute flex flex-col items-center text-white text-xs">
                <span className="font-semibold text-xl text-black">
                    {percentage.toFixed(0)}%
                </span>
            </div>
        </div>
    );
}