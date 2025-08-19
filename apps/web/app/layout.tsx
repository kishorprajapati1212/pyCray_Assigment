import "./style.css";
import React from "react";

export const metadata = {
  title: "Event App",
  description: "Simple Add/Delete Event App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
