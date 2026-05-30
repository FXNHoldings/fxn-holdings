import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { cookies } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy · FXN Holdings Limited",
  description: cookies.lede,
  alternates: { canonical: "/cookies/" },
};

export default function CookiesPage() {
  return <LegalDocView doc={cookies} />;
}
