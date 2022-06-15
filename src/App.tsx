import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import List from "./pages/List";
import Cart from "./pages/Cart";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="./list" />} />
        <Route path="/list" element={<List />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
