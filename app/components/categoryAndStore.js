import React from 'react';

export default function CategoriesAndStore() {
  const categoriesData = [
    {
      title: 'Bike',
      imageUrl: 'https://via.placeholder.com/150x100',
    },
    {
      title: 'Car',
      imageUrl: 'https://via.placeholder.com/150x100',
    },
    {
      title: 'Scooty',
      imageUrl: 'https://via.placeholder.com/150x100',
    },
    // Add more categories as needed
  ];

  const storeData = [
    {
      title: 'Store Item 1',
      description: 'Description for Store Item 1',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Store Item 2',
      description: 'Description for Store Item 2',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Store Item 3',
      description: 'Description for Store Item 3',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    // Add more store items as needed
  ];

  const CategoryCard = ({ title, imageUrl }) => {
    return (
      <div className="flex flex-col p-4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
        <img className="w-full h-32 object-cover" src={imageUrl} alt={title} />
        <div className="mt-2 text-center">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    );
  };

  const StoreItem = ({ title, description, imageUrl }) => {
    return (
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
      
      <h1 className="text-3xl font-bold text-center mt-6">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {storeData.map((storeItem, index) => (
          <StoreItem
            key={index}
            title={storeItem.title}
            description={storeItem.description}
            imageUrl={storeItem.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
