import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="heading-hero mb-6">
              TRANSFORM YOUR BODY<br />
              <span className="text-primary">UNLEASH YOUR POWER</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Join the ultimate fitness revolution. State-of-the-art equipment, expert trainers, 
              and a community that pushes you to achieve the impossible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="btn-hero group">
                START YOUR JOURNEY
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-ghost-hero group">
                <Play className="mr-2 h-5 w-5" />
                WATCH STORY
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary mb-1">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Access</div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing Highlight */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="glass-card energy-border p-8 rounded-2xl max-w-sm w-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">SPECIAL OFFER</h3>
                <div className="text-4xl font-black text-primary mb-1">$29</div>
                <div className="text-muted-foreground mb-4">per month</div>
                <div className="text-sm text-muted-foreground mb-6">
                  No enrollment fee • Cancel anytime
                </div>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Unlimited gym access
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Free fitness assessment
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Group classes included
                  </div>
                </div>
                
                <Button className="btn-hero w-full">
                  CLAIM OFFER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40 animate-float">
        <Button className="btn-hero rounded-full p-4 shadow-2xl">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;