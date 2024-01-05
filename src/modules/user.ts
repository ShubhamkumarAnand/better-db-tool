import { db } from "../db/database";

export const getUsers = async () => {
  const users = await db.selectFrom("User").selectAll().execute();

  return users;
};

export const getUserById = async (id: string) => {
  const user = await db
    .selectFrom("User")
    .where("id", "=", id)
    .selectAll()
    .execute();

  return user;
};

export const createNewUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const newUser = await db
      .insertInto("User")
      .values({
        username: username,
        email: email,
        password: await Bun.password.hash(password),
        updatedAt: new Date().toISOString(),
      })
      .execute();

    console.log(newUser);
    return "User Created Successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Error Creating Notes");
  }
};

export const updateUserPassword = async (id: string, password: string) => {
  try {
    const updatedUser = await db
      .updateTable("User")
      .set({
        password: await Bun.password.hash(password),
        updatedAt: new Date().toISOString(),
      })
      .where("id", "=", id)
      .execute();

    console.log(updatedUser);
    return "Password updated successfully!";
  } catch (error) {
    console.log(error);
    throw new Error("Error Updating the User");
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await db.deleteFrom("User").where("id", "=", id).execute();

    console.log(user);
    return "User Deleted Successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Error Deleting User");
  }
};
