import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Projects
      </h2>

      <Card className="mt-8">
        <CardHeader className="flex flex-row flex-wrap items-baseline justify-between gap-2">
          <CardTitle className="text-xl">AiKarta</CardTitle>
          <CardAction>
            <a
              href="https://aikarta.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              aikarta.ru →
            </a>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Real estate search platform with AI agent, built solo in 6 months
            using Cursor IDE + Claude.
          </p>

          <ul className="mt-6 space-y-3 text-muted-foreground">
          <li className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground">
              Frontend:
            </span>
            SPA on Vanilla JS, Yandex Maps API (~100K objects with clustering),
            AI chat with SSE streaming, subscription system, admin panel
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground">
              Agent API:
            </span>
            Python/FastAPI (async), LLM agent (LangGraph/LangChain) with 3
            execution strategies, 3-level memory (−79% tokens)
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground">
              MCP Server:
            </span>
            10+ tools, NLP query parsing, geodata
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground">
              Knowledge Base:
            </span>
            ETL pipeline (2×/day), CIAN API parsing, embeddings (pgvector),
            price clustering, LLM price evaluation
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground">Infra:</span>
            Multi-model LLM Gateway (LiteLLM), monitoring dashboards, load tested
            to ~1000 RPS
          </li>
        </ul>
        </CardContent>
      </Card>
    </section>
  );
}
