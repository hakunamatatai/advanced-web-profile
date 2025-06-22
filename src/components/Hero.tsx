
import { ArrowDown, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative bg-red-500">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            CICI (Yuchang) Chen
          </h1>
          
          <div className="relative">
            <h2 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Senior Software Engineer with 5+ years of experience in Melbourne, Australia.
              Crafting scalable solutions and elegant code with expertise in distributed systems and modern web technologies.
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-white mx-auto cursor-pointer hover:text-gray-200 transition-colors"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>

      {/* Geometric Mondrian elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 opacity-80"></div>
      <div className="absolute bottom-20 right-10 w-24 h-48 bg-yellow-400 opacity-80"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-90"></div>
    </section>
  );
};
