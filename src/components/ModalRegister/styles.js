import styled from "styled-components";

export const ContainerModal = styled.div`
  max-width: 379px;
  @media (max-width: 375px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleModal {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    color: var(--grey-0);
    background-color: var(--grey-2);

    h3 {
      font-size: 12px;
      font-style: normal;
      font-weight: bold;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--grey-1);
    }

    button:hover {
      color: var(--grey-0);
    }
  }

  form {
    width: 95%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    button {
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      padding: 0.5rem 3rem;
      width: 90%;
      border-radius: 4px;
    }
  }
`;
