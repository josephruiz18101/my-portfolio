import Link from "next/link";

const projects = [
  {
    title: "Gamer Bud",
    description:
      "A multiplayer gaming community platform with real-time chat, JWT-based authentication, and performance optimizations using React, Node.js, and MongoDB.",
    repo: "https://github.com/Teacher2Coder/gamer-bud",
  },
  {
    title: "DMS and DMS",
    description:
      "A Dungeons & Dragons campaign manager featuring character tracking, in-game event logging, and user authentication with persistent storage (React, Express.js, MongoDB).",
    repo: "https://github.com/Teacher2Coder/dms-and-dms",
  },
  {
    title: "Action Plan for Release",
    description:
      "A project release roadmap with a task management system, built using HTML, CSS, and JavaScript. Focuses on UX best practices for a clean, user-friendly interface.",
    repo: "https://github.com/josephruiz18101/Actionplanforrelease",
  },
];

export default function Projects() {
    return (
      <div className="space-y-8 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="p-6 border rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-3">{project.description}</p>
              <Link
                href={project.repo}
                target="_blank"
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Code ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  