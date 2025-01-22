# node-socket-listener

A very basic and simple socket listener service using node and typescript.

## Service Requirements

- Node.js (> v14)
- TypeScript

## Steps to Run

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-socket-listener.git
   ```
2. Navigate to the project directory:
   ```
   cd node-socket-listener
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a .env file in the root of the project and add your WebSocket URL:
   ```
   WEBSOCKET_URL=wss://external-socket-url.com
   ```
5. Run the Service:
   ### For Development
   To run the service in development mode with automatic restarts using nodemon:
   ```
   npm run dev
   ```
   ### For production
   To build and run the service in production mode:
   ```
   npm run build
   npm start
   ```

## Project Structure

```
node-socket-listener
├── src
│   └── index.ts
├── .env
├── .eslintignore
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```

## Important Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Starts the compiled JavaScript code.
- `npm run dev`: Starts the service in development mode with hot-reloading.
