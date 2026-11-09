export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites and powerful web applications built for performance and growth.",
    },
    {
      number: "02",
      title: "Mobile Applications",
      description:
        "Smart mobile applications designed to deliver excellent user experiences.",
    },
    {
      number: "03",
      title: "Software Development",
      description:
        "Custom software solutions that simplify operations and solve real business challenges.",
    },
    {
      number: "04",
      title: "Artificial Intelligence",
      description:
        "Intelligent AI-powered solutions that help businesses work smarter.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050807] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-semibold tracking-[0.3em] text-green-400">
          WHAT WE DO
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Our <span className="text-green-400">Services</span>
        </h1>

        <p className="mb-16 max-w-2xl leading-8 text-gray-400">
          We build innovative technology solutions that help transform ideas
          into powerful digital products.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-green-400/50"
            >
              <p className="mb-8 text-sm font-bold text-green-400">
                {service.number}
              </p>

              <h2 className="mb-4 text-2xl font-bold">
                {service.title}
              </h2>

              <p className="leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}