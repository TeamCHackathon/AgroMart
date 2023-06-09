import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ThankYouPage(props) {
  return (
    <div className="text-center">
      <h3 className="mt-2 mb-3">Thank You for Your Purchase!</h3>
      <p className="bg-success mx-auto w-25">
        <AiOutlineCheckCircle />
      </p>
      <p>Your payment has been successfully submitted.</p>
      <p>We will send you an email confirmation shortly.</p>
    </div>
  );
}

export default ThankYouPage;
