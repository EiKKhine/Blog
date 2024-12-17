const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      {/* <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => editPost(id)} className="btn btn-primary me-2">
          Edit
        </button>
        <button onClick={() => deletePost(id)} className="btn btn-danger">
          Delete
        </button>
      </section> */}

      <tr key={id}>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button className="btn mr-2" onClick={() => editPost(id)}>
            <i
              className="fa fa-edit"
              style={{ color: "black", marginRight: "8px" }}
            ></i>
          </button>
          <button className="btn " onClick={() => deletePost(id)}>
            <i
              className="fa fa-trash"
              style={{ color: "red", marginRight: "8px" }}
            ></i>
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
