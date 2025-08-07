import { Palette, Home, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Canvas Art Collection",
    description: "Original paintings in diverse styles - acrylic, oil, watercolor, mixed media, spiritual artwork, and portrait paintings.",
    features: ["Multiple mediums", "Portrait paintings", "Spiritual themes", "Abstract compositions"]
  },
  {
    icon: Home,
    title: "Wall Murals & Paintings", 
    description: "From abstract designs to realistic landscapes, spiritual themes to motivational office murals, cartoon characters to elegant botanical patterns.",
    features: ["Abstract & realistic styles", "Educational & office spaces", "Spiritual & cultural themes", "Custom installations"]
  },
  {
    icon: Sparkles,
    title: "Texture & Mixed Media",
    description: "Innovative texture art and mixed media installations that add dimension, character, and vibrant energy to any space.",
    features: ["3D texture work", "Mixed media portraits", "Custom digital murals", "Installation art"]
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground animate-fade-in">
            Services & Commissions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Bring your vision to life with custom artwork designed specifically for your space, style, and story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 shadow-medium hover:shadow-large transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Commission Process */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-large max-w-4xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-accent mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-foreground">
            Ready to Commission Your Piece?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every commission begins with a conversation. Let's discuss your vision, space, and 
            timeline to create something truly unique for you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent mb-2">1</div>
              <h4 className="font-semibold mb-2">Consultation</h4>
              <p className="text-sm text-muted-foreground">
                We discuss your vision, space, and preferences
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">2</div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">
                I create sketches and mockups for your approval
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">3</div>
              <h4 className="font-semibold mb-2">Creation</h4>
              <p className="text-sm text-muted-foreground">
                Your artwork comes to life with regular updates
              </p>
            </div>
          </div>
          
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:shadow-medium hover:scale-105 transition-smooth px-8 py-4"
          >
            Request a Commission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;