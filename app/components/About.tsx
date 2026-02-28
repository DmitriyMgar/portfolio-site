export default function About() {
  const experience = [
    {
      company: "AiKarta",
      period: "2025–present",
      role: "Co-founder, CTO / Solo Fullstack Developer",
      description:
        "Built entire B2C platform solo: 4 microservices (Frontend SPA, Agent API with LangGraph, MCP Server, Knowledge Base with ETL pipeline)",
    },
    {
      company: "Yandex",
      period: "2023–2025",
      role: "Senior Analyst-Developer, ML ads moderation",
      description:
        "LLM + RAG in ad moderation pipeline (2× faster time-to-market), 30+ classifiers in production, participated in training Yandex's base LLM",
    },
    {
      company: "Gazpromneft Digital Solutions",
      period: "2022–2023",
      role: "Chief Analyst / Tech Lead NLP",
      description:
        "Built corporate chatbot (text-to-SQL) from scratch to production on RASA, led cross-functional team, MLFlow/DVC",
    },
    {
      company: "Gazpromneft Digital Solutions",
      period: "2019–2022",
      role: "Analyst → Lead Analyst",
      description:
        "Built corporate knowledge graph (100K+ nodes, 80K employees), led team of 10 interns, ETL on AirFlow, NLP, A/B tests",
    },
    {
      company: "Tinkoff Bank",
      period: "2016–2017",
      role: "Analyst",
      description: "A/B tests, funnel analysis, NLP text mining",
    },
  ];

  const skillGroups = [
    {
      title: "Backend",
      skills: "Python 3.11+, FastAPI, asyncio, LangChain, LangGraph",
    },
    {
      title: "Frontend",
      skills: "JavaScript (ES6+), React, HTML/CSS, Assembler, Java, C++",
    },
    {
      title: "Data",
      skills: "PostgreSQL, pgvector, PostGIS, Redis, SQL",
    },
    {
      title: "AI/ML",
      skills:
        "LLM (GPT-4, Claude, DeepSeek), RAG, embeddings, NLP, scikit-learn, TensorFlow, pandas, numpy",
    },
    {
      title: "Infra",
      skills: "Linux, nginx, systemd, Docker, CI/CD",
    },
    {
      title: "Tools & Protocols",
      skills: "Cursor IDE, Git, Figma, MCP, SSE, REST API",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About</h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        MIPT (Applied Mathematics and Physics, Master&apos;s 2017). ICAgile Certified
        Professional (ICP), 2021. Russian (native), English (B2).
      </p>

      <h3 className="mt-10 text-xl font-semibold">Experience</h3>
      <ul className="mt-4 space-y-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-medium">{job.company}</span>
              <span className="text-sm text-zinc-500">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {job.role}
            </p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {job.description}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 text-xl font-semibold">Skills</h3>
      <ul className="mt-4 space-y-3">
        {skillGroups.map((group) => (
          <li key={group.title}>
            <span className="font-medium">{group.title}:</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400">
              {group.skills}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
