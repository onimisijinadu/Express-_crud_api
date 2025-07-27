#Express.js CRUD API

# 🧩 Express.js CRUD API (ES Modules)

A simple RESTful API built with Express.js that performs Create, Read, Update, and Delete (CRUD) operations using in-memory data storage.

---

## 🚀 Project Features

- Full REST API with 5 routes:
  - `GET /items`
  - `GET /items/:id`
  - `POST /items`
  - `PUT /items/:id`
  - `DELETE /items/:id`
- Uses ES Modules (`import/export` instead of `require`)
- In-memory data storage (array)
- Input validation (POST and PUT)
- Error handling for missing routes, invalid IDs, and empty fields
- Modular route structure

---

## 📁 Folder Structure

express-crud-api/
├── index.js # Entry point
├── data/
│ └── items.js # In-memory item data
├── routes/
│ └── items.js # All CRUD logic
├── package.json
├── package-lock.json
└── README.md

##Setup

```comand prompt
npm install
node index.js
```
