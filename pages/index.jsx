import style from "../styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main>
        <div className={style.head}>
          <h2 className={style.diary}>diary</h2>
          {!session && (
            <Link href="/login" className={style.login}>
              sign in
            </Link>
          )}
        </div>
        <section>
          <div className={style.container}>
            {session && <Link href={"/dashboard"}>Dashboard page</Link>}
            <h1 className={style.text}>sign up to start creating your diary</h1>
            {!session && (
              <Link href="/register" className={style.button}>
                sign up
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

/* function User({ session }) {
  return <h2>{session.user.name}</h2>;
} */
