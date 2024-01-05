import { Hono } from "hono";
import {
  createNewUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUserPassword,
} from "../modules/user";

const userRoute = new Hono().basePath("/auth");

userRoute.get("/users", async (c) => {
  const user = await getUsers();
  return c.json({ user });
});

userRoute.get("/user/:id", async (c) => {
  const id = c.req.param("id");
  const user = await getUserById(id);
  return c.json({ user });
});

userRoute.post("/user", async (c) => {
  const body = await c.req.json();
  const username = body.username;
  const email = body.email;
  const password = body.password;
  const newUser = await createNewUser(username, email, password);
  return c.json({ newUser });
});

userRoute.put("/user/:id", async (c) => {
  const body = await c.req.json();
  const password = body.password;
  const id = c.req.param("id") as string;
  const updatedUser = await updateUserPassword(id, password);
  return c.json({ updatedUser });
});

userRoute.delete("/user/:id", async (c) => {
  const id = c.req.param("id");
  const deletedUser = await deleteUser(id);
  return c.json({ deletedUser });
});

export default userRoute;
