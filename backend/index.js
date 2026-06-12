import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:3000",
      "https://full-stack-app-demo-xl9u.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST"],
  }),
);

const PORT = process.env.PORT || 4000;

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    return res.json({
      users: response.data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

app.listen(PORT, "0.0.0.0", () =>
  console.log("The server is running at http://localhost:4000/users"),
);
