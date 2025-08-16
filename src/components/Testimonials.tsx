import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import transformationImage from "@/assets/transformation.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Martinez",
      age: 28,
      program: "Weight Loss Journey",
      rating: 5,
      text: "I've lost 35 pounds in 6 months at FitForce! The trainers are amazing and the community support is unmatched. Best decision I ever made for my health.",
      result: "Lost 35 lbs",
      timeframe: "6 months"
    },
    {
      name: "Marcus Thompson", 
      age: 34,
      program: "Strength Training",
      rating: 5,
      text: "Went from barely lifting the bar to deadlifting 315 lbs. The progressive programs and expert coaching made all the difference. Couldn't be happier!",
      result: "2x Strength Gain",
      timeframe: "8 months"
    },
    {
      name: "Sarah Kim",
      age: 42,
      program: "Functional Fitness",
      rating: 5,
      text: "After my injury, I thought I'd never be active again. FitForce helped me not only recover but become stronger than ever. The staff truly cares.",
      result: "Full Recovery+",
      timeframe: "1 year"
    },
    {
      name: "David Chen",
      age: 29,
      program: "Athletic Performance",
      rating: 5,
      text: "Improved my marathon time by 20 minutes! The cross-training and performance coaching here is world-class. Highly recommend to any serious athlete.",
      result: "20min PR",
      timeframe: "4 months"
    },
    {
      name: "Emily Rodriguez",
      age: 31,
      program: "Group Classes",
      rating: 5,
      text: "The group classes are addictive! I've made amazing friends and gotten in the best shape of my life. The instructors push you while keeping it fun.",
      result: "Best Shape Ever",
      timeframe: "10 months"
    },
    {
      name: "Alex Johnson",
      age: 26,
      program: "Personal Training",
      rating: 5,
      text: "My personal trainer completely transformed my approach to fitness. Learned proper form, nutrition, and mindset. Worth every penny!",
      result: "Complete Transformation",
      timeframe: "7 months"
    }
  ];

  const successMetrics = [
    { metric: "98%", label: "Member Satisfaction", color: "primary" },
    { metric: "2500+", label: "Transformations", color: "secondary" },
    { metric: "4.9★", label: "Average Rating", color: "accent" },
    { metric: "94%", label: "Goal Achievement", color: "primary" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            SUCCESS <span className="text-primary">STORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from real people. See how our members have achieved 
            incredible results and changed their lives at FitForce.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {successMetrics.map((item, index) => {
            const colorClass = item.color === 'primary' ? 'text-primary' : 
                              item.color === 'secondary' ? 'text-secondary' : 'text-accent';
            
            return (
              <div key={index} className="text-center">
                <div className={`text-4xl font-black ${colorClass} mb-2`}>
                  {item.metric}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Transformation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={transformationImage} 
                alt="Incredible fitness transformation results" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-lg">
                <div className="text-sm font-bold text-primary">FEATURED TRANSFORMATION</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card energy-border p-8 rounded-2xl">
              <Quote className="h-12 w-12 text-primary mb-6" />
              <blockquote className="text-xl leading-relaxed mb-6">
                "I never thought I could achieve this kind of transformation. The support, 
                expertise, and community at FitForce made it possible. I'm not just stronger 
                physically - I'm more confident in every aspect of my life."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">Amanda Foster</div>
                  <div className="text-muted-foreground">Lost 50 lbs • Gained confidence</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">12 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass-card hover-glow border-0 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.timeframe}
                  </div>
                </div>

                <blockquote className="text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-border/50 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Age {testimonial.age} • {testimonial.program}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center animate-slide-up">
          <div className="glass-card energy-border p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎥 WATCH MORE <span className="text-secondary">SUCCESS STORIES</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get inspired by watching video testimonials from our members. See their 
              incredible transformations and hear their stories in their own words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                WATCH VIDEOS
              </button>
              <button className="btn-ghost-hero">
                SHARE YOUR STORY
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-black text-primary mb-1">1000+</div>
                <div className="text-xs text-muted-foreground uppercase">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-secondary mb-1">500+</div>
                <div className="text-xs text-muted-foreground uppercase">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-accent mb-1">50+</div>
                <div className="text-xs text-muted-foreground uppercase">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;