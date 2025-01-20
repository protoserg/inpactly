"use client";
import { useState } from "react";
import axios from "axios";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name });

      console.log("Board created:", data);
    } catch (error) {
      console.error("Error creating board:", error);
      // Add error handling UI here
      setName("");
    } finally {
      // Add cleanup code here
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
