import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 h-full text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Making Invoices easier</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign in</Link>
        </Button>
      </p>
    </main>
  );
}
