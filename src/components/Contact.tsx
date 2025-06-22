
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">evie_chen@outlook.com</p>
              <Button 
                className="mt-4 bg-white text-gray-900 hover:bg-gray-100 font-medium"
                size="sm"
                onClick={() => window.open('mailto:evie_chen@outlook.com', '_blank')}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+61 0478179668</p>
              <Button 
                className="mt-4 bg-white text-gray-900 hover:bg-gray-100 font-medium"
                size="sm"
                onClick={() => window.open('tel:+610478179668', '_blank')}
              >
                Call Me
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Melbourne, VIC, Australia</p>
              <Badge className="mt-4 bg-green-500/20 text-green-300 border-green-400/30">
                Available for Opportunities
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Find me on</h3>
          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              className="bg-[#0077B5] hover:bg-[#005885] text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg"
              onClick={() => window.open('https://www.linkedin.com/in/yuchang-chen-31348a53', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
              onClick={() => window.open('mailto:evie_chen@outlook.com', '_blank')}
            >
              <ExternalLink className="w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-gray-400 mt-8 text-sm">
            © 2024 CICI (Yuchang) Chen. Senior Software Engineer Portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};
