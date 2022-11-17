import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import BigLogo from "./../Assests/BigLogo.svg";
import ActivateContext from "./../contexts/ActivateContext";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [conectando, setConectando] = useState(false);
  const [reload] = useState(false);
  const { setActive } = useContext(ActivateContext);
  setActive(false);
  const navigate = useNavigate();

  useEffect(() => {}, [reload]);

  function doLogin(event) {
    event.preventDefault();
    setConectando(true);
    const body = { email: email, name: name, password: password, image: image };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    promise.then((response) => {
      setEmail("");
      setPassword("");
      setName("");
      setImage("");
      setConectando(false);
      navigate("/");
    });

    promise.catch((error) => {
      setConectando(!conectando);
      setEmail("");
      setPassword("");
      setName("");
      setImage("");
      setConectando(false);
      alert("Putz, deu xabu");
      navigate("/cadastro");
    });
  }

  return (
    <RegisterContainer>
      <img src={BigLogo} alt="Trackit Logo" />
      <form onSubmit={doLogin}>
        <input
          required
          type="email"
          placeholder=" email"
          disabled={conectando ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          required
          type="password"
          placeholder=" senha"
          disabled={conectando ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          required
          type="text"
          placeholder=" nome"
          disabled={conectando ? true : false}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          required
          type="text"
          placeholder=" foto"
          disabled={conectando ? true : false}
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <button disabled={conectando ? true : false} type="submit">
          {conectando ? "Carregando..." : "Cadastrar"}
        </button>
      </form>
      <Link className="toHome" to="/">
        Já tem uma conta? Faça Login!
      </Link>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: 400;
  background-color: #eee;

  img {
    margin-top: 66px;
    margin-bottom: 33px;
    width: 180px;
    height: 173px;
  }

  form {
    width: 100vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 0 36px 6px 36px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }

  input::placeholder {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #888;
  }

  button {
    margin: 0 36px 25px 36px;
    background-color: #52b6ff;
    border-radius: 4.64px;
    color: #fff;
    height: 45px;
    border: none;
    font-size: 21px;
  }

  .toHome {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #52b6ff;
  }
`;
