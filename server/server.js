import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load env vars FIRST before importing routes
dotenv.config();

import contactRoutes from './routes/contact.js';
// MongoDB connection is optional - email can work without it
// Uncomment below if you want to use MongoDB
// import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (Optional)
// Uncomment below if using MongoDB
/*
if (process.env.MONGODB_URI) {
  connectDB().catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.log('Continuing without database...');
  });
}
*/

// Routes
app.use('/api', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════╗
║  Portfolio Backend Server Running    ║
║  Port: ${PORT}                        ║
║  Environment: ${process.env.NODE_ENV || 'development'}            ║
║  API: http://localhost:${PORT}/api    ║
╚══════════════════════════════════════╝
  `);
});
