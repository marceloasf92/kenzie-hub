import { Container } from "./styles";

const CardList = ({ title, status, id, setTarget, handleSubmitGet }) => {
  return (
    <>
      <Container
        key={id}
        onClick={(e) => {
          setTarget(e.currentTarget.id);
          handleSubmitGet(id, title, status);
        }}
        id={id}
      >
        <h4>{title}</h4>
        <span>{status}</span>
      </Container>
    </>
  );
};
export default CardList;
