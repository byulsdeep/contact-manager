# Contact Manager App

## Overview
The Contact Manager App is a full-stack application that allows users to manage their contacts efficiently. It includes functionalities to create, edit, delete, and view contacts with details such as name, email, phone number, and profile picture.

The app consists of a **React.js frontend** and a **Spring Boot backend**, which communicate through a REST API.

---

## Features
- Fetch and display a list of contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- Responsive and user-friendly UI

---

## Tech Stack
### Frontend (React.js)
- React with functional components & hooks
- Axios for API requests
- CSS for styling

### Backend (Spring Boot)
- Spring Boot framework
- Spring Data JPA (for database interaction)
- RESTful API with CRUD operations
- CORS enabled to allow communication with frontend

---

## Installation and Setup
### Prerequisites
- Node.js and npm
- Java (JDK 21)
- Spring Boot
- Oracle 11g

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/byulsdeep/contact-manager.git
   cd contact-manager-backend
   ```
2. Configure database settings in `application.properties`.
3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd contact-manager-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

---

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/contacts` | Fetch all contacts |
| POST | `/api/contacts` | Create a new contact |
| PUT | `/api/contacts/{id}` | Update a contact |
| DELETE | `/api/contacts/{id}` | Delete a contact |

---

## Usage
1. Run the backend server (Spring Boot) on port **8080**.
2. Run the frontend React app on port **3000**.
3. Open `http://localhost:3000` in your browser.
4. Start managing your contacts!

---

## Future Enhancements
- Authentication & Authorization (Login/Signup)
- Search and filter functionality
- Improved UI/UX

---
