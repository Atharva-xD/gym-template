import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "LOCATION",
      details: ["123 Fitness Street", "Downtown City, DC 12345"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "PHONE",
      details: ["(555) 123-FITNESS", "(555) 123-4567"],
      color: "secondary"
    },
    {
      icon: Mail,
      title: "EMAIL",
      details: ["info@fitforce.com", "support@fitforce.com"],
      color: "accent"
    },
    {
      icon: Clock,
      title: "HOURS",
      details: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 6AM - 10PM"],
      color: "primary"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@fitforce_gym", color: "accent" },
    { icon: Facebook, name: "Facebook", handle: "FitForceGym", color: "secondary" },
    { icon: Twitter, name: "Twitter", handle: "@fitforce", color: "primary" }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "6:00 AM - 10:00 PM" },
    { day: "Holidays", hours: "8:00 AM - 8:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free consultation 
            and tour of our world-class facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left space-y-8">
            <Card className="glass-card energy-border border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">SEND US A MESSAGE</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        FIRST NAME *
                      </label>
                      <Input 
                        placeholder="Enter your first name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        LAST NAME *
                      </label>
                      <Input 
                        placeholder="Enter your last name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      PHONE NUMBER
                    </label>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      FITNESS GOALS
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none">
                      <option>Select your primary goal</option>
                      <option>Weight Loss</option>
                      <option>Muscle Building</option>
                      <option>Athletic Performance</option>
                      <option>General Fitness</option>
                      <option>Rehabilitation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      MESSAGE
                    </label>
                    <Textarea 
                      placeholder="Tell us about your fitness goals and any questions you have..."
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button className="btn-hero w-full group">
                    SEND MESSAGE
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-2" />
                  WHAT TO EXPECT
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      We'll respond within 24 hours with personalized recommendations
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Free consultation and facility tour included
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      No pressure sales - we focus on your fitness goals
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Expert trainers available for personalized guidance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us Card */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-2" />
                  WHY CHOOSE FITFORCE
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      State-of-the-art equipment and facilities
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Certified personal trainers and nutrition experts
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Flexible membership options to fit your lifestyle
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Supportive community of fitness enthusiasts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Membership Benefits Card */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-2" />
                  MEMBERSHIP BENEFITS
                </h4>
                <div className="space-y-3 text-sm">
                  {/* <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      24/7 access to premium fitness facilities
                    </p>
                  </div> */}
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Personalized workout plans and progress tracking
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Access to exclusive fitness classes and workshops
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Monthly fitness challenges and rewards program
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClass = info.color === 'primary' ? 'text-primary' : 
                                  info.color === 'secondary' ? 'text-secondary' : 'text-accent';
                
                return (
                  <Card key={info.title} className="glass-card hover-glow border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${info.color}/10 mr-4 flex-shrink-0`}>
                          <IconComponent className={`h-6 w-6 ${colorClass}`} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Operating Hours */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  OPERATING HOURS
                </h4>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-foreground">{schedule.day}</span>
                      <span className="text-primary font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">FOLLOW US</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    const colorClass = social.color === 'primary' ? 'text-primary hover:text-primary' : 
                                      social.color === 'secondary' ? 'text-secondary hover:text-secondary' : 'text-accent hover:text-accent';
                    
                    return (
                      <div key={social.name} className="flex items-center group cursor-pointer">
                        <IconComponent className={`h-5 w-5 ${colorClass} mr-3 transition-colors duration-200`} />
                        <div>
                          <div className="font-medium group-hover:text-primary transition-colors duration-200">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="glass-card border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">FIND US ON THE MAP</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive map coming soon
                    </p>
                    <Button className="btn-ghost-hero mt-4 text-sm">
                      GET DIRECTIONS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="glass-card energy-border p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">
              READY TO <span className="text-primary">GET STARTED?</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold mb-2">📞 CALL US</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak with our team
                </p>
                <Button className="btn-ghost-hero w-full">
                  (555) 123-FITNESS
                </Button>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">🏃‍♂️ VISIT US</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Take a free tour
                </p>
                <Button className="btn-hero w-full">
                  SCHEDULE VISIT
                </Button>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">💪 JOIN NOW</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Start your journey
                </p>
                <Button className="btn-ghost-hero w-full">
                  MEMBERSHIP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;