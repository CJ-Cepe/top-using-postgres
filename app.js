import express from "express";
import router from "./routes/router";
const app = express();
const PORT = 3000;

app.use("/", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Live at http://localhost:${PORT}`);
});
