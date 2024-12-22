import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Kurja Interiors",
  description: "Kurja Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-slate-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
