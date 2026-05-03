import { useEffect } from "react";
import Backheader from "./BackHeader"
import { useOutletContext, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ContextType = {
    reasoning: string;
    setReasoning: React.Dispatch<React.SetStateAction<string>>;
}

export default function Step3TheReasoning() {

    const { reasoning, setReasoning } = useOutletContext<ContextType>();

    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Create Decision | Ethos";
        }, []);

    return (
        <>
            <Backheader />
            <div className="w-full flex flex-col top-19 fixed h-[calc(100vh-52px)] overflow-y-auto p-5 pb-27 gap-y-5">
                <h1 className="text-xl font-bold">The Reasoning</h1>

                <div className="flex flex-col gap-y-1">
                    <span>Why this choice?</span>

                    <textarea
                        placeholder="Be honest. Are you angry? Scared? Strategic? What's the hidden motive?"
                        value={reasoning}
                        onChange={(e) => setReasoning(e.target.value)}
                        rows={8}
                        className="px-3 input-primary min-h-[180px] resize-none"
                    />
                    <span className="text-xs text-white/80">Hint: The more honest you are, the better analysis.</span>
                </div>

                <button onClick={() => navigate("/create-decision/the-action")}
                    disabled={!reasoning}
                    className='button-primary mb-5 flex items-center justify-center gap-x-2'>
                    Submit
                </button>

            </div>
        </>
    );
}