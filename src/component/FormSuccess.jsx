import React from "react";
import img3 from "../assets/img/img-3.svg";

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have recieved your request!</div>
            <img src={img3} alt="success" className="form-img-2" />
        </div>
    );
};

export default FormSuccess;
