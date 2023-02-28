import { Container, ContainerCard, Content } from "./styles";
import Header from "../../components/Header";
import { GoPlus } from "react-icons/go";
import Button from "../../components/Button";
import api from "../../services/api";
import { useEffect, useState } from "react";
import ModalRegister from "../../components/ModalRegister";
import ModalDelete from "../../components/ModalDelete";

import { Redirect } from "react-router-dom";
import CardList from "../../components/CardList";

const Home = ({ auth, setAuth }) => {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [works, setWorks] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [target, setTarget] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");

  const handleData = () => {
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));
    api.get(`/users/${id}`).then((response) => {
      setName(response.data.name);
      setModule(response.data.course_module);
      setWorks(response.data.techs);
    });
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleSubmitGet = (id, name, module) => {
    setInputId(id);
    setInputName(name);
    handleOpen();
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Content>
          <Header text="Sair" setAuth={setAuth} />
          <section>
            <h2>Olá, {name}</h2>
            <p>{module}</p>
          </section>
          <ContainerCard>
            <div>
              <h3>Tecnologias</h3>
              <Button
                onClick={(e) => {
                  handleOpen();
                  setTarget(e.currentTarget.id);
                }}
                id="buttonAdd"
              >
                <GoPlus />
              </Button>
            </div>

            <ul>
              {works.length === 0 ? (
                <>
                  <li className="empty">
                    <p></p>
                  </li>
                  <li className="empty">
                    <p></p>
                  </li>
                  <li className="empty">
                    <p></p>
                  </li>
                  <li className="empty">
                    <p></p>
                  </li>
                  <li className="empty">
                    <p></p>
                  </li>
                  <li className="empty">
                    <p></p>
                  </li>
                </>
              ) : (
                works.map(({ id, title, status }) => {
                  return (
                    <CardList
                      title={title}
                      status={status}
                      id={id}
                      key={id}
                      setTarget={setTarget}
                      handleSubmitGet={handleSubmitGet}
                    />
                  );
                })
              )}
            </ul>
          </ContainerCard>
        </Content>
      </Container>

      {target === "buttonAdd" ? (
        <ModalRegister
          open={open}
          handleClose={handleClose}
          handleData={handleData}
          inputId={inputId}
        />
      ) : (
        <ModalDelete
          open={open}
          handleClose={handleClose}
          handleData={handleData}
          inputName={inputName}
          inputId={inputId}
        />
      )}
    </>
  );
};
export default Home;
