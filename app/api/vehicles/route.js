import { NextResponse } from 'next/server';
import createConnection from '../../lib/db'; // Adjust the path if necessary

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter') || 'All';

  try {
    // Establish a connection to MongoDB
    const connection = await createConnection();
    const db = connection.connection.db;

    // Determine the collection to query based on the filter
    let collectionName;
    switch (filter) {
      case 'Cars':
        collectionName = 'cars';
        break;
      case 'Bikes':
        collectionName = 'bikes';
        break;
      case 'Scooters':
        collectionName = 'scooters';
        break;
      default:
        collectionName = ['cars', 'bikes', 'scooters'];
    }

    // Fetch data from the appropriate collection(s)
    let vehicles = [];
    if (Array.isArray(collectionName)) {
      for (const name of collectionName) {
        const collection = db.collection(name);
        const data = await collection.find({}).toArray();
        vehicles = vehicles.concat(data);
      }
    } else {
      const collection = db.collection(collectionName);
      vehicles = await collection.find({}).toArray();
    }

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json({ error: 'Failed to fetch vehicles' }, { status: 500 });
  }
}
