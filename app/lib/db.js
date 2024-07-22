import mongoose from 'mongoose';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

// Construct the connection string
const connectionString = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@adr.5mgvu5v.mongodb.net/adr?retryWrites=true&w=majority`;

let isConnected = false; // Track the connection status

async function connectToDatabase() {
  if (isConnected) {
    console.log('Using existing MongoDB connection');
    return mongoose.connection.db;
  }

  if (!MONGO_USERNAME || !MONGO_PASSWORD) {
    console.error('MongoDB username or password is missing. Please add them to .env.local');
    throw new Error('MongoDB credentials are missing');
  }

  try {
    console.log('Connecting to MongoDB with connection string:', connectionString);
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment if needed
      // useCreateIndex: true,
      // useFindAndModify: false,
    });

    isConnected = true; // Set connection status to true
    console.log('Connected to MongoDB');
    return mongoose.connection.db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase;
