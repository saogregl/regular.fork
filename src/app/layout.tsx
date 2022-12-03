"use client";

import { SessionProvider } from "next-auth/react";
import "../styles/index.scss";
import { GlobalTheme } from "@carbon/react";
import UiShell from "../components/Shell/UiShell";
import "@carbon/ibm-security/css/index.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <SessionProvider>
        <body>
          <UiShell>{children}</UiShell>
        </body>
      </SessionProvider>
    </html>
  );
}
