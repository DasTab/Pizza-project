import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Button } from "./components";
import { Home, Cart } from "./pages";

function App() {
  // const clickPoKnopke = () => {
  //   alert("Hello!");
  // };
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    });
  }, []);
  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      {/* <Button outline>See more</Button>
      <Button kissMyAss={clickPoKnopke}>123</Button> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzasDataBase={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
