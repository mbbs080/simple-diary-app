import style from "../../styles/Dashboard.module.css";
import { useState } from "react";
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

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

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
            <div className={style.createPost}>
              <div className={style.datePicker}>
                <input type="date" />
              </div>
              <div className={style.postCover}>
                <input
                  type="text"
                  placeholder="enter title"
                  className={style.postTitle}
                />{" "}
                <QuillNoSSRWrapper
                  theme="snow"
                  placeholder="content here..."
                  className={style.editor}
                />
              </div>
            </div>
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
