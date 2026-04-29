import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Cache the connection across serverless invocations (warm starts reuse it)
let cachedConnection: typeof mongoose | null = null;
let connectionPromise: Promise<typeof mongoose> | null = null;

class Database {
    static async connect(): Promise<void> {
        if (cachedConnection) {
            return;
        }

        if (!connectionPromise) {
            connectionPromise = mongoose.connect(process.env.MONGO_URI as string, {
                maxPoolSize: 5,       // Small pool — each serverless instance has its own
                minPoolSize: 0,       // No idle connections kept open between invocations
                maxIdleTimeMS: 10000, // Release unused connections after 10s
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 10000,
                socketTimeoutMS: 45000,
            });
        }

        cachedConnection = await connectionPromise;
        console.log('Connected to MongoDB');
    }
}

export default Database;