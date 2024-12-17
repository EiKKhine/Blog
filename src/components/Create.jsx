const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <>
      <form className="w-50 mx-auto text-center p-3">
        <h1 className="text-primary py-3">Create New Post</h1>

        <input
          className="form-control mb-3"
          type="text"
          placeholder="title"
          onChange={saveTitleToState}
          ref={getTitle}
        />

        <textarea
          className="form-control mb-3"
          placeholder="content"
          onChange={saveContentToState}
          ref={getContent}
        ></textarea>

        <button className="btn btn-primary me-2" onClick={savePost}>
          <i
            className="fa fa-plus"
            style={{ color: "white", marginRight: "8px" }}
          ></i>
          Create Post
        </button>
        <button className="btn btn-danger">Cancel</button>
      </form>
    </>
  );
};

export default Create;
