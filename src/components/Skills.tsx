
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend Languages",
    skills: ["Java (Proficient)", "SQL", "C#", "Python", "Golang", "Shell", "Node.js"]
  },
  {
    title: "Frontend Technologies", 
    skills: ["HTML5", "JavaScript", "React", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring MVC", "Maven", "RPC", "JUnit", "Kafka", "Microservices"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Cloud Service", "Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring & Logging Tools"]
  },
  {
    title: "System Design & Architecture",
    skills: ["Software Architecture", "System Design", "Object-Oriented Design (OOD)", "Distributed System", "RESTful APIs", "Code Reviews", "Technical Mentorship"]
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "NoSQL (Redis)", "Elasticsearch"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">
            Technical Skills
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through 5+ years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-stone-50/80 backdrop-blur-sm border-stone-200 hover:bg-stone-100/80 transition-all duration-300 hover:scale-105 animate-fade-in shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white text-stone-700 hover:bg-stone-100 transition-colors border-stone-200"
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
    </section>
  );
};
