import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import KeepItems from "../component/KeepItems/KeepItems";
import ListItems from "../component/ListItems/ListItems";
import Layout from "../component/UI/Layout";

interface Button {
  onClick: any;
}

const Cart = () => {
  const navigate = useNavigate();

  const ToCartHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    navigate("/cart");
  };

  return (
    <Layout>
      <ListItems />
      <p style={{ fontSize: "30px", textAlign: "center" }}>temp</p>
      <KeepItems />
      <ToCartButton onClick={ToCartHandler}>Submit</ToCartButton>
    </Layout>
  );
};

export default Cart;

const ToCartButton = styled.button<Button>`
  position: relative;
  left: 640px;
  width: 60px;
  height: 40px;
  margin: 0 20px 20px 0;
`;
