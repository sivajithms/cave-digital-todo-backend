import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();


const connectionURL = process.env.MONGO_URL;

const connectDb = () => {    
    mongoose.connect(connectionURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
};

export default connectDb;
