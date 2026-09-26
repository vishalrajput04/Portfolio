import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm("service_0521iog", "template_hi0f6qu", formRef.current, {
        publicKey: "YafjgJ7Wdom3uWua4",
      })
      .then(() => {
        setStatus("Thanks for contacting me!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Message failed to send. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 px-5 py-16 md:px-[8vw]"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Contact Me
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-slate-300">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
          />

          <label
            htmlFor="email"
            className="mb-2 mt-5 font-medium text-slate-300"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
          />

          <label
            htmlFor="message"
            className="mb-2 mt-5 font-medium text-slate-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            required
            className="min-h-36 resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
          />

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="mt-6 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="mt-5 text-sky-400">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
