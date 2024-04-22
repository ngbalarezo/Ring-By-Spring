import { Elysia, Context, t } from "elysia";
import { Posts } from "../../models/posts";
import { createPost, listPosts } from "../biz/posts.biz";


export function configurePostsRoutes(app: Elysia) {
    return app
  
    .model({post: t.Object({
      postID: t.String(),
      userid: t.String(),
      content: t.String(),
      timeOfPost: t.String({
        format: 'date',
      }),
    })})
  
    .post("create", create, {body: 'post'})
    .get("/", list)
  
  }
async function create(ctxt: Context): Promise<Posts> {
    return createPost(ctxt.body as Posts);
  }
  
  async function list(): Promise<Posts[]> {
    return listPosts("");
  }