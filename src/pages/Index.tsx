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
          <div className="story-card fade-in">
            <h2 className="text-3xl font-bold mb-4">Their Journey</h2>
            <p className="text-lg leading-relaxed">
              In a world of endless possibilities, Andrew and Vadim found each other. 
              Their love story is a testament to the power of true connection, 
              breaking barriers and celebrating the beauty of their unique bond.
            </p>
          </div>
          <div className="story-card fade-in" style={{animationDelay: "0.2s"}}>
            <h2 className="text-3xl font-bold mb-4">Their Love</h2>
            <p className="text-lg leading-relaxed">
              Together, they've created a home filled with laughter, understanding, 
              and unconditional love. Their relationship shows that love knows no 
              boundaries and that true happiness comes from being authentic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;