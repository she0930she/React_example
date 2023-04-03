import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Registration.css';

function Registration(){
    
    const [isRegistered, setIsRegistered] = useState(false);
    
    // button function
    const submitRegister = (event) => {
        // prevent page reload
        event.preventDefault();

        var {fullName, pass, age, email} = document.forms[0];
        console.log("document.forms[0]: ", document.forms[0])

        const database= []

        const userData= {
            userEmail: email.value,
            userfullName: fullName.value,
            userPassword: pass.value,
            userAge: age.value
        }
        if (userData){
            database.push(userData)
            console.log("userData: ", userData)
            setIsRegistered(true)
        }
        
    }
    
    // form tag
    const registerForm= (
        <div className="form">
            {/* <form > */}
            <form onSubmit={submitRegister}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" name='email'  />
                </div>
                <div className="input-container">
                    <label>Full Name</label>
                    <input type="text" name="fullName" required />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name='pass' required />
                </div>
                <div className="input-container">
                    <label>Age</label>
                    <input type="number" name='age'  />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
    
    return (
        <div>
            
            <div className="app" >
            <h2>Register Page</h2>
                <div className="login-form" >
                    <div className="title" >Register</div>
                    {isRegistered ? <div>User is successfully registered</div> :  registerForm }
                </div>
            </div>
        </div>

        )



}
export default Registration;