import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

import { useCursorLight } from "../hooks/useCursorLight";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  useCursorLight();

  return (
    <>
      <div id="cursor-light" />

      <div className="layout">
        <Header />
        {/* Główna treść strony */}
        <main className="layout__main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
