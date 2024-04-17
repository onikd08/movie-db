import { Sora } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "A movie collection website made with Next.js",
};

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`dark:bg-dark font-[Sora] bg-white dark:text-white text-dark ${sora.className}`}
      >
        {children}
      </body>
    </html>
  );
}
