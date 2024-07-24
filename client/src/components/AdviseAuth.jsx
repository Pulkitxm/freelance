import { Link } from "react-router-dom";

export default function AdviseAuth() {
  return (
    <div className="flex space-x-4 mt-4">
      <Link to={"/login"}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </Link>
      <Link to={"/register"}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Register
        </button>
      </Link>
    </div>
  );
}
