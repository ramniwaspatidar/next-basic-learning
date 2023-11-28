"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const NavtoFBLogin = () => {
    router.push("/login/fb");
  };
  return (
    <main>
      <div>Heading Login Page</div>
      <br></br>
      <br></br>
      <Link href="/">go to home</Link>

      <br></br>
      <br></br>
      <br></br>

      <button
        onClick={() => {
          NavtoFBLogin();
        }}
      >
        FB Login
      </button>
    </main>
  );
};

export default Login;
