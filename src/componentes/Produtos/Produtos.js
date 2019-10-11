import React, { useState } from "react";
import '../Produtos/Produtos.scss';

import Livro1 from "../../imagens/eleanor_e_park.jpg";
import Livro2 from "../../imagens/simplesmente_acontece_c.jpg";
import Livro3 from "../../imagens/Amor em Manhattah.jpg";

const Produtos = ({ titulo }) => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }
    return (
        <div className="Produtos">
            <h1>Veja os produtos que temos para você!</h1>
            <div className="Nome">  
                <h3>Título: Eleanor & Park</h3>
            </div>
            <div className="Livro 1">
                <img src={Livro1} alt="Livro 1" />
            </div>
            <div className="Preço">
                <h2>R$10,00</h2>
            </div>
            <h3>{titulo}</h3>
            <h3>{contador}</h3>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
            <div className="Nome">
                <h3>Título: Simplesmente Acontece</h3>
            </div>
            <div className="Livro 2">
                <img src={Livro2} alt="Livro 2" />
            </div>
            <div>
                <h2>R$10,00</h2>
            </div>
            <h3>{titulo}</h3>
            <h3>{contador}</h3>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
            <div className="Nome">
                <h3>Título: Amor em Manhattah</h3>
            </div>
            <div className="Livro3">
                <img src={Livro3} alt="Livro 3" />
            </div>
            <div>
                <h2>R$10,00</h2>
            </div>
            <h3>{titulo}</h3>
            <h3>{contador}</h3>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}

export default Produtos;