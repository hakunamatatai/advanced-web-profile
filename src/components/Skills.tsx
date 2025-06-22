
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend Languages",
    skills: ["Java (Proficient)", "SQL", "C#", "Python", "Golang", "Shell", "Node.js"],
    color: "from-blue-600/30 to-blue-800/30"
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML5", "JavaScript", "React", "CSS"],
    color: "from-blue-500/30 to-blue-700/30"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring MVC", "Maven", "RPC", "JUnit", "Kafka", "Microservices"],
    color: "from-blue-700/30 to-blue-900/30"
  },
  {
    title: "Cloud & DevOps",
    skills: ["Cloud Service", "Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring & Logging Tools"],
    color: "from-blue-400/30 to-blue-600/30"
  },
  {
    title: "System Design & Architecture",
    skills: ["Software Architecture", "System Design", "Object-Oriented Design (OOD)", "Distributed System", "RESTful APIs", "Code Reviews", "Technical Mentorship"],
    color: "from-blue-800/30 to-blue-600/30"
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "NoSQL (Redis)", "Elasticsearch"],
    color: "from-blue-300/30 to-blue-500/30"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through 5+ years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white/20 text-white hover:bg-white/30 transition-colors border-white/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mondrian geometric elements */}
      <div className="absolute top-10 right-10 w-20 h-40 bg-red-500 opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-40 h-20 bg-yellow-400 opacity-70"></div>
    </section>
  );
};
