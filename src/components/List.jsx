import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import "font-awesome/css/font-awesome.min.css";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState("");

  // useEffect(() => console.log(posts), [posts]);
  useEffect(() => console.log(editId), [editId]);

  const getTitle = useRef();
  const getContent = useRef();

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }

  function saveContentToState(e) {
    setContent(e.target.value);
  }

  function savePost(e) {
    e.preventDefault();

    const id = Date.now();
    setPosts([...posts, { id, title, content }]);

    getTitle.current.value = "";
    getContent.current.value = "";

    toggleCreate();
  }

  function updatePost(e) {
    e.preventDefault();

    const updatedPosts = posts.map((post) => {
      if (post.id === editId)
        return {
          ...post,
          title: title || post.title,
          content: content || post.content,
        };
      return post;
    });

    setPosts(updatedPosts);

    toggleEdit();
  }

  function editPost(id) {
    setEditId(id);
    toggleEdit();
  }

  const deletePost = (id) => {
    const shouldRemove = confirm("Are you sure you want to delete?");

    if (shouldRemove) {
      const updatedPosts = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(updatedPosts);
    }
  };

  function toggleCreate() {
    setIsCreate(!isCreate);
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  if (isCreate) {
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => post.id === editId);
    return (
      <Edit
        title={post.title}
        content={post.content}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        updatePost={updatePost}
      />
    );
  } else {
    if (posts.length > 0) {
      return (
        <section className="text-center my-3">
          <h1>All Posts</h1>
          <div className="container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      editPost={editPost}
                      deletePost={deletePost}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary mt-2" onClick={toggleCreate}>
            <i
              className="fa fa-plus"
              style={{ color: "white", marginRight: "8px" }}
            ></i>
            Create New Post
          </button>
        </section>
      );
    } else {
      return (
        <section className="text-center my-3">
          <h1>All Posts</h1>
          <p>No Posts To Display</p>

          <button className="btn btn-primary mt-2" onClick={toggleCreate}>
            <i
              className="fa fa-plus"
              style={{ color: "white", marginRight: "8px" }}
            ></i>
            Create New Post
          </button>
        </section>
      );
    }
  }
};

export default List;
