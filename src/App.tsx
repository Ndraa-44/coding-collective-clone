import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Community = lazy(() => import("./pages/Community"));
const Contact = lazy(() => import("./pages/Contact"));

// Komponen HOC untuk membungkus halaman dengan efek transisi
const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full flex flex-col"
    >
      {children}
    </motion.div>
  );
};

// Fallback loader saat lazy component diunduh
const PageLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Suspense fallback={<PageLoader />}><Home /></Suspense></PageTransition>} />
        <Route path="/about" element={<PageTransition><Suspense fallback={<PageLoader />}><About /></Suspense></PageTransition>} />
        <Route path="/services" element={<PageTransition><Suspense fallback={<PageLoader />}><Services /></Suspense></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Suspense fallback={<PageLoader />}><Industries /></Suspense></PageTransition>} />
        <Route path="/community" element={<PageTransition><Suspense fallback={<PageLoader />}><Community /></Suspense></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Suspense fallback={<PageLoader />}><Contact /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </>
  );
}

export default App;
