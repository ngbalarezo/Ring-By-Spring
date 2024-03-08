import {userID} from "./user";
/*
Model for posts
*/
export interface Posts {
    //user represents the id of the user who posted the post
    userid: userID,
    //content is the text of the post
    content: string,
    //timeOfPost says when the post was made
    timeOfPost: string,
    //image represents possible image as a string
    image?: string

}