import { getUserById } from "../db/user";

export async function getUserDetails(user_id) {
  const user = await getUserById(user_id);
  return user;
}
