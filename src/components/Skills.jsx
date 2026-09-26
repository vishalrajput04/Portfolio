const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Technology",
    skills: ["Node.js", "Express.js", "REST APIs", "Middleware"],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python"],
  },
  {
    title: "Database Systems",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "VS Code", "Cursor", "IntelliJ IDEA"],
  },
  {
    title: "AI & Emerging Technologies",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "GitHub Copilot",
      "ChatGPT",
      "Codex",
      "Claude",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-5 py-16 md:px-[8vw]"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Tech Stack
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-xl font-semibold text-transparent">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-500 hover:text-slate-950"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
