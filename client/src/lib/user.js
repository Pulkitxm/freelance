import axios from "axios";
import { BACKEND_URL } from "./constant";

export async function getUserDetails() {
  const res = await axios.get(BACKEND_URL + "/api/user");
  return res.data;
}

export async function updateUserOnBoarded() {
  const res = await axios.post(BACKEND_URL + "/api/user/onboarded");
  return res.data;
}
