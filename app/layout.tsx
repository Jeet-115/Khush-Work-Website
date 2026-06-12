import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers";
import { fontVariables } from "@/lib/fonts";
import { baseMetadata, viewport } from "@/lib/metadata";
import "@/styles/globals.css";

export const metadata = baseMetadata;
export { viewport };

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
