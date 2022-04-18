import React from "react";

function SortPopup({ items }) {

// useState для popup
  const [visiblePopup, setVisiblePopup] = React.useState(false);
// useState для активного класса в popup
  const [activeItem, setActiveItem] = React.useState(0);

  // useRef для получения актуальных значений
  const sortRef = React.useRef();
  // activeLabel мы из items вытаскиваем активное значение категории
  const activeLabel = items[activeItem].name; // вытаскиваем св-во name


  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  //  Ф-ция для отлова клика вне блока sort, "!"" делает инверсию
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
      // console.log("Clicked");
    }
  };

  // Ф-ция для выделения цветом, активной категории сортировки (при клике)
  const onSelectItem = (index) => {
    setActiveItem(index);
  // Мы говороим браузеру, когда какой то из item стал активным то после закрываем pop-up 
    setVisiblePopup(false);
  }

  // useEffect вызывается при первом рендере []
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    // console.log(sortRef.current);
  }, []);

  // JSX разметка;
  return (
    <div>
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
          className={visiblePopup ? 'rotated' : ''}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={toggleVisiblePopup}>{activeLabel}</span>
        </div>
        {visiblePopup && (
          <div className="sort__popup">
            <ul>
              {items &&
                items.map((obj, index) => (
                  <li
                    className={activeItem === index ? "active" : ""}
                    onClick={() => onSelectItem(index)}
                    key={`${obj.type}_${index}`}
                  >
                    {obj.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortPopup;

// по клику на span будет вызываться ф-ция setVisiblePopup, в которой будет передаваться
// аргумент visiblePopup (по умолчанию он false т.е скрыт)
// если visiblePopup false, то после && (амперсанд), ничего отображаться не будет
