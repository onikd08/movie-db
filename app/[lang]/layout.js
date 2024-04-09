import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Sora } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "A movie collection website made with Next.js",
};

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`dark:bg-black font-[Sora] bg-white dark:text-white text-dark ${sora.className}`}
      >
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar lang={lang} />
            {children}
            <div id="modal-root-container"></div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
