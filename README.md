# 🚀 Feedback website


## Overview
Feedback Collector is a simple web app that lets users submit their name, email, and feedback through a responsive form.  
It features an admin view to display collected feedbacks and is powered by a serverless backend, with everything deployed and live.

---

## Features

### 1. Submit feedback with Name, Email, and Message

### 2.  Email field with basic validation

### 3. Clean, responsive, and minimalistic form design

### 4.  Fully responsive across devices

### 5. Admin view to see all submitted feedbacks

### 6. Styled feedback display (card layout)

### 7.  Dark/Light theme 

### 8. Fully responsive across devices



## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js , Mongoose , 
- **Database**: MongoDB


---
### Project Structure

/client

  ├── dist/               # Production build (after running build)
  
  ├── node_modules/        # Project dependencies
  
  ├── public/              # Static assets
  
  ├── src/                 # Source code (React components, pages)
  
  ├── .gitignore
  
  ├── eslint.config.js     # ESLint configuration
  
  ├── index.html
  
  ├── package.json         # Frontend dependencies and scripts
  
  ├── vite.config.js       # Vite configuration
  
  └── README.md

/server

  ├── controller/          # Controller logic for handling API requests
  
  ├── db/                  # Database connection/configuration
  
  ├── models/              # Database models/schemas
  
  ├── node_modules/        # Server dependencies
  
  ├── routes/              # API routes
  
  ├── .env                 # Environment variables
  
  ├── .gitignore
  
  ├── index.js             # Server entry point (Express app)
  
  ├── package.json         # Backend dependencies and scripts
  
  └── vercel.json          # Vercel deployment configuration


---

## 📦 Installation

1.  **Clone the repository:** `git clone https://github.com/Nayab-Sarfaraj/feedback-app/`
2.  **Install dependencies:**
    *   Frontend: `cd client && npm install`
    *   Backend: `cd server && npm install`
3.  **Configure MongoDB:** Ensure MongoDB is running and update the connection string in the backend configuration.
4.  **Run the application:**
    *   Frontend: `cd client && npm run dev`
    *   Backend: `cd server && npm start`
5.  **Access the application:** Open your browser and navigate to the frontend URL (usually `http://localhost:5173`).




---
## API Endpoints

*   `POST /submit-feedback`: To submit feedback.
*   `GET /feedbacks?page=pageNumber`: To get all the feedback.
 
  

