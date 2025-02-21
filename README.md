# YouTube Clone - Backend (MERN Stack)

## Overview
This repository contains the **backend** of the YouTube Clone project, built with **Node.js, Express, and MongoDB**. It provides APIs for user authentication, video management, channel operations, and comment handling.

## Features

### API Endpoints
- **User Authentication**
  - JWT-based authentication (Sign up, login, logout)
  - Secure password hashing with bcrypt

- **Video Management**
  - CRUD operations for video content
  - Metadata storage (title, description, views, likes, etc.)

- **Channel Management**
  - Creation and management of user channels
  - Subscriber management

- **Comment System**
  - Add, fetch, and delete comments
  - User interactions on video content

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas/local instance)
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **File Handling:** Multer

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (Local or Atlas)
- Git

### Clone the Repository
```sh
$ cd youtube-clone-backend
```

### Install Dependencies
```sh
$ npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory and add:
```sh
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Run the Backend Server
```sh
$ node server.js
```

## API Routes
### User Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user & return token
- `GET /api/auth/logout` - Logout user

### Video Management
- `POST /api/videos` - Upload a new video
- `GET /api/videos/:id` - Get video details
- `PUT /api/videos/:id` - Update video details
- `DELETE /api/videos/:id` - Delete a video

### Channel Management
- `POST /api/channels` - Create a channel
- `GET /api/channels/:id` - Get channel details
- `PUT /api/channels/:id` - Update channel info

### Comments
- `POST /api/comments` - Add a comment
- `GET /api/comments/:videoId` - Fetch all comments for a video
- `DELETE /api/comments/:id` - Delete a comment

## Usage
1. Start the backend server (`npm run dev`)
2. Use Thunderclient to test API endpoints
3. Integrate with the frontend for a complete experience

## Contribution
We welcome contributions! Follow these steps:
1. Fork the repository
2. Create a new branch for your feature or fix
3. Submit a pull request

## License
This project is open-source and available under the MIT License.
