
import { ArrowDown, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16 relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-700 font-medium">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            CICI (Yuchang) Chen
          </h1>
          
          <div className="relative">
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Senior Software Engineer with 5+ years of experience in Melbourne, Australia.
              <br />
              Crafting scalable solutions and elegant code with expertise in distributed systems and modern web technologies.
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-medium text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-gray-400 mx-auto cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};
