
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Linux", "Microservices", "Testing", "Agile", "System Design"],
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
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
                      className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors border-white/20"
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
