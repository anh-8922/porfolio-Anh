'use client';

import React, { useState } from 'react';
import { ExternalLink, Calendar, Code2, Briefcase } from 'lucide-react';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "I Like Music Platforms",
      company: "Broadchart International",
      period: "Oct 2025 - Present",
      status: "Active",
      link: "https://web.ilikemusic.com",
      description: "Contributing to the development of the delivery engine for one of the world's most comprehensive online music catalogues serving broadcast, entertainment, and education sectors.",
      highlights: [
        "Maintain and administer WordPress website with enhanced security",
        "Implement secure form handling using Gravity Forms",
        "Optimize content layouts using Advanced Custom Fields"
      ],
      technologies: ["React", "TypeScript", "PHP", "Laravel", "AWS", "MySQL", "WordPress"],
      color: "#f9b17a" // Peach
    },
    {
      id: 2,
      title: "Symba Marketing Website",
      company: "Symba Marketing",
      period: "May 2025 - Oct 2025",
      status: "Completed",
      link: "https://symbamarketing.co.uk",
      description: "Built marketing websites and landing pages to support business growth. Managed content updates, web administration, and SEO optimization.",
      highlights: [
        "Delivered responsive marketing websites",
        "Implemented SEO optimization strategies",
        "Managed e-commerce functionality with WooCommerce"
      ],
      technologies: ["Wix Velo", "JavaScript", "WordPress", "Elementor", "WooCommerce"],
      color: "#676f9d" // Blue-gray
    },
    {
      id: 3,
      title: "BoB (Box of Broadcasts)",
      company: "Learning On Screen",
      period: "May 2024 - July 2025",
      status: "Completed",
      link: "https://learningonscreen.ac.uk/ondemand",
      description: "Maintained and enhanced an online streaming platform providing a large archive of TV and radio content used extensively in higher education.",
      highlights: [
        "Resolved authentication, login, and cookie failures",
        "Delivered major UI/UX overhaul improving user journeys",
        "Cross-collaborated with designers and developers"
      ],
      technologies: ["PHP", "MySQL", "Python", "JavaScript", "WordPress", "OpenAthens", "AWS"],
      color: "#424769" // Medium blue
    },
    {
      id: 4,
      title: "BUFVC Services & Collections",
      company: "Learning On Screen",
      period: "Mar 2024 - Jan 2025",
      status: "Completed",
      link: "https://learningonscreen.ac.uk/collections",
      description: "Successfully migrated 16 large-scale collections from legacy domain to new platform, achieving 99% data integrity.",
      highlights: [
        "News On Screen - World's leading resource for newsreels study",
        "C4PP - Comprehensive Channel 4 programme information digest",
        "TRILT - Broadcast listings database spanning decades"
      ],
      technologies: ["PHP", "MySQL", "Python", "JavaScript", "WordPress", "OpenAthens", "AWS"],
      color: "#f9b17a" // Peach
    },
    {
      id: 5,
      title: "Your Local Arena",
      company: "Learning On Screen",
      period: "Nov 2023 - Jan 2024",
      status: "Completed",
      link: "https://learningonscreen.ac.uk/yourlocalarena",
      description: "Created microsite for Arts Council England-funded project featuring the BBC's Arena film archive.",
      highlights: [
        "Developed for Arts Council England-funded project",
        "Featured BBC Arena film archive content",
        "Delivered clean, accessible user experience"
      ],
      technologies: ["PHP", "JavaScript", "WordPress"],
      color: "#676f9d" // Blue-gray
    }
  ];

  return (
    <div className="min-h-screen bg-[#424769]">
      {/* Animated background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-[#676f9d]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-[#f9b17a]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#676f9d]/20 backdrop-blur-sm bg-[#2d3250]/90">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-2">
                  Anh Chau
                </h1>
                <p className="text-[#f9b17a] text-lg font-semibold">
                  Full-Stack Developer
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:anhchau8922@gmail.com"
                  className="px-6 py-3 bg-[#f9b17a] hover:bg-[#ff9d5c] rounded-lg text-[#2d3250] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f9b17a]/30"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#676f9d]/25 border border-[#676f9d]/40 rounded-full text-[#ffffff] text-sm font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] leading-tight">
              Building Digital
              <br />
              <span className="text-[#f9b17a]">
                Experiences
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#ffffff]/70 max-w-2xl mx-auto">
              A showcase of full-stack development projects spanning music platforms,
              educational technology, and digital services.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`relative bg-[#2d3250]/95 backdrop-blur-sm border border-[#676f9d]/20 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#f9b17a]/50 hover:shadow-2xl hover:shadow-[#f9b17a]/20 ${
                  hoveredProject === project.id ? 'scale-[1.02]' : ''
                }`}>
                  {/* Color accent on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"
                    style={{ backgroundColor: project.color }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex flex-col gap-6 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ backgroundColor: project.color }}
                          >
                            <Code2 className="w-6 h-6 text-[#2d3250]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="text-xl md:text-2xl font-bold text-[#ffffff]">
                                {project.title}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                project.status === 'Active'
                                  ? 'bg-[#f9b17a]/25 text-[#f9b17a] border border-[#f9b17a]/40'
                                  : 'bg-[#676f9d]/25 text-[#ffffff] border border-[#676f9d]/40'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <p className="text-[#f9b17a] font-semibold mb-1">{project.company}</p>
                            <div className="flex items-center gap-2 text-[#676f9d] text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-[#ffffff]/85 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: project.color }}
                              ></div>
                              <p className="text-[#ffffff]/70 text-sm">{highlight}</p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-[#424769] border border-[#676f9d]/25 rounded-lg text-[#ffffff]/90 text-sm hover:border-[#f9b17a]/40 hover:bg-[#676f9d]/15 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-semibold transition-colors group/link hover:text-[#ff9d5c]"
                          style={{ color: project.color }}
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#676f9d]/20 bg-[#2d3250]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-4">
              Where Ideas Meet Execution
            </h3>
            <p className="text-[#ffffff]/70 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work?
              Feel free to reach out.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:anhchau8922@gmail.com"
                className="px-8 py-4 bg-[#f9b17a] hover:bg-[#ff9d5c] rounded-xl text-[#2d3250] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f9b17a]/30"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/anh-kim-chau"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#424769] border-2 border-[#676f9d] hover:border-[#f9b17a] rounded-xl text-[#ffffff] font-semibold hover:bg-[#676f9d]/20 transition-all duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}