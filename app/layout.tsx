import { ReactNode } from "react";
import ClientSessionProvider from "./components/ClientSessionProvider";
import Head from "next/head";
import { Montserrat_Alternates, Poiret_One, Sofia_Sans, Source_Sans_3 } from 'next/font/google'

import localFont from "next/font/local";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import './styles/styles.css';

const ma = Montserrat_Alternates({
  subsets: ['cyrillic'], 
  weight: ['300', '400', '600', '700'],});

const poiret = Poiret_One({
  subsets: ['cyrillic'],
  weight: ['400']
});
const sofia = Sofia_Sans({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600']
});
const ss3 = Source_Sans_3({
  subsets: ['cyrillic'], 
  weight: ['300', '400', '600', '700'],});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poiret+One&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet"/>
      </Head>
      <body >
        {/* Обёртка клиента */}
        <ClientSessionProvider>
          <div className="page grid grid-cols-[250px_1fr] gap-4">
            <div className="">
              <Sidebar/>
              ich bin auslender
            </div>
            <div className="page-wrapper">
              <Header />
            </div>
          </div>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
