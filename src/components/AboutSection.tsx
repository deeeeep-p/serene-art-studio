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
                alt="Agnya Senghani P - Contemporary Artist"
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
                My art is a bold, expressive journey of freedom, emotion, and
                exploration. I work primarily with mixed media—acrylics, oils,
                textures, and vibrant colors—to create pieces that are raw,
                dynamic, and full of life. Each stroke is deeply intuitive,
                often guided by my emotional state in the moment—whether that’s
                calm, energized, reflective, or playful.
              </p>

              <p>
                I believe in the power of visual storytelling. Every artwork I
                create has its own personality and narrative. Sometimes, the
                story is abstract and open to interpretation; other times, it
                captures a feeling or memory I want to share.
              </p>

              <p>
                My process is experimental, layered, and rooted in spontaneity.
                I don’t seek perfection—I seek honesty. For me, art is about
                feeling alive. It’s about connecting with people, evoking
                emotion, and encouraging others to embrace their own creativity.
              </p>

              <p className="text-accent-foreground font-medium">
                Through every canvas, my goal is to inspire, to explore the
                unknown, and to continue evolving—not just as an artist, but as
                a human being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
