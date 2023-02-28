import { Container, InputContainer } from "./styles";

const Input = ({
  register,
  icon: Icon,
  name,
  label,
  error,
  setIsPassword,
  isPassword,
  ...rest
}) => {
  return (
    <Container isErrored={!!error}>
      <div id="errorContainer">
        {label}
        {!!error && <span>{error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && (
          <Icon
            size={20}
            onClick={() => {
              setIsPassword(!isPassword);
            }}
          />
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
