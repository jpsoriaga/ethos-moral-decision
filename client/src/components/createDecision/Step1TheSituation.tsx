import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Header from "./Header";

type ContextType = {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContext: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    context: string;
}

export default function Step1TheSituation() {

    const { title, setTitle, context, setContext } =
    useOutletContext<ContextType>();

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="w-full flex flex-col top-19 fixed h-[calc(100vh-52px)] overflow-y-auto p-5 pb-27 gap-y-5">
                <h1 className="text-xl font-bold">The Situation</h1>

                <div className="flex flex-col gap-y-1">
                    <span>Title</span>

                    <input
                        type="text"
                        placeholder="e.g. Quitting my job"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" px-3 input-primary"
                    />
                </div>

                <div className="flex flex-col gap-y-1">
                    <span>Context</span>

                    <textarea
                        placeholder="What exactly is happening? Who is involved?"
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                        rows={8}
                        className="px-3 input-primary min-h-[180px] resize-none"
                    />
                </div>

                <button onClick={() => navigate("/create-decision/the-action")} className='button-primary mb-5'>
                    Next
                </button>

            </div>
        </>
    );
}