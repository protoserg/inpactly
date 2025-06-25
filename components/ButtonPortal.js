"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
const ButtonPortal = () => {
  const [isLoading, setisLoading] = useState(false);

  const handleBilling = async () => {
    if (isLoading) return;
    setisLoading(true);
    try {
      const response = await axios.post("/api/billing/create-portal", {
        returnUrl: window.location.href,
      });

      if (!response.data || !response.data.url) {
        toast.error("Invalid response from server. Missing checkout URL.");
        setisLoading(false);
        return;
      }

      const portalUrl = response.data.url;
      console.log("Redirecting to checkout:", portalUrl);
      window.location.href = portalUrl;
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
    <button className="btn btn-primary" onClick={() => handleBilling()}>
      {isLoading && <span className="loading loading-bars loading-xs"></span>}
      Billing
    </button>
  );
};

export default ButtonPortal;
