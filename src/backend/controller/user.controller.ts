import { Elysia, Context, t } from "elysia";
import { User } from "../../models/user";
import { createUser, listUsers } from "../biz/user.biz";

export function configureUsersRoutes(app: Elysia) {
  return app

  .model({user: t.Object({
    firstName: t.String(),
    lastName: t.String(),
    userEmail: t.String({
      format: 'email',
    }),
    dob: t.String({
      format: 'date',
      default: '0000-00-00'
    }),
    gender: t.String(),
    description: t.Optional(t.String()),
    profilePicture: t.Optional(t.String()),
    interest1: t.Optional(t.String()),
    interest2: t.Optional(t.String()),
    interest3: t.Optional(t.String()),

  })})

  .post("create", create, {body: 'user'})
  .get("/", list)

}

async function create(ctxt: Context): Promise<User> {
  return createUser(ctxt.body as User);
}

async function list(): Promise<User[]> {
  return listUsers("");
}