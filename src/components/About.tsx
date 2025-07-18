
import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Frontend developer with 3+ years of experience, passionate about creating and implementing web applications using the latest frontend technologies. Currently working as a frontend developer at a health insurance company. Strong problem-solving skills, attention to detail, and ability to work independently and collaboratively in fast-paced environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Key Strengths:</strong> Full-stack development capabilities (Frontend specialization with backend experience), Mobile app development (React Native), API integration and development, Multi-industry experience (Health insurance, Funeral services, Financial services, Sports/Rugby), Innovation focus and technology adoption, Independent project delivery, Team collaboration and leadership.
              </p>
              <p className="mb-6">
                <strong>Soft Skills:</strong> Ability to work in a team, Problem-solving, Attention to detail, Independent work capability, Fast-paced environment adaptation.
              </p>
              <p className="mb-6">
                <strong>Languages:</strong> Afrikaans, English
              </p>
              <p>
                <strong>Hobbies:</strong> Guitar, Being Active, Social Events
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4"><Code className="w-6 h-6" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Profile</h3>
              <p className="text-gray-600 text-sm">Frontend developer with 3+ years of experience, passionate about creating and implementing web applications using the latest frontend technologies.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4"><Zap className="w-6 h-6" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Strengths</h3>
              <p className="text-gray-600 text-sm">Full-stack development, Mobile app development, API integration, Multi-industry experience, Innovation, Independent delivery, Teamwork.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4"><Users className="w-6 h-6" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Soft Skills</h3>
              <p className="text-gray-600 text-sm">Teamwork, Problem-solving, Attention to detail, Independence, Adaptability.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4"><Target className="w-6 h-6" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages & Hobbies</h3>
              <p className="text-gray-600 text-sm">Afrikaans, English. Guitar, Being Active, Social Events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;