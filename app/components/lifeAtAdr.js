// pages/index.js
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container py-10 px-4 md:px-9 grid grid-cols-2 md:grid-cols-4 gap-4">
      <h1 className="text-2xl md:text-5xl font-bold text-left flex justify-center items-center px-16 h-auto bg-yellow-300 rounded-lg text-white">
        Life with ADR Rentals
      </h1>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/cars/i10.jpg"
            alt="Image 1"
            width={500}
            height={800}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/cars/duster.jpg"
            alt="Image 3"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col justify-end">
          <Image
            className="h-40 max-w-full rounded-lg object-cover"
            src="/cars/i20.webp"
            alt="Image 4"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-40 max-w-full rounded-lg object-cover"
            src="/cars/k10.webp"
            alt="Image 5"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-40 md:h-full max-w-full rounded-lg"
            src="/bikes/classic350.jpg"
            alt="Image 7"
            width={500}
            height={500}
            objectFit="contain" 
          />
        </div>
        <div>
          <Image
            className="h-40 md:h-full max-w-full object-cover rounded-lg"
            src="/bikes/jawa42.jpg"
            alt="Image 8"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
