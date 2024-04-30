import { Elysia, Context, t } from "elysia";
import { Post } from "../../models/post";
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
async function create(ctxt: Context): Promise<Post> {
    return createPost(ctxt.body as Post);
  }
  
  async function list(): Promise<Post[]> {
    return listPosts();
  }