import styled from "styled-components";

const ListItem = () => {
  return (
    <Box>
      <div>
        <p>title</p>
        <p>asdasasd</p>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
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
