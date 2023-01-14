import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Upload = ({ refetch }) => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("video", video);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3005/backend/api/media/create",
        formData
      );
      console.log(response?.data);
      toast("Upload Successfully!");
      refetch();
    } catch (error) {
      console.log(error);
      toast("Upload Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 text-muted">Upload Videos</h1>
      <form className="container my-2" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video:</label>
          <input
            type="file"
            name="video"
            className="form-control"
            onChange={(e) => {
              setVideo(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-3"
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Upload;
