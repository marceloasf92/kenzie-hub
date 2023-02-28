import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ContainerWidth = styled.div`
  max-width: 370px;
  width: 100%;
`;

export const Content = styled.div`
  height: 402px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  margin: 0 15px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h3 {
      color: var(--grey-0);
      font-size: 18px;
      padding: 33px 0 17px 0;
    }

    button {
      width: 90%;
      height: 40px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: 4px;
      color: var(--grey-0);
      font-size: 12px;
      font-weight: 500;
      transition: 1s;
    }

    button:hover,
    button:focus {
      background-color: var(--color-primary-focus);
      border-color: var(--color-primary-focus);
    }
  }
`;

export const ContainerButton = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  span {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 17px;
  }

  button {
    width: 90%;
    height: 40px;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    color: var(--grey-0);
    font-size: 12px;
    transition: 0.5s;
  }

  button:hover,
  button:focus {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }
`;
