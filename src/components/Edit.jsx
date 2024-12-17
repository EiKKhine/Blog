const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
}) => {
  return (
    <>
      <form className="w-50 mx-auto text-center p-3">
        <h1 className="text-primary py-3">Edit Post</h1>

        <input
          defaultValue={title}
          className="form-control mb-3"
          type="text"
          placeholder="title"
          onChange={saveTitleToState}
        />

        <textarea
          defaultValue={content}
          className="form-control mb-3"
          placeholder="content"
          onChange={saveContentToState}
        ></textarea>

        <button className="btn btn-primary me-2" onClick={updatePost}>
          <i
            className="fa fa-edit"
            style={{ color: "white", marginRight: "8px" }}
          ></i>
          Update Post
        </button>

        <button className="btn btn-danger">Cancel</button>
      </form>
    </>
  );
};

export default Edit;
