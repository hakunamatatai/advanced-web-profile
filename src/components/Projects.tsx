
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Meituan Smart Logistics Platform",
    description: "Led and delivered Meituan's first smart logistics project as Project Manager, managing 20 microservices and coordinating 60+ team members. Improved ramp-up times by 10% and reduced timelines by 5%.",
    technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes", "Project Management"],
    period: "Sep 2023 - July 2024",
    achievements: ["Managed 20 microservices", "Coordinated 60+ team members", "10% improvement in ramp-up times"],
    featured: true
  },
  {
    title: "Large-Scale Distributed Systems",
    description: "Designed and implemented 3 large-scale distributed software systems from the ground up, operational across over 100 cities in China, enabling 24-hour product delivery.",
    technologies: ["Java", "Distributed Systems", "Spring Boot", "MySQL", "Redis"],
    period: "Nov 2020 - Sep 2023",
    achievements: ["Operational across 100+ cities", "24-hour product delivery", "60% workflow optimization"]
  },
  {
    title: "Full-Stack Analytics System",
    description: "Implemented a comprehensive analytics system with specialized algorithms, calibration features, and web socket connections. Enhanced system performance by 30% through refactoring and multithreading improvements.",
    technologies: ["Spring", "WebSockets", "JavaScript", "RESTful API", "Tomcat"],
    period: "May 2019 - Dec 2019",
    achievements: ["30% performance enhancement", "Real-time analytics", "Multithreading optimization"]
  },
  {
    title: "Mobile Robot Motion Planning Algorithm",
    description: "Designed an innovative algorithm achieving 90% collision-free rate for mobile robot motion planning in dynamic environments. Published research paper at IEEE 2015 conference.",
    technologies: ["Python", "Algorithm Design", "Machine Learning", "Research"],
    period: "May 2013 - April 2015",
    achievements: ["90% collision-free rate", "IEEE publication", "Innovation in robotics"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative bg-yellow-400">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Key projects demonstrating expertise in large-scale systems, distributed architecture, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-gray-900/90 backdrop-blur-sm border-gray-700 hover:bg-gray-900 transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-yellow-400 text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-red-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-yellow-300 text-sm">{project.period}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-yellow-400 font-medium">Key Achievements:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
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
                      className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10"
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

      {/* Mondrian geometric elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-red-500 opacity-80"></div>
      <div className="absolute bottom-20 right-20 w-32 h-16 bg-blue-600 opacity-80"></div>
      <div className="absolute top-1/2 right-10 w-16 h-32 bg-white opacity-90"></div>
    </section>
  );
};
