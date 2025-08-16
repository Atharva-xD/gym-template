import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "BASIC",
      icon: Zap,
      price: 29,
      period: "month",
      description: "Perfect for getting started on your fitness journey",
      features: [
        "Unlimited gym access",
        "Cardio & strength equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access"
      ],
      popular: false,
      color: "muted"
    },
    {
      name: "PRO",
      icon: Star,
      price: 59,
      period: "month",
      description: "Our most popular plan with everything you need",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training sessions (2/month)",
        "Nutrition consultation",
        "Guest passes (4/month)",
        "Premium locker access"
      ],
      popular: true,
      color: "primary"
    },
    {
      name: "ELITE",
      icon: Crown,
      price: 99,
      period: "month", 
      description: "Ultimate membership with premium perks",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Recovery services access",
        "Nutrition meal planning",
        "Priority class booking",
        "Unlimited guest passes",
        "Exclusive member events"
      ],
      popular: false,
      color: "accent"
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean) => {
    if (isPopular) {
      return {
        card: "glass-card energy-border border-primary/50 scale-105 shadow-2xl",
        price: "text-primary",
        button: "btn-hero",
        accent: "bg-primary"
      };
    }
    
    switch (color) {
      case "accent":
        return {
          card: "glass-card border-accent/30",
          price: "text-accent",
          button: "btn-ghost-hero border-accent/50 hover:bg-accent",
          accent: "bg-accent"
        };
      default:
        return {
          card: "glass-card border-border/30",
          price: "text-foreground",
          button: "btn-ghost-hero",
          accent: "bg-muted"
        };
    }
  };

  return (
    <section id="membership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            MEMBERSHIP <span className="text-primary">PLANS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect membership plan that fits your lifestyle and fitness goals. 
            All plans include our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const colorClasses = getColorClasses(plan.color, plan.popular);
            
            return (
              <Card 
                key={plan.name}
                className={`${colorClasses.card} relative transition-all duration-300 hover:scale-105 animate-bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse-glow">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8 text-center">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}/10 mb-4`}>
                      <IconComponent className={`h-8 w-8 ${colorClasses.price}`} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-wide mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-sm text-muted-foreground">$</span>
                      <span className={`text-5xl font-black ${colorClasses.price}`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      No enrollment fee • Cancel anytime
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className={`h-5 w-5 ${colorClasses.price} mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className={`${colorClasses.button} w-full`}>
                    {plan.popular ? "GET STARTED" : "CHOOSE PLAN"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="glass-card p-8 rounded-2xl animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            ALL PLANS INCLUDE
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">💪</div>
              <h4 className="font-semibold mb-2">Equipment Access</h4>
              <p className="text-sm text-muted-foreground">
                Full access to all gym equipment and facilities
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Mobile App</h4>
              <p className="text-sm text-muted-foreground">
                Track workouts, book classes, and connect with trainers
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">
                Access to certified trainers and fitness experts
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Secure Storage</h4>
              <p className="text-sm text-muted-foreground">
                Clean locker rooms with secure storage options
              </p>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="glass-card energy-border p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎉 LIMITED TIME OFFERS
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">NEW MEMBER SPECIAL</h4>
                <p className="text-sm text-muted-foreground">
                  50% off first month + Free fitness assessment + Guest pass
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-secondary mb-2">STUDENT DISCOUNT</h4>
                <p className="text-sm text-muted-foreground">
                  20% off all memberships with valid student ID
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;