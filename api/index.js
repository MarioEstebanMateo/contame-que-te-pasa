import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import problemSolverRoutes from '../server/routes/problemSolver.js'

// Load environment variables
dotenv.config()

const app = express()

// Security middleware
app.use(helmet())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 requests per windowMs
  message: {
    error: 'Demasiadas solicitudes desde esta IP, por favor intenta de nuevo más tarde.'
  }
})

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true
}))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.use('/api', problemSolverRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Contame que te pasa API is running',
    timestamp: new Date().toISOString()
  })
})

// Export for Vercel
export default app