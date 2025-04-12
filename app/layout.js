import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google"; // Import DM Sans
import "./globals.css";
import Navber from "./components/Navber/page";
import Footer from './components/footer/page';
import Head from 'next/head';

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add weights if needed
});

export const metadata = {
  title: "Editors Cloud",
  description: "Backgound Removal| Image Editing | Video Editing",
  keywords: [
    "background removal",
    "image editing",
    "video editing",
    "photo editing",
    "AI tools",
    "image processing",
    "video processing",
    "image enhancement",
    "video enhancement",
    "AI image editing",
    "AI video editing",
    "AI background removal",
    "AI photo editing",
    "AI video processing",
    "AI image processing",
    "AI image enhancement",
    "AI video enhancement",   
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased bg-white`}
      >
        <Navber />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
