
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and advanced analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat platform supporting thousands of concurrent users with WebSocket connections and message encryption.",
    technologies: ["TypeScript", "Socket.io", "MongoDB", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Machine learning pipeline for data processing and visualization with predictive analytics capabilities.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for automated deployment and scaling of cloud resources.",
    technologies: ["Terraform", "AWS", "Python", "CI/CD", "Monitoring"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in building scalable, modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-white/30 text-gray-300 hover:bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    variant="outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
