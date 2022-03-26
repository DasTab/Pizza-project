import React from "react";
import classNames from "classnames";

const Button = ({ kissMyAss, className, outline, children }) => {
  return <button onMouseOver={kissMyAss}
  className={classNames('button', className, {
    'button--outline': outline

  })}> 
    {children}

  </button>;
};

export default Button;

{/* onMouseOver событие из JS, которое принимает пропсы из App.js => ClickPoKnopke */}
{/* props children это пропсы переданные эл-ты из кнопки, children значит - все  */}

// Делаем деструктуризацию и вместо пропсов, передаем переменные (код становится чище)

// const Button = (props) => {
//   return <button onMouseOver={props.kissMyAss}
//   className={classNames('button', props.className, {
//     'button--outline': props.outline
//   })}> 
//     {props.children}
//   </button>;
// };