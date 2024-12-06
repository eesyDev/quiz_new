"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import Header from "./Header";

import store from "../redux/store";
import Sidebar from "./Sidebar";

export default function ClientSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setSession(data);
    }

    fetchSession();
  }, []);

  return <SessionProvider session={session}>
            <Provider store={store}>
              {children}
            </Provider>
        </SessionProvider>;
}
