const FormNewBoard = () => {
  return (
    <div className="bg-base-100 p-8 rounded-3xl space-y-8">
      <p className="font-extrabold text-lg">Create a new feedback board</p>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Board Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
      </label>
      <button className="btn btn-primary w-full">Create Board</button>
    </div>
  );
};
export default FormNewBoard;
