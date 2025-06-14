# 🚀 Node.js REST API Development Task

This project includes the RSET API developed using Node.js + Express and MongoDB, that supports user and product management.

## 📂 Project Structure
```bash
├── controllers/
│   ├── auth.controller.js
│   └── product.controller.js
├── models/
│   ├── user.model.js
│   └── product.model.js
├── routes/
│   ├── auth.routes.js
│   └── product.routes.js
├── .env
├── index.js
├── package.json
└── README.md
```

## ⚙️ Project Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/AnjaleeNeelika/futurecode-backend-task.git
cd futurecode-backend-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a .env file at the root of the project referring the .env.example file and include the necessary information.
```bash
DB_URL=your_db_url
PORT=your_port
```

### 4. Run the application
```bash
npm run dev
```

📝 Notes
  * Passwords are hashed using **bcrypt** during registration.
  * Database: MongoDB
