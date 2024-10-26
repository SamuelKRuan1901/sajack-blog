'use client';
import { addPost } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPostForm = ({ id }) => {
  const userId = id;
  const router = useRouter();

  const doAction = async (formData) => {
    try {
      await addPost(formData);
      toast.success('Added a new post');
      setTimeout(() => {
        router.push('/blog');
      }, 1500);
    } catch (error) {
      toast.error("Can't add this post");
    }
  };

  return (
    <div className='md:w-1/2 w-full flex flex-col gap-8 mx-auto'>
      <h2 className='text-4xl font-semibold'>Add New Post</h2>
      <form className='flex flex-col gap-5' action={doAction}>
        <input type='hidden' name='userId' value={userId} />
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='slug' name='slug' />
        <input type='text' placeholder='image link' name='img' />
        <textarea type='text' rows='10' placeholder='description' name='desc' />
        <button type='submit' className='p-4 bg-blue-700 rounded-md'>
          Add
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddPostForm;
