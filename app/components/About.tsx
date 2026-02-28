import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        About
      </h2>
      <p className="mt-4 text-muted-foreground">
        MIPT (Applied Mathematics and Physics, Master&apos;s 2017). ICAgile
        Certified Professional (ICP), 2021. Russian (native), English (B2).
      </p>

      <h3 className="mt-12 text-lg font-semibold text-foreground">
        Experience
      </h3>
      <ul className="mt-4 space-y-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <Card>
              <CardHeader className="flex flex-row flex-wrap items-baseline justify-between gap-2">
                <CardTitle>{job.company}</CardTitle>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm font-medium text-muted-foreground">
                  {job.role}
                </p>
                <p className="mt-2 text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-lg font-semibold text-foreground">Skills</h3>
      <ul className="mt-4 space-y-2">
        {skillGroups.map((group) => (
          <li key={group.title}>
            <Card>
              <CardContent className="py-4">
                <span className="font-medium text-foreground">{group.title}:</span>{" "}
                <span className="text-muted-foreground">{group.skills}</span>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
