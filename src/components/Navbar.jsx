import { Github, Linkedin, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/80 px-5 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a
          href="#about"
          className="font-semibold text-slate-300 transition hover:text-sky-400"
        >
          About
        </a>

        <a
          href="#projects"
          className="font-semibold text-slate-300 transition hover:text-sky-400"
        >
          Projects
        </a>

        <a
          href="#skills"
          className="font-semibold text-slate-300 transition hover:text-sky-400"
        >
          Skills
        </a>

        <a
          href="#contact"
          className="font-semibold text-slate-300 transition hover:text-sky-400"
        >
          Contact
        </a>

        <a
          href="/VishalChauhan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold text-slate-300 transition hover:text-sky-400"
        >
          <FileText size={17} />
          Resume
        </a>

        <a
          href="https://github.com/vishalrajput04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold text-slate-300 transition hover:text-sky-400"
        >
          <Github size={17} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vishal-chauhan-86134b253/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold text-slate-300 transition hover:text-sky-400"
        >
          <Linkedin size={17} />
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
