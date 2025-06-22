
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend Languages",
    skills: ["Java (Proficient)", "SQL", "C#", "Python", "Golang", "Shell", "Node.js"],
    color: "from-stone-200/50 to-stone-300/50"
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML5", "JavaScript", "React", "CSS"],
    color: "from-amber-100/50 to-amber-200/50"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring MVC", "Maven", "RPC", "JUnit", "Kafka", "Microservices"],
    color: "from-stone-100/50 to-stone-200/50"
  },
  {
    title: "Cloud & DevOps",
    skills: ["Cloud Service", "Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring & Logging Tools"],
    color: "from-amber-50/50 to-amber-100/50"
  },
  {
    title: "System Design & Architecture",
    skills: ["Software Architecture", "System Design", "Object-Oriented Design (OOD)", "Distributed System", "RESTful APIs", "Code Reviews", "Technical Mentorship"],
    color: "from-stone-50/50 to-stone-100/50"
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "NoSQL (Redis)", "Elasticsearch"],
    color: "from-amber-200/50 to-stone-200/50"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative bg-gradient-to-br from-stone-50 to-amber-50">
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
              className="bg-white/60 backdrop-blur-sm border-stone-200 hover:bg-white/80 transition-all duration-300 hover:scale-105 animate-fade-in shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors border-stone-200"
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
