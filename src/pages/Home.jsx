import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory } from "../redux/actions/filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";

const availableCategories = [
  "Мясные",
  "Вегетерианская",
  "Гриль",
  "Острые",
  "Сладкие",
  "Закрытые",
];

const availableSorting = [
  // вместо массива строк, передаем массив объектов
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  // Используем useCallback чтобы ссылка не менялась,
  // благодаря этому ф-ция создается только один раз,
  // взаимодействует с MEMO в Categories и SortPopup
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          showMeCategory={onSelectCategory}
          items={availableCategories}
        />
        <SortPopup items={availableSorting} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
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
// "dev": "json-server -p 3001 -w public/db.json"
