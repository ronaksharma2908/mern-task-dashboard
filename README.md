# 🚀 MERN Task Management Dashboard

A full-stack Task Management Dashboard built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application helps users create, manage, update, and track tasks efficiently through a modern and responsive interface.

## 📌 Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Update task status
- ✅ Delete tasks
- ✅ Responsive dashboard UI
- ✅ RESTful API integration
- ✅ MongoDB database storage
- ✅ Real-time task management workflow

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Other Tools
- Git & GitHub
- Postman
- dotenv
- CORS

---



## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ronaksharma2908/mern-task-dashboard.git
cd mern-task-dashboard
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

or

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

The frontend will run on:

```
http://localhost:3000
```

The backend will run on:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get task by ID |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## 🌟 Future Enhancements

- User Authentication (JWT)
- Task Categories
- Due Date Reminders
- Drag-and-Drop Task Board
- Team Collaboration
- Dark Mode Support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ronak Sharma**

- GitHub: https://github.com/ronaksharma2908
- LinkedIn: https://linkedin.com/in/ronak29sharma
- 

---

⭐ If you found this project useful, don't forget to star the repository!
