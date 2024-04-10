import { User } from "./user";

//Represents a match between to prospecting users.
export interface Matches {
  //Unique ID for each match.
  matchID: number,

  //Date when the pair of users matched.
  timeMatched: string,

  //First user in the match. User that first reaches out to the recieving user, the userCandidate.
  userGallant: User,

  //Second user in the match. User that recieves the match and accepts or rejects it from the userGallant.
  userCandidate: User,
  
}