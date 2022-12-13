import { useState, useEffect } from "react";
import Link from "next/link";
import style from "../../styles/Auth.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    if (name && email && password) {
      try {
        let response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        response = await response.json();

        if (response.status === 200) {
          setSuccess(true);
          setName("");
          setEmail("");
          setPassword("");
        } else {
          return setError(true);
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(interval);
  });

  useEffect(() => {
    const interval = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <main className={style.container}>
      <section className={style.section}>
        <Link href="/">
          <p className={style.home}>return home</p>
        </Link>
        <form onSubmit={formSubmit} className={style.form}>
          {success && (
            <p className={style.success}>You successfully created an account</p>
          )}
          {error && <p className={style.error}>Error, try again</p>}
          <div className={style.inputCover}>
            <input
              type="text"
              className={style.input}
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className={style.btn}>
            sign up
          </button>
        </form>
      </section>
    </main>
  );
}
