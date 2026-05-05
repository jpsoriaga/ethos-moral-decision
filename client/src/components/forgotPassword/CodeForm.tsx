import { useRef, useState } from "react";
import Header from "./Header";

export default function CodeForm() {
    const length = 5;
    const [code, setCode] = useState<string[]>(Array(length).fill(""));
    const [activeIndex, setActiveIndex] = useState(0);

    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < length - 1) {
            setActiveIndex(index + 1);
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace") {
            if (code[index]) {
                const newCode = [...code];
                newCode[index] = "";
                setCode(newCode);
            } else if (index > 0) {
                setActiveIndex(index - 1);
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const handleFocus = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="w-full min-h-screen flex flex-col my-25">
                <Header />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">Enter verification code</h1>
                    <span className="text-white/70 mb-20">Check your email and enter the 5-digit code</span>
                </div>

                <div className="flex flex-col gap-y-5 items-center justify-center">
                    <div className="flex items-center justify-center gap-3 mt-4">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputsRef.current[index] = el }}
                            value={digit}
                            type="text"
                            maxLength={1}
                            inputMode="numeric"
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onFocus={() => handleFocus(index)}
                            className={`
              w-14 h-14 text-center text-xl font-semibold rounded-xl outline-none
              border transition
              ${activeIndex === index
                                    ? "border-primary-color border-2"
                                    : "border-gray-300"
                                }
            `}
                        />
                    ))}
                </div>
                <span>Didn't received the code? <button className="text-primary-color">Resend Code</button></span>
                </div>
            </div>
        </>
    );
}