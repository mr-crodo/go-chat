# Go Chat App

A real-time chat application built using **Go (Golang)** with **WebSockets** for the backend and **React** for the frontend. This project demonstrates how to handle concurrent WebSocket connections and manage real-time message broadcasting.

## 🚀 Features

- **Real-time Messaging**: Messages are delivered instantly using WebSockets.
- **Concurrent Connections**: Handles multiple clients simultaneously using Go routines and channels.
- **Modern UI**: A clean and responsive interface built with React and SCSS.
- **Connection Management**: Backend tracking of registered/unregistered clients.

## 🛠️ Technology Stack

### Backend
- **Go**: Core language for performance and concurrency.
- **Gorilla WebSocket**: For robust WebSocket implementation.
- **Net/HTTP**: For serving the WebSocket endpoint.

### Frontend
- **React**: Modern component-based UI.
- **SCSS**: For professional styling.
- **WebSockets API**: Native browser support for real-time communication.

---

## 🏃 How to Run

### 1. Backend
Open a terminal in the `backend` directory:
```bash
cd backend
go run main.go
```
The backend server will start on `http://localhost:9000`.

### 2. Frontend
Open another terminal in the `frontend` directory:
```bash
cd frontend
npm install
npm start
```
The frontend will be available at `http://localhost:3000`.

---

## 🏗️ Project Structure
- **/backend**: Contains the Go source code.
  - `main.go`: Entry point and route setup.
  - `pkg/websocket`: WebSocket pool, client, and upgrader logic.
- **/frontend**: Contains the React application.
  - `src/api`: WebSocket connection logic.
  - `src/components`: UI components (ChatHistory, ChatInput, etc.).
