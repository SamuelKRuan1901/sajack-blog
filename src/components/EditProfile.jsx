import { changePassword, changeUserInfo } from "@/lib/action";

const EditProfile = ({ userInfo }) => {

  return (
    <div className="flex flex-col gap-4">
      <form action={changeUserInfo} className="flex flex-col gap-4">
        <input type="hidden" value={userInfo._id} name="id"/>
        <input type="text" placeholder={userInfo.username} name="username"/>
        <input type="text" placeholder={userInfo.email} disabled name="email"/>
        <button className="bg-blue-700 p-2 rounded-md">Change Username</button>
      </form>
      <form action={changePassword} className="flex flex-col gap-4">
        <input type="hidden" value={userInfo._id} name="id"/>
        <input type="password" placeholder="current password" name="currentPassword"/>
        <input type="password" placeholder="new password" name="newPassword"/>
        <input type="password" placeholder="comfirm new password" name='comfirmPassword'/>
        <button className="bg-blue-700 p-2 rounded-md">Change Password</button>
      </form>
    </div>
  );
};

export default EditProfile;
