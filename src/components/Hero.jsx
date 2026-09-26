import { useEffect, useState } from "react";
import profileImage from "../assets/Profile.jpg";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";

  return "Good Night";
};

const getFormattedDate = () => {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="px-5 py-16 md:px-[8vw]">
      <div className="mb-8 text-right text-sm text-slate-300">
        <p className="text-xl font-bold text-sky-400">{formattedTime}</p>
      </div>

      <div className="text-center">
        <h2 className="mb-2 text-xl font-semibold text-sky-400 md:text-2xl">
          {getGreeting()}!
        </h2>

        <p className="mb-6 text-slate-400">Welcome to my Web Profile</p>

        <h1 className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Vishal Chauhan
        </h1>

        <p className="mt-5 text-lg text-slate-300">
          Full Stack Developer | AI Enthusiast
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Today's {getFormattedDate()}
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col-reverse items-center justify-between gap-12 md:flex-row">
        <div className="max-w-2xl text-center md:text-left">
          <p className="font-semibold text-sky-400">Hey everyone!</p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            I'm Vishal & I love building modern web applications.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I enjoy creating responsive, user-friendly and practical software
            solutions using modern web technologies.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20"
          >
            View My Projects
          </a>
        </div>

        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Vishal Chauhan - Full Stack Developer"
            className="h-64 w-64 rounded-full border-4 border-white/10 object-cover shadow-2xl shadow-sky-400/10 transition duration-500 hover:scale-105 hover:rotate-2 md:h-80 md:w-80"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
