import AdminPostsBoard from "@/components/AdminPostsBoard";
import AdminUsersBoard from "@/components/AdminUsersBoard";
import { Suspense, useEffect, useState } from "react";
import AddUserForm from "./AddUserForm";

const AdminBoard = ({admin}) => {

  const [data, setData] = useState();
  const [adminFetched, setAdminFetched] = useState(false); 

  useEffect(() => {
    fetch("/api/admin")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setData(data);
        setAdminFetched(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  },[]);

  if (!adminFetched) {
    return "Loading...";
  }

  if(!admin) {
    return 'Loading...'
  }

  return (
    <div className="flex flex-col gap-20">
      {/* posts and add post board */}
      <div className="flex gap-10 max-md:flex-col-reverse">
        <Suspense fallback={<div>Loading...</div>}>
          <AdminPostsBoard posts={data.data.posts}/>
        </Suspense>
        {/*  */}
      </div>
      {/* users and add user board */}
      <div className="flex gap-10 max-md:flex-col-reverse">
        <Suspense fallback={<div>Loading...</div>}>
          <AdminUsersBoard users={data.data.users}/>
        </Suspense>
        <AddUserForm />
      </div>
    </div>
  );
};

export default AdminBoard;
