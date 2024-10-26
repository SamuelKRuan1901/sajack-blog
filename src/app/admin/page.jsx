'use client';
import AdminPostsBoard from '@/components/AdminPostsBoard';
import AdminUsersBoard from '@/components/AdminUsersBoard';
import { Suspense, useEffect, useState } from 'react';
import AddUserForm from '@/components/AddUserForm';
import { useSession } from 'next-auth/react';
import AddPostForm from '@/components/AddPostForm';

const AdminBoard = () => {
  const session = useSession();
  const [data, setData] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminFetched, setAdminFetched] = useState(false);

  useEffect(() => {
    fetch('/api/admin')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setAdminFetched(true);
        setIsAdmin(data.isAdmin);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (session.status !== 'authenticated') {
    return 'Not Allow';
  }

  if (session.status === 'loading' || !adminFetched) {
    return 'Loading...';
  }

  if (!isAdmin) {
    return 'Not Allow';
  }

  return (
    <div className='flex flex-col gap-20'>
      {/* posts and add post board */}
      <div className='flex gap-10 max-md:flex-col-reverse'>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminPostsBoard posts={data?.data?.posts} />
          <AddPostForm id={data._id} />
        </Suspense>
      </div>
      {/* users and add user board */}
      <div className='flex gap-10 max-md:flex-col-reverse'>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminUsersBoard users={data?.data?.users} />
          <AddUserForm />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminBoard;
