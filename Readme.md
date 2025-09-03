# STREAMLY – YouTube-like Video Hosting Platform 🎥

A robust and scalable backend application built using **Node.js**, **Express.js**, and **MongoDB**.  
This project powers a full-featured video hosting platform with essential **YouTube-like functionalities** such as video uploads, streaming, user authentication, comments, likes, subscriptions, and more.

---

## 🚀 Badges

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-000?style=for-the-badge&logo=security&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FFCA28?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white)

---

## 🌟 Features

### 🔒 Authentication
- User registration & login
- JWT-based authentication (Access & Refresh tokens)
- Secure password hashing with **Bcrypt**
- Middleware for protected routes

### 📹 Video Management
- Video upload with **Multer** and **Cloudinary**
- Metadata storage: `title`, `description`, `tags`
- Efficient video streaming endpoint with range support
- Update and delete videos
- Automatic **thumbnail generation**
- Video categorization by tags or genres

### 💬 Social Interactions
- Like/Dislike system
- Comment threads with nested replies
- Subscribe/Unsubscribe system for channels
- User profile management with **avatars, bios, and cover images**

### ⚙️ Technical Features
- **MVC Architecture** (Models, Controllers, Routes)
- **RESTful API Design**
- Environment configuration with `.env`
- Centralized **error handling middleware**
- **Rate limiting** for API protection
- Request **validation & sanitization**
- Logging for debugging and monitoring

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** JWT, Bcrypt  
- **File Handling:** Multer (uploads), Cloudinary (media storage)  
- **Environment Management:** dotenv  
- **Formatting:** Prettier  

---

## 📂 Project Structure

practice_backend/
│── controllers/ # Business logic for routes
│── models/ # Mongoose schemas (User, Video, Comment, etc.)
│── routes/ # Route definitions
│── middlewares/ # Auth & validation middleware
│── utils/ # Helper utilities (token generation, etc.)
│── uploads/ # Temp storage for videos
│── config/ # Database & cloud configs
│── server.js # Entry point
│── .env # Environment variables
│── package.json # Dependencies


---

## 🧩 Logic Flow

1. **User Authentication**
   - Users sign up → passwords hashed with Bcrypt
   - JWT access/refresh tokens issued at login
   - Middleware verifies token for protected routes

2. **Video Upload & Storage**
   - Videos uploaded via **Multer**
   - Uploaded files are sent to **Cloudinary**
   - Metadata saved in MongoDB (title, description, uploader, tags, file URL)

3. **Video Streaming**
   - `/videos/:id` streams video files
   - Supports `Range` headers for smooth playback
   - Uses `fs.createReadStream` for chunked streaming

4. **Interactions**
   - Users can like/dislike videos
   - Add comments or threaded replies
   - Subscribe/unsubscribe to channels

5. **Video Management**
   - Update or delete videos
   - Fetch user’s uploaded videos
   - Categorize by tags, genres, or search query

---

## ⚡ API Endpoints

| Endpoint                     | Method | Description |
|------------------------------|--------|-------------|
| `/api/auth/register`         | POST   | Register new user |
| `/api/auth/login`            | POST   | Login and receive JWT tokens |
| `/api/videos/upload`         | POST   | Upload a new video |
| `/api/videos/:id`            | GET    | Stream video by ID |
| `/api/videos/:id`            | PUT    | Update video metadata |
| `/api/videos/:id`            | DELETE | Delete a video |
| `/api/videos/:id/like`       | POST   | Like a video |
| `/api/videos/:id/dislike`    | POST   | Dislike a video |
| `/api/videos/:id/comments`   | POST   | Add comment to a video |
| `/api/videos/:id/comments`   | GET    | Fetch comments for a video |
| `/api/users/:id/subscribe`   | POST   | Subscribe to a user |
| `/api/users/:id/unsubscribe` | POST   | Unsubscribe from a user |

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivamkrishna1006/practice_backend.git
   cd practice_backend
2. **Install dependencies**
    npm install
3. **Create a .env file in the root directory and add the following**
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-secret>
    CLOUDINARY_CLOUD_NAME=<your-cloud-name>
    CLOUDINARY_API_KEY=<your-api-key>
    CLOUDINARY_API_SECRET=<your-api-secret>
4. **Run the server**
    npm start
    The server will start at: http://localhost:5000
## 🧪 Development Tips

- Use **Postman** or **Insomnia** to test APIs  
- Organize controllers per feature (auth, video, comments)  
- Always validate user input before performing DB operations  
- Use **nodemon** for hot-reload during development  
- Enable **CORS** if connecting with a frontend application  

---

## 🔮 Future Enhancements

- Video recommendations using algorithms  
- Playlists and watch history  
- Notifications system  
- Real-time chat during live streams  
- Admin dashboard for content moderation  
- Microservices for scalability (video processing, analytics)  
