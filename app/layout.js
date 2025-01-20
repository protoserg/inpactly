import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// this will apply to literally all of the pages in your app
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inpactly",
  description: "Impact your growth with feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dim" className="scroll-smooth">
      <body className={inter.className}>
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}
