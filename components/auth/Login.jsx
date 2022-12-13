import { useState } from "react";
import Link from "next/link";
import style from "../../styles/Auth.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    if (email && password) {
      try {
        let response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        response = await response.json();

        if (response.status === 200) {
          setEmail("");
          setPassword("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className={style.input}
              type="text"
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
        </form>
      </section>
    </main>
  );
}
