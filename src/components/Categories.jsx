import React, { useState } from "react";

function Categories({ items, kickAss }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((categoryName, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${categoryName}_${index}`}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;

// строчка 9 означает что берем все данные из items <Categories />,
// и применяем к нему метод массива map
// далее переназначаем массив и даем ему имя categoryName,
// теперь в пропсах App.js <Categories /> мы можем рендерить необходимые <li>

// Если мы рендерим элементы с помощью map
// то добавляем key {index} чисто для уникальности па индексу, так как могут добавть такой же элемент,
// Н: "Мясные" [0], "Мясные"[1] и.т.д

// <li onClick={() => kickAss(categoryName)} key={`${categoryName}_${index}`}>{categoryName}</li>
// Хуки setState, сейчас при нажатии на категорию вызывается onClick
// После вместо kickAss(categoryName), вставим метод setActiveItem, он будет обновлять компонент (по индексу)

// Чтобы категория подсвечивалась черным  (т.е был класс active), добавляем ей
// следующую проверку className={activeItem === index ? 'active' : ''}

// items &&, защита если в items App.js ничего не будет (это простой JS!)
