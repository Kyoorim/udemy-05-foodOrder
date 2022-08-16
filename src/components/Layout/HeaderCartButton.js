import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/Carticon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  // reduce: 데이터 배열을 값 하나로 변환해주는 메서드, 장바구니에 담긴 개수 보여주는 함수
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // 아이템 추가할때마다 카트 버튼이 bumping하도록 함
  useEffect(() => {
    if (items.length === 0) {
      return; // 바구니에 아이템이 하나 이상 있는 경우에 작동하도록 하려고
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false); //
    }, 300);

    // 클린업 함수
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
