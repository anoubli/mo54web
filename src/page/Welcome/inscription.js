import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator'; 

export default function Inscription() {
    const navigate = useNavigate(); 

    const [name,setName] = useState("");
    const [vorname,setVorName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const [nameError,setNameError] = useState("");
    const [vornameError,setVorNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const handleSubmit = () => {
        
        let handle = true;
        
        if( name == ""){
            setNameError("veuillez entrer un nom")
            handle = false;
        }if(vorname == ""){
            setVorNameError("entre un prenom idiot")
            handle = false;
        }if(validator.isEmail(email)){

            setEmailError("Email Valid")
           
        }else{
            setEmailError("entrez un email valid")
            handle = false;
        }
        
        if(password == ""){
            setPasswordError("entre un mot de passe ta mère")
            handle = false;
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
            <h1 className="text-center">Inscription</h1>
            
            <div className="mt-4 row">
                
                <div className="col-2 col-sm-2 col-lg-3"></div>
                    <input input type={"text"} placeholder={"Nom"} value={name} onChange={e => setName(e.target.value)} className="col-8 col-sm-8 col-lg-6"></input>
                    
                <div className="col-2 col-sm-2 col-lg-3"></div>
            </div>
            
            <div className="error text-center">{nameError}</div>            

            <div className="row">
                
                <div className="col-2 col-sm-2 col-lg-3"></div>
                    <input input type={"text"} placeholder={"Prenom"} value={vorname} onChange={e => setVorName(e.target.value)} className="col-8 col-sm-8 col-lg-6"></input>
                <div className="col-2 col-sm-2 col-lg-3"></div>
            </div>
            <div className="error text-center">{vornameError}</div>
            
            <div className="row">
                <div className="col-2 col-sm-2 col-lg-3"></div>
                    <input type={"email"} placeholder={"E-mail"} value={email} onChange={e => setEmail(e.target.value)} className="col-8 col-sm-8 col-lg-6"></input>
                <div className="col-2 col-sm-2 col-lg-3"></div>
            </div>
            <div className="error text-center">{emailError}</div>
            
            <div className="row">
                
                <div className="col-2 col-sm-2 col-lg-3"></div>
                    <input input type={"password"} placeholder={"mot de passe"} value={password} onChange={e => setPassword(e.target.value)} className="col-8 col-sm-8 col-lg-6"></input>
                <div className="col-2 col-sm-2 col-lg-3"></div>
            </div>
            <div className="error text-center">{passwordError}</div>
            
            <div className="row">
                
                <div className="col-3 col-sm-3 col-lg-4"></div>
                    <button className="col-6 col-sm-6 col-lg-4" onClick={handleSubmit}> Inscription</button>
                <div className="col-3 col-sm-3 col-lg-4"></div>
            </div>


           
        </section>
        <footer>
            <img className="logo mx-auto d-block" src="/img/ersys.png"></img>
        </footer>
    </div>
    );
}