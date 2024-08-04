import { NextResponse } from 'next/server';
import createConnection from '../../../lib/db'; // Adjust the path if necessary
import { ObjectId } from 'mongodb';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID parameter is missing' }, { status: 400 });
  }

  try {
    const connection = await createConnection();
    const db = connection.connection.db;

    // Define a list of collections to search for the vehicle
    const collections = ['bikes', 'cars', 'scooters'];
    let vehicle = null;

    // Search each collection for the vehicle with the given ID
    for (const collectionName of collections) {
      const collection = db.collection(collectionName);
      vehicle = await collection.findOne({ _id: new ObjectId(id) });
      if (vehicle) break; // If found, exit loop
    }

    if (!vehicle) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
    }

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch vehicle' }, { status: 500 });
  }
}
