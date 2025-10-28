"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/Components/Navbar";
import WhatsAppButton from "@/Components/WhatsappButton";
import Footer from "@/Components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Paths where Navbar should not appear
  const hideNavbar =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/_not-found";

  return (
    <>
      {!hideNavbar && <NavBar />}
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}
