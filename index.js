import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Sample data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// Routes
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).send('User not found');
});

app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//import express from "express";
//import itemsRouter from "./routes/items.js";

//const app = express();
//const PORT = 5000;
//app.use(express.json());

//ROOT routes
//app.get("/", (req, res) => {
//  res.send("Hello World!");
//});

//routes
//app.use("/items", itemsRouter);

// Handle invalid routes
//app.use((req, res) => {
  //res.status(404).json({ error: "Route not found" });
//});

// Start server
//app.listen(PORT, () => {
  //console.log(`Server running on port: http://localhost:${PORT}`);
//});
