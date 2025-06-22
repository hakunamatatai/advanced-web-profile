
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Meituan Smart Logistics Platform",
    description: "AGV smart logistics development: self-driving, unmanned vehicle that transports pallets, totes, cartons or full racks from point A to B along a pre-defined route.",
    technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes", "IoT", "Project Management"],
    period: "Sep 2023 - July 2024",
    achievements: ["Managed 20 microservices", "Coordinated 60+ team members", "Pushbished in one month"],
    featured: true
  },
  {
    title: "E-commerce logistics system",
    description: "Designed and implemented distributed software systems from the ground up",
    technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Kubernetes", "Kafka"],
    period: "Nov 2020 - Sep 2023",
    achievements: ["Operational across 100+ cities in China", "24-hour product delivery", "High Concurrency Support"]
  },
  {
    title: "Full-Stack Web Application",
    description: "Implemented a comprehensive analytics system with specialized algorithms, calibration features",
    technologies: ["C++", "Python", "React", "RESTful API", "HTML", "CSS"],
    period: "May 2019 - Dec 2019",
    achievements: ["Real-time analytics", "Multithreading optimization"]
  },
  {
    title: "Mobile Robot Motion Planning Algorithm",
    description: "Designed an innovative algorithm achieving 90% collision-free rate for mobile robot motion planning in dynamic environments",
    technologies: ["C++", "Algorithm Design", "Research"],
    period: "May 2013 - April 2015",
    achievements: ["90% collision-free rate", "IEEE publication", "Innovation in robotics"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">
            Projects
          </h2>
          {/* <p className="text-stone-600 text-lg max-w-2xl mx-auto font-bold">
            Key projects demonstrating expertise in large-scale systems, distributed architecture, and innovative solutions
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-zinc-300 backdrop-blur-sm border-stone-300 hover:bg-white transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden shadow-md ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900 text-xl font-semibold">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-blue-600 text-white font-medium">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-gray-500 text-sm font-medium">{project.period}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-gray-900 font-medium">Key Achievements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
