import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import "../globals.css";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "A movie collection website made with Next.js",
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-black font-[Sora] bg-white dark:text-white text-dark">
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar lang={lang} />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
