import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery4 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: gallery1,
    alt: "Abstract canvas painting with soft beige and cream tones",
    title: "Mixed Media on Canvas",
    category: "Canvas Paintings",
    description:
      "Customized portrait painting comissioned to be of size 2'x3'.",
  },
  {
    id: 2,
    src: gallery2,
    alt: "Large wall mural with flowing organic shapes",
    title: "Realistic Landscape",
    category: "Wall Murals",
    description:
      "Custom mural designed to create a sense of movement and tranquility in this modern living space.",
  },
  {
    id: 3,
    src: gallery4,
    alt: "Large wall mural with typographic design",
    title: "Typographic Wall Mural",
    category: "Wall Murals",
    description:
      "Office Mural (Motivational Area): A customized wall mural created to inspireand motivate employees, adding positive energy to the office environment.",
  },
  {
    id: 4,
    src: gallery5,
    alt: "Textured wall art with vibrant colors",
    title: "Texteured Wall Art",
    category: "Wall Murals",
    description:
      "School Project: A creative wall painting combined with textured art, designed especially for a vibrant and educational school environment.",
  },
  {
    id: 6,
    src: gallery7,
    alt: "Abstract canvas painting with soft beige and cream tones",
    title: "Couple Portrait Painting",
    category: "Canvas Paintings",
    description:
      "A heartfelt portrait of size 2'x3',  capturing the essence of a couple, blending realism with artistic expression.",
  },
  {
    id: 5,
    src: gallery3,
    alt: "Contemporary geometric canvas artwork",
    title: "Abstract Canvas Painting",
    category: "Canvas Paintings",
    description:
      "A portrait of a woman merging with butterflies, her face and hair entwined with their wings, beneath a purple night sky illuminated by the moon and dark branches.",
  },
  {
    id: 10,
    src: gallery9,
    alt: "Hand-painted sneakers with bold comic-style design",
    title: "Hand-Painted Sneakers",
    category: "Custom Work",
    description:
      "A pair of hand-painted sneakers styled with bold outlines and shading to mimic a comic-book illustration, giving the shoes a unique 2D cartoon effect.",
  },
  {
    id: 13,
    src: gallery11,
    alt: "Abstract canvas painting with soft beige and cream tones",
    title: "Mini-Canvas Art",
    category: "Custom Work",
    description: "A set of mini-canvas artworks, each measuring 6x6 inches.",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("Wall Murals");

  const categories = ["Wall Murals", "Canvas Paintings", "Custom Work"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground animate-fade-in">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Discover a curated collection of contemporary artworks, from
            intimate canvas pieces to transformative wall murals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                activeFilter === category
                  ? "bg-accent text-accent-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-medium gallery-hover">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-85 object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth flex items-end opacity-0 group-hover:opacity-100">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-xl overflow-hidden shadow-large">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-smooth"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-contain"
                  />
                </div>

                <div className="lg:w-1/3 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-accent-foreground font-medium mb-4">
                    {selectedImage.category}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
