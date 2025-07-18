
import { ExternalLink, Github, } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "KnowledgeHubArabia",
      description: "A comprehensive online tutoring platform connecting students with qualified tutors across Saudi Arabia. Built as a full-stack application with real-time features.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "C#"],
      features: [
        "Real-time chat and video calling",
        "User authentication and profiles",
        "Booking and scheduling system",
        "Payment integration",
        "Mobile-responsive design"
      ],
      featured: true
    },
    {
      title: "Crown Funeral",
      description: "A modern approach to the funeral space focusing on SASSA grant individuals.",
      image: "https://images.pexels.com/photos/10485418/pexels-photo-10485418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "TypeScript","Firebase"],
      features: [
        "Modern design",
        "Member dashboard",
        "Detailed plan breakdowns",
        "Responsive design"
      ],
      liveUrl: "https://www.crownfuneral.co.za/",
      featured: false
    },
    {
      title: "WazzaScore",
      description: "A community-driven schoolboy rugby app, designed to bring the excitement of grassroots rugby directly to your fingertips.",
      image: "https://images.pexels.com/photos/31003855/pexels-photo-31003855.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Firebase"],
      features: [
        "Real-time collaboration",
        "Gamification system",
        "Team management",
        "Profile management",
        "Live updates"
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.wazzascoreapp&pli=1",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills with smooth animations and optimized performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "ThreeJs"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Performance optimized",
        "SEO friendly",
        "Contact form"
      ],
      liveUrl: "https://www.devbyc.co.za/",
      githubUrl: "https://github.com/ChrissieDk/CV-2",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my expertise in modern web development
            and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2 min-h-[20rem]' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${project.featured ? 'h-full min-h-[20rem]' : 'h-64'} object-cover group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.liveUrl || project.githubUrl ? (
                        <>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                              title="View Live"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                              title="View Code"
                            >
                              <Github size={16} />
                            </a>
                          )}
                        </>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold shadow-sm">Coming soon!</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/ChrissieDk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <Github size={20} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;