import React from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Box>{children}</Box>;
};

export default Layout;

const Box = styled.div`
  width: 700px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

  margin: 30px auto;
`;
