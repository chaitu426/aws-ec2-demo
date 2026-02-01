import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.get("/joke", (req: Request, res: Response) => {
  res.json({ joke: "Why don't skeletons fight each other? They don't have the guts!" });
});

app.get("/fact", (req: Request, res: Response) => {
  res.json({ fact: "Bananas are berries, but strawberries aren't!" });
});

app.get("/quote", (req: Request, res: Response) => {
  res.json({ quote: "I'm not arguing, I'm just explaining why I'm right." });
});



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


