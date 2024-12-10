import { ReactNode } from "react";
import ClientSessionProvider from "./components/ClientSessionProvider";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import './styles/styles.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poiret+One&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"/>
      </head>
      <body >
        {/* Обёртка клиента */}
        <ClientSessionProvider>
          <div className="page grid grid-cols-[280px_1fr] gap-6">
            <div className="sidebar-outer">
              <Sidebar/>
            </div>
            <div className="page-wrapper pr-10">
              <Header />
              {children}
            </div>
          </div>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
