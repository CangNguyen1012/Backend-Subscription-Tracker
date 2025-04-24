# Backend Subscription Tracker

A RESTful API service for managing subscriptions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- User authentication and authorization
- Subscription management (create, read, update, delete)
- Support for multiple payment methods
- Automatic renewal reminders via email
- Integration with Arcjet for bot detection and IP blocking

## Installation

1. Clone the repository: `git clone https://github.com/username/backend-subscription-tracker.git`
2. Install dependencies: `npm install`
3. Set up environment variables: `cp .env.example .env`
4. Start the server: `npm start`

## Usage

### Subscription Endpoints

- **GET /subscriptions**: Get all subscriptions for the authenticated user
- **POST /subscriptions**: Create a new subscription
- **GET /subscriptions/:id**: Get a subscription by ID
- **PUT /subscriptions/:id**: Update a subscription
- **DELETE /subscriptions/:id**: Delete a subscription

### User Endpoints

- **POST /users**: Create a new user
- **POST /auth/signin**: Sign in a user
- **POST /auth/signout**: Sign out a user

## Database Schema

The database schema is defined in `models/subscription.model.js` and `models/user.model.js`.

## Environment Variables

The following environment variables must be set:

- `DB_URI`: The URI of the MongoDB database
- `JWT_SECRET`: The secret key for JWT authentication
- `JWT_EXPIRES_IN`: The expiration time for JWT tokens
- `ARCJET_KEY`: The API key for Arcjet
- `NODE_ENV`: The environment (development, production, etc.)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
