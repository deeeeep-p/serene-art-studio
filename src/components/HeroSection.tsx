import heroArtwork from "@/assets/hero-artwork.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroArtwork}
          alt="Contemporary abstract painting featuring soft warm colors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in">
          Agnya Senghani P
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up font-light tracking-wide">
          Artist | Muralist | Creative Visionary
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed">
          From spiritual portraits to vibrant murals, transforming spaces with diverse artistic expressions that inspire and captivate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <button
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium transition-smooth hover:shadow-medium hover:scale-105"
          >
            View Gallery
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-border bg-card/80 text-foreground px-8 py-4 rounded-lg font-medium transition-smooth hover:shadow-medium hover:scale-105 backdrop-blur-sm"
          >
            Commission Art
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;