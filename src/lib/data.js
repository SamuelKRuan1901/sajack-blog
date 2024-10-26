import mongoose from 'mongoose';
import { Post, User } from './models';
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug) => {
  try {
    mongoose.connect(process.env.MONGO);
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getUsers = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    mongoose.connect(process.env.MONGO);
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};
