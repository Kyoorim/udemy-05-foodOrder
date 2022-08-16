import React from "react";

import classes from "./Input.module.css";
// React.forwardRef로 감싸주면 그 안에있는 컴포넌트에서 ref를 사용할 수 있게 됨
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />{" "}
      {/* input에 들어가는 모든 프로퍼티와 키값을 props로 받을 수 있다 */}
    </div>
  );
});

export default Input;
