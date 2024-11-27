import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyparser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 9001;
const app = express();

app.use(express.json());
app.use(cors(process.env.CLIENT_URL));

app.get("/", (req, res) => {
  res.send("Hello, There");
});

// app.use("/user", userRoute)
// app.use("/post", postRoute)
// app.use("category", categoryRoute)

app.listen("9000", () => {
  console.log(`Server is running on port: ${PORT}`);
});
