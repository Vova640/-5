import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

let users = [
  { firstname: "Іван", lastname: "Коваленко", score: 12 },
  { firstname: "Марія", lastname: "Іванова", score: 27 },
  { firstname: "Андрій", lastname: "Шевченко", score: 18 },
  { firstname: "Сергій", lastname: "Мельник", score: 39 },
  { firstname: "Катерина", lastname: "Кравченко", score: 17 },
  { firstname: "Тарас", lastname: "Гончар", score: 30 },
  { firstname: "Ольга", lastname: "Дрозд", score: 41 },
  { firstname: "Богдан", lastname: "Кирилюк", score: 24 },
  { firstname: "Юрій", lastname: "Баран", score: 19 },
  { firstname: "Ганна", lastname: "Проценко", score: 37 }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/new-users", (req, res) => {
  res.json(users.slice(0, 5));
});

app.get("/api/sort", (req, res) => {
  const { by = "firstname", dir = "asc" } = req.query;

  const sorted = [...users].sort((a, b) => {
    const A = a[by].toLowerCase();
    const B = b[by].toLowerCase();
    if (A < B) return dir === "asc" ? -1 : 1;
    if (A > B) return dir === "asc" ? 1 : -1;
    return 0;
  });

  res.json(sorted);
});

app.get("/api/gallery", (req, res) => {
  const folder = path.join(__dirname, "gallery");
  const files = fs.readdirSync(folder);
  const images = files.map(f => "/gallery/" + f);
  res.json(images);
});
app.use("/gallery", express.static("gallery"));

let temperature = 12;
app.get("/weather", (req, res) => {
  temperature = Math.floor(Math.random() * 31);
  res.json({ city: "Kyiv", temperature });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
