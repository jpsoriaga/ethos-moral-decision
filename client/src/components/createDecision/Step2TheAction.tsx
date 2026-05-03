import { useEffect } from "react";
import Backheader from "./BackHeader"

export default function Step2TheAction() {

    useEffect(() => {
            document.title = "Create Decision | Ethos";
        }, []);

    return (
        <>
            <Backheader />
            <div className="w-full flex flex-col top-19 fixed h-[calc(100vh-52px)] overflow-y-auto p-5 pb-27 gap-y-5">
                step 2
            </div>
        </>
    );
}