
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { comforter, poppins } from "./utils/fonts";



export const metadata = {
  title: "All Day Ride",
  description: "A comprehensive platform for all your riding needs, from renting cars and bikes to exploring blogs about the latest trends in transportation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {/* <Navbar/> */}
        <div className={`${poppins.variable} ${comforter.variable} font-poppins`}>{children}</div>
        {/* <Footer/> */}
        </body>
    </html>
  );
}
