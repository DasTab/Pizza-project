import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

function Home({ pizzasDataBase }) {
  // console.log(pizzasDataBase);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          kickAss={(categoryName) => console.log(categoryName)}
          items={["Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            // вместо массива строк, передаем массив объектов
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzasDataBase.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;

// в пропсах вместо набора этого name={obj.name} imageUrl={obj.imageUrl}
// можем написать просто {...obj}, это означает что все свойства находящиеся внутри объекта
// будут проброшены
