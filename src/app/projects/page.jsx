import { GraduationCap } from 'lucide-react';
import Timeline, { ProjectBlock } from '@/components/Timeline';
import data from '@/data/timeline.json';
import { formatRange } from '@/lib/format';

export const metadata = {
  title: 'Experience & Projects – Anh Chau',
  description: 'Timeline of work, projects and training by Anh Chau, Full-Stack Developer.',
};

export default function ProjectsPage() {
  const { experience, learning, sideProjects } = data;

  return (
    <div className="min-h-screen bg-[#424769]">
      <header className="border-b border-[#676f9d]/20 bg-[#2d3250]/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <a href="/" className="block">
            <span className="block text-3xl font-bold text-white">Anh Chau</span>
            <span className="block text-[#f9b17a] font-semibold">Full-Stack Developer</span>
          </a>
          <a
            href="mailto:anhchau8922@gmail.com"
            className="px-5 py-2.5 bg-[#f9b17a] hover:bg-[#ff9d5c] rounded-lg text-[#2d3250] font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        <section aria-labelledby="experience-heading" className="space-y-8">
          <div className="space-y-3">
            <h1 id="experience-heading" className="text-4xl md:text-5xl font-bold text-white">
              Experience
            </h1>
            <p className="text-white/75 max-w-2xl">
              Roles, projects and tasks, most recent first.
            </p>
          </div>
          <Timeline items={experience} />
        </section>

        {sideProjects?.length > 0 && (
          <section aria-labelledby="side-heading" className="space-y-8">
            <h2 id="side-heading" className="text-3xl font-bold text-white">Side projects</h2>
            <div className="grid gap-6">
              {sideProjects.map((project) => (
                <div key={project.name} className="bg-[#2d3250]/95 border border-[#676f9d]/20 rounded-2xl p-6">
                  <ProjectBlock project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="learning-heading" className="space-y-8">
          <h2 id="learning-heading" className="text-3xl font-bold text-white">Training</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {learning.map((course) => (
              <li
                key={course.name}
                className="bg-[#2d3250]/95 border border-[#676f9d]/20 rounded-xl p-5 flex gap-4"
              >
                <GraduationCap className="w-6 h-6 text-[#f9b17a] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">{course.name}</p>
                  <p className="text-sm text-[#b4bae0]">
                    {course.provider} · {formatRange(course.start, course.end)}
                    {course.status === 'in progress' && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-[#f9b17a]/20 text-[#f9b17a] text-xs font-semibold">
                        In progress
                      </span>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-[#676f9d]/20 bg-[#2d3250]/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Get in touch</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:anhchau8922@gmail.com"
              className="px-6 py-3 bg-[#f9b17a] hover:bg-[#ff9d5c] rounded-xl text-[#2d3250] font-semibold transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/anh-kim-chau"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#676f9d] hover:border-[#f9b17a] rounded-xl text-white font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/anh-8922"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#676f9d] hover:border-[#f9b17a] rounded-xl text-white font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
