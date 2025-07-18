
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "GetSavvi Health",
      location: "Cape Town",
      period: "Nov 2023 - Present",
      type: "Permanent",
      description: "Modernized existing company website, designed and implemented landing pages, developed Settl (voucher-based platform), led new funeral services offering, and independently developed multiple client websites. Currently working on API integrations to enhance website functionalities.",
      achievements: [
        "Modernized company website to contemporary standards and best practices",
        "Designed and implemented 6 targeted landing pages, increasing click-through conversions by 20%",
        "Spearheaded Settl, an innovative voucher-based platform for National Health Insurance challenges",
        "Led end-to-end development of new funeral services offering with dedicated website and user management system",
        "Independently developed and deployed websites for Crown Funeral and M&C financial services",
        "Responsible for full development lifecycle from design to deployment",
        "Currently working on API integrations to enhance website functionalities and user experiences"
      ],
      technologies: ["React JS", "Tailwind CSS", "TypeScript", "C#", "ASP.NET Core Web APIs", "MVC", "JQuery"],
      featured: true
    },
    {
      title: "Freelance Mobile App Developer",
      company: "WazzaScore",
      location: "Cape Town (Remote)",
      period: "Dec 2023 - Dec 2024",
      type: "Freelance",
      description: "Developed mobile application using React Native for school rugby engagement. Built entire app from concept to deployment, focusing on user engagement and live API data integration.",
      achievements: [
        "Developed mobile app using React Native for school rugby engagement",
        "Built entire app from concept to deployment, showcasing full-stack mobile development skills",
        "Integrated live data from APIs for real-time updates and interactive features"
      ],
      technologies: ["React Native", "API Integration", "Mobile Development", "Firebase", "Gitlab"],
      featured: false
    },
    {
      title: "Fullstack Software Engineer",
      company: "CBOS",
      location: "Cape Town",
      period: "Jun 2023 - Nov 2023",
      type: "Internship",
      description: "Instrumental part of development team as Full Stack Developer Intern. Specialized in C# and ASP.NET Core Web APIs, focused on performance optimization, data fetching, and UI components in Angular.",
      achievements: [
        "Specialized in C# and ASP.NET Core Web APIs on backend",
        "Focused on performance optimization and data fetching algorithms",
        "Developed complex data structures for robust backend functionalities",
        "Skilled in TypeScript and Angular for frontend development",
        "Constructed UI components including tables and treenodes",
        "Involved in database management and API development for seamless frontend-backend communication"
      ],
      technologies: ["C#", "ASP.NET Core Web APIs", "TypeScript", "Angular", "Database Management", "Azure"],
      featured: false
    },
    {
      title: "Frontend Developer",
      company: "Simpal Connect",
      location: "Cape Town",
      period: "Feb 2022 - Present",
      type: "Freelance",
      description: "Worked independently and in a team to solve problems, delivered on company/client expectations, and contributed to innovation and technology adoption.",
      achievements: [
        "Worked independently and in a team to solve problems",
        "Maintained communication to ensure project satisfaction",
        "Actively engaged in group meetings and innovation team"
      ],
      technologies: ["React JS", "Tailwind CSS", "TypeScript", "PHP Laravel"],
      featured: false
    },
    {
      title: "Frontend Developer",
      company: "Limes",
      location: "Cape Town",
      period: "Feb 2022 - Present",
      type: "Freelance",
      description: "Part of innovation team, contributed to user experience design, and developed/maintained frontend of web applications.",
      achievements: [
        "Part of innovation team for technology adoption",
        "Contributed to user experience design for intuitive interfaces",
        "Developed and maintained frontend of web applications"
      ],
      technologies: ["React JS", "Tailwind CSS", "TypeScript", "Figma", "API integration"],
      featured: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in frontend development, building innovative solutions
            and delivering exceptional user experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                exp.featured ? 'bg-white border-2 border-blue-200' : 'bg-white'
              } rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {exp.featured && (
                <div className="absolute top-0 left-8 transform -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Current Employment
                  </span>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1 font-semibold text-blue-600">
                      <ExternalLink size={16} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;