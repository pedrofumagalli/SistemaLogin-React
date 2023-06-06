import React, { useState } from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("fumagalli7777@gmail.com");
  const [senha, setSenha] = useState("admnova123");
  const [error, setError] = useState("Verifique o E-mail");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  }


  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>

    </C.Container>
  )
}

export default Signin;