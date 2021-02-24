import React from "react";
import useForm from "../hooks/useForm";

const FormSignUp = () => {
    const [values, handleChange, handleSubmit] = useForm();

    return (
        <div>
            <div className="form-content-right">
                <form className="form"
                onSubmit={handleSubmit}
                >
                    <h1>
                        Get started with us! Create your account by filling out
                        the information below.
                    </h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            className="form-input"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="form-input"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="form-input"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password2" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            placeholder="Confirm your password"
                            className="form-input"
                            value={values.password2}
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                    className="form-input-btn"
                     type="submit"
                     onSubmit={handleSubmit}
                     >
                        Sign up
                    </button>
                    <span className="form-input-login">
                        Already have an account? Login <a href="#">here</a>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default FormSignUp;
