
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">your.email@example.com</p>
              <Button 
                className="mt-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
                variant="outline"
                size="sm"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">Available for remote opportunities</p>
              <Badge className="mt-4 bg-green-500/20 text-green-400 border-green-500/30">
                Open to Relocate
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Find me on</h3>
          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              className="bg-[#0077B5] hover:bg-[#005885] text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-[#333] hover:bg-black text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
              onClick={() => window.open('#', '_blank')}
            >
              <ExternalLink className="w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-gray-400 mt-8 text-sm">
            © 2024 Software Engineer Portfolio. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};
