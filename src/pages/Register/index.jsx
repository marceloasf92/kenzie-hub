import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, ContainerHeader, Content } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SelectComponent from "../../components/SelectComponent";

const Register = ({ auth, setAuth }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [positionInput] = useState("top");

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(6, "Mínimo de 8 digítos")
      .required("Campo obrigatório"),
    confirmPasssword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    status: yup.object().shape({
      label: yup.string().required("Campo obrigatório"),
      value: yup.string().required("Campo obrigatório"),
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [options] = useState([
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      label: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      label: "Quarto módulo (Backend Avançado)",
    },
  ]);

  const onHandleSubmit = ({ name, email, password, status }) => {
    const user = {
      name,
      email,
      password,
      course_module: status.label,
      bio: "Lorem ipsum dolor emet",
      contact: "Não informado",
    };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso");
        return history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  if (auth) {
    return <Redirect to="/home" />;
  }
  return (
    <Container>
      <ContainerHeader>
        <Header text="Voltar" setAuth={setAuth} id="headerWidth" />

        <Content>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div id="title">
              <h3>Crie sua conta</h3>
              <span>Rapido e grátis, vamos nessa</span>
            </div>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              error={errors.name?.message}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              error={errors.email?.message}
            />
            {isPassword ? (
              <>
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

                <Input
                  name="confirmPasssword"
                  label="Confirmar Senha"
                  placeholder="Digite aqui sua senha"
                  icon={AiFillEye}
                  type="password"
                  setIsPassword={setIsPassword}
                  isPassword={isPassword}
                  register={register}
                  error={errors.confirmPasssword?.message}
                />
              </>
            ) : (
              <>
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

                <Input
                  name="confirmPasssword"
                  label="Confirmar Senha"
                  placeholder="Digite aqui sua senha"
                  register={register}
                  type="text"
                  icon={AiFillEyeInvisible}
                  setIsPassword={setIsPassword}
                  isPassword={isPassword}
                  error={errors.confirmPasssword?.message}
                />
              </>
            )}

            <SelectComponent
              name="status"
              label="Selecionar Módulo"
              placeholder="Escolha seu módulo"
              options={options}
              control={control}
              error={errors.status?.value.message}
              positionInput={positionInput}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </Content>
      </ContainerHeader>
    </Container>
  );
};
export default Register;
