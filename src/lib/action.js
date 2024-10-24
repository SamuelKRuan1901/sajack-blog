"use server";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";
import { Post, User } from "./models";
import bcryptjs from 'bcryptjs';

export const addPost = async (formData) => {

  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    mongoose.connect(process.env.MONGO);
    const newPost = new Post({
      userId,
      title,
      desc,
      slug,
      img,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (formData) => {

  const { username, email, password, isAdmin } = Object.fromEntries(formData);

  try {
    mongoose.connect(process.env.MONGO);
    const newUser = new User({
      username,
      email,
      password,
      isAdmin
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/profile");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const changeUserInfo = async (formData) => {

  const { username, id } = Object.fromEntries(formData);

  try {
    mongoose.connect(process.env.MONGO);
    await User.findByIdAndUpdate({'_id': id}, {'username': username});
    console.log('Username is Updated!');
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const changePassword = async (formData) => {

  const { currentPassword, newPassword, comfirmPassword, id } = Object.fromEntries(formData);

  try {
    mongoose.connect(process.env.MONGO);

    const user = await User.findOne({'_id': id});
    const passwordOk = bcryptjs.compareSync(currentPassword, user.password);
    if(!passwordOk) {
      console.log('current password does not match');
      return false;
    }
    if(newPassword !== comfirmPassword) {
      console.log('comrfirm password does not match');
      return false;
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(newPassword, salt);

    await User.findByIdAndUpdate({'_id': id}, {'password': hashedPassword});
    console.log('Password is Updated!');
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    mongoose.connect(process.env.MONGO);
    await Post.findByIdAndDelete({'_id': id});
    console.log('Post is deleted');
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData); 
  try {
    mongoose.connect(process.env.MONGO);
    await User.findByIdAndDelete({'_id': id});
    console.log('User is deleted');
    revalidatePath("/profile");
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
  }
}
