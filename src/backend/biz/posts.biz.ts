import { Post, PrismaClient } from "@prisma/client";
import { Posts } from "../../models/posts";

const db = new PrismaClient();

export async function createPost(post: Posts): Promise<Posts> {
    return db.posts.create({data: post}).then(convertPosts);
  }

export async function listUsers(nameQuery: string): Promise<Posts[]> {
  return db.post.findMany({
    where: {
      firstName: {
        contains: nameQuery
      },
    },
    orderBy: {
      lastName: 'asc',
    },
  }).then(post => {
    return post.map(convertPosts);
  })
}
  
function convertPosts(fromDb: Post): Posts{
  const post: Posts = {
    postID: fromDb.postID,
    userid: fromDb.userid,
    content: fromDb.content,
    timeOfPost: fromDb.timeOfPost
  }
  
  return post;
}