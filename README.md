# Chat Application

This is a full-stack chat application built with the **MERN** stack (MongoDB, Express, React, Node.js) and enhanced with **Socket.IO** for real-time communication. The application includes user authentication, real-time messaging, and efficient state management.

- **Live Demo:** [https://chatapp-zgnn.onrender.com](https://chatapp-zgnn.onrender.com)

---

### Key Features

- **User Authentication**: Secure signup and login functionality.
- **Real-time Messaging**: Instant message delivery using Socket.IO.
- **MongoDB Database**: Utilizes Mongoose for a flexible, NoSQL database structure.
- **Express.js Backend**: A robust server-side framework for handling API requests.
- **React Frontend**: A dynamic user interface for an interactive chat experience.

---

### Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Real-time Communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **Development**: nodemon, dotenv, cookie-parser

---

### Installation and Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd chat-app
    ```
2.  **Install Dependencies**:
    The `build` script in your `package.json` suggests a combined installation process.
    ```bash
    npm run build
    ```
    This command is set to install both backend and frontend dependencies.

---

### Running the Application

- **Development Mode**:
    ```bash
    npm run server
    ```
    This command uses `nodemon` to run the backend server with automatic restarts during development.
- **Production Mode**:
    ```bash
    npm start
    ```
    This will start the application using `node`.

---

### Project Structure

- **`backend/`**: Contains the server-side code.
- **`frontend/`**: Contains the React application.
- **`server.js`**: The main entry point for the backend.
