import dotenv from 'dotenv';
import Database from './config/database.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await Database.connect();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
