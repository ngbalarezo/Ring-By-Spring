//potential imports go here

/*
Model for users
*/
export interface User {

  //userID is a unique identifier for each user
  userID: string,
  //user's first name
  firstName: string,
  //user's last name
  lastName: string,
  //user's date of birth
  dob: string,
  //user's gender
  gender: string,
  //user can leave a description of themselves
  description: string,
  //user's profile picture
  profilePicture: string,
  //user interest 1
  interest1: string,
  //user interest 2
  interest2: string,
  //user interest 3
  interest3: string

}