const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Middleware
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║   Portfolio Server Running!            ║
    ║                                        ║
    ║   Open: http://localhost:${PORT}        ║
    ║                                        ║
    ║   Press Ctrl+C to stop                 ║
    ╚════════════════════════════════════════╝
    `);
});
