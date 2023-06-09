import React from "react";
import Itemcard from "./Itemcard";
import data from "./Data";

const Assemble = () => {
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productdata.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Assemble;
