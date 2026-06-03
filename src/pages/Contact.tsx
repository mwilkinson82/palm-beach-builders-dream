import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

// Contact page specific schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Beau Monde Builders",
  description: "Schedule a private consultation for your luxury custom home in Palm Beach. Contact us at (561) 646-8992 or visit our Worth Avenue office.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Beau Monde Builders",
    telephone: "+1-561-646-8992",
    email: "ajhoover@mac.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "205 Worth Avenue, Suite 120",
      addressLocality: "Palm Beach",
      addressRegion: "FL",
      postalCode: "33480",
      addressCountry: "US"
    }
  }
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Schedule a private consultation with Beau Monde Builders. Visit us at 205 Worth Avenue, Palm Beach or call (561) 646-8992. Office hours: Mon-Fri 9AM-5PM."
        canonical="/contact"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" }
      ]} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Editorial atelier layout */}
        <section className="pt-32 md:pt-40 pb-10 md:pb-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-baseline gap-10 md:gap-24 border-b border-accent/20 pb-16 md:pb-20 animate-fade-in">
              <div className="flex-1">
                <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-accent font-sans font-medium mb-6 md:mb-8">
                  Begin Your Journey
                </p>
                <h1 className="font-display italic font-light leading-[0.9] tracking-tight text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  Let's Create Something
                  <span className="block not-italic font-light opacity-90">Extraordinary</span>
                </h1>
              </div>
              <div className="md:w-1/3">
                <p className="font-sans text-foreground/70 font-light leading-relaxed text-base md:text-lg">
                  Our atelier accepts a limited number of commissions each year. Share your vision and we will respond within twenty-four hours to arrange a private consultation on Worth Avenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RevealAnimation animation="luxury-reveal">
          <section className="pb-20 md:pb-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                {/* Form */}
                <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-12 md:space-y-14">
                  <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                    <FieldUnderline id="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} required />
                    <FieldUnderline id="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                    <FieldUnderline id="email" type="email" label="Direct Email" value={formData.email} onChange={handleInputChange} required placeholder="you@example.com" />
                    <FieldUnderline id="phone" type="tel" label="Contact Phone" value={formData.phone} onChange={handleInputChange} placeholder="(561) 000-0000" />
                  </div>
                  <FieldUnderline id="message" label="Tell Us About Your Vision" value={formData.message} onChange={handleInputChange} required textarea placeholder="A few notes about your project, location, and timeline…" />

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden group bg-primary text-primary-foreground px-12 md:px-16 py-5 md:py-6 text-[10px] md:text-[11px] font-sans font-medium tracking-[0.35em] uppercase transition-all hover:shadow-2xl hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
                    >
                      <span className="relative z-10">{isSubmitting ? "Sending…" : "Talk to Beau Monde"}</span>
                      <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" aria-hidden="true" />
                    </button>
                  </div>
                </form>

                {/* Atelier info + map */}
                <aside className="lg:col-span-5 flex flex-col gap-12 md:gap-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div className="space-y-10 md:space-y-12">
                    <InfoBlock eyebrow="Atelier Location">
                      <p className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                        205 Worth Avenue, Suite 120<br />Palm Beach, FL 33480
                      </p>
                    </InfoBlock>

                    <InfoBlock eyebrow="Direct Line">
                      <a href="tel:+15616468992" className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors duration-500">
                        (561) 646-8992
                      </a>
                      <a href="mailto:ajhoover@mac.com" className="block font-sans text-sm md:text-base text-foreground/70 hover:text-accent transition-colors duration-500 mt-2 font-light">
                        ajhoover@mac.com
                      </a>
                    </InfoBlock>

                    <InfoBlock eyebrow="Studio Hours">
                      <div className="font-sans text-[13px] md:text-sm space-y-2 text-foreground/75 font-light">
                        <p className="flex justify-between max-w-[300px]"><span>Monday — Friday</span><span>9:00 — 17:00</span></p>
                        <p className="flex justify-between max-w-[300px]"><span>Saturday</span><span className="italic">By Appointment</span></p>
                        <p className="flex justify-between max-w-[300px]"><span>Sunday</span><span>Closed</span></p>
                      </div>
                    </InfoBlock>
                  </div>

                  {/* Framed map */}
                  <div className="relative group">
                    <div className="absolute -inset-3 md:-inset-4 border border-accent/15 pointer-events-none group-hover:border-accent/35 transition-colors duration-700" aria-hidden="true" />
                    <div className="relative bg-card p-2 shadow-2xl shadow-primary/5 overflow-hidden">
                      <div className="absolute top-3 left-3 z-10 text-foreground/40 font-sans text-[8px] md:text-[9px] tracking-[0.25em] uppercase pointer-events-none">
                        Ref · PB-33480
                      </div>
                      <div className="aspect-square w-full overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.8876!2d-80.0370!3d26.7015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7a3d1234567%3A0x1234567890abcdef!2s205%20Worth%20Ave%2C%20Palm%20Beach%2C%20FL%2033480!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Beau Monde Builders — 205 Worth Avenue, Palm Beach"
                          className="grayscale group-hover:grayscale-0 transition-all duration-1000 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </RevealAnimation>

        <Footer />
      </div>
    </>
  );
};

const FieldUnderline = ({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  textarea,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) => {
  const sharedClasses =
    "w-full bg-transparent border-b border-foreground/15 py-3 md:py-4 font-sans font-light text-base md:text-lg text-foreground placeholder:text-foreground/30 focus:outline-none transition-colors duration-500 peer";
  return (
    <div className="group relative">
      <label htmlFor={id} className="block text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-accent font-sans font-medium mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} rows={4} value={value} onChange={onChange} required={required} placeholder={placeholder} className={`${sharedClasses} resize-none`} />
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} className={sharedClasses} />
      )}
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 peer-focus:w-full" aria-hidden="true" />
    </div>
  );
};

const InfoBlock = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
  <div className="relative pl-6 md:pl-8">
    <span className="absolute left-0 top-1 bottom-1 w-px bg-accent/40" aria-hidden="true" />
    <h3 className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-accent font-sans font-medium mb-3">{eyebrow}</h3>
    {children}
  </div>
);

export default Contact;
