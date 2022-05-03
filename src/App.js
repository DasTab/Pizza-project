import React from "react";

import { Route, Routes } from "react-router-dom";
import { Header, Button } from "./components";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* <Button outline>See more</Button>
      <Button kissMyAss={clickPoKnopke}>123</Button> */
}
  // Чтобы при каждом рендере <Home /> не было постоянного
  // запроса на получ.пицц, мы остав.useDispatch в App.js
