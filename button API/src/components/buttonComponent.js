import React from "react";
import "../styles.css";
export function Button(props) {
  // button
  // 3 variants (success(green) , warning(orange) , error(red))

  let btnType;
  let type = props.type;
  if (type === "success") {
    btnType = "buttonGreen";
  }
  if (type === "warning") {
    btnType = "buttonOrange";
  }
  if (type === "error") {
    btnType = "buttonRed";
  }

  return (
    <>
      <button className={btnType}>Click Me</button>
    </>
  );
}
