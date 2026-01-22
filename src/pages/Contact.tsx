import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RevealAnimation } from "@/components/RevealAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-light mb-4 md:mb-6">
              Begin Your Journey
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-light text-foreground mb-6 md:mb-8 tracking-tight">
              Let's Create <span className="font-serif italic">Something Extraordinary</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Schedule a private consultation to discuss your vision for luxury living in Palm Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <RevealAnimation animation="luxury-reveal">
        <section className="py-16 md:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8 md:space-y-12 animate-fade-in">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-foreground">Talk to Beau Monde Today</h2>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    Share your vision with us. Our team will respond within 24 hours to schedule 
                    your private consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="firstName" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-light text-foreground block">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                        className="bg-transparent border-border/30 focus:border-accent transition-colors duration-500" 
                      />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="lastName" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-light text-foreground block">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                        className="bg-transparent border-border/30 focus:border-accent transition-colors duration-500" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="email" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-light text-foreground block">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="bg-transparent border-border/30 focus:border-accent transition-colors duration-500" 
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="phone" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-light text-foreground block">
                      Phone
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-transparent border-border/30 focus:border-accent transition-colors duration-500" 
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="message" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-light text-foreground block">
                      Tell Us About Your Vision
                    </label>
                    <Textarea 
                      id="message" 
                      rows={6} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      className="bg-transparent border-border/30 focus:border-accent transition-colors duration-500" 
                    />
                  </div>

                  <Button 
                    type="submit"
                    variant="outline" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-14 md:h-12 text-base border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 touch-manipulation"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
                    Visit Our Offices
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Experience the Beau Monde Builders difference at our Palm Beach location.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm uppercase tracking-[0.2em] font-light text-foreground">Location</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        205 Worth Avenue, Suite 120<br />
                        Palm Beach, FL 33480
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm uppercase tracking-[0.2em] font-light text-foreground">Phone</h3>
                      <a href="tel:+15616468992" className="text-muted-foreground hover:text-accent transition-colors duration-500 font-light">
                        (561) 646-8992
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm uppercase tracking-[0.2em] font-light text-foreground">Email</h3>
                      <a href="mailto:info@beaumondebuilders.com" className="text-muted-foreground hover:text-accent transition-colors duration-500 font-light">
                        info@beaumondebuilders.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm uppercase tracking-[0.2em] font-light text-foreground">Hours</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Monday – Friday: 9:00 AM – 5:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.8876!2d-80.0370!3d26.7015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7a3d1234567%3A0x1234567890abcdef!2s205%20Worth%20Ave%2C%20Palm%20Beach%2C%20FL%2033480!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beau Monde Builders Location - 205 Worth Avenue, Palm Beach"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      <Footer />
    </div>
  );
};

export default Contact;
