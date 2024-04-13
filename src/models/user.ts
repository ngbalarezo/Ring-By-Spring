import { EmailValidator } from "@angular/forms";
import { Posts } from "./posts";

//Model for users
export interface User {
  //userID is a unique identifier for each user
  userID?: number;
  //user's first name and last name
  firstName: string;
  lastName: string;
  //user email
  userEmail: string;
  //user password
  //!FIXME: ASK ABOUT PASSWORD
  //password: string;
  //!FIXME: ASK ABOUT ROLES, PRISMA VS. TYPESCRIPT
  //user's date of birth
  dob: string;
  //user's gender
  gender: string;
  //user can leave a bio/description of themselves
  description?: string;
  //user's profile picture, string for now
  profilePicture?: string;
  //user has 3 interests
  interest1?: string;
  interest2?: string;
  interest3?: string;
  //!FIXME: WORK THIS INTO USER SERVICE
  //posts: Posts[];
  
}