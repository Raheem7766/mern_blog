import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@raheem.hhn2q0u.mongodb.net/Blog?retryWrites=true&w=majority&appName=Raheem`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;