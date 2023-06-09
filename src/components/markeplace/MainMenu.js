import React from "react";

import { useCart } from "react-use-cart";
import data from "../../productCart/Data";

const MenuCart = ({ item, handleClick }) => {
  const { title, price, img } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="product.jpg" />
      </div>

      <div className="details">
        <p className="">{title}</p>
        <p className="">N{price}</p>
        <button onClick={() => handleClick(item)} className="btn1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const MainMenu = () => {
  const { addItem } = useCart();

  const handleClick = (item) => {
    addItem(item);
  };

  return (
    <section>
      <div className="container row g-3 w-75 mx-auto">
        {data.productdata.map((item) => (
          <div className="col-sm-6 col-md-3" key={item.id}>
            <MenuCart item={item} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainMenu;
