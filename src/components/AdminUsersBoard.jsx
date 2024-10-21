import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsersBoard = async ({users}) => {

  return (
    <div className="flex-1 flex flex-col gap-5">
          <h1 className="font-semibold text-5xl">Users</h1>
          {users.map((user) => (
            <div key={user._id} className="flex gap-5 items-center justify-between bg-slate-800 p-2 rounded-full">
              <div className="w-full flex items-center gap-5">
                <Image
                  src={user.img ? user.img : "/noavatar.png"}
                  alt=""
                  className="w-12 h-12 rounded-full"
                  width={50}
                  height={50}
                />
                <h2>{user.username}</h2>
              </div>
              <form action={deleteUser}>
                <input type="hidden" value={user._id} name="id" />
                <button className="px-4 py-2 bg-red-700 rounded-full">
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
  )
}

export default AdminUsersBoard