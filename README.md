# Contact Management Backend API

A robust and secure backend service built with Node.js and Express to manage user contacts. This application implements user authentication and authorization using JWT (JSON Web Tokens) to ensure that users can only manage their own contacts.

## 🚀 Features

- **User Authentication**: Secure registration and login using bcrypt for password hashing.
- **JWT Authorization**: Protected routes that require a valid token to access contact operations.
- **CRUD Operations**: Complete Create, Read, Update, and Delete functionality for contacts.
- **Error Handling**: Custom middleware to handle various HTTP error status codes.
- **Data Persistence**: MongoDB integration using Mongoose ODM.

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Security**: JWT (jsonwebtoken), Bcrypt
- **Environment**: Dotenv for configuration management

## 📦 Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IshwarSinghBhandari/Contact_managemet_nodejs.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   # Production mode
   npm start

   # Development mode (with nodemon)
   npm run dev
   ```

## 🔌 API Endpoints

### User Routes (`/api/users`)

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Register a new user | Public |
| `POST` | `/login` | User login (returns JWT token) | Public |
| `GET` | `/current` | Get details of the logged-in user | Private |

### Contact Routes (`/api/contacts`)

> [!NOTE]
> All contact routes are protected and require a Bearer Token in the Authorization header.

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get all contacts for the current user | Private |
| `POST` | `/` | Create a new contact | Private |
| `GET` | `/:id` | Get a specific contact by ID | Private |
| `PUT` | `/:id` | Update an existing contact | Private |
| `DELETE` | `/:id` | Delete a contact | Private |

## 🛡️ Authentication

To access private routes, you must include the JWT token in the request header:

```http
Authorization: Bearer <your_access_token>
```

## 📝 Author

Created by **Ishwar Singh**
