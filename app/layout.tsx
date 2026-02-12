import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Rikki Villarma Portfolio",
  description: "Backend-focused developer building scalable business systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
