# Real-Time Chat Application

A full-stack **Real-Time Chat Application** built using **React.js, Socket.IO, Node.js, and REST APIs**.  
This application allows users to **create accounts, log in, send messages in real time, and fetch previous conversations from the database**.

---

# Features

## User Authentication
- New users can create a username.
- Existing users can log in using their username.
- Duplicate username detection prevents creating existing usernames.

## Real-Time Messaging
- Messages are delivered instantly using **Socket.IO**.
- All connected users receive messages in real time.

## Active Users List
- Displays all currently active users in the chat.
- Each user appears inside a bordered card with a **user icon and username**.

## Conversation History
- Users can fetch older messages from the database.
- Messages are displayed in **chronological order (oldest → newest)** similar to WhatsApp.

## Modern User Interface
- Dark and medium **blue gradient theme**.
- Separate login boxes for **New User** and **Existing User**.
- Sidebar user list with icons.
- Clean chat layout with borders and structured message display.

---

# Tech Stack

## Frontend
- React.js
- Socket.IO Client
- CSS (Custom Styling)

## Backend
- Node.js
- Express.js
- Socket.IO

## Database
- MySQL / PostgreSQL via REST API

---

# Project Structure

```
chat-app
│
├── frontend
│   ├── components
│   │   ├── Chat.js
│   │   ├── Login.js
│   │   ├── MessageInput.js
│   │   └── MessageList.js
│   │
│   ├── styles
│   │   └── chat.css
│   │
│   ├── socket.js
│   └── App.js
│
├── backend
│   ├── server.js
│   ├── routes
│   ├── controllers
│   └── database
│
└── README.md
```

---

# Installation

## 1. Clone the Repository

```
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

## 2. Install Frontend Dependencies

```
cd frontend
npm install
```

---

## 3. Install Backend Dependencies

```
cd backend
npm install
```

---

# Running the Application

## Start Backend Server

```
node server.js
```

Backend runs on:

```
http://localhost:8020
```

---

## Start React Frontend

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# API Endpoints

## Get Users

```
GET /api/users
```

Returns all registered users.

---

## Get Messages

```
GET /api/messages?cursor=<id>&limit=20
```

Fetches previous messages for pagination.

---

## Save Message

```
POST /api/messages
```

Example request body:

```
{
  "username": "John",
  "message": "Hello everyone"
}
```

---

# Real-Time Socket Events

## join_chat
User joins the chat room.

## send_message
Broadcasts a message to all users.

## receive_message
Receives real-time messages from other users.

## active_users
Returns a list of currently active users.

---

# User Interface

## Login Page
- Blue gradient background
- Outer bordered login container
- Two sections:
  - New User
  - Existing User

## Chat Interface
- Sidebar displaying active users
- Each user card contains:
  - User icon
  - Username
- Chat window with:
  - Message history
  - Fetch previous conversations button
  - Message input box

---

# Message Ordering

Messages follow **chronological order**:

```
Oldest Message
Older Message
Recent Message
Latest Message
```

When fetching previous conversations, **older messages appear above existing messages**.

---

# Future Improvements

- Message timestamps
- Online/offline user indicators
- Message read receipts
- User avatars
- Emoji support
- File and image sharing

---

# Author

**Mrigangana Sarkar**

---

# License

This project is created for **educational and learning purposes**.