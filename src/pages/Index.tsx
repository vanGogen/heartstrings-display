import { Heart, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Contact Information",
      description: "Feel free to reach out to Andrew & Vadim!",
    });
  };

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

      {/* Photo Gallery */}
      <section className="bg-secondary/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Moments Together</h2>
          <div className="photo-grid">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Cozy moment" 
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Happy moment" 
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Together" 
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContact}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </Button>
            <Button 
              onClick={handleContact}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;