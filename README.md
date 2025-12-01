# ⛅ Weather Activity Suggestor – Full Stack MERN App

A smart MERN-powered web application that suggests **perfect activities based on weather, mood, and categories**.
Built using **React**, **Node.js**, **Express**, and **MongoDB**, with real-time weather data and dynamic UI.

---

## 🏷️ Badges

![React](https://img.shields.io/badge/Frontend-React-61dafb?logo=react\&logoColor=white)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-3c873a?logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/API-Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4ea94b?logo=mongodb\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🚀 Tech Stack

### **Frontend**

* React.js
* JavaScript (ES6+)
* CSS
* Vite

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon (Dev)

---

## 📂 Project Structure

```
/client   -> React Frontend  
/server   -> Node + Express Backend  
```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

---

## 🌐 Frontend Setup (React)

```bash
cd client
npm install
npm run dev
```

---

## 🖥 Backend Setup (Node)

Create a `.env` file inside `/server`:

```
MONGO_URI=mongodb://127.0.0.1:27017/activity_suggestor
PORT=5000
CORS_ORIGIN=http://localhost:5173
WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Then run:

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `MONGO_URI`       | MongoDB local/Atlas URL                           |
| `PORT`            | Server port (default: 5000)                       |
| `CORS_ORIGIN`     | Allowed frontend URL                              |
| `WEATHER_API_KEY` | OpenWeather API key for weather-based suggestions |

---

## ⭐ Features

* 🌤 Get activity suggestions based on **live weather**
* 👍 Suggest random or category-wise activities
* 🎨 Clean and responsive UI built with React
* 🔄 Real-time API communication using Axios
* 🗄 MongoDB storage for activities
* ⚡ Fast backend with Express.js
* 🔐 Secure environment variable usage

---

---

## 🛠 API Endpoints (Backend)

| Method | Endpoint                 | Description                            |
| ------ | ------------------------ | -------------------------------------- |
| GET    | `/api/activities`        | Get all activities                     |
| POST   | `/api/activities`        | Add a new activity                     |
| GET    | `/api/activities/random` | Get a random activity                  |
| GET    | `/api/weather/:city`     | Get weather data for the selected city |

---

## 🌍 Deployment

You can deploy this project using:

* **Frontend** → Vercel / Netlify
* **Backend** → Render / Railway / Cyclic
* **Database** → MongoDB Atlas

Deployment guide will depend on the platform you choose.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Bishal Bhandari**
Frontend Developer | React.js | JavaScript
