import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "RAYAN FOOTBALL",
    category: "SPORTS TECHNOLOGY",
    description:
      "A personal football platform showcasing player profiles, statistics and achievements.",
    technologies: ["Next.js", "React", "CSS"],
    status: "PERSONAL PROJECT",
    image: "/projects/rayan-football.png",
    link: "https://github.com/rayanazouz2011-coder",
  },
  {
    number: "02",
    title: "DIGITAL DASHBOARD",
    category: "WEB APPLICATION",
    description:
      "A dashboard concept designed to display and organize information through a modern interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "CONCEPT",
    image: null,
    link: null,
  },
  {
    number: "03",
    title: "AI EXPLORATION",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An experimental space for exploring artificial intelligence and machine learning.",
    technologies: ["Python", "AI", "Machine Learning"],
    status: "IN DEVELOPMENT",
    image: null,
    link: null,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050806] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="/" className="text-2xl font-black">
            RAYAN<span className="text-green-400">.</span>
          </a>

          <a
            href="/"
            className="text-sm text-gray-400 transition hover:text-green-400"
          >
            ← Back Home
          </a>
        </nav>

        <section className="py-24">
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-green-400">
            OUR PORTFOLIO
          </p>

          <h1 className="text-5xl font-black md:text-8xl">
            SELECTED
            <br />
            <span className="text-green-400">PROJECTS.</span>
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-gray-400">
            Explore personal projects, experiments and technology concepts
            developed under RAYAN SOFTWARE.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/50"
            >

              {project.image ? (
                <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="mb-8 flex aspect-video items-center justify-center rounded-xl border border-green-400/10 bg-green-400/5">
                  <span className="text-5xl font-black text-green-400/30">
                    {project.number}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-green-400">
                  PROJECT {project.number}
                </span>

                <span className="rounded-full border border-green-400/20 px-3 py-1 text-xs text-green-400">
                  {project.status}
                </span>
              </div>

              <p className="mt-10 text-xs tracking-widest text-gray-500">
                {project.category}
              </p>

              <h2 className="mt-4 text-3xl font-black transition group-hover:text-green-400">
                {project.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-green-400/5 px-3 py-2 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-green-400 transition hover:text-white"
                >
                  View Project <span>↗</span>
                </a>
              )}

            </article>
          ))}

        </section>

        <footer className="mt-24 border-t border-white/10 py-8 text-center text-sm text-gray-500">
          © 2026 RAYAN SOFTWARE. All Rights Reserved.
        </footer>

      </div>
    </main>
  );
}