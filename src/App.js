import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { Header, Button } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  // Чтобы при каждом рендере <Home /> не было постоянного
  // запроса на получ.пицц, мы остав.useDispatch в App.js
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

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

      {/* <Button outline>See more</Button>
      <Button kissMyAss={clickPoKnopke}>123</Button> */}
