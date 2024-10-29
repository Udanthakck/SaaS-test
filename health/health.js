// server.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 80;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist'))); // Adjust 'dist' as needed

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
