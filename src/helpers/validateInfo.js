const validateInfo = (values) => {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    if (!values.email.trim()) {
        errors.email = "Email required";
    } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            values.email
        )
    ) {
        errors.email = "Email address is invalid";
    }

    if (!values.password.trim()) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.password2.trim()) {
        errors.password2 = "Confirm password required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords don't match";
    }

    return errors;
};

export default validateInfo;
