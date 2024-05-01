import { Posts, PrismaClient } from "@prisma/client";
import { Post } from "../../models/post";

const db = new PrismaClient();

export async function createPost(post: Posts): Promise<Posts> {
  try {
    const createdPost = await db.posts.create({ data: post });
    console.log("Created post:", createdPost)
    return convertPosts(createdPost);
  } catch (error) {
    console.error("Error occurred while creating post:", error);
    throw new Error("Failed to create post.");
  }
}

export async function listPosts(): Promise<Posts[]> {
  try {
    const posts = await db.posts.findMany({
      orderBy: {
        timeOfPost: 'asc',
      },
    });
    return posts.map(convertPosts);
  } catch (error) {
    console.error("Error occurred while listing posts:", error);
    throw new Error("Failed to list posts.");
  }
}

function convertPosts(fromDb: Post): Posts {
  const post: Posts = {
    postID: fromDb.postID,
    userID: fromDb.userID,
    content: fromDb.content,
    timeOfPost: fromDb.timeOfPost
  }

  return post;
}