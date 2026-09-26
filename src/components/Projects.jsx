import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CourseHub",
    description:
      "An online course platform built with React, Vite and Tailwind CSS.",
    github: "https://github.com/vishalrajput04/CourseHub",
    live: "https://course-hub-xi.vercel.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "An e-commerce website inspired by Amazon with responsive UI and modern web technologies.",
    github: "https://github.com/vishalrajput04",
    live: "https://vishalrajput04.github.io/amazon-clone/",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my skills, projects and development journey.",
    github: "https://github.com/vishalrajput04/Portfolio",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-5 py-16 md:px-[8vw]"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-400/10"
            >
              <h3 className="mb-3 text-2xl font-bold text-sky-400">
                {project.title}
              </h3>

              <p className="min-h-24 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-sky-400 hover:text-white"
                >
                  <ExternalLink size={18} />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-slate-300 hover:text-white"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
