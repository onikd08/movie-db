import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "A movie collection website made with Next.js",
};

export default function RootLayout({ children, modal, params: { lang } }) {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar lang={lang} />
          <div>
            <div id="modal-root-container">{modal}</div>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
