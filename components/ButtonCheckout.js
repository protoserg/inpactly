"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
const ButtonCheckout = () => {
  const [isLoading, setisLoading] = useState(false);

  const handleSubscribe = async () => {
    if (isLoading) return;
    setisLoading(true);
    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: window.location.href + "/success",
        cancelUrl: window.location.href,
      });

      if (!response.data || !response.data.url) {
        toast.error("Invalid response from server. Missing checkout URL.");
        setisLoading(false);
        return;
      }

      const checkoutUrl = response.data.url;
      console.log("Redirecting to checkout:", checkoutUrl);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);

      // Extract the most meaningful error message
      let errorMessage = "Something went wrong";

      if (error.response?.data?.error) {
        // Use the error from our API
        errorMessage = error.response.data.error;
      } else if (error.message) {
        // Use axios error message
        errorMessage = error.message;
      }

      toast.error(errorMessage);
      setisLoading(false);
    }
  };
  return (
    <button className="btn btn-primary" onClick={() => handleSubscribe()}>
      {isLoading && <span className="loading loading-bars loading-xs"></span>}
      Subscribe
    </button>
  );
};

export default ButtonCheckout;
