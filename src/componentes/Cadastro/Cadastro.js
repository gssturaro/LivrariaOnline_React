import React, { useState, useEffect } from "react";
import Input from "../Input";
import { Link } from 'react-router-dom';

import "./Cadastro.scss";
import Botao from "../Botao/Botao";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(1);
  const [count, setCount] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState();

  const gerarPersonagem = () => {
    if (id === 494) {
      setId(1);
    } else {
      setId(id + 1)
    }
  }

  const resposta = texto => {
    setMensagem(texto);
    setTimeout(() => {
      setMensagem("")
    }, 1500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (email === confirmEmail) {
      const payload = {
        name: nome,
        email: email,
        confirm_email: confirmEmail,
        password: senha
    }

      localStorage.setItem(`Dados${count}`, JSON.stringify(payload));
      setCount(count + 1);
      setNome("");
      setEmail("");
      setConfirmEmail("");
      setSenha("");
      resposta("Cadastrado com sucesso")
      setStatus(true)
      window.open("http://localhost:3000/produtos")

    } else {
      resposta("Os emails não correspondem");
      setStatus(false);
    }
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: "GET"
    }).then(result => {
      return result.json()
    }).then(data => {
      console.log(data)
    }).catch(() => {
      console.error("Erro")
    })
  }, [id])

  return (
    <div className="Cadastro">
      <h1>Faça seu cadastro</h1>
      {/* <button onClick={gerarPersonagem}>Gerar personagem</button> */}
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
          obrigatorio
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <Botao>Cadastrar</Botao>
      </form>
    </div>
  );
};

export default Cadastro;