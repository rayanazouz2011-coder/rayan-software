const departments = [
  {
    number: "01",
    name: "RAYAN DIGITAL",
    ar: "الحلول الرقمية",
    description:
      "Building modern websites, mobile applications, and powerful digital platforms.",
    descriptionAr:
      "نطوّر مواقع إلكترونية حديثة وتطبيقات هاتف ومنصات رقمية متكاملة.",
    services: ["Web Development", "Mobile Apps", "Digital Platforms"],
  },
  {
    number: "02",
    name: "RAYAN BUSINESS",
    ar: "أنظمة الأعمال والشركات",
    description:
      "Smart business systems that improve operations, management, and productivity.",
    descriptionAr:
      "أنظمة ذكية تساعد الشركات على إدارة أعمالها ومواردها ورفع إنتاجيتها.",
    services: ["ERP & CRM", "Business Management", "Data Analytics"],
  },
  {
    number: "03",
    name: "RAYAN ENGINEERING",
    ar: "الأنظمة الهندسية",
    description:
      "Technology solutions for engineering, construction, infrastructure, and projects.",
    descriptionAr:
      "حلول تقنية للمشروعات الهندسية والإنشاءات والبنية التحتية وإدارة التنفيذ.",
    services: ["Engineering Software", "Infrastructure Systems", "Project Management"],
  },
  {
    number: "04",
    name: "RAYAN AI",
    ar: "الذكاء الاصطناعي",
    description:
      "Developing intelligent solutions powered by artificial intelligence and data.",
    descriptionAr:
      "نطوّر حلولًا ذكية تعتمد على الذكاء الاصطناعي وتحليل البيانات.",
    services: ["Artificial Intelligence", "Machine Learning", "Data Solutions"],
  },
  {
    number: "05",
    name: "RAYAN SECURITY",
    ar: "الأمن السيبراني",
    description:
      "Helping protect digital systems, applications, and business information.",
    descriptionAr:
      "نعمل على تعزيز حماية الأنظمة والتطبيقات والبيانات الرقمية.",
    services: ["Cybersecurity", "Security Assessment", "Digital Protection"],
  },
  {
    number: "06",
    name: "RAYAN LABS",
    ar: "البحث والتطوير",
    description:
      "Exploring new technologies and transforming innovative ideas into products.",
    descriptionAr:
      "نبحث في التقنيات الجديدة ونحوّل الأفكار المبتكرة إلى منتجات وحلول.",
    services: ["Research & Development", "Innovation", "Prototyping"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#050807] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-sm font-bold tracking-[0.35em] text-green-400">
            RAYAN SOFTWARE
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Our Technology
            <span className="block text-green-400">Departments</span>
            <span className="mt-3 block text-2xl text-gray-300 md:text-3xl">
              قطاعاتنا التقنية
            </span>
          </h1>

          <p className="mt-7 leading-8 text-gray-400">
            We bring technology, engineering, and innovation together to
            create solutions for a connected world.
          </p>

          <p
            dir="rtl"
            className="mt-3 text-right leading-8 text-gray-400"
          >
            نجمع بين التكنولوجيا والهندسة والابتكار لبناء حلول تخدم
            المؤسسات والأفراد وتساهم في تطوير المستقبل الرقمي.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article
              key={department.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-green-400/50 hover:bg-green-400/[0.04]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-green-400">
                  {department.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
              </div>

              <h2 className="text-xl font-bold tracking-wide transition group-hover:text-green-400">
                {department.name}
              </h2>

              <h3
                dir="rtl"
                className="mt-3 text-right text-lg font-semibold text-green-400"
              >
                {department.ar}
              </h3>

              <p className="mt-6 min-h-20 leading-7 text-gray-400">
                {department.description}
              </p>

              <p
                dir="rtl"
                className="mt-4 min-h-20 text-right leading-7 text-gray-400"
              >
                {department.descriptionAr}
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <ul className="space-y-3">
                  {department.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 rounded-2xl border border-green-400/20 bg-green-400/[0.04] p-8 text-center md:p-14">
          <h2 className="text-3xl font-bold">
            Building the Future with Technology
          </h2>

          <p
            dir="rtl"
            className="mt-4 text-xl font-semibold text-green-400"
          >
            نبني المستقبل بالتكنولوجيا والابتكار
          </p>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Six departments. One vision. Endless possibilities.
          </p>

          <p
            dir="rtl"
            className="mt-2 text-gray-400"
          >
            ستة قطاعات، رؤية واحدة، وإمكانيات بلا حدود.
          </p>
        </section>
      </div>
    </main>
  );
}