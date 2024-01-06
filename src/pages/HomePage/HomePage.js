import React from "react";
import './HomePage.css';

function HomePage () {
    return(
       <>
            <div className="d-flex container-principal">
                <div className="col-lg-6">
                    <h1>
                    Transforme sua experiência financeira com EcoBanco: aqui, sua economia ganha vida, e seu futuro prospera. Antecipe seus sonhos em minutos e dê um salto em direção ao sucesso financeiro. 
                    </h1>
                    <button className="btn btn-success btn-lg">Abra sua conta</button>
                </div>
                <div className="d-none d-lg-block">
                    <img src="/image/1.jpg"></img>
                </div>
            </div>
            <div className="conteiner-cartao d-flex">
                <div>
                    <img src="/image/card.png"></img>
                </div>
                <div>
                    <h1>EcoCard</h1>
                    <p>Aqui você encontra as melhores opções <br/> de cartões e os melhores benefícios.</p>
                    <p>E melhor, tudo em um só lugar</p>
                    <button className="btn btn-light btn-lg">Peça já o seu!</button>
                </div>
            </div>
            <div className="d-flex">
                <div className="col-6 conteiner-beneficios">
                    <h1>Conta com o melhor rendimento do Brasil</h1>
                    <p>Com o EcoBanco você facilita a sua vida. Venha conferir!</p>
                    <button className="btn btn-dark btn-lg">Abrir conta EcoBanco</button>
                </div>
                <div>
                <div>
                    <h2>Conta Completa</h2>
                    <p>Tudo o que você precisa em um só lugar. Venha ser Eco e confira tudo o que temos pra você.</p>
                    <p>Estes são apenas alguns benefícios</p>
                </div>
                <div>
                    <h2>Pix</h2>
                    <h3>Parcelamento de Pix</h3>
                    <p>Parcele seu pix em até 12x no cartão de crédito e pague só na próxima fatura.</p>
                </div>
                <div>
                    <h2>Pagamento de Boletos</h2>
                    <p>Pague seu boleto com o EcoBanco e não precisa sair de casa.</p>
                </div>
                </div>

            </div>



       </>
    );
};
export default HomePage;