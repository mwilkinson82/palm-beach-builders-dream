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

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="text-sm uppercase tracking-[0.2em] font-light text-foreground">
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
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="text-sm uppercase tracking-[0.2em] font-light text-foreground">
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

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm uppercase tracking-[0.2em] font-light text-foreground">
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

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm uppercase tracking-[0.2em] font-light text-foreground">
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

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm uppercase tracking-[0.2em] font-light text-foreground">
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
                    className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500"
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

                {/* Map Placeholder */}
                <div className="aspect-video bg-muted/30 hover:bg-muted/40 transition-colors duration-500" />
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
