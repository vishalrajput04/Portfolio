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
    <header className="px-5 pt-6 pb-10 md:px-[8vw] md:pt-8 md:pb-12">
      {/* Time */}
      <div className="mb-5 text-right text-sm text-slate-300">
        <p className="text-lg font-bold text-sky-400">{formattedTime}</p>
      </div>

      {/* Intro */}
      <div className="text-center">
        <h2 className="mb-1 text-lg font-semibold text-sky-400 md:text-xl">
          {getGreeting()}!
        </h2>

        <p className="mb-3 text-sm text-slate-400">Welcome to my Web Profile</p>

        <h1 className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Vishal Chauhan
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Today's {getFormattedDate()}
        </p>
      </div>

      {/* Main Hero */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col-reverse items-center justify-between gap-8 md:mt-12 md:flex-row md:gap-12">
        {/* Hero Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="font-semibold text-sky-400">Hey everyone!</p>

          <h2 className="mt-2 bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-2xl font-bold leading-snug text-transparent md:text-4xl">
            I'm Vishal, a Full Stack Developer passionate about building modern
            web applications.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
            I build modern, scalable, and user-focused web applications.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20"
          >
            View My Projects
          </a>
        </div>

        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Vishal Chauhan - Full Stack Developer"
            className="profile-zoom h-56 w-56 rounded-full border-4 border-white/10 object-cover shadow-2xl shadow-sky-400/10 md:h-72 md:w-72"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
