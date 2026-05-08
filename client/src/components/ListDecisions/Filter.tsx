import { useState } from "react";

export default function Filter() {

    const [selectedStatus, setSelectedStatus] = useState("All");

    type FilterCardProps = {
        title: string;
    }

    const FilterCard = ({ title }: FilterCardProps) => {

        const isSelected = title === selectedStatus;

        return (
            <>
                <button onClick={() => setSelectedStatus(title)} className={`flex items-center justify-center py-1.5 px-6 rounded-full cursor-pointer
                 ${isSelected ? "bg-[#00cc73] text-black" : "bg-[#1c1c1c]"}`}>
                    {title}
                </button>
            </>
        );
    }

    return (
        <>
            <div className="flex gap-x-3">
                <FilterCard title="All" />
                <FilterCard title="Ewan" />
            </div>
        </>
    );
}