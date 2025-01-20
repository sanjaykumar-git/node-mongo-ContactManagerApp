# Contact Manager App

## 📌 Project Overview
The **Contact Manager App** is a full-stack application built with **Node.js**, **Express**, and **MongoDB**. It provides users with a simple yet powerful way to manage their contacts securely with authentication and protected routes.

## 🚀 Features
- **User Authentication** (Registration, Login, JWT Token)
- **CRUD Operations** for managing contacts
- **REST API with Express.js**
- **MongoDB Integration with Mongoose**
- **Secure Routes for Logged-in Users**
- **Error Handling & Middleware Setup**

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens), Bcrypt.js for password hashing
- **Middleware:** Express Async Handler, Morgan

## 🔧 Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/contact-manager.git
   cd contact-manager
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Run the Server**
   ```sh
   npm start
   ```
   The server will start at `http://localhost:5000`

## 📌 API Endpoints
| Method | Endpoint            | Description              | Protected |
|--------|---------------------|--------------------------|-----------|
| GET    | `/api/contacts`     | Get all contacts         | ✅ |
| POST   | `/api/contacts`     | Create a new contact     | ✅ |
| GET    | `/api/contacts/:id` | Get a single contact     | ✅ |
| PUT    | `/api/contacts/:id` | Update a contact        | ✅ |
| DELETE | `/api/contacts/:id` | Delete a contact        | ✅ |
| POST   | `/api/users/register` | Register a new user | ❌ |
| POST   | `/api/users/login`    | User login            | ❌ |
| GET    | `/api/users/me`       | Get logged-in user     | ✅ |

✅ = Requires Authentication (JWT Token)

## 🚀 Deployment
If you want to deploy the project, follow these steps:
1. **Deploy Backend on Render, Vercel, or Railway**
2. **Set Up Environment Variables in Deployment Settings**
3. **Use a Cloud MongoDB Database (MongoDB Atlas)**

## 🤝 Contribution
Feel free to submit pull requests or open issues to improve the project.

## 📞 Contact
For any inquiries or suggestions, reach out at: **sanjayyamjala3@gmail.com**

---
**🌟 If you found this useful, give it a star on GitHub!** 🚀

