import React from "react";

import { FaPhone, FaMailBulk } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Contact1 = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="text-center">
        <p>
          <FaPhone
            size={20}
            style={{ color: "#73DF08", marginRight: "2rem" }}
          />
          +23480300000
        </p>
        <p className="email">
          <FaMailBulk
            size={20}
            style={{ color: "#73DF08", marginRight: "2rem" }}
          />
          info@agromart.com
        </p>

        <div className="location">
          <GoLocation
            size={20}
            style={{ color: "#73DF08", marginRight: "2rem" }}
          />
          18, Onabule Street, Diamond Estate Magodo
        </div>
      </div>
    </section>
  );
};

export default Contact1;
