//import {User} from "./user"; 

/*
Model for posts
*/
export interface Posts {
    //postID to identify unique posts
    postID: number,
    //user represents the id of the user who posted the post
    //!FIXME: below must be inserted in service/component!
    userid: number,
    //content is the text of the post
    content: string,
    //timeOfPost says when the post was made
    timeOfPost: string,
    //image represents possible image as a string
    image?: string

}