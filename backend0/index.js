const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;
 // Change as needed

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DB_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Backend is running and connected to MongoDB!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});