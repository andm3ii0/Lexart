import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = "mongodb://mongo:ENPnxNrLa6afRosnONX4@containers-us-west-82.railway.app:6505";
console.log(process.env.MONGO_URI);

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;