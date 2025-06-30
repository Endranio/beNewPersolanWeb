import express, { Request,Response } from "express";
import Router from "./routes/index";
import { errorHandler } from "./middlewares/error-middleware";
import cors from "cors";
import { cloudinaryStorage } from "./middlewares/image-middleware";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000","https://personalweb-endra.up.railway.app","https://fe-personal-web.vercel.app"],
  })
);
app.use(express.json());


app.use(Router);

app.post("/upload", cloudinaryStorage.single("image"), (req, res) => {
  res.json({ imageUrl: req.file?.path });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`port berjalan di ${port}`);
});
