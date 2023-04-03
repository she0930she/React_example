import React, { useState } from "react";
import './Register2.css'

function Register2(){

        //All the variable declarations and functions, arrows would be here
        const [username, setUsername] = useState('');
        //const [password, setPassword] = useState('');
        const [age, setAge] = useState('');
        const [isSubmitted, setIsSubmitted] = useState(false);
    
        const [firstName, setFirstName] = useState(null);
        const [lastName, setLastName] = useState(null);
        const [email, setEmail] = useState(null);
        const [password,setPassword] = useState(null);
        const [confirmPassword,setConfirmPassword] = useState(null);
    
        const handleInputChange = (e) => {
            const {id , value} = e.target;
            if(id === "firstName"){
                setFirstName(value);
            }
            if(id === "lastName"){
                setLastName(value);
            }
            if(id === "email"){
                setEmail(value);
            }
            if(id === "password"){
                setPassword(value);
            }
            if(id === "confirmPassword"){
                setConfirmPassword(value);
            }
    
        }
    
        const handleSubmit  = () => {
            //Write logic for the post operation which will connect to RESTApi backend
            //either springboot or NodeJS
            console.log(firstName,lastName,email,password,confirmPassword);
        }
    
    
    
    
        //Keep all the UI thing to be presented inside the return part
        return (
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
                </div>
            </div>
        )
    
}

export default Register2;