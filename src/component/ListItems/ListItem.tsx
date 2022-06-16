import styled from "styled-components";
import { useRecoilState } from "recoil";
import { tempCartList, tempCartType } from "../../store/cartList";

const ListItem = (data: { id: number; title: string; content: string }) => {
  const [tempCart, setTempCart] = useRecoilState(tempCartList);

  const upHandler = (event: any) => {
    event.preventDefault();
    const targetIndex = tempCart.findIndex(
      (el: tempCartType) => el.id === data.id
    );
    if (targetIndex === -1) {
      setTempCart((prev: tempCartType[]) => [
        ...prev,
        { id: data.id, title: data.title, content: data.content, quantity: 1 },
      ]);
    } else {
      const updatedData: tempCartType[] = [...tempCart];
      updatedData[targetIndex] = {
        id: tempCart[targetIndex].id,
        title: tempCart[targetIndex].title,
        quantity: tempCart[targetIndex].quantity + 1,
        content: tempCart[targetIndex].content,
      };
      setTempCart([...updatedData]);
    }
  };

  const downHandler = (event: any) => {
    event.preventDefault();
    const targetIndex = tempCart.findIndex(
      (el: tempCartType) => el.id === data.id
    );

    if (targetIndex === -1) {
      return;
    } else {
      let updatedData: tempCartType[];
      if (tempCart[targetIndex].quantity === 1) {
        updatedData = tempCart.filter((el) => el.id !== data.id);
      } else {
        updatedData = [...tempCart];
        updatedData[targetIndex] = {
          id: tempCart[targetIndex].id,
          title: tempCart[targetIndex].title,
          quantity: tempCart[targetIndex].quantity - 1,
          content: tempCart[targetIndex].content,
        };
      }
      setTempCart(updatedData);
    }
  };

  return (
    <Box>
      <div>
        <p>{data.title}</p>
        <p>{data.content}</p>
      </div>
      <div>
        <button onClick={upHandler}>+</button>
        <button onClick={downHandler}>-</button>
      </div>
    </Box>
  );
};
export default ListItem;

const Box = styled.div`
  width: 650px;
  height: 60px;
  background-color: #dcdcdc;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & div:first-child {
    display: flex;
  }

  & p {
    font-size: 25px;
  }

  & p:first-child {
    margin-right: 10px;
  }

  & button {
    width: 30px;
    height: 30px;

    font-size: 25px;
  }

  & button:first-child {
    margin-right: 10px;
  }
`;
