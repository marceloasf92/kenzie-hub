import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-4);
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isLogin ? "center" : "space-between")};
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 12px;

  button {
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    font-size: 10px;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }
`;
