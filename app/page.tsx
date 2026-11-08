const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Python", "Java", "Kotlin", "Flutter", "Dart",
  "Artificial Intelligence", "Machine Learning", "C++", "C#",
];

const fields = [
  ["01", "Web Development", "Modern websites and interactive digital experiences."],
  ["02", "Mobile Applications", "Exploring mobile apps and cross-platform development."],
  ["03", "Software Development", "Programming and practical software solutions."],
  ["04", "Artificial Intelligence", "Machine learning and intelligent technologies."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050806] text-white">

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050806]/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="RAYAN SOFTWARE"
              className="h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden gap-7 text-sm text-gray-400 md:flex">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#services" className="hover:text-green-400">Services</a>
            <a href="/projects" className="hover:text-green-400">Projects</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>

          <a href="#contact" className="rounded-lg bg-green-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-300">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      <section className="relative px-6 py-32 md:py-44">
        <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 animate-pulse rounded-full bg-green-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <p className="mb-8 inline-block rounded-full border border-green-400/20 bg-green-400/5 px-5 py-3 text-xs font-bold tracking-widest text-green-400">
            SOFTWARE · TECHNOLOGY · INNOVATION
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-tight md:text-8xl">
            CREATE.
            <br />
            INNOVATE.
            <br />
            <span className="bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-transparent">
              BUILD THE FUTURE.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-9 text-gray-400">
            Welcome to RAYAN SOFTWARE. Exploring modern software,
            web development, mobile applications and artificial intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/projects" className="rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-green-300">
              Explore Projects ↗
            </a>

            <a href="#about" className="rounded-xl border border-white/15 px-8 py-4 font-bold transition hover:border-green-400 hover:text-green-400">
              Discover More
            </a>
          </div>

          <div className="mt-24 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
            {["CREATIVE THINKING", "MODERN TECHNOLOGY", "CONTINUOUS LEARNING"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-green-400/40">
                <span className="text-sm font-bold text-green-400">0{index + 1}</span>
                <p className="mt-3 text-sm font-bold tracking-wider text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#0a100c] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold tracking-widest text-green-400">ABOUT THE BRAND</p>
            <h2 className="text-5xl font-black md:text-6xl">
              BEYOND
              <br />
              <span className="text-green-400">CODE.</span>
            </h2>
          </div>

          <div>
            <h3 className="text-2xl font-bold">RAYAN SOFTWARE</h3>
            <p className="mt-5 leading-9 text-gray-400">
              RAYAN SOFTWARE is a personal technology brand focused on
              software development, web technologies, mobile applications
              and artificial intelligence.
              <br /><br />
              Our vision is to transform creative ideas into useful digital
              experiences while continuously learning and developing.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-5 text-sm font-bold tracking-widest text-green-400">WHAT WE EXPLORE</p>
        <h2 className="text-4xl font-black md:text-6xl">
          OUR <span className="text-green-400">FIELDS.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {fields.map(([number, title, description]) => (
            <div key={number} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/50">
              <span className="text-sm font-bold text-green-400">{number}</span>
              <h3 className="mt-6 text-2xl font-bold group-hover:text-green-400">{title}</h3>
              <p className="mt-4 leading-7 text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a100c] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-green-400">TECHNOLOGY STACK</p>
          <h2 className="text-4xl font-black md:text-6xl">
            OUR <span className="text-green-400">TECH.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-gray-400">
            Technologies and programming fields we work with and continue to develop.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-lg border border-green-400/20 bg-green-400/5 px-5 py-3 text-sm text-gray-200 transition hover:-translate-y-1 hover:border-green-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-5 text-sm font-bold tracking-widest text-green-400">PORTFOLIO</p>
        <h2 className="text-4xl font-black md:text-6xl">
          OUR <span className="text-green-400">PROJECTS.</span>
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-gray-400">
          Discover personal projects, experiments and technology concepts.
        </p>

        <a href="/projects" className="mt-10 inline-flex rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-green-300">
          View All Projects ↗
        </a>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0a100c] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-green-400">GET IN TOUCH</p>
          <h2 className="text-5xl font-black md:text-7xl">
            LET'S CREATE
            <br />
            <span className="text-green-400">SOMETHING NEW.</span>
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-gray-400">
            Connect with RAYAN SOFTWARE and explore our work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://github.com/rayanazouz2011-coder" target="_blank" rel="noreferrer" className="rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition hover:bg-green-300">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 RAYAN SOFTWARE. All rights reserved.
      </footer>

    </main>
  );
}