<!-- Animated Typing Banner -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&pause=1000&color=2F80ED&center=true&vCenter=true&width=800&lines=Anonymous+Chat+System;Real-Time+WebSocket+Chat+Application;Built+with+Flask+%7C+Socket.IO+%7C+Render" alt="Typing SVG" />
</p>

---

<h1 align="center">💬 Anonymous Chat System</h1>

<p align="center">
  🚀 Real-Time Anonymous Chat Application <br>
  Built with Flask, Flask-SocketIO & WebSockets
</p>

---

## 🏷 Badges

<p align="center">

![Python](https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-Framework-black?style=for-the-badge&logo=flask)
![SocketIO](https://img.shields.io/badge/WebSockets-Socket.IO-green?style=for-the-badge&logo=socket.io)
![Render](https://img.shields.io/badge/Deployed-Render-purple?style=for-the-badge&logo=render)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

</p>

---

## 🌍 Live Demo

<p align="center">
  🔗 <b>https://acs-wxid.onrender.com</b>
</p>

---

## ✨ Key Features

✔ Real-time messaging using WebSockets  
✔ Automatic anonymous username assignment  
✔ Dynamic username change  
✔ Public chat room broadcasting  
✔ Clean & responsive UI  
✔ Production-ready deployment  

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python + Flask |
| Real-Time | Flask-SocketIO |
| Production Server | Gunicorn + Eventlet |
| Frontend | HTML, CSS, JavaScript |
| Hosting | Render |

---

## 📂 Project Structure

```
anonymous-chat-system/
│
├── app.py
├── requirements.txt
├── templates/
│     └── index.html
└── static/
      ├── style.css
      └── ui.js
```

---

## ⚙ How It Works

1. User connects to the server  
2. Server assigns a random numeric username  
3. User joins the public chat room  
4. Messages are broadcast to all connected clients  
5. Username can be updated in real-time  

WebSockets ensure instant two-way communication ⚡

---

## 🚀 Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/adityasing9/ACS.git
cd ACS
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate environment:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Start Server

```bash
python app.py
```

Open in browser:

```
http://127.0.0.1:5000
```

---

## 🌐 Deployment (Render)

**Build Command**
```bash
pip install -r requirements.txt
```

**Start Command**
```bash
gunicorn --worker-class eventlet -w 1 app:app
```

---

## 📈 Future Enhancements

- 🔐 Authentication system  
- 🧵 Private chat rooms  
- 💾 Database message storage  
- 🌙 Dark mode  
- 🛡 Admin moderation panel  
- 📱 Mobile application  

---

## 👨‍💻 Developer

<p align="center">
  <b>Aditya Sing</b><br>
  Aspiring Software Engineer 🚀
</p>

---

## ⭐ Support

If you like this project:

👉 Give it a **Star** on GitHub  
👉 Fork it  
👉 Share it  

---

## 📜 License

This project is open-source and free to use.
