'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReviewCarousel from '../components/reviews';
import FAQ from '../components/faq';

export default function AboutPage() {
  return (
    <div className="bg-gray-100">
      <div className='container mx-auto p-8 py-20 mt-20'>
        {/* Header */}
        <h1 className="text-6xl font-bold text-center mb-12 font-comforter">About Us</h1>

        {/* Company Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            At ADR Bike Rentals, we are passionate about providing a seamless and enjoyable biking experience. Our journey began with a simple idea: to make quality bike rentals accessible to everyone, no matter where they are. With a focus on customer satisfaction and a commitment to maintaining top-notch vehicles, we strive to be the go-to choice for all biking enthusiasts.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to revolutionize the bike rental industry by offering exceptional service, diverse vehicle options, and affordable prices. We aim to empower our customers with the freedom to explore new places and enjoy their adventures without the hassle of vehicle ownership.
          </p>
        </section>

        {/* Team Section */}
        {/* <section className='mb-12'>
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
     
            <motion.div
              className="flex bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-auto w-1/2">
                <Image
                  src="/dhruba.png"
                  alt="Dhruba Jyoti Borah"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 w-1/2">
                <h3 className="text-2xl font-semibold mb-2">Dhruba Jyoti Borah</h3>
                <p className="text-gray-600">Business Development Officer</p>
                <p className="text-gray-700 mt-4">
                Dhruba drives ADR Bike Rentals growth with his innovative strategies and passion for expanding the business, making biking accessible and enjoyable for all.                             </p>
              </div>
            </motion.div>

            <motion.div
              className="flex bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-auto w-1/2">
                <Image
                  src="/Me.jpeg"
                  alt="Deep Patowary"
                  layout="fill"
                  objectFit="cover"
                  
                />
              </div>
              <div className="p-6 w-1/2">
                <h3 className="text-2xl font-semibold mb-2">Deep Patowary</h3>
                <p className="text-gray-600">Software Developer</p>
                <p className="text-gray-700 mt-4">
                  Deep is the talented software developer behind ADR Bike Rentals seamless platform. His expertise in technology ensures that our customers have an efficient and enjoyable experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section> */}
      </div>
        <FAQ/>
        <ReviewCarousel/>
    </div>
  );
}
