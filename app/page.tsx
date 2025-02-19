export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8">
      {/* Profile Image - Perfect Circle with Black Border */}
      <img
        src="/portfolioimg.jpg"
        alt="Joseph Ruiz"
        className="w-52 h-52 rounded-full border-4 border-black object-cover shadow-lg"
      />

      {/* Intro Text */}
      <h1 className="text-6xl font-extrabold leading-tight">
        Hi, I'm Joseph Ruiz
      </h1>
      <p className="text-2xl">Front-End Web Developer | React | Next.js</p>

      {/* Call to Action */}
      <a
        href="/projects"
        className="mt-4 inline-block px-10 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-lg"
      >
        View My Work
      </a>
    </div>
  );
}
