import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { BsCart3 } from "react-icons/bs";
import classes from "./NavCartButton.module.css";

const NavCartButton = (props) => {
  //Using useContext & useState hooks
  const cartCtx = useCart();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  //ENDS

  //Extracting the items variable from the context values mainly to be used as a useEffect dependency
  const { items } = cartCtx;
  //ENDS

  //Adding conditional stying to the Cart button using useState and ternary operator
  const btnBump = `${classes.cart__button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  //ENDS

  // Using the Effect hook to control the animation of the Cart button on adding items
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);
  const { isEmpty, totalItems } = useCart();
  // ENDS

  //Rendering the Cart button on the DOM
  return (
    <div onClick={props.onClick} className={btnBump}>
      <i className="">
        <BsCart3 />
        {!isEmpty && <span style={{ position: "relative" }}>{totalItems}</span>}
        <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>&nbsp;</span>
      </i>
    </div>
  );
  //ENDS
};

export default NavCartButton;
