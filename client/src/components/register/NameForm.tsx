import { useState } from "react";
import Header from "./Header";
import type { FormData } from "../../types/registerType";

type NameFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
}

export default function NameForm({ formData, setFormData, nextStep }: NameFormProps) {

    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);

    const handleContinue = () => {
        if(!formData.firstName) {
            setErrorFirstName(true);
        }

        if(!formData.lastName) {
            setErrorLastName(true);
        }

        if(!formData.firstName || !formData.lastName) {
            return;
        }

        nextStep();
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col my-25">
                <Header />
                <div className="flex flex-col px-5 gap-y-3">
                    <h1 className="font-semibold text-4xl">What's your name?</h1>
                    <span className="text-white/70 mb-20">So that we know how to call you.</span>
                </div>

                <div className="flex flex-col px-5 gap-y-5">
                    <div className="flex flex-col gap-y-1">
                        <span>First Name</span>

                        <div>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                onClick={() => setErrorFirstName(false)}
                                className={`pl-3 pr-3 ${errorFirstName ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorFirstName && <span className='text-error'>First name is required</span>}
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <span>Last Name</span>

                        <div>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                onClick={() => setErrorLastName(false)}
                                className={`pl-3 pr-3 ${errorLastName ? "input-error" : "input-primary"}`}
                            />
                        </div>
                        {errorLastName && <span className='text-error'>Last name is required</span>}
                    </div>
                    <button onClick={handleContinue} className='button-primary'>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}