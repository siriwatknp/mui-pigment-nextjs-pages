import { Inter } from "next/font/google";
import LandingPage from "@/landing-page/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <LandingPage />;
}
