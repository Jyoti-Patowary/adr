import mongoose from 'mongoose';

let connection;

/**
 * Return the cached MongoDB connection if it exists,
 * otherwise create a new MongoDB connection.
 */
const createConnection = async () => {
  if (connection) {
    console.log('Using existing MongoDB connection');
    return connection;
  }

  if (!process.env.MONGO_USERNAME || !process.env.MONGO_PASSWORD) {
    console.error('MongoDB username or password is missing. Please add them to .env');
    throw new Error('MongoDB credentials are missing');
  }

  const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@adr.5mgvu5v.mongodb.net/adr?retryWrites=true&w=majority`;

  try {
    console.log('Connecting to MongoDB with connection string:', connectionString);
    connection = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default createConnection;
