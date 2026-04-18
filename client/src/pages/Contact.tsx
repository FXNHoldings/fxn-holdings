/*
 * FXN Holdings — Contact Page
 * Design: Kinetic Blueprint — dark slate, electric blue, amber gold
 * Sections: Hero, Contact Form, Company Info, FAQ
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Clock, Send, CheckCircle, MessageSquare, Briefcase, HelpCircle } from "lucide-react";
import { toast } from "sonner";

const contactReasons = [
  { icon: Briefcase, label: "Partnership Enquiry", value: "partnership" },
  { icon: MessageSquare, label: "Advertising Opportunity", value: "advertising" },
  { icon: Globe, label: "Website Collaboration", value: "collaboration" },
  { icon: HelpCircle, label: "General Enquiry", value: "general" },
];

const faqs = [
  {
    q: "What types of websites does FXN Holdings manage?",
    a: "FXN Holdings manages a diverse portfolio of digital web properties including ecommerce stores, travel and booking websites, blog and content networks, price comparison platforms, and affiliate marketing websites.",
  },
  {
    q: "Can I advertise on your websites?",
    a: "Yes, we welcome advertising partnerships across our portfolio. We offer display advertising, sponsored content, and affiliate arrangements. Please use the contact form to discuss your requirements.",
  },
  {
    q: "Is FXN Holdings a registered UK company?",
    a: "Yes. FXN Holdings Limited is incorporated and registered in England & Wales (Company Number: 16134139). We are also registered with the ICO for data protection purposes (Registration: ZB940664).",
  },
  {
    q: "Do you acquire existing websites?",
    a: "We are open to acquiring established web properties that align with our portfolio strategy. If you have a website for sale, please get in touch with details of your traffic, revenue, and niche.",
  },
  {
    q: "How can I collaborate with FXN Holdings?",
    a: "We welcome collaboration opportunities including content partnerships, affiliate arrangements, joint ventures, and technology partnerships. Please reach out via the contact form to start the conversation.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Simulate form submission
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 2 business days.");
  };

  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── Page Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_240)]" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[oklch(0.62_0.2_220/0.06)] blur-3xl" />
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">GET IN TOUCH</span>
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
            </div>
            <h1
              className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Contact{" "}
              <span className="text-gradient-blue">FXN Holdings</span>
            </h1>
            <p className="text-[oklch(0.75_0.02_240)] text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're looking to partner, advertise, or simply learn more about our portfolio, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-['Space_Grotesk'] font-600 text-white text-2xl mb-6">
                Company Information
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[oklch(0.62_0.2_220)]" />
                  </div>
                  <div>
                    <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs mb-1">WEBSITE</p>
                    <a
                      href="https://www.fxnholdings.com"
                      className="text-[oklch(0.85_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors"
                    >
                      www.fxnholdings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[oklch(0.62_0.2_220)]" />
                  </div>
                  <div>
                    <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs mb-1">EMAIL</p>
                    <a
                      href="mailto:info@fxnholdings.com"
                      className="text-[oklch(0.85_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors"
                    >
                      info@fxnholdings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[oklch(0.62_0.2_220)]" />
                  </div>
                  <div>
                    <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs mb-1">REGISTERED</p>
                    <p className="text-[oklch(0.85_0.02_240)] text-sm">
                      England &amp; Wales<br />
                      <span className="mono-label text-[oklch(0.55_0.02_240)] text-xs">Co. No. 16134139</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[oklch(0.62_0.2_220)]" />
                  </div>
                  <div>
                    <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs mb-1">RESPONSE TIME</p>
                    <p className="text-[oklch(0.85_0.02_240)] text-sm">Within 2 business days</p>
                  </div>
                </div>
              </div>

              {/* Enquiry types */}
              <div className="bg-[oklch(0.22_0.035_240)] border border-white/10 p-5">
                <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs mb-4">WE WELCOME ENQUIRIES ABOUT</p>
                <div className="flex flex-col gap-3">
                  {contactReasons.map((r) => (
                    <div key={r.value} className="flex items-center gap-3">
                      <r.icon className="w-4 h-4 text-[oklch(0.62_0.2_220)]" />
                      <span className="text-[oklch(0.75_0.02_240)] text-sm">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-[oklch(0.22_0.035_240)] border border-[oklch(0.62_0.2_220/0.4)] p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-[oklch(0.62_0.2_220)] mb-6" />
                  <h3 className="font-['Space_Grotesk'] font-700 text-white text-2xl mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[oklch(0.65_0.02_240)] text-base max-w-sm">
                    Thank you for reaching out to FXN Holdings. We'll review your message and get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[oklch(0.22_0.035_240)] border border-white/10 p-8"
                >
                  <h2 className="font-['Space_Grotesk'] font-600 text-white text-2xl mb-6">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="mono-label text-[oklch(0.55_0.02_240)] text-xs block mb-2">
                        FULL NAME <span className="text-[oklch(0.62_0.2_220)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[oklch(0.18_0.04_240)] border border-white/10 text-white placeholder-[oklch(0.45_0.02_240)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.62_0.2_220)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="mono-label text-[oklch(0.55_0.02_240)] text-xs block mb-2">
                        EMAIL ADDRESS <span className="text-[oklch(0.62_0.2_220)]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-[oklch(0.18_0.04_240)] border border-white/10 text-white placeholder-[oklch(0.45_0.02_240)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.62_0.2_220)] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="mono-label text-[oklch(0.55_0.02_240)] text-xs block mb-2">
                        COMPANY (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full bg-[oklch(0.18_0.04_240)] border border-white/10 text-white placeholder-[oklch(0.45_0.02_240)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.62_0.2_220)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mono-label text-[oklch(0.55_0.02_240)] text-xs block mb-2">
                        ENQUIRY TYPE
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full bg-[oklch(0.18_0.04_240)] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.62_0.2_220)] transition-colors appearance-none"
                      >
                        <option value="" className="bg-[oklch(0.18_0.04_240)]">Select a reason</option>
                        {contactReasons.map((r) => (
                          <option key={r.value} value={r.value} className="bg-[oklch(0.18_0.04_240)]">
                            {r.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="mono-label text-[oklch(0.55_0.02_240)] text-xs block mb-2">
                      MESSAGE <span className="text-[oklch(0.62_0.2_220)]">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your enquiry..."
                      rows={6}
                      className="w-full bg-[oklch(0.18_0.04_240)] border border-white/10 text-white placeholder-[oklch(0.45_0.02_240)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.62_0.2_220)] transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 bg-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.55_0.22_220)] text-white py-4 font-['Space_Grotesk'] font-600 text-sm transition-all duration-300 glow-blue"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[oklch(0.45_0.02_240)] text-xs mt-4 text-center">
                    By submitting this form, you agree to our Privacy Policy. We will never share your information with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[oklch(0.16_0.038_240)] relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">FAQ</span>
            </div>
            <h2
              className="font-['Space_Grotesk'] font-700 text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-[oklch(0.22_0.035_240)] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-['Space_Grotesk'] font-500 text-white text-sm pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[oklch(0.62_0.2_220)] transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-white/5">
                    <p className="text-[oklch(0.65_0.02_240)] text-sm leading-relaxed pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
