"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name });
      setName("");
      toast.success("Board created successfully");
      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);

      setName("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-extrabold text-lg">Create a new feedback board</p>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Board Name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Your amazing project 🏆 "
          className="input input-bordered w-full "
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <button className="btn btn-primary w-full" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};
export default FormNewBoard;
