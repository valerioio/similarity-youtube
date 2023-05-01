import { Inter } from "next/font/google";
import Paragraph from "@/components/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Paragraph size="sm" />
    </main>
  );
}
