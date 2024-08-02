import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { comforter, poppins } from "./utils/fonts";

export const metadata = {
  title: "All Day Ride | Car and Bike Rentals",
  description: "All Day Ride offers a comprehensive platform for renting cars and bikes, exploring the latest trends in transportation, and reading insightful blogs. Discover our user-friendly rental services and expert advice.",
  // Open Graph tags
  openGraph: {
    title: "All Day Ride",
    description: "A comprehensive platform for all your riding needs, from renting cars and bikes to exploring blogs about the latest trends in transportation.",
    url: "https://www.alldayride.in",
    image: "https://www.alldayride.in/", 
    site_name: "All Day Ride",
  },
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "All Day Ride",
    description: "Explore All Day Ride for all your vehicle rental needs and stay updated with the latest transportation trends.",
    image: "https://www.alldayride.in/", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="car rentals, bike rentals, scooty rentals, scooter rentals, guwahati rentals, guwahati ride, transportation blogs, vehicle rentals, rental services" />
        <meta name="author" content="All Day Ride Team" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.variable}`}>
        <Navbar/>
        <main className={`${poppins.variable} ${comforter.variable} font-poppins`}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
