import styled from "styled-components";

export const Container = styled.div`
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
`;

export const Product = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--secondary);
  margin-top: 8px;
  padding: 20px;

  img {
    width: 200px;
    height: 200px;
    margin: 20px;
    object-fit: contain;
  }
  h3 {
    margin: 8px auto;
  }
  p {
    height: 40px;
    text-align: center;
  }

  button {
    width: 100%;
    height: 32px;
    background-color: #56565c;
    color: #e7e7e7;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
  }
`;

export const CartButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background-color: transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;

export const ModalItem = styled.div``;
