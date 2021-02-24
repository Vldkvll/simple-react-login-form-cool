import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    console.log()

    return [values, handleChange, handleSubmit ]
};

export default useForm;
