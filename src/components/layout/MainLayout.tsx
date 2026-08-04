import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Header />
      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
