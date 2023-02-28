import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  height: 60px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  #errorContainer {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    color: var(--grey-0);

    span {
      color: ${(props) => props.isErrored && "var(--color-negative)"};
    }
  }
`;
export const InputContainer = styled.div`
  background-color: var(--grey-2);
  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.isErrored ? "var(--color-negative)" : "var(--grey-2)")};
  color: var(--grey-1);
  width: 100%;
  display: flex;
  transition: 0.4s;
  padding: 0 0.8rem;
  height: 40px;

  :focus-within {
    border: 1px solid
      ${(props) =>
        props.isErrored ? "var(--color-negative)" : "var(--grey-0)"};
    border-radius: 4px;
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    font-size: 13px;
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
  }

  svg {
    height: 100%;
    cursor: pointer;
    transition: 0.5s;
  }

  svg:hover {
    color: var(--grey-0);
  }
`;
