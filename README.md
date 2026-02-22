# 💬 Anonymous Chat System

<p align="center">
  <b>Real-Time Anonymous Chat Application</b><br>
  Built with Flask, Flask-SocketIO & WebSockets 🚀
</p>

<p align="center">
  🌍 <b>Live Demo:</b><br>
  <a href="https://acs-wxid.onrender.com" target="_blank">
    https://acs-wxid.onrender.com
  </a>
</p>

---

## ✨ Features

- 🔥 Real-time messaging using WebSockets  
- 👤 Auto-generated anonymous usernames  
- ✏ Users can change username anytime  
- 🌐 Public global chat room  
- 📱 Responsive user interface  
- ⚡ Deployed on Render  

---

## 🛠 Tech Stack

- **Backend:** Python, Flask  
- **Real-Time Engine:** Flask-SocketIO  
- **Production Server:** Gunicorn + Eventlet  
- **Frontend:** HTML, CSS, JavaScript  
- **Deployment:** Render  

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

## 🚀 Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/adityasing9/ACS.git
cd ACS
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate virtual environment:

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

## 🌍 Deployment (Render)

**Build Command**
```bash
pip install -r requirements.txt
```

**Start Command**
```bash
gunicorn --worker-class eventlet -w 1 app:app
```

---

## 🧠 How It Works

- When a user connects:
  - The server assigns a random numeric username
  - The user joins the public chat room
- Messages are broadcast to all connected users
- Username can be changed dynamically
- WebSockets ensure instant message delivery

---

## 🔮 Future Improvements

- 🔐 Login authentication  
- 🧵 Private chat rooms  
- 💾 Database for message storage  
- 🌙 Dark mode  
- 🛡 Admin moderation panel  
- 📱 Mobile application version  

---

## 👨‍💻 Developer

Developed by **Aditya Sing**

If you like this project, give it a ⭐ on GitHub!

---

## 📜 License

This project is open-source and free to use.
