import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Heart, Zap, Users, Timer, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "STRENGTH TRAINING",
      description: "Build raw power with our comprehensive weightlifting programs. From beginner to advanced, we've got you covered.",
      features: ["Free weights", "Machines", "Powerlifting", "Olympic lifting"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "CARDIO BLAST",
      description: "High-intensity cardiovascular workouts that burn calories and improve endurance through diverse training methods.",
      features: ["HIIT sessions", "Treadmills", "Bikes", "Rowing machines"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "FUNCTIONAL FITNESS",
      description: "Real-world movement patterns that improve daily performance and reduce injury risk through dynamic exercises.",
      features: ["CrossFit style", "TRX suspension", "Kettlebells", "Plyometrics"],
      color: "accent"
    },
    {
      icon: Users,
      title: "GROUP CLASSES",
      description: "Energizing group workouts that combine motivation, community spirit, and expert instruction for all fitness levels.",
      features: ["Yoga", "Pilates", "Spin", "Dance fitness"],
      color: "primary"
    },
    {
      icon: Timer,
      title: "PERSONAL TRAINING",
      description: "One-on-one coaching tailored to your specific goals with personalized workout plans and nutrition guidance.",
      features: ["Custom programs", "Nutrition coaching", "Progress tracking", "Flexibility"],
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "ATHLETIC PERFORMANCE",
      description: "Sport-specific training designed to enhance athletic performance and competitive edge across all disciplines.",
      features: ["Sport-specific", "Speed training", "Agility work", "Recovery protocols"],
      color: "accent"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            ELITE TRAINING <span className="text-primary">PROGRAMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of training programs designed by fitness experts 
            to help you achieve your goals faster and more effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const colorClass = program.color === 'primary' ? 'text-primary' : 
                              program.color === 'secondary' ? 'text-secondary' : 'text-accent';
            
            return (
              <Card 
                key={program.title} 
                className="glass-card hover-glow group cursor-pointer transition-all duration-300 animate-bounce-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${program.color}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${colorClass}`} />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 bg-${program.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/50 mt-6">
                    <button className={`text-${program.color} font-semibold uppercase tracking-wide text-sm hover:underline transition-all duration-200`}>
                      Learn More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="glass-card energy-border p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our fitness experts will create a personalized program based on your goals, 
              fitness level, and preferences. Book a free consultation today!
            </p>
            <button className="btn-hero">
              FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;