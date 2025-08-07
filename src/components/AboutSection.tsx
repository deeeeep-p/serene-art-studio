import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Portrait */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={artistPortrait}
                alt="Elena Martinez - Contemporary Artist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              About the Artist
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Elena Martinez is a contemporary artist whose work bridges the gap between 
                traditional painting techniques and modern aesthetic sensibilities. Based in 
                her light-filled studio, she creates pieces that speak to the soul while 
                elevating the spaces they inhabit.
              </p>
              
              <p>
                With over eight years of experience in fine arts, Elena specializes in 
                large-scale wall murals and intimate canvas paintings. Her work is 
                characterized by soft, organic forms and a carefully curated palette 
                of warm neutrals and gentle pastels.
              </p>
              
              <p>
                "Art should feel like coming home," Elena believes. "Each piece I create 
                is designed to tell a story—sometimes it's the client's story, sometimes 
                it's the story of the space itself. My goal is always to create something 
                that feels both timeless and deeply personal."
              </p>
              
              <p className="text-accent-foreground font-medium">
                When she's not painting, Elena enjoys exploring local galleries, 
                hiking in nature for inspiration, and sharing her knowledge through 
                workshops for emerging artists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;