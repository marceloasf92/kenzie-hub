import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";
import { Container, ContainerModal } from "./styles";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import SelectComponent from "../SelectComponent";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 369,
  height: 290,
  bgcolor: "var(--grey-3)",
  border: "1px solid var(--grey-3)",
  boxShadow: 24,
};

const ModalRegister = ({ open, handleData, inputId, handleClose }) => {
  const [options] = useState([
    { value: "Iniciante", label: "Iniciante" },
    { value: "Intermediário", label: "Intermediário" },
    { value: "Avançado", label: "Avançado" },
  ]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
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

  const handleSubmitFunction = (data) => {
    const { title } = data;
    const { label } = data.status;
    const newData = { title, status: label };
    api
      .post("/users/techs", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia criada com sucesso");
        handleClose();
        handleData();
      })
      .catch((err) => toast.error("Ops! Selecione outro nome"));
  };

  return (
    <ContainerModal>
      <Modal open={open}>
        <Fade in={open}>
          <Box sx={style} id="boxModal">
            <Container>
              <div className="titleModal">
                <h3>Cadastrar Tecnologia</h3>
                <Button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <AiOutlineClose />
                </Button>
              </div>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                <Input
                  name="title"
                  label="Nome"
                  placeholder="Digite o nome da tecnologia"
                  register={register}
                  error={errors.title?.message}
                />
                <SelectComponent
                  name="status"
                  label="Selecionar Módulo"
                  placeholder="Escolha seu módulo"
                  error={errors.status?.value.message}
                  control={control}
                  options={options}
                />
                <Button type="submit" id={inputId}>
                  Cadastrar Tecnologia
                </Button>
              </form>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </ContainerModal>
  );
};

export default ModalRegister;
