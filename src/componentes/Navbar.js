import React, { useState } from "react";





import { Link } from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/pagamento">Pagamento</Link>
        <Link onClick={fecharMenu} to="/carrinho">Carrinho</Link>
        <Link onClick={fecharMenu} to="/produtos">Produtos</Link>
      </section>
    </div>
  );
};
export default Navbar;
