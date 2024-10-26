import Image from 'next/image';
import { deletePost } from '@/lib/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPostsBoard = async ({ posts }) => {
  if (!posts) {
    return 'Loading...';
  }

  const doAction = async (formData) => {
    try {
      await deletePost(formData);
      toast.success('Deleted a post');
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    } catch (error) {
      toast.error('failed in deleting');
    }
  };

  return (
    <div className='flex-1 flex flex-col gap-5'>
      <h1 className='font-semibold text-5xl'>Posts</h1>
      {posts?.map((post) => (
        <div
          key={post._id}
          className='flex gap-5 items-center justify-between bg-slate-800 p-2 rounded-full'
        >
          <div className='w-full flex items-center gap-5'>
            {post.img && (
              <Image
                src={post.img}
                alt=''
                className='w-12 h-12 rounded-full'
                width={50}
                height={50}
              />
            )}
            <h2>{post.title}</h2>
          </div>
          <form action={doAction}>
            <input type='hidden' value={post._id} name='id' />
            <button className='px-4 py-2 bg-red-700 rounded-full'>
              Delete
            </button>
          </form>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default AdminPostsBoard;
