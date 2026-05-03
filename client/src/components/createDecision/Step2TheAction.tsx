import { useEffect } from "react";
import Backheader from "./BackHeader"
import { useOutletContext, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ContextType = {
    action: string;
    setAction: React.Dispatch<React.SetStateAction<string>>;
}

export default function Step2TheAction() {

    const { action, setAction } = useOutletContext<ContextType>();

    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Create Decision | Ethos";
        }, []);

    return (
        <>
            <Backheader />
            <div className="w-full flex flex-col top-19 fixed h-[calc(100vh-52px)] overflow-y-auto p-5 pb-27 gap-y-5">
                <h1 className="text-xl font-bold">The Action</h1>

                <div className="flex flex-col gap-y-1">
                    <span>Context</span>

                    <textarea
                        placeholder="e.g. Emailing HR today"
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                        rows={8}
                        className="px-3 input-primary min-h-[180px] resize-none"
                    />
                    <span className="text-xs text-white/80">This is your moment of commitment. Be specific.</span>
                </div>

                <button onClick={() => navigate("/create-decision/the-reasoning")}
                    disabled={!action}
                    className='button-primary mb-5 flex items-center justify-center gap-x-2'>
                    Next <ArrowRight size={20} />
                </button>

            </div>
        </>
    );
}