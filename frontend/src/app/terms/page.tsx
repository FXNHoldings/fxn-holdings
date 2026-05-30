import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service · FXN Holdings Limited",
  description: terms.lede,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return <LegalDocView doc={terms} />;
}
