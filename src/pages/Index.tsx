import { Heart, Calendar, Star, Coffee, Briefcase, Music } from "lucide-react";

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

      {/* Timeline Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">First Meeting</h3>
              <p className="text-muted-foreground">That memorable day at the office when our eyes first met during the team meeting.</p>
            </div>
            <div className="fade-in bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" style={{animationDelay: "0.2s"}}>
              <Coffee className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">First Coffee Break</h3>
              <p className="text-muted-foreground">Our casual conversations over coffee gradually became the highlight of our days.</p>
            </div>
            <div className="fade-in bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" style={{animationDelay: "0.4s"}}>
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Love Blossomed</h3>
              <p className="text-muted-foreground">When we finally admitted our feelings, knowing our hearts couldn't deny it anymore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">What We Cherish</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in p-6 bg-accent/20 rounded-lg">
              <Briefcase className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Professional Integrity</h3>
              <p className="text-muted-foreground">We maintain the highest standards of professional conduct while nurturing our personal connection.</p>
            </div>
            <div className="fade-in p-6 bg-accent/20 rounded-lg" style={{animationDelay: "0.2s"}}>
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Mutual Respect</h3>
              <p className="text-muted-foreground">Our relationship is built on deep respect for each other's roles, boundaries, and personal growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Music className="w-12 h-12 mx-auto mb-6 text-primary" />
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
            "Love doesn't care about titles or positions. It cares about the connection between two hearts."
          </blockquote>
          <p className="text-muted-foreground">- Andrew & Vadim</p>
        </div>
      </section>
    </div>
  );
};

export default Index;