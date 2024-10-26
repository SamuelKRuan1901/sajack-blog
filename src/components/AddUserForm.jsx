"use client";
import { addUser } from "@/lib/action";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddUserForm = () => {

  const doAction = async (formData) => {
    try {
      await addUser(formData);
      toast.success("Added a new user");
      setTimeout(() => {window.location.reload(false)},1500);
    } catch (error) {
      toast.error("Can't add user");
    }
  }

  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8 mx-auto">
      <h2 className="text-4xl font-semibold">Add New User</h2>
      <form className="flex flex-col gap-5" action={doAction}>
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
      <ToastContainer/>
    </div>
  );
};

export default AddUserForm;
