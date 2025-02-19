import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiJavascript } from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <section className="space-y-8 text-center">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Hey there! I'm <strong>Joseph Ruiz</strong>, a Front-End Web Developer passionate about building interactive,
        responsive web applications. I specialize in React, JavaScript, and modern UI/UX design.
      </p>

      <h3 className="text-2xl font-semibold">Tech Stack</h3>
      <div className="flex justify-center flex-wrap gap-8 text-4xl text-blue-500">
        <FaReact title="React" />
        <SiNextdotjs title="Next.js" />
        <SiJavascript title="JavaScript" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaNodeJs title="Node.js" />
        <SiMongodb title="MongoDB" />
        <FaGithub title="GitHub" />
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
