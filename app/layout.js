import { Geist, Geist_Mono, STIX_Two_Text, Sarabun } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stix = STIX_Two_Text({
  weight: "400",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})


export const metadata = {
  title: "FullStack Next.js 15 + MySQL",
  description: "FullStack Next.js 15 and MySQL with Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${stix.className} ${sarabun.className} antialiased`}
      >
        <main>
          <Navbar />
          <div className="container mx-auto px-6 py-8 min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
        
      </body>
    </html>
  );
}
