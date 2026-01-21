import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <Header />

      {/* Główna treść strony */}
      <main className="layout__main">{children}</main>

      <Footer />
    </div>
  );
}
