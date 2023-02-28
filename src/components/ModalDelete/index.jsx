import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";
import { Container, ContainerButton, ContainerModal } from "./styles";
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

const ModalDelete = ({ open, handleData, inputName, inputId, handleClose }) => {
  const [options] = useState([
    { value: "Iniciante", label: "Iniciante" },
    { value: "Intermediário", label: "Intermediário" },
    { value: "Avançado", label: "Avançado" },
  ]);

  const [typeButton, setTypeButton] = useState("");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
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
    const { label } = data.status;
    const newData = { status: label };

    if (typeButton === "buttonExcluir") {
      api
        .delete(`/users/techs/${inputId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Tecnologia excluída com sucesso");
          handleClose();
          handleData();
        })
        .catch((err) => toast.error("Ops! Algo deu errado"));
    } else {
      api
        .put(`/users/techs/${inputId}`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Tecnologia editada com sucesso");
          handleClose();
          handleData();
        })
        .catch((err) => toast.error("Ops! Selecione o módulo"));
    }
  };

  return (
    <ContainerModal>
      <Modal open={open}>
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <div className="titleModal">
                <h3>Tecnologia Detalhes</h3>
                <Button onClick={() => handleClose()}>
                  <AiOutlineClose />
                </Button>
              </div>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                <Input
                  name="title"
                  label="Nome do Projeto"
                  placeholder={inputName}
                  register={register}
                  error={errors.email?.message}
                  readOnly
                />
                <SelectComponent
                  name="status"
                  label="Selecionar Módulo"
                  placeholder="Escolha seu módulo"
                  error={errors.status?.value.message}
                  control={control}
                  options={options}
                />
                <ContainerButton>
                  <Button
                    type="submit"
                    id="buttonEditar"
                    onClick={(e) => {
                      setTypeButton(e.currentTarget.id);
                    }}
                  >
                    Salvar alterações
                  </Button>
                  <Button
                    id="buttonExcluir"
                    onClick={(e) => {
                      setTypeButton(e.currentTarget.id);
                    }}
                  >
                    Excluir
                  </Button>
                </ContainerButton>
              </form>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </ContainerModal>
  );
};

export default ModalDelete;
