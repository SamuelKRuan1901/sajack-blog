"use client";
import { addUser } from "@/lib/action";

const AddUserForm = () => {

  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8 mx-auto">
      <h2 className="text-4xl font-semibold">Add New User</h2>
      <form className="flex flex-col gap-5" action={addUser}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <select name="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <button type="submit" className="p-4 bg-blue-700 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
