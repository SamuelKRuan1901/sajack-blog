"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import EditProfile from "@/components/EditProfile";
import AddPostForm from "@/components/AddPostForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openAdminBoard, setOpenAdminBoard] = useState(false);
  const session = useSession();
  const status = session.status;

  useEffect(() => {
    fetch("/api/profile")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setIsAdmin(data.isAdmin);
        setProfileFetched(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [session, status]);

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const handleOpenEditForm = () => {
    setOpenEdit(!openEdit);
    setOpenAdd(false);
    setOpenAdminBoard(false)
  };
  const handleOpenAddBlogForm = () => {
    setOpenEdit(false);
    setOpenAdminBoard(false)
    setOpenAdd(!openAdd);
  };  
  const handleOpenAdminBoard = () => {
    setOpenAdminBoard(!openAdminBoard)
    setOpenEdit(false);
    setOpenAdd(false);
  };

  return (
    <section className="px-8 my-14 flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <Image
          src={user?.img ? user.img : "/noavatar.png"}
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-3xl font-semibold">{user.username}</h1>
      </div>
      <hr />
      <div className="flex md:gap-8 gap-3 flex-wrap">
        <button
          className="bg-blue-700 p-2 rounded-md"
          onClick={handleOpenEditForm}
        >
          Edit Profile
        </button>
        <button
          className="bg-blue-700 p-2 rounded-md"
          onClick={handleOpenAddBlogForm}
        >
          Add Blog
        </button>
        {isAdmin && (
          <Link href={'/admin'} className="bg-blue-700 p-2 rounded-md">
            Admin
          </Link>
        )}
      </div>
      <hr />
      <div></div>
      {openEdit && <EditProfile userInfo={user} />}
      {openAdd && <AddPostForm id={user._id} />}
    </section>
  );
};

export default ProfilePage;
