/*
 * Structured legal content for FXN Holdings Limited (UK).
 * English; adapted to UK GDPR / Data Protection Act 2018 and England & Wales law.
 * Company facts: FXN Holdings Limited · Reg. England & Wales · Co. No. 16134139 ·
 * ICO ZB940664 · info@fxnholdings.com · https://www.fxnholdings.com
 */

export type LegalSection = {
  h: string;
  p?: string[];
  ul?: string[];
  table?: { head: [string, string]; rows: [string, string][] };
};

export type LegalDoc = {
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
};

export const UPDATED = "30 May 2026";

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  lede: "How we collect, use and protect your personal data, in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Who we are",
      p: [
        "This website, https://www.fxnholdings.com (the “Website”), is operated by FXN Holdings Limited (“we”, “us”, “our”), a company incorporated in England & Wales.",
        "Company number: 16134139. ICO registration: ZB940664. Contact email: info@fxnholdings.com.",
        "For the purposes of the UK GDPR and the Data Protection Act 2018, FXN Holdings Limited is the data controller of the personal data processed through the Website.",
      ],
    },
    {
      h: "2. The personal data we collect",
      p: [
        "This is an informational corporate website. It does not sell products or services, require an account, or use analytics or advertising tracking. We keep data collection to a minimum.",
      ],
      ul: [
        "Information you give us: when you contact us by email or through a form, we receive your name, email address, company (if provided) and the contents of your message.",
        "Technical data collected automatically: our hosting provider and web server may log limited technical information such as IP address, browser type, device information, referring page, and the date and time of your visit.",
        "Cookies and storage: we use only strictly necessary storage — see our Cookie Policy.",
      ],
    },
    {
      h: "3. Why we process your data and our legal bases",
      table: {
        head: ["Purpose", "Legal basis (Article 6 UK GDPR)"],
        rows: [
          ["Responding to your enquiries and correspondence", "Legitimate interests (Art. 6(1)(f)); or steps taken at your request prior to a contract (Art. 6(1)(b))"],
          ["Operating, maintaining and securing the Website", "Legitimate interests (Art. 6(1)(f))"],
          ["Complying with legal obligations", "Legal obligation (Art. 6(1)(c))"],
        ],
      },
      p: [
        "Where we rely on legitimate interests, we have assessed that those interests are not overridden by your rights and freedoms. You may object at any time (see Section 7). We do not carry out automated decision-making or profiling under Article 22 UK GDPR, and we do not knowingly collect special categories of data (Article 9 UK GDPR).",
      ],
    },
    {
      h: "4. How we share your data",
      p: ["We do not sell your personal data and do not share it for advertising purposes. We may disclose data to:"],
      ul: [
        "service providers acting as our processors (such as our hosting and email providers), under a data-processing agreement;",
        "professional advisers (such as lawyers or accountants) where necessary;",
        "public authorities or regulators where required by law.",
      ],
    },
    {
      h: "5. International transfers",
      p: [
        "Where a provider processes data outside the United Kingdom, we ensure an appropriate safeguard is in place, such as a UK adequacy decision or, where required, the UK International Data Transfer Agreement (IDTA) or the Addendum to the EU Standard Contractual Clauses under Article 46 UK GDPR.",
      ],
    },
    {
      h: "6. How long we keep your data",
      ul: [
        "Enquiry and correspondence data: kept only as long as needed to handle your enquiry and a reasonable period afterwards, then deleted.",
        "Server-log data: kept for a short period for security and diagnostics, then deleted or anonymised.",
      ],
      p: ["We may keep certain information longer where required to comply with a legal obligation or to establish, exercise or defend legal claims."],
    },
    {
      h: "7. Your rights",
      p: [
        "Under the UK GDPR you have the right to access, rectification, erasure, restriction, data portability, to object to processing based on legitimate interests, and to withdraw consent where processing is based on consent.",
        "To exercise any of these rights, email us at info@fxnholdings.com. We will respond within one month, as required by Article 12 UK GDPR.",
      ],
    },
    {
      h: "8. Complaints",
      p: ["If you believe we have not handled your data properly, please contact us first. You also have the right to lodge a complaint with the supervisory authority:"],
      ul: [
        "United Kingdom: Information Commissioner’s Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF — https://ico.org.uk",
        "Or the supervisory authority in your country of residence.",
      ],
    },
    {
      h: "9. Visitors from outside the United Kingdom",
      ul: [
        "European Economic Area: we process EEA visitors’ data consistently with the EU GDPR (Regulation (EU) 2016/679).",
        "California, USA: we do not sell or share your personal information as defined under the CCPA/CPRA; California residents may exercise rights to know, delete and correct by contacting us.",
        "Australia: we handle personal information consistently with the Australian Privacy Principles under the Privacy Act 1988 (Cth).",
        "Other countries: we comply with applicable data-protection laws where we operate.",
      ],
    },
    {
      h: "10. Children",
      p: ["The Website is not directed at children and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it."],
    },
    {
      h: "11. Changes to this Privacy Policy",
      p: ["We may update this policy from time to time. The date above shows the latest revision; material changes will be posted on this page."],
    },
    {
      h: "12. Contact",
      p: ["Questions about this Privacy Policy or your personal data: FXN Holdings Limited — info@fxnholdings.com — registered in England & Wales, Company No. 16134139."],
    },
  ],
};

export const cookies: LegalDoc = {
  title: "Cookie Policy",
  lede: "How this website uses cookies and similar local-storage technologies.",
  updated: UPDATED,
  sections: [
    {
      h: "1. What cookies are",
      p: ["Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and pixels."],
    },
    {
      h: "2. The cookies we use",
      p: [
        "This Website uses only strictly necessary cookies and storage — those essential for it to function and be secure. We do not use analytics, performance, advertising or social-media tracking cookies, and we do not build profiles about visitors.",
        "Under the UK Privacy and Electronic Communications Regulations (PECR), strictly necessary cookies do not require prior consent, but we must tell you about them.",
        "If we later add analytics or marketing tools, we will add a consent banner and update this policy.",
      ],
    },
    {
      h: "3. Managing cookies",
      p: ["Most browsers let you view, manage, delete and block cookies. Because we use only strictly necessary storage, blocking it may stop parts of the Website from working. Guidance is available at https://www.aboutcookies.org or in your browser’s help section."],
    },
    {
      h: "4. Changes to this Cookie Policy",
      p: ["If our use of cookies changes, we will update this page and, where required by law, ask for your consent."],
    },
    {
      h: "5. Contact",
      p: ["Questions about cookies: info@fxnholdings.com. See also our Privacy Policy."],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  lede: "The terms that govern your access to and use of the FXN Holdings website.",
  updated: UPDATED,
  sections: [
    {
      h: "1. About these terms",
      p: ["These Terms of Service govern your access to and use of https://www.fxnholdings.com (the “Website”), operated by FXN Holdings Limited, a company registered in England & Wales (Company No. 16134139). By using the Website, you agree to these terms. If you do not agree, please do not use the Website."],
    },
    {
      h: "2. The Website is informational only",
      p: ["The Website provides general information about FXN Holdings Limited and its activities. Nothing on it is an offer to sell goods or services, financial, legal or professional advice, or a binding commitment. Do not rely on the content as a substitute for professional advice."],
    },
    {
      h: "3. Intellectual property",
      p: ["Unless stated otherwise, all content — including text, graphics, logos, the “FXN” and “FXN Holdings” names and marks, images and layout — is owned by or licensed to FXN Holdings Limited and protected by intellectual-property laws. You may view and print pages for personal, non-commercial use; you may not copy, reproduce, republish, distribute or commercially exploit any content without our prior written permission."],
    },
    {
      h: "4. Acceptable use",
      p: ["You agree not to:"],
      ul: [
        "use the Website unlawfully, fraudulently or for any harmful purpose;",
        "attempt to gain unauthorised access to the Website, its server or any connected system;",
        "introduce viruses or other malicious code;",
        "scrape or systematically extract data without our consent;",
        "use the Website in a way that could damage, disable or impair it or interfere with other users.",
      ],
    },
    {
      h: "5. Disclaimer",
      p: ["The Website and its content are provided “as is” and “as available” without warranties of any kind, to the fullest extent permitted by law. We do not warrant that the Website will be uninterrupted, secure or error-free, or that the information is accurate or complete."],
    },
    {
      h: "6. Limitation of liability",
      p: [
        "To the fullest extent permitted by law, FXN Holdings Limited will not be liable for any indirect, incidental or consequential loss, or any loss of data, profits or business, arising from your use of (or inability to use) the Website.",
        "Nothing excludes or limits our liability where it would be unlawful to do so — including for death or personal injury caused by negligence, for fraud, or for any liability that cannot be excluded under applicable law.",
      ],
    },
    {
      h: "7. Third-party links",
      p: ["The Website may link to third-party websites for convenience. We do not control and are not responsible for their content, policies or practices. Links do not imply endorsement."],
    },
    {
      h: "8. Changes",
      p: ["We may change the Website or these Terms at any time. The current version applies each time you use the Website; the date above shows the latest revision."],
    },
    {
      h: "9. Governing law and jurisdiction",
      p: ["These Terms are governed by the laws of England & Wales. The courts of England & Wales have exclusive jurisdiction over any dispute, except that consumers retain the benefit of mandatory consumer-protection rules and the right to bring proceedings in their country of residence where the applicable law gives that right."],
    },
    {
      h: "10. Contact",
      p: ["FXN Holdings Limited — info@fxnholdings.com — registered in England & Wales, Company No. 16134139."],
    },
  ],
};

export const legalDocs = { privacy, cookies, terms } as const;
