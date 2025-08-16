import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Calendar } from "lucide-react";

const Schedule = () => {
  const popularClasses = [
    {
      name: "HIIT BLAST",
      instructor: "Mike Johnson",
      duration: "45 min",
      difficulty: "High",
      description: "High-intensity interval training for maximum calorie burn",
      rating: 4.9,
      spots: 8
    },
    {
      name: "STRENGTH CIRCUIT",
      instructor: "Sarah Chen", 
      duration: "60 min",
      difficulty: "Medium",
      description: "Full-body strength training with functional movements",
      rating: 4.8,
      spots: 12
    },
    {
      name: "YOGA FLOW",
      instructor: "Emma Williams",
      duration: "75 min", 
      difficulty: "Low",
      description: "Mindful movement and flexibility with breath work",
      rating: 4.9,
      spots: 15
    }
  ];

  const weeklySchedule = {
    "Monday": [
      { time: "6:00 AM", class: "Morning HIIT", instructor: "Mike", duration: "45m" },
      { time: "7:00 AM", class: "Strength Training", instructor: "Sarah", duration: "60m" },
      { time: "12:00 PM", class: "Lunch Cardio", instructor: "David", duration: "30m" },
      { time: "6:00 PM", class: "Evening Yoga", instructor: "Emma", duration: "75m" },
      { time: "7:30 PM", class: "CrossFit", instructor: "Mike", duration: "60m" }
    ],
    "Tuesday": [
      { time: "6:00 AM", class: "Spin Class", instructor: "Sarah", duration: "45m" },
      { time: "7:00 AM", class: "Functional Training", instructor: "David", duration: "60m" },
      { time: "12:00 PM", class: "Core Blast", instructor: "Emma", duration: "30m" },
      { time: "6:00 PM", class: "Boxing", instructor: "Mike", duration: "60m" },
      { time: "7:30 PM", class: "Pilates", instructor: "Emma", duration: "60m" }
    ],
    "Wednesday": [
      { time: "6:00 AM", class: "Morning HIIT", instructor: "Mike", duration: "45m" },
      { time: "7:00 AM", class: "Strength Training", instructor: "Sarah", duration: "60m" },
      { time: "12:00 PM", class: "Lunch Cardio", instructor: "David", duration: "30m" },
      { time: "6:00 PM", class: "Evening Yoga", instructor: "Emma", duration: "75m" },
      { time: "7:30 PM", class: "CrossFit", instructor: "Mike", duration: "60m" }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'high':
        return 'text-accent';
      case 'medium':
        return 'text-primary';
      case 'low':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-6">
            CLASS <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our expert-led group classes designed to challenge, motivate, and deliver results. 
            Book your spot today and experience the energy of group fitness.
          </p>
        </div>

        {/* Popular Classes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 animate-slide-up">
            🔥 <span className="text-accent">MOST POPULAR</span> CLASSES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularClasses.map((classItem, index) => (
              <Card 
                key={classItem.name}
                className="glass-card hover-glow border-0 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{classItem.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        with {classItem.instructor}
                      </p>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-primary mr-1" />
                      <span>{classItem.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {classItem.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-secondary mr-2" />
                      <span>{classItem.spots} spots left</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${getDifficultyColor(classItem.difficulty)}`}>
                      {classItem.difficulty} Intensity
                    </span>
                    <Button className="btn-hero text-xs px-4 py-2">
                      BOOK NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            📅 <span className="text-secondary">WEEKLY</span> SCHEDULE
          </h3>
          
          <div className="glass-card p-6 rounded-2xl overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-bold text-center py-2">TIME</div>
                {Object.keys(weeklySchedule).map(day => (
                  <div key={day} className="font-bold text-center py-2 text-primary">
                    {day.toUpperCase()}
                  </div>
                ))}
              </div>
              
              {/* Generate time slots */}
              {["6:00 AM", "7:00 AM", "12:00 PM", "6:00 PM", "7:30 PM"].map((time, timeIndex) => (
                <div key={time} className="grid grid-cols-4 gap-4 border-t border-border/50 py-3">
                  <div className="text-center text-sm font-medium text-muted-foreground">
                    {time}
                  </div>
                  {Object.entries(weeklySchedule).map(([day, classes]) => {
                    const classForTime = classes.find(c => c.time === time);
                    return (
                      <div key={day} className="text-center">
                        {classForTime ? (
                          <div className="bg-primary/10 hover:bg-primary/20 transition-colors duration-200 rounded-lg p-2 cursor-pointer">
                            <div className="text-sm font-medium text-primary">
                              {classForTime.class}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {classForTime.instructor} • {classForTime.duration}
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-muted-foreground/50">-</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center animate-slide-up">
          <div className="glass-card energy-border p-8 rounded-2xl max-w-2xl mx-auto">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              READY TO JOIN A CLASS?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your classes up to 7 days in advance. Members get priority booking 
              and can reserve their favorite spots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                VIEW FULL SCHEDULE
              </Button>
              <Button className="btn-ghost-hero">
                DOWNLOAD APP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;