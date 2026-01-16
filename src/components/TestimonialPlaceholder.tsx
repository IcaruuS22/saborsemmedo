import heroProduct from "@/assets/hero-product.webp";
import download1 from "@/assets/download1.webp";
import download2 from "@/assets/download2.webp";
import download3 from "@/assets/download3.webp";
import download4 from "@/assets/download4.webp";

export const TestimonialPlaceholder = () => {
  const testimonials = [
    { src: download1, alt: "Depoimento 1" },
    { src: download2, alt: "Depoimento 2" },
    { src: download3, alt: "Depoimento 3" },
    { src: download4, alt: "Depoimento 4" },
  ];

  return (
    <div className="space-y-6">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1154688379?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="YTDown.com_YouTube_Depoimento1_Media_ZzUzedia3Ho_001_1080p"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card p-3 md:p-4 rounded-xl shadow-card border border-border">
            <img
              src={t.src}
              alt={t.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = heroProduct;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
