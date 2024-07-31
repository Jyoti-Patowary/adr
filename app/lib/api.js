export const fetchVehicles = async (filters) => {
    try {
      const response = await fetch(`/api/vehicles?filter=${filters.filter}&type=${filters.type}`);
      if (!response.ok) throw new Error(`Failed to fetch vehicles: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      return [];
    }
  };
  
  export const fetchBrands = async (type) => {
    try {
      const response = await fetch(`/api/brands?type=${type}`);
      if (!response.ok) throw new Error(`Failed to fetch brands: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching brands:', error);
      return [];
    }
  };
  