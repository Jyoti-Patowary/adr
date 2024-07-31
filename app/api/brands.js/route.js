import createConnection from '../../lib/db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'cars'; // Default to 'cars'

  try {
    const connection = await createConnection();
    const db = connection.connection;

    // Determine the collection based on type
    const collectionName = type.toLowerCase(); // e.g., 'cars', 'bikes', 'scooters'
    const collection = db.collection(collectionName);

    // Fetch distinct brands
    const brands = await collection.distinct('brand');

    return new Response(JSON.stringify(brands), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch brands:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch brands' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
