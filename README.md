**📝 Blog API Backend — Express, MongoDB, JWT**

A fully functional RESTful Blog API built using Node.js, Express.js, MongoDB, and JWT Authentication.
This backend allows users to register, log in, create blog posts, update posts, delete posts, and fetch blog data securely.

**🚀 Features**
🔐 Authentication (JWT)

User Registration & Login

Protected API routes using JWT middleware

Token verification for secure actions

**📝 Blog Management**

Create Blog Posts

Edit Blog Posts

Delete Blog Posts

Get All Blogs

Get Blog by ID

Get Blogs by User

**👤 User Management**

Get user details

Update user profile

Secure access with token validation

**⚙️ Tech Stack**

Node.js

Express.js

MongoDB & Mongoose

JWT (JSON Web Tokens)

dotenv for environment variables

**Setup & Installation**

1. Clone the Repository -
   git clone https://github.com/your-username/blog-api-backend.git
   cd blog-api-backend

2. Install Dependencies
   npm install

3. Create .env File
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

4. Start the Server
   npm start

5. Server will run on:
   http://localhost:5000

**📡 API Routes**
**🔐 Auth Routes (/auth)**
POST /register — Register user
POST /login — Login user & get JWT    

**👤 User Routes (/user)**
GET /user/find/:userId
GET /user/findAll
PUT /user/updateUser/:userId
DELETE /user/deleteUser/:userId

**📝 Blog API Routes**
GET /blog/getAll
GET /blog/find/:id
POST /blog/
PUT /blog/updateBlog/:id
DELETE /blog/deleteBlog/:id
