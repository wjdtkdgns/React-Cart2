import styled from "styled-components";
import { tempCartType } from "../../store/cartList";

const KeepItem = (data: tempCartType) => {
  return (
    <Box>
      <div>
        <p>{data.title}</p>
        <p>{data.content}</p>
      </div>
      <div>
        <p>quantity : {data.quantity}</p>
      </div>
    </Box>
  );
};
export default KeepItem;

const Box = styled.div`
  width: 650px;
  height: 60px;
  background-color: #dcdcdc;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
  }

  & p {
    font-size: 25px;
  }

  & p:first-child {
    margin-right: 10px;
  }
`;
