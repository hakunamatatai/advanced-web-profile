
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">evie_chen@outlook.com</p>
              <Button 
                className="mt-4 bg-red-500 hover:bg-red-600 text-white"
                size="sm"
                onClick={() => window.open('mailto:evie_chen@outlook.com', '_blank')}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+61 0478179668</p>
              <Button 
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
                onClick={() => window.open('tel:+610478179668', '_blank')}
              >
                Call Me
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Melbourne, VIC, Australia</p>
              <Badge className="mt-4 bg-green-500/20 text-green-400 border-green-500/30">
                Available for Opportunities
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Find me on</h3>
          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              className="bg-[#0077B5] hover:bg-[#005885] text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
              onClick={() => window.open('https://www.linkedin.com/in/yuchang-chen-31348a53', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-black text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/25"
              onClick={() => window.open('mailto:evie_chen@outlook.com', '_blank')}
            >
              <ExternalLink className="w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-gray-600 mt-8 text-sm">
            © 2024 CICI (Yuchang) Chen. Senior Software Engineer Portfolio.
          </p>
        </div>
      </div>

      {/* Mondrian geometric elements */}
      <div className="absolute top-10 left-10 w-20 h-60 bg-red-500 opacity-80"></div>
      <div className="absolute bottom-10 right-10 w-60 h-20 bg-blue-600 opacity-80"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-400 opacity-80"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-40 bg-gray-900 opacity-80"></div>
    </section>
  );
};
