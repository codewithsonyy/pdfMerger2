const express = require("express");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { mergedPdfs } = require("./merge");
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    createParentPath: true,
  })
);
app.use("/static", express.static("public"));

const port = 5000;

app.post("/pdfpair", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: "failed",
        message: "No file uploaded",
      });
    } else {
      const newpath = __dirname + "/files/";
      const file = req.files.pdfs;

      for (let i = 0; i < file.length; i++) {
        file[i].mv(`${newpath}${file[i].name}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }

      let d = await mergedPdfs(
        path.join(newpath, file[0].name),
        path.join(newpath, file[1].name)
      );
     
   
    var data = fs.readFileSync(`./public/${d}.pdf`);

res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', 'inline; filename="modified-file.pdf"');

res.send(data);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
