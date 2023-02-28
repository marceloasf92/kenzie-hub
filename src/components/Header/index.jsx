import logoKenzie from "../../assets/Logo.png";
import Button from "../Button";
import { Container } from "./styles";
import { useHistory } from "react-router";

const Header = ({ isLogin, text, setAuth }) => {
  const history = useHistory();
  return (
    <Container isLogin={isLogin}>
      {isLogin ? (
        <img src={logoKenzie} alt="KenzieHub" />
      ) : (
        <>
          <img src={logoKenzie} alt="KenzieHub" />
          <Button
            onClick={() => {
              history.push(`/`);
              setAuth(false);
              localStorage.clear();
            }}
          >
            {text}
          </Button>
        </>
      )}
    </Container>
  );
};
export default Header;
