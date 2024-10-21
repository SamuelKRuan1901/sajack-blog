"use client";
import { addPost } from "@/lib/action";

const AddPostForm = ({ id }) => {
  const userId = id;

  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8 mx-auto">
      <h2 className="text-4xl font-semibold">Add New Post</h2>
      <form className="flex flex-col gap-5" action={addPost}>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="image link" name="img" />
        <textarea type="text" rows="10" placeholder="description" name="desc" />
        <button type="submit" className="p-4 bg-blue-700 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
