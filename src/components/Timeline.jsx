import { ExternalLink, Calendar, Github } from 'lucide-react';
import { formatRange } from '@/lib/format';

function StackTags({ stack }) {
  if (!stack?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {stack.map((tech) => (
        <li
          key={tech}
          className="px-2.5 py-1 bg-[#424769] border border-[#676f9d]/40 rounded-md text-white/90 text-xs"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectBlock({ project }) {
  return (
    <div className="border-l-2 border-[#676f9d]/40 pl-4 space-y-3">
      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
      <ul className="space-y-1.5">
        {project.tasks.map((task) => (
          <li key={task} className="flex gap-3 text-white/80 text-sm leading-relaxed">
            <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f9b17a] flex-shrink-0" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
      <StackTags stack={project.stack} />
      <div className="flex flex-wrap gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f9b17a] hover:text-[#ff9d5c]"
          >
            Live site <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f9b17a] hover:text-[#ff9d5c]"
          >
            Code <Github className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-[#676f9d]/40 ml-2 space-y-12">
      {items.map((item) => (
        <li key={`${item.company}-${item.start}`} className="relative pl-8">
          <span
            aria-hidden="true"
            className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9b17a] ring-4 ring-[#424769]"
          />
          <article className="bg-[#2d3250]/95 border border-[#676f9d]/20 rounded-2xl p-6 md:p-8 space-y-6">
            <header className="space-y-1">
              <p className="flex items-center gap-2 text-sm text-[#b4bae0]">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {formatRange(item.start, item.end)}
              </p>
              <h3 className="text-2xl font-bold text-white">{item.company}</h3>
              <p className="text-[#f9b17a] font-semibold">{item.role}</p>
              {item.summary && <p className="text-white/75 pt-2">{item.summary}</p>}
            </header>
            <div className="space-y-6">
              {item.projects.map((project) => (
                <ProjectBlock key={project.name} project={project} />
              ))}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f9b17a] hover:text-[#ff9d5c]"
              >
                Visit {item.company.split(' t/a ').pop()} <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}

export { ProjectBlock };
