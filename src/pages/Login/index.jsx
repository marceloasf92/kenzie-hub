import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, ContainerWidth } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import Button from "../../components/Button";
import { Content } from "../Login/styles";
import { ContainerButton } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Redirect } from "react-router-dom";

const Login = ({ auth, setAuth }) => {
  const [isLogin] = useState(true);

  const [isPassword, setIsPassword] = useState(true);

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digítos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { id } = response.data.user;
        localStorage.setItem("@KenzieHub:id", JSON.stringify(id));
        const { token } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        setAuth(true);
        toast.success("Usuário logado");
        return history.push("/home");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (auth) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <ContainerWidth>
        <Header isLogin={isLogin} />
        <Content>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <h3>Login</h3>
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              error={errors.email?.message}
            />
            <>
              {isPassword ? (
                <Input
                  name="password"
                  label="Senha"
                  placeholder="Digite aqui sua senha"
                  register={register}
                  icon={AiFillEye}
                  error={errors.password?.message}
                  type="password"
                  setIsPassword={setIsPassword}
                  isPassword={isPassword}
                />
              ) : (
                <Input
                  name="password"
                  label="Senha"
                  placeholder="Digite aqui sua senha"
                  register={register}
                  icon={AiFillEyeInvisible}
                  error={errors.password?.message}
                  type="text"
                  setIsPassword={setIsPassword}
                  isPassword={isPassword}
                />
              )}
            </>

            <Button type="submit">Entrar</Button>
          </form>

          <ContainerButton>
            <span>Ainda não possui uma conta?</span>
            <Button onClick={() => history.push("/register")}>
              Cadastre-se
            </Button>
          </ContainerButton>
        </Content>
      </ContainerWidth>
    </Container>
  );
};
export default Login;
