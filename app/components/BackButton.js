'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="text-center pt-4">
      <button
        onClick={() => router.back()}
        className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Back to Listings
      </button>
    </div>
  );
}
