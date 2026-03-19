# Sanken Boardroom Booking System

## Project Overview
The Sanken Boardroom Booking System is designed to streamline the process of reserving boardrooms, making it more efficient and user-friendly. This web application allows users to view availability, book rooms, and manage reservations seamlessly.

## Features
- **User Authentication**: Secure login and registration for users.
- **Room Availability**: Real-time viewing of available boardrooms.
- **Booking Management**: Users can create, update, and cancel bookings.
- **Admin Dashboard**: For managing users and boardroom schedules.
- **Notification System**: Email notifications for booking confirmations and reminders.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**: Heroku

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/dvidanage/sanken_boardroom-booking-system.git
   ```
2. Navigate into the project directory:
   ```bash
   cd sanken_boardroom-booking-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the application at `http://localhost:3000`

## Project Structure
```
├── client/                     # Frontend source code
│   ├── public/                 # Public files
│   ├── src/                    # React components
├── server/                     # Backend source code
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   └── controllers/            # Business logic
├── .env                        # Environment variables
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

This project aims to facilitate an intuitive and manageable system for booking boardrooms efficiently and effectively.