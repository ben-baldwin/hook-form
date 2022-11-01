import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    // why isnt set camel case?*****
    const [hasBeenSubmitted, sethasBeenSubmitted] = useState(false);
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length !== 0) {
            setfirstNameError("first name must be at least 2 characters")
        } else {
            setfirstNameError("");
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length !== 0) {
            setlastNameError("last name must be at least 2 characters")
        } else {
            setlastNameError("");
        }
    }

    const handleemail = (e) => {
        setemail(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length !== 0) {
            setemailError("email must be at least 2 characters")
        } else {
            setemailError("");
        }
    }

    const handlepassword = (e) => {
        setpassword(e.target.value);
        if (e.target.value.length <=7 && e.target.value.length !== 0) {
            setpasswordError("password must be at least 8 characters")
        } else {
            setpasswordError("");
        }
    }

    const handleconfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if (password !== e.target.value && e.target.value.length !== 0) {
            setconfirmPasswordError("passwords must match")
        }
        else {
            setconfirmPasswordError("");
        }
    }

    // having trouble understanding arrow functions*****
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const createUser = (e) => {
        // prevents page from refreshing everytime*****
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome, newUser");
        sethasBeenSubmitted(true);
    };


    return (
        <form onSubmit={createUser}>

            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First name: </label>
                <input type="text" value={firstName} onChange={handlefirstName} />
                {
                    firstNameError ?
                        <p style={{ color: 'red' }}>{firstNameError}</p> :
                        // why else, empty string??**
                        ''
                }
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" value={lastName} onChange={handlelastName} />
                {
                    lastNameError ?
                        <p style={{ color: 'red' }}>{lastNameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={handleemail} />
                {
                    emailError ?
                        <p style={{ color: 'red' }}>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlepassword} />
                {
                passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={handleconfirmPassword} />
                {
                confirmPasswordError ?
                        <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                        ''
                }
            </div>
            <input type="submit" />
            <p>*Your Form Data*</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    );
};

export default Form;