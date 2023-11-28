"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const goToLogin = () => {
    router.push("/login");
  };

  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <main className={styles.main}>
      <h1>test</h1>
      <User></User>
      <main>
        <div>Login Page</div>
        <Link href="/login">to go login</Link>

        <button onClick={goToLogin}>Login Button</button>
        <button onClick={goToAbout}>About Button</button>
      </main>
    </main>
  );
}

const User = () => {
  return (
    <main>
      <div>ram</div>
    </main>
  );
};
