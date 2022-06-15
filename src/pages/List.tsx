import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListItems from "../component/ListItems/ListItems";
import Layout from "../component/UI/Layout";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <ListItems />
      <ToCartButton
        onClick={() => {
          navigate("/cart");
        }}
      >
        Cart
      </ToCartButton>
    </Layout>
  );
};

export default Cart;

const ToCartButton = styled.button`
  position: relative;
  left: 640px;
  width: 60px;
  height: 40px;
`;
