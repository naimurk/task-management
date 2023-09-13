

const AddNewTask = () => {
    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            <form className=" mt-12  w-1/2 py-16 px-5 shadow-xl rounded-2xl gap-y-3 border bg-white   flex flex-col justify-center items-center" action="">
                <h1 className="text-4xl  mb-5">Create a task</h1>
                {/* input field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Task title</span>

                    </label>
                    <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full " />

                </div>

                {/* input field */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <textarea name="description" rows={5} className="textarea textarea-bordered" placeholder="Description"></textarea>
                </div>

                <div className="w-full grid gap-x-2 grid-cols-3">

                    <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Status</span>

                    </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Status</option>
                            <option>To do</option>
                            <option>In progress</option>
                            <option>Done</option>
                        </select>
                    </div>

                    <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Assigned User</span>

                    </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Status</option>
                            <option>To do</option>
                            <option>In progress</option>
                            <option>Done</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">DeadLine</span>

                    </label>
                    <input type="date" name="title" min={new Date().toISOString().split("T")[0]} placeholder="Type here" className="input input-bordered w-full " />

                </div>

                </div>


                <div className="w-full mt-5 ">
                    <button className="btn w-full text-white bg-neutral"> Register</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewTask;