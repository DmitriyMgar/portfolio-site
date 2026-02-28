export default function Projects() {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>

      <article className="mt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
          <h3 className="text-xl font-semibold">AiKarta</h3>
          <a
            href="https://aikarta.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            aikarta.ru
          </a>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Real estate search platform with AI agent, built solo in 6 months
          using Cursor IDE + Claude.
        </p>

        <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="text-foreground">Frontend:</strong> SPA on Vanilla
            JS, Yandex Maps API (~100K objects with clustering), AI chat with
            SSE streaming, subscription system, admin panel
          </li>
          <li>
            <strong className="text-foreground">Agent API:</strong> Python/FastAPI
            (async), LLM agent (LangGraph/LangChain) with 3 execution
            strategies, 3-level memory (−79% tokens)
          </li>
          <li>
            <strong className="text-foreground">MCP Server:</strong> 10+ tools,
            NLP query parsing, geodata
          </li>
          <li>
            <strong className="text-foreground">Knowledge Base:</strong> ETL
            pipeline (2×/day), CIAN API parsing, embeddings (pgvector), price
            clustering, LLM price evaluation
          </li>
          <li>
            <strong className="text-foreground">Infra:</strong> Multi-model LLM
            Gateway (LiteLLM), monitoring dashboards, load tested to ~1000 RPS
          </li>
        </ul>
      </article>
    </section>
  );
}
