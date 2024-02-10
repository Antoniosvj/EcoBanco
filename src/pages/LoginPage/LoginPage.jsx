import React from "react";
import './LoginPage.css';
import { Button } from "react-bootstrap";

function LoginPage(){
    return (
        <>
            <div id="pagina">
                <div id="login">
                    <p>Número da conta: <input type="number"/></p>
                    <p>Senha: <input type="password" /></p>
                    <Button className="btn btn-success btn-lg">Entrar</Button>
                </div>
            </div>
            
        </>
    );
};
export default LoginPage;