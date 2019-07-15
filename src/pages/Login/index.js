import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

function setActiveUser(user) {
  return { type: "activeUser", user };
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toApp, setToApp] = useState(false);

  const dispatch = useDispatch();

  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        console.log("response.data.user.name", response.data.user.name);
        dispatch(setActiveUser(response.data.user.name));
        setToApp(true);
      } catch (err) {
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  }

  return (
    <Container>
      {toApp ? <Redirect to="/app" /> : null}
      <Form onSubmit={handleSignIn}>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <hr />
        <Link to="/signup">Criar conta grátis</Link>
      </Form>
    </Container>
  );
}
