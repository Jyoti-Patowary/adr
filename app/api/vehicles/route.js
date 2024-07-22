import connectToDatabase from '../../lib/db';

export async function GET(req) {
  console.log('Received GET request');
  
  try {
    const db = await connectToDatabase();
    
    // Log the database connection object (limited information)
    console.log('Database connection object:', db);

    // Extract the query parameter
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const vehicleType = searchParams.get('vehicleType');
    
    console.log('Query parameter vehicleType:', vehicleType);

    let vehicles = [];

    if (vehicleType) {
      // Map vehicleType to the corresponding collection
      const collection = {
        bike: "bikes",
        car: "cars",
        scooter: "scooters"
      }[vehicleType];
      
      console.log('Using collection:', collection);

      if (!collection) {
        console.warn('Invalid vehicle type:', vehicleType);
        return new Response(JSON.stringify({ message: "Invalid vehicle type" }), { status: 400 });
      }
      
      // Fetch data from the specified collection
      console.log('Fetching data from collection:', collection);
      vehicles = await db.collection(collection).find({}).toArray();
    } else {
      // Fetch data from all collections if vehicleType is not specified
      console.log('Fetching data from all collections');
      const collections = ['bikes', 'cars', 'scooters'];
      
      const promises = collections.map(async (col) => {
        const data = await db.collection(col).find({}).toArray();
        return { collection: col, data };
      });
      
      const results = await Promise.all(promises);
      
      // Merge results from all collections
      vehicles = results.reduce((acc, { collection, data }) => {
        acc[collection] = data;
        return acc;
      }, {});
    }

    // Log the fetched vehicles
    console.log('Fetched vehicles:', vehicles);
    
    // Return the fetched vehicles
    return new Response(JSON.stringify(vehicles), { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
  }
}
