import CartItems from "../component/CartItems/CartItems";
import Layout from "../component/UI/Layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Button {
  onClick: any;
}

const Cart = () => {
  const navigate = useNavigate();

  const ToCartHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    navigate("/list");
  };

  return (
    <Layout>
      <p style={{ textAlign: "center", fontSize: "40px" }}>CART</p>
      <CartItems />
      <ToCartButton onClick={ToCartHandler}>Done</ToCartButton>
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
