import { Elysia, Context, t } from "elysia";
import { Post } from "../../models/post";
import { createPost, listPosts } from "../biz/posts.biz";


export function configurePostsRoutes(app: Elysia) {
  return app
    .model({post: t.Object({
      postID: t.String(),
      userID: t.String(),
      content: t.String(),
      timeOfPost: t.String({
        format: 'date',
      }),
    })})
    .post("create", create, {body: 'post'})
    .get("/", list)
}

async function create(ctxt: Context): Promise<Post> {
  try {
    return await createPost(ctxt.body as Post);
  } catch (error) {
    console.error("Error occurred while creating post:", error);
    throw new Error("Failed to create post.");
  }
}
  
async function list(): Promise<Post[]> {
  try {
    return await listPosts();
  } catch (error) {
    console.error("Error occurred while listing posts:", error);
    throw new Error("Failed to list posts.");
  }
}