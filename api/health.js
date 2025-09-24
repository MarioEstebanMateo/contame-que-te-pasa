export default function handler(req, res) {
  res.json({ 
    status: 'OK', 
    message: 'Contame que te pasa API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  })
}