import express from "express";
import multer from "multer";

const app = express();

const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {
    res.json({
        message: "File uploaded successfully!"
    });
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});