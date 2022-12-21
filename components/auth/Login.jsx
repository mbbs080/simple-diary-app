import { useState } from "react";
import Link from "next/link";
import style from "../../styles/Auth.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = useSession();
  const router = useRouter();

  const formSubmit = async (e) => {
    e.preventDefault();
    const status = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
      callbackUrl: "/dashboard",
    });

    if (status.error === null) {
      router.push(status.url);
    }
  };

  // Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <main className={style.container}>
      <section className={style.section}>
        <Link href="/">
          <p className={style.home}>return home</p>
        </Link>
        <form onSubmit={formSubmit} className={style.form}>
          <div className={style.inputCover}>
            <input
              className={style.input}
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className={style.input}
              type="password"
              name="password"
              placeholder="passsword"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className={style.btn}>
            login
          </button>
          <button
            className={style.google}
            type="button"
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          >
            sign in with google
          </button>
        </form>
      </section>
    </main>
  );
}
