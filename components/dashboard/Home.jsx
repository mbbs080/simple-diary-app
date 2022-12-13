import style from "../../styles/Dashboard.module.css";
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
const postTime = (date) => {
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
const year = new Date().getUTCFullYear();

export default function Home() {
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

  const postSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      body: body,
      author: author,
      dateInput: dateInput,
      time: time,
      date: date,
    };

    if (title && body && author && dateInput) {
      try {
        let response = await fetch("/api/post/addPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        response = await response.json();
        if (response.status === 200) {
          setSuccess(true);
        } else {
          return setError(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return setFields(true);
    }
  };

  useEffect(() => {
    const message = setTimeout(() => {
      setError(false);
      setSuccess(false);
      setFields(false);
    }, 3000);
    return () => clearTimeout(message);
  });

  return (
    <main>
      <section className={style.homeCover}>
        <div className={style.headCover}>
          <h2 className={style.head}> diary dashboard</h2>
          <Link href="/" className={style.link}>
            logout
          </Link>
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
                    setTitle(e, target.value);
                  }}
                />{" "}
                <QuillNoSSRWrapper
                  theme="snow"
                  placeholder="content here..."
                  className={style.editor}
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                />
              </div>
              <button className={style.submit} type="submit">
                submit
              </button>
            </form>
          </div>
          <div className={style.gridThree}>
            <p className={style.itemHead}>your dairy</p>
            <div className={style.listCover}>
              <div className={style.single}>
                <div className={style.dateCover}>
                  <p>7:35pm</p>
                  <p>December 21, 2022</p>
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
                      tile of the diary goes here
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
                    <div className={style.postDetails}>
                      the text of the main content of my post containing all of
                      the relevant content you can find containing the post.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
