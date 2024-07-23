import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./register";
import { useCookies } from "react-cookie";

export default function Pages() {
  const [{ token }] = useCookies(["token"]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {token ? null : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
}
