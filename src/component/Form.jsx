import React from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import img2 from "../assets/img/img-2.svg";

// --- auto import ctrl + space

const Form = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src={img2} alt="spaceship" className="form-img" />
                </div>
                {!isSubmitted ? (
                    <FormSignUp submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};

export default Form;
