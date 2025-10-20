"use client";
import "./globals.css";
import { useState } from "react";
import { LangProvider } from "./context/LangContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <CartProvider>
            <LayoutInner>{children}</LayoutInner>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}

function LayoutInner({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenCart={() => setOpen(true)} />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">{children}</main>
      <Footer />
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
