import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator'; 

export default function Connexion() {
    const navigate = useNavigate(); 

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const handleSubmit = () => {
        
        let handle = true;
        
        if(validator.isEmail(email)){

            setEmailError("Email Valid");
           
        }else{
            setEmailError("entrez un email valid");
            handle = false;
        }
        
        if(password == ""){
            setPasswordError("entre un mot de passe ta mère");
            handle = false;
        }else{
            setPasswordError("");
        }
        if(handle) {
            navigate("/");
        }
    }


    return (

        <div className="Connexion">
            <header className="head">
                
            </header>
            <section>
                <h1 className="text-center">Connexion</h1>
                <div className="buttonContainer row">
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                        <input type={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"E-mail"} className="col-8 col-sm-8 col-lg-6"></input>
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                </div>
                <div className="error text-center">{emailError}</div>

                
                <div className="row">
                    
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                        <input input type={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"mot de passe"} className="col-8 col-sm-8 col-lg-6"></input>
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                </div>
                <div className="error text-center">{passwordError}</div>


                <div className="row">
                    
                    <div className="col-3 col-sm-3 col-lg-4"></div>
                        <button className="col-6 col-sm-6 col-lg-4" onClick={handleSubmit}> Connexion</button>
                    <div className="col-3 col-sm-3 col-lg-4"></div>
                </div>


               
            </section>
            <footer>
                <img className="logo mx-auto d-block" src="/img/ersys.png"></img>
            </footer>
        </div>
    );
}