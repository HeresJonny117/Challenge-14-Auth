Challenge 14 Authentication

This project extends an existing Kanban board application by adding JWT-based authentication for secure access to task management features. Users can log in with a username and password, and only authenticated users can access the Kanban board. The app automatically handles token expiration and redirects users to the login page as needed.

Table of Contents

Features
Technologies
Getting Started

Features

JWT Authentication: Users are authenticated using JSON Web Tokens (JWTs).
Token Management: JWTs are stored in localStorage and removed upon logout or session expiration.
Automatic Redirection: Redirects unauthenticated users to the login page and users to the Kanban board upon login.
Error Handling: Displays appropriate error messages for invalid login attempts.
Session Timeout: Automatically logs users out after a period of inactivity.

Technologies

Backend: Node.js, Express, JWT
Frontend: React
Database: PostgreSQL
Deployment: Render

Getting Started

Prerequisites

Ensure you have the following installed:
Node.js
PostgreSQL
Git

Deployment

Deploy the backend and frontend to Render (or your chosen hosting service).
Ensure your environment variables are configured correctly in your deployment environment.
Verify that both the client and server are correctly connected and that login functionality is working as expected.
