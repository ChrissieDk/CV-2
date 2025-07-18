
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import devbycLogo from '../assets/blue_circle.png';

const handleScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Three.js Animated Background */}
      <ThreeBackground />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-2">
            <div className=" flex items-center justify-center mx-auto">
              <img src={devbycLogo} alt="devbyc logo" className="h-48 w-48 " />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeIn">
              Christiaan
              <span className="block text-blue-300">de Kock</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Frontend Developer
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Frontend developer with 3+ years of experience, passionate about creating and implementing web applications using the latest frontend technologies. Strong problem-solving skills, attention to detail, and ability to work independently and collaboratively in fast-paced environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => handleScrollTo('projects')}
            >
              <span className="flex items-center gap-2">
                View My Work
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            <button
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
              onClick={() => handleScrollTo('contact')}
            >
              <span className="flex items-center gap-2">
                <Mail size={18} />
                Get In Touch
              </span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ChrissieDk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/christiaan-de-kock-2a7017100/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:christiaandk96@gmail.com"
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;