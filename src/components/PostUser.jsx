import { getUser } from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className="flex gap-5">
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="userAvatar"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold text-slate-400">Author</span>
        <span className="font-semibold">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
