import { SITE_NAME } from "@/constants/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <p className="text-muted-foreground text-sm">{SITE_NAME}</p>
    </main>
  );
}
