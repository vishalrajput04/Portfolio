const About = () => {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-5 py-16 md:px-[8vw]"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          About Me
        </h2>

        <p className="mb-5 leading-8 text-slate-400">
          I'm an MCA student and Full Stack Developer with hands-on experience
          in software and web development. I enjoy building modern, scalable and
          user-friendly applications that solve real-world problems.
        </p>

        <p className="mb-5 leading-8 text-slate-400">
          I have experience with full-stack technologies, version control tools
          like Git and GitHub, and AI-powered development tools such as GitHub
          Copilot, Codex, Cursor and VS Code.
        </p>

        <p className="leading-8 text-slate-400">
          I also have knowledge of Java and SQL databases and enjoy learning new
          and emerging technologies to improve my technical skills and gain
          practical experience.
        </p>

        <p className="mt-5 leading-8 text-slate-400">
          I am particularly interested in Artificial Intelligence, Generative AI
          and AI-powered applications, and I am continuously exploring how
          modern AI technologies can be integrated into practical software
          solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
