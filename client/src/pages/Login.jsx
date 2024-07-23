import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../lib/auth";
import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    toast.promise(loginUser(formData), {
      loading: "Logging in...",
      success: () => {
        navigate("/dashboard");
        return "Login successful";
      },
      error: (error) => {
        return error.response.data.message;
      },
      finally: () => {
        e.target.reset();
      },
    });
  }

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-white text-center">
          Login
        </h1>
        <h1 className="text-sm font-semibold mb-6 text-gray-400 text-center">
          Join to Our Community with all time access and free{" "}
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="mt-1 p-2 w-full border rounded-md outline-none text-black transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-md outline-none text-black transition-colors duration-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-5 bg-white text-black p-2 py-1 font-bold text-xl rounded-md hover:bg-black hover:text-white hover:border-white border-2 active:bg-gray-700 transition-colors duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-400 text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-white hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
