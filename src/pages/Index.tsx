import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Heart className="w-16 h-16 mx-auto mb-8 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Andrew & Vadim
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            A Love Story Written in the Stars
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="story-card fade-in p-6 bg-white/50 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">From Andrew</h2>
            <p className="text-lg leading-relaxed italic">
              "Dear Vadim, 
              When we first met at the office, I never imagined how deeply you would touch my heart. 
              Yes, you were my supervisor, but our connection transcended professional boundaries. 
              Your kindness, wisdom, and the way you always believed in me made me fall for you 
              day by day. Thank you for showing me that love knows no boundaries."
            </p>
          </div>
          <div className="story-card fade-in p-6 bg-white/50 rounded-lg shadow-md" style={{animationDelay: "0.2s"}}>
            <h2 className="text-3xl font-bold mb-4 text-primary">From Vadim</h2>
            <p className="text-lg leading-relaxed italic">
              "Dearest Andrew,
              While our story began in an unexpected place, my heart recognized something 
              special in you from the start. As your mentor, I watched you grow professionally, 
              but as a person, you taught me so much about love and courage. Our journey hasn't 
              always been easy, but choosing you has been the best decision of my life."
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Their love story proves that authentic connections can blossom in unexpected places, 
          transcending traditional boundaries while maintaining mutual respect and professionalism.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;