/* import style from "../../styles/Dashboard.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { BiUpArrowAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import { useSession, signOut } from "next-auth/react";

/* const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
}; */

/// time of post in AM or PM
/* const postTime = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

/// date of post
const month = new Date().toLocaleString("default", { month: "short" });
const day = new Date().getUTCDate();
const year = new Date().getUTCFullYear(); */

/* // sign out
function handleSignOut() {
  signOut();
} */

/* export default function Home({ postData }) {
  const [showDetails, setShowDetails] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(month + " " + day + " " + year);
  const [time, setTime] = useState(postTime(new Date()));
  const [author, setAuthor] = useState("John");
  const [error, setError] = useState(false);
  const [fields, setFields] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data: session } = useSession();

  const onChange = (value) => setBody(value);
  console.log(postData); */

/* const postSubmit = async (e) => {
    e.preventDefault();
    const user = session.user.email;

    const data = {
      user: user,
      title: title,
      body: body,
      dateInput: dateInput,
      time: time,
      date: date,
    };

    const res = await fetch("http://localhost:3000/api/post/addPost", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log(res);
  };

  useEffect(() => {
    const message = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(message);
  });

  useEffect(() => {
    const message = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(message);
  });

  useEffect(() => {
    const message = setTimeout(() => {
      setFields(false);
    }, 3000);
    return () => clearTimeout(message);
  }); */

/* return (
    <main>
      <section className={style.homeCover}>
        <div className={style.headCover}>
          <h2 className={style.head}> diary dashboard</h2>
          {session ? (
            <h4>{session.user.email}</h4>
          ) : (
            <Link href={"/login"}>login</Link>
          )}
          {session && (
            <button
              className={style.link}
              onClick={() => {
                signOut({ callbackUrl: "http://localhost:3000/" });
              }}
            >
              logout
            </button>
          )}
        </div>
        <div className={style.homeGrid}>
          <div className={style.gridOne}>
            <p className={style.itemHead}>most recent</p>
          </div>
          <div className={style.gridTwo}>
            <p className={style.itemHead}>create one</p>
            <form onSubmit={postSubmit} className={style.createPost}>
              {success && (
                <p className={style.success}>Post created successfully!</p>
              )}
              {error && <p className={style.error}>Error, try again!</p>}
              <div className={style.inputCover}></div>
              {fields && <p className={style.error}>All fields are required</p>}
              <div className={style.inputCover}></div>
              <div className={style.datePicker}>
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => {
                    setDateInput(e.target.value);
                  }}
                />
              </div>
              <div className={style.postCover}>
                <input
                  type="text"
                  placeholder="enter title"
                  className={style.postTitle}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />{" "}
                <QuillNoSSRWrapper
                  theme="snow"
                  placeholder="content here..."
                  className={style.editor}
                  value={body}
                  onChange={onChange}
                />
              </div>
              {session && (
                <button className={style.submit} type="submit">
                  submit
                </button>
              )}
            </form>
          </div>
          <div className={style.gridThree}>
            <p className={style.itemHead}>your dairy</p>
            <div className={style.listCover}>
              {postData.map((post) => {
                return (
                  <div key={post._id} className={style.single}>
                    <div className={style.dateCover}>
                      <p>{post.time}</p>
                      <p>{post.date}</p>
                    </div>
                    <div className={style.titleCover}>
                      <div className={style.length}>
                        17{" "}
                        <span>
                          <MdDeleteForever />
                        </span>
                      </div>
                      <div className={style.titleIcon}>
                        <h4
                          className={style.title}
                          onClick={() => {
                            setShowDetails(!showDetails);
                          }}
                        >
                          {post.title}
                        </h4>
                        {showDetails ? (
                          <h2>
                            <BiUpArrowAlt
                              onClick={() => {
                                setShowDetails(false);
                              }}
                            />
                          </h2>
                        ) : (
                          <h2>
                            <BiDownArrowAlt
                              onClick={() => {
                                setShowDetails(true);
                              }}
                            />
                          </h2>
                        )}
                      </div>
                      {showDetails && (
                        <div className={style.postDetails}>{post.body}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} */

/* export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/post/getPosts");

  const postData = await res.json();

  return {
    props: { postData },
  };
}  */
