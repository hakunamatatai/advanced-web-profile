
import { ArrowDown, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          
          <div className="relative">
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting scalable solutions and elegant code. Specialized in modern web technologies, 
              cloud architecture, and building products that make a difference.
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-gray-400 mx-auto cursor-pointer hover:text-white transition-colors"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
