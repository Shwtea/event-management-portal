# 📅 Event Management Portal (Backend)

A backend application for managing events, users, categories, and admin workflows. Supports features like login, event publishing based on timezone, single-session login detection, soft/permanent deletion, nested categories, and more.

---

## 🚀 Tech Stack

- **Node.js** with **Express.js**
- **PostgreSQL** with **Sequelize ORM**
- **JWT** Authentication
- **Swagger** API Documentation
- **Multer** for file uploads
- **Moment-timezone** for timezone conversions
- Optional: **ESLint** and **Rate Limiter**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Shwtea/event-management-portal
cd your-project-folder

2. Install Dependencies
npm install


3. Create .env File

DB_NAME=eventPortal
DB_USER=postgres
DB_PASS=root
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=passwordKey
PORT=3000

4. Run Migrations
npx sequelize-cli db:migrate


5. (Optional) Seed Initial Users
npx sequelize-cli db:seed:all


6. Start the Server
npm start