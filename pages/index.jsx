import style from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className={style.head}>
          <h2 className={style.diary}>diary</h2>
          <Link href="/login" className={style.login}>
            sign in
          </Link>
        </div>
        <section>
          <div className={style.container}>
            <h1 className={style.text}>sign up to start creating your diary</h1>
            <Link href="/register" className={style.button}>
              sign up
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
