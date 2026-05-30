import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · FXN Holdings Limited",
  description: privacy.lede,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return <LegalDocView doc={privacy} />;
}
