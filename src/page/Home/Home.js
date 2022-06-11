import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.scss";

export default function Welcome() {
    const navigate = useNavigate(); 


    return (

        <div className="Welcome">
            <header className="head">
                <h1 className="text-center">AutoLand</h1>
            </header>
            <section>
                
                <div className="mt-4 row">
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                    <button type="button" className="button col-8 col-sm-8 col-lg-6 shadow-lg" id="b1"
                    onClick={() => navigate("/connexion")}>
                        connexion
                    </button>
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                 </div>

                <div className="mt-4 row">
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                    <button type="button" className="button col-8 col-sm-8 col-lg-6 shadow-lg" id="b2"
                     onClick={() => navigate("/inscription")}>
                        inscription
                    </button>
                    <div className="col-2 col-sm-2 col-lg-3"></div>
                 </div>
                
            </section>
            <footer className="foot">
                <img className="logo mx-auto d-block" src="/img/ersys.png"></img>
            </footer>

        </div>
    );
}