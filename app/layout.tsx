import type { ReactNode } from "react";

import { Footer, Header, JsonLd, SkipLink } from "@/components/layout";
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
        <JsonLd />
        <AppProviders>
          <SkipLink />
          <Header />
          <main
            id="main-content"
            className="flex flex-1 flex-col"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
