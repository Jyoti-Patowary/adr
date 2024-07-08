import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/serviceCard";
import CategoriesAndStore from "./components/categoryAndStore";
import FAQ from "./components/faq";
import VehicleListings from "./components/vehicleListing";
import ReviewCarousel from "./components/reviews";
import WeAreGoingLiveSoon from "./components/live";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
     {/* <Hero/>
     <Services/>
     <CategoriesAndStore/>
     <VehicleListings/>
     <FAQ/>
     <ReviewCarousel/> */}
     <WeAreGoingLiveSoon/>
    </main>
  );
}
