import { Users, PrismaClient } from "@prisma/client";
import { User } from "../../models/user";

const db = new PrismaClient();

export async function createUser(user: User): Promise<User[]> {
  return db.users.create({data: user}.then(convertUser));
}

export async function listUsers(nameQuery: string): Promise<User[]> {
  return db.users.findMany({
    where: {
      firstName: {
        contains: nameQuery
      },
    },
    orderBy: {
      lastName: 'asc',
    },
  }).then(users => {
    return users.map(convertUser);
  })
}

function convertUser(fromDb: Users): User{
  const user: User = {
    userID: fromDb.userID,
    firstName: fromDb.firstName,
    lastName: fromDb.lastName,
    userEmail: fromDb.userEmail,
    dob: fromDb.dob,
    gender: fromDb.gender,

  }

  //!FIXME: convert Null to Undefined for optional fields.
  if (fromDb.description) {
    user.description = fromDb.description;
  }
  if (fromDb.profilePicture) {
    user.profilePicture = fromDb.profilePicture;
  }
  if (fromDb.interest1) {
    user.interest1 = fromDb.interest1;
  }
  if (fromDb.interest2) {
    user.interest2 = fromDb.interest2;
  }
  if (fromDb.interest3) {
    user.interest3 = fromDb.interest3;
  }

  return user;
}