import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Zap } from "lucide-react";
import trainersImage from "@/assets/trainers-team.jpg";
import facilityImage from "@/assets/gym-facility.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Active Members", color: "primary" },
    { icon: Award, number: "15+", label: "Years Experience", color: "secondary" },
    { icon: Clock, number: "24/7", label: "Gym Access", color: "accent" },
    { icon: Zap, number: "50+", label: "Training Programs", color: "primary" }
  ];

  const trainers = [
    {
      name: "MIKE JOHNSON",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      certifications: "NASM-CPT, CSCS"
    },
    {
      name: "SARAH CHEN",
      specialty: "Functional Training",
      experience: "6 years", 
      certifications: "ACSM-CPT, FMS"
    },
    {
      name: "DAVID RODRIGUEZ",
      specialty: "Athletic Performance",
      experience: "10 years",
      certifications: "NSCA-CSCS, USAW"
    },
    {
      name: "EMMA WILLIAMS",
      specialty: "Yoga & Wellness",
      experience: "7 years",
      certifications: "RYT-500, NASM-CPT"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            ABOUT <span className="text-primary">FITFORCE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a gym - we're a community dedicated to transforming lives through 
            fitness, nutrition, and unwavering support.
          </p>
        </div>

        {/* Mission & Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">
              OUR <span className="text-accent">MISSION</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At FitForce, we believe that fitness is not just about physical transformation—it's about 
              building mental resilience, fostering community connections, and empowering individuals 
              to become the strongest version of themselves.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art facility combines cutting-edge equipment with expert guidance, 
              creating an environment where every member can thrive, regardless of their starting point.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const colorClass = stat.color === 'primary' ? 'text-primary' : 
                                  stat.color === 'secondary' ? 'text-secondary' : 'text-accent';
                
                return (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${stat.color}/10 mb-3`}>
                      <IconComponent className={`h-6 w-6 ${colorClass}`} />
                    </div>
                    <div className={`text-2xl font-black ${colorClass} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={facilityImage} 
                alt="Modern gym facility" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold mb-4">
              MEET OUR <span className="text-secondary">EXPERT TRAINERS</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals bring years of experience and passion to help 
              you achieve your fitness goals safely and effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={trainersImage} 
                alt="Professional fitness trainers team" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid gap-6 animate-slide-in-right">
              {trainers.map((trainer, index) => (
                <Card key={index} className="glass-card hover-glow border-0">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">{trainer.name}</h4>
                    <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{trainer.experience} experience</span>
                      <span>{trainer.certifications}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Facility Highlights */}
        <div className="glass-card energy-border p-8 rounded-2xl animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              WORLD-CLASS <span className="text-primary">FACILITIES</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏋️‍♂️</div>
              <h4 className="font-bold mb-2">STRENGTH ZONE</h4>
              <p className="text-sm text-muted-foreground">
                Complete free weight section with Olympic platforms and premium equipment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏃‍♀️</div>
              <h4 className="font-bold mb-2">CARDIO THEATER</h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art cardio machines with entertainment systems
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h4 className="font-bold mb-2">WELLNESS CENTER</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated spaces for yoga, stretching, and recovery services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;