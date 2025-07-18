import React from 'react';
import {
  Code,
  Palette,
  Database,
  Zap,
  Atom,
  FileType2,
  FileCode,
  Wind,
  Paintbrush,
  Brush,
  Box,
  MonitorSmartphone,
  LayoutDashboard,
  Code2,
  Flame,
  Server,
  ServerCog,
  Share2,
  GitBranch,
  Package,
  Bolt,
  CheckCircle2,
  PenTool
} from 'lucide-react';

const skillIconMap: Record<string, React.ReactNode> = {
  'React': <Atom className="w-5 h-5 text-blue-500" />,
  'TypeScript': <FileType2 className="w-5 h-5 text-blue-700" />,
  'JavaScript (ES6+)': <FileCode className="w-5 h-5 text-yellow-500" />,
  'HTML5': <FileCode className="w-5 h-5 text-orange-500" />,
  'Tailwind CSS': <Wind className="w-5 h-5 text-cyan-500" />,
  'SCSS/Sass': <Paintbrush className="w-5 h-5 text-pink-500" />,
  'Styled Components': <Brush className="w-5 h-5 text-fuchsia-500" />,
  'Bootstrap': <Box className="w-5 h-5 text-purple-700" />,
  'Responsive Design': <MonitorSmartphone className="w-5 h-5 text-green-500" />,
  'UI/UX Principles': <LayoutDashboard className="w-5 h-5 text-indigo-500" />,
  'C#': <Code2 className="w-5 h-5 text-violet-700" />,
  'Firebase': <Flame className="w-5 h-5 text-orange-400" />,
  'REST APIs': <Server className="w-5 h-5 text-gray-700" />,
  'Node.js': <ServerCog className="w-5 h-5 text-green-700" />,
  'SQL': <Database className="w-5 h-5 text-blue-900" />,
  'GraphQL': <Share2 className="w-5 h-5 text-pink-600" />,
  'Git/GitHub': <GitBranch className="w-5 h-5 text-gray-800" />,
  'Webpack': <Package className="w-5 h-5 text-blue-400" />,
  'Vite': <Bolt className="w-5 h-5 text-yellow-400" />,
  'ESLint': <CheckCircle2 className="w-5 h-5 text-purple-500" />,
  'Figma': <PenTool className="w-5 h-5 text-pink-400" />,
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5" },
      ]
    },
    {
      title: "Styling & Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS" },
        { name: "SCSS/Sass" },
        { name: "Styled Components" },
        { name: "Bootstrap" },
        { name: "Responsive Design" },
        { name: "UI/UX Principles" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "C#" },
        { name: "Firebase" },
        { name: "REST APIs" },
        { name: "Node.js" },
        { name: "SQL" },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub" },
        { name: "Webpack" },
        { name: "Vite" },
        { name: "ESLint" },
        { name: "Figma" }
      ]
    }
  ];

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    {skillIconMap[skill.name] || <Code className="w-4 h-4 text-gray-400" />}
                    {skill.name}
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
              {['React Native', 'Three.js', 'NextJS', 'Micro-frontends', 'SQL', 'AI/ML', 'MCP Servers'].map((tech, index) => (
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