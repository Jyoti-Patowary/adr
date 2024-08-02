import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/serviceCard";
import CategoriesAndStore from "./components/categoryAndStore";
import FAQ from "./components/faq";
import VehicleListings from "./components/vehicleListing";
import ReviewCarousel from "./components/reviews";
import WeAreGoingLiveSoon from "./components/live";
import AboutSection from "./components/about";
import Gallery from "./components/lifeAtAdr";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
     <Hero/>
     <VehicleListings/>
     <AboutSection/>
     <Services/>
     <CategoriesAndStore/>
     <Gallery/>
     <FAQ/>
     <ReviewCarousel/> 
     {/* <ContactForm/> */}
     {/* <WeAreGoingLiveSoon/> */}
    </main>
  );
}
