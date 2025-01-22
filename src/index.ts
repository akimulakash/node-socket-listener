import WebSocket from 'ws';
import 'dotenv/config';

const socketUrl = process.env.WEBSOCKET_URL || '';
if (!socketUrl) {
  throw new Error('WebSocket URL is not defined');
}

let ws: WebSocket;

async function connect() {
  ws = new WebSocket(socketUrl);

  ws.on('open', () => {
    console.log('Connected to the WebSocket server');
  });

  ws.on('message', async (data) => {
    console.log(`Received message: ${JSON.stringify(JSON.parse(data.toString()), null, 2)}`);
    await processMessage(JSON.parse(data.toString()));
  });

  ws.on('close', () => {
    console.log('Disconnected from the WebSocket server');

    // Reconnect after 10 seconds
    setTimeout(async () => {
      console.log('Attempting to reconnect...');
      await connect();
    }, 10000); 
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
}

async function processMessage(message: Record<string, any>) {
  console.log('Processing message:', message);
}

// Initiate the connection
(async () => {
  await connect();
})();
