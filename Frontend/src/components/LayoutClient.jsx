"use client";

import { Toaster } from "react-hot-toast";

export default function LayoutClient({ children }) {
  return (
    <>
      {children}
      <Toaster position="top-right" />
    </>
  );
}
