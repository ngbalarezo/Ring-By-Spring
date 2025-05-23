import { Post } from "./post";

//Model for post/profile comments
export interface Comment {
  //comment id
  commentID: number;
  //user's first name and last name
  content: string;
  //user's date of birth
  createdAt: Date;
  //post belonging to comment
  post: Post;
  //postID to identify Post
  postID: number;
}