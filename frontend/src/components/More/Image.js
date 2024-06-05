import React, { useEffect, useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import "./Image.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Images = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const fetchImage = async () => {
    try {
      const res = await axios.get("https://jala-site.vercel.app//image");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if image is selected
    if (!image) {
      handleOpenSnackbar("Please select an image to upload.", "error");
      return;
    }

    // Check if the selected file is an image
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = image.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      handleOpenSnackbar("Please select a valid image file (jpg, jpeg, or png).", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post("https://jala-site.vercel.app//image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchImage();
      handleOpenSnackbar("Image uploaded successfully.");
    } catch (err) {
      console.log(err);
      handleOpenSnackbar("An error occurred while uploading the image.", "error");
    }
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://jala-site.vercel.app//image/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    fetchImage();
    handleOpenSnackbar("Deleted Successfully");
  };

  const handleOpenSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="images">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Image Upload</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <SpeedIcon />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/Home">Home</Link> &gt; More &gt; Image Upload
          </p>
        </div>
      </div>
      <div className="content-div">
        <div>
          <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={handleSubmit} className="upload-btn">
            Upload
          </button>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Images</h1>
          <div className="img-div">
            {data.map((data, i) => {
              return (
                <div className="img" key={i}>
                  <img src={`http://localhost:2300/images/${data.image}`} alt="" width="100" height="100" style={{ border: "1px solid #eee" }} />
                  <button className="delete-btn" onClick={() => handleDelete(data._id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Images;
