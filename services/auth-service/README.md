# auth-service

Authentication service that provides login and logout endpoints.

## Description

This service handles user authentication operations, providing JWT token generation for login requests and logout functionality.

## How to Run Locally

```bash
cd services/auth-service
npm install
npm start
```

The service will start on the port specified in the `PORT` environment variable, or default to port 3002.

## Environment Variables

- `PORT` - The port number for the service to listen on (default: 3002)

## API Endpoints

- `POST /login` - Authenticate user and receive token
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "jwt-token" }`

- `POST /logout` - Log out user
  - Response: `{ "status": "logged out" }`
