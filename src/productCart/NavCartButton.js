import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { BsCart3 } from "react-icons/bs";
import classes from "./NavCartButton.module.css";

const NavCartButton = ({ cartItems }) => {
  const cartCtx = useCart();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items, addItem } = cartCtx;

  const btnBump = `${classes.cart__button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

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

  const handleAddToCart = () => {
    if (Array.isArray(cartItems)) {
      cartItems.forEach((item) => {
        addItem(item);
      });
    }
  };

  const { isEmpty, totalItems } = useCart();

  return (
    <div onClick={handleAddToCart} className={btnBump}>
      <i className="">
        <BsCart3 />
        {!isEmpty && <span style={{ position: "relative" }}>{totalItems}</span>}
        <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>&nbsp;</span>
      </i>
    </div>
  );
};

export default NavCartButton;
