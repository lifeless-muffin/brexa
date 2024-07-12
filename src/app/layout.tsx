import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/components/navigation/navbar";
import ScrollUp from "./utils/scrollUp";

export const metadata: Metadata = {
  title: "BREXA",
  description: "Brexa - Online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body>
				<ScrollUp />
        <div className="layout_nav_wrapper">
          <Navbar />
        </div>
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
