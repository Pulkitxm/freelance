import axios from "axios";
import { BACKEND_URL } from "./constant";

export async function loginUser({ username, email, password }) {
  const response = await axios.post(
    `${BACKEND_URL}/api/auth/login`,
    {
      username,
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function registerUser({ username, email, password }) {
  const response = await axios.post(
    `${BACKEND_URL}/api/auth/register`,
    {
      username,
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
}
