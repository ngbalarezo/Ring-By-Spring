//potential imports go here

/*
Model for users
*/
export interface User {

  //userID is a unique identifier for each user
  userID: number,
  //user's first name
  firstName: string,
  //user's last name
  lastName: string,
  //user's date of birth
  dob: Date,
  //user's gender
  gender: string,
  //user can leave a description of themselves
  description: string,
  //user's profile picture
  profilePicture: ImageData,
  //user interest 1
  interest1: string,
  //user interest 2
  interest2: string,
  //user interest 3
  interest3: string

}