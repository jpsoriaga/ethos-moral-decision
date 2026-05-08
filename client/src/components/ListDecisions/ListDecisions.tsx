import Filter from "./Filter";
import Header from "./Header";


export default function ListDecisions() {
    return(
        <>
            <Header />
            <div className="w-full flex flex-col min-h-screen my-25 px-5">
                <Filter />
            </div>
        </>
    );
}