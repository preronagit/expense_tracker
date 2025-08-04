import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "react-day-picker";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter= Inter({subsets: ["latin"]});

export const metadata = {
  title: "Expense_Tracker",
  description: "one-stop solution for effortless expense tracking",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header></Header>

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Coded by Prerona</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
