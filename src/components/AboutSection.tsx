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
                alt="Agnya Senghani P - Contemporary Artist and Muralist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              About Agnya
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Agnya Senghani P is a versatile artist whose work spans from spiritual portraits 
                to vibrant abstract murals. Based in Mumbai, she creates art that speaks to the 
                soul while transforming spaces with bold, expressive energy that captivates and 
                inspires every viewer.
              </p>
              
              <p>
                Her artistic journey encompasses multiple mediums - acrylic painting, oil painting, 
                watercolor, oil pastels, texture art, mixed media, wall painting, and portrait 
                painting. From Krishna paintings that capture divine essence to motivational 
                office murals and whimsical cartoon characters.
              </p>
              
              <p>
                "My art is a bold, expressive journey of freedom and emotion," Agnya believes. 
                "I use mixed media—acrylics, oils, textures, and vibrant colors—to bring out 
                the raw, untamed spirit of creativity. Every stroke reflects my mood, and each 
                piece tells a story of discovery, intuition, and joy."
              </p>
              
              <p className="text-accent-foreground font-medium">
                For her, art is about feeling alive and connecting with others through visual 
                language. Her goal is to inspire, explore, and keep evolving as an artist, 
                creating meaningful experiences that resonate with the human spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;