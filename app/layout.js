import { Geist, Geist_Mono, STIX_Two_Text, Sarabun } from "next/font/google";
import "./globals.css";

const stix = STIX_Two_Text({
  weight: "400",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
          <div className="container mx-auto px-5 py-8">
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}
