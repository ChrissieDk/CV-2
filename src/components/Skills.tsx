import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 }
      ]
    },
    {
      title: "Styling & Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "SCSS/Sass", level: 88 },
        { name: "Styled Components", level: 82 },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "C#", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "SQL", level: 78 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Webpack", level: 80 },
        { name: "Vite", level: 88 },
        { name: "Jest", level: 82 },
        { name: "ESLint", level: 85 },
        { name: "Figma", level: 78 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    return 'from-orange-400 to-orange-600';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to create
            exceptional web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
              Currently exploring:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Native', 'Three.js', 'WebGL', 'Micro-frontends', 'Web3', 'AI/ML'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;