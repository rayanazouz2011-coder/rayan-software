const values = [
  {
    number: "01",
    title: "Innovation",
    ar: "الابتكار",
    description: "We explore new ideas and transform them into meaningful technology.",
    descriptionAr: "نستكشف الأفكار الجديدة ونحوّلها إلى حلول تقنية ذات قيمة.",
  },
  {
    number: "02",
    title: "Excellence",
    ar: "التميز",
    description: "We aim for quality, reliability, and continuous improvement.",
    descriptionAr: "نسعى إلى الجودة والموثوقية والتطوير المستمر.",
  },
  {
    number: "03",
    title: "Integrity",
    ar: "النزاهة",
    description: "We build trust through responsibility and transparency.",
    descriptionAr: "نبني الثقة من خلال المسؤولية والشفافية.",
  },
  {
    number: "04",
    title: "Global Vision",
    ar: "الرؤية العالمية",
    description: "We develop technology with the ambition to serve the world.",
    descriptionAr: "نطوّر التكنولوجيا بطموح الوصول إلى الأسواق العالمية.",
  },
];

const departments = [
  ["RAYAN DIGITAL", "الحلول الرقمية"],
  ["RAYAN BUSINESS", "أنظمة الأعمال"],
  ["RAYAN ENGINEERING", "الأنظمة الهندسية"],
  ["RAYAN AI", "الذكاء الاصطناعي"],
  ["RAYAN SECURITY", "الأمن السيبراني"],
  ["RAYAN LABS", "البحث والتطوير"],
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#050807] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">

        <section className="mb-28">
          <p className="mb-5 text-sm font-bold tracking-[0.35em] text-green-400">
            ABOUT RAYAN SOFTWARE
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Technology Beyond
            <span className="block text-green-400">Boundaries.</span>
          </h1>

          <h2
            dir="rtl"
            className="mt-8 text-3xl font-bold text-gray-200 md:text-4xl"
          >
            تكنولوجيا بلا حدود.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            RAYAN SOFTWARE is an ambitious technology company vision focused
            on developing digital products, intelligent systems, engineering
            solutions, and innovative technologies.
          </p>

          <p
            dir="rtl"
            className="mt-5 max-w-3xl text-right text-lg leading-9 text-gray-400"
          >
            RAYAN SOFTWARE رؤية لشركة تكنولوجيا طموحة تهدف إلى تطوير المنتجات
            الرقمية والأنظمة الذكية والحلول الهندسية والتقنيات المبتكرة.
          </p>
        </section>

        <section className="mb-28 grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-5 text-sm font-bold tracking-widest text-green-400">
              OUR VISION
            </p>

            <h2 className="text-3xl font-bold">Our Vision</h2>

            <p dir="rtl" className="mt-3 text-xl font-bold text-green-400">
              رؤيتنا
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              To build an integrated global technology company that creates
              products and solutions across multiple industries.
            </p>

            <p dir="rtl" className="mt-4 text-right leading-8 text-gray-400">
              بناء شركة تكنولوجيا متكاملة ذات حضور عالمي، تطور منتجاتها
              وأنظمتها وحلولها التقنية في قطاعات متعددة.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-5 text-sm font-bold tracking-widest text-green-400">
              OUR MISSION
            </p>

            <h2 className="text-3xl font-bold">Our Mission</h2>

            <p dir="rtl" className="mt-3 text-xl font-bold text-green-400">
              رسالتنا
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              To create useful, reliable, and innovative technology that
              solves real problems and creates lasting value.
            </p>

            <p dir="rtl" className="mt-4 text-right leading-8 text-gray-400">
              تطوير تكنولوجيا مفيدة وموثوقة ومبتكرة تساهم في حل المشكلات
              الحقيقية وصناعة قيمة مستدامة.
            </p>
          </div>
        </section>

        <section className="mb-28">
          <div className="mb-10">
            <p className="text-sm font-bold tracking-widest text-green-400">
              OUR DEPARTMENTS
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Six Fields. One Vision.
            </h2>
            <p dir="rtl" className="mt-3 text-lg text-gray-400">
              ستة قطاعات، رؤية واحدة.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map(([name, ar], index) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-green-400/50"
              >
                <p className="text-sm text-green-400">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-bold">{name}</h3>
                <p dir="rtl" className="mt-3 text-right text-gray-400">
                  {ar}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-28">
          <div className="mb-10">
            <p className="text-sm font-bold tracking-widest text-green-400">
              OUR VALUES
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              What We Believe In
            </h2>
            <p dir="rtl" className="mt-3 text-lg text-gray-400">
              المبادئ التي نؤمن بها.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="font-bold text-green-400">
                  {value.number}
                </p>
                <h3 className="mt-5 text-2xl font-bold">
                  {value.title}
                </h3>
                <p dir="rtl" className="mt-2 text-right text-green-400">
                  {value.ar}
                </p>
                <p className="mt-5 leading-7 text-gray-400">
                  {value.description}
                </p>
                <p dir="rtl" className="mt-3 text-right leading-7 text-gray-400">
                  {value.descriptionAr}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-green-400/20 bg-green-400/[0.04] px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            BUILD • INNOVATE • INSPIRE
          </h2>
          <p dir="rtl" className="mt-5 text-xl font-semibold text-green-400">
            نبني • نبتكر • نُلهم
          </p>
          <p className="mt-5 text-gray-400">
            Creating technology for a better digital future.
          </p>
          <p dir="rtl" className="mt-2 text-gray-400">
            نصنع التكنولوجيا من أجل مستقبل رقمي أفضل.
          </p>
        </section>

      </div>
    </main>
  );
}