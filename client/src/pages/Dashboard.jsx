import { useEffect } from "react";
import { getUserDetails } from "../lib/user";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { userState } from "../state/user";
import { Link } from "react-router-dom";
import AdviseAuth from "../components/AdviseAuth";

export default function OnBoarding() {
  const [user, setUser] = useRecoilState(userState);
  const [{ token }] = useCookies(["token"]);
  useEffect(() => {
    !user.id && token && getUserDetails().then((data) => setUser(data));
  }, [setUser, token, user.id]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      {(!token || !user.id) && <AdviseAuth />}
    </div>
  );
}
