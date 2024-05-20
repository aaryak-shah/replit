import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-project", async (req, res) => {
  const { projectId, language } = req.body;

  if (!projectId) {
    res.status(400).send("Bad request");
    return;
  }
  res.send("Project created");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on PORT ${port}`);
});
