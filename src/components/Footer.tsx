import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Membership", href: "#membership" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    "Strength Training",
    "Cardio Classes", 
    "Yoga & Pilates",
    "Personal Training",
    "Group Fitness",
    "Athletic Performance"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-black uppercase tracking-tight text-foreground">
                FITFORCE
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transform your body, unleash your power. Join the ultimate fitness revolution 
              with state-of-the-art equipment and expert trainers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a 
                    href="#programs" 
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>123 Fitness Street</div>
                  <div>Downtown City, DC 12345</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  (555) 123-FITNESS
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  info@fitforce.com
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                Gym Hours
              </h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-primary">5AM - 11PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="text-primary">6AM - 10PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 FitForce Gym. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Achievement Badges */}
          <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-border/50">
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Certified by
              </div>
              <div className="text-sm font-semibold text-primary">ACSM</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Rated
              </div>
              <div className="text-sm font-semibold text-secondary">4.9★ Google</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Winner
              </div>
              <div className="text-sm font-semibold text-accent">Best Gym 2024</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;