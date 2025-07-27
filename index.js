import express from "express";

import itemsRouter from "./routes/items.js";

const app = express();
const PORT = 5000;
app.use(express.json());

//ROOT routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/items", itemsRouter);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
