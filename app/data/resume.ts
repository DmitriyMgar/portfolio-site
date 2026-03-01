export type Role = "head_of_ai" | "fullstack";
export type Language = "en" | "ru";

export const translations = {
  en: {
    switcher: {
      head_of_ai: "Head of AI",
      fullstack: "Fullstack",
    },
    sections: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    ui: {
      goToSite: "Visit site →",
    },
    personalInfo: {
      name: "Dmitriy Mgar",
      titles: {
        head_of_ai: "Head of AI",
        fullstack: "Senior Fullstack Engineer / AI Engineer",
      },
      descriptions: {
        head_of_ai:
          "8 years in data, ML & AI. MIPT graduate. Built AiKarta — a B2C real estate platform with an AI agent — from strategy to production in 6 months. Strong focus on ROI, team leadership, and turning business needs into scalable AI architectures.",
        fullstack:
          "8 years in data, ML & AI. MIPT graduate. Built AiKarta — a full-cycle B2C real estate platform with an AI agent — solo in 6 months using Cursor IDE and Claude. T-shaped engineer with deep expertise in Python backend, AI/ML, and solid frontend skills.",
      },
      about:
        "MIPT (Applied Mathematics and Physics, Master's 2017). ICAgile Certified Professional (ICP), 2021. Russian (native), English (B2).",
    },
    experience: {
      head_of_ai: [
        {
          company: "AiKarta",
          period: "2025–present",
          role: "Co-founder, CTO",
          description:
            "Built an AI-powered B2C real estate platform from strategy to production. Managed infrastructure budget and API costs. Made key build vs. buy decisions. Designed architecture for 4 microservices including a LangGraph agent with 3-level memory (-79% token usage).",
        },
        {
          company: "Yandex",
          period: "2023–2025",
          role: "Senior Analyst-Developer",
          description:
            "Implemented LLM + RAG in the automated ad moderation pipeline, reducing time-to-market for new moderation rules by 2x and significantly cutting manual labeling costs. Trained and deployed 30+ ML classifiers to production.",
        },
        {
          company: "Gazpromneft Digital Solutions",
          period: "2022–2023",
          role: "Chief Analyst / Tech Lead NLP",
          description:
            "Built a corporate text-to-SQL chatbot from scratch to production. Led a cross-functional development team. Made architectural decisions including NLP stack selection. Implemented model quality control systems (MLFlow, DVC).",
        },
        {
          company: "Gazpromneft Digital Solutions",
          period: "2019–2022",
          role: "Lead Analyst",
          description:
            "Built a unified corporate knowledge graph (100K+ nodes) via text-mining 120 systems. Improved enterprise search relevance, saving thousands of employee hours. Managed and mentored a team of 10 analysts.",
        },
        {
          company: "Tinkoff Bank",
          period: "2016–2017",
          role: "Analyst",
          description:
            "Increased partner network take rate through funnel analysis and A/B testing. Developed an algorithm for flexible interest rates that improved product NPV.",
        },
      ],
      fullstack: [
        {
          company: "AiKarta",
          period: "2025–present",
          role: "Co-founder, CTO / Solo Fullstack Developer",
          description:
            "Solo engineered a full-cycle B2C platform from DB architecture to production using Cursor IDE + Claude. SPA in Vanilla JS + Yandex Maps API (~100K objects). Async Python/FastAPI backend with a LangGraph agent. MCP server with 10+ tools. Load tested to ~1000 RPS.",
        },
        {
          company: "Yandex",
          period: "2023–2025",
          role: "Senior Analyst-Developer",
          description:
            "Integrated LLMs into the automated ad moderation pipeline. Implemented LLM + RAG, reducing time-to-market by 2x. Trained and deployed 30+ classifiers to production. Enhanced fraud detection using new fingerprint features.",
        },
        {
          company: "Gazpromneft Digital Solutions",
          period: "2022–2023",
          role: "Chief Analyst / Tech Lead NLP",
          description:
            "Developed a corporate text-to-SQL chatbot on RASA with a Python Action Server. Designed scalable architecture using NLP services and a knowledge graph. Implemented MLFlow/DVC for model tracking and deployed via Docker.",
        },
        {
          company: "Gazpromneft Digital Solutions",
          period: "2019–2022",
          role: "Analyst → Lead Analyst",
          description:
            "Built a corporate knowledge graph (100K+ nodes) via text-mining 120 systems using NLP. Developed ETL processes on Airflow for data marts. Created analytics dashboards with textual query analysis.",
        },
        {
          company: "Tinkoff Bank",
          period: "2016–2017",
          role: "Analyst",
          description:
            "Developed flexible interest rate calculation algorithms improving product NPV. Analyzed credit agreement rejection causes using text mining and NLP. Monitored key business metrics via Splunk.",
        },
      ],
    },
    skills: {
      head_of_ai: [
        {
          title: "Management",
          skills:
            "Team building (up to 10 people), hiring, onboarding, mentoring, stakeholder management, budget management",
        },
        {
          title: "AI/ML",
          skills:
            "LLMs (GPT-4, Claude, DeepSeek), RAG, LangChain, LangGraph, NLP, embeddings, ML classifiers, MLOps (MLFlow, DVC)",
        },
        {
          title: "Development",
          skills: "Python 3.11+, FastAPI, PostgreSQL, Docker, Linux, CI/CD",
        },
        {
          title: "Methodologies",
          skills: "Agile (ICAgile certified), A/B testing, ROI estimation",
        },
      ],
      fullstack: [
        {
          title: "Backend",
          skills:
            "Python 3.11+, FastAPI, asyncio, asyncpg, LangChain, LangGraph",
        },
        {
          title: "Frontend",
          skills: "JavaScript (ES6+), React, HTML/CSS, Yandex Maps API, SSE",
        },
        {
          title: "Data",
          skills: "PostgreSQL, pgvector, PostGIS, Redis, SQL",
        },
        {
          title: "AI/ML",
          skills:
            "LLM (GPT-4, Claude, DeepSeek), RAG, embeddings, NLP, scikit-learn, TensorFlow",
        },
        {
          title: "Infra & Tools",
          skills:
            "Linux, nginx, systemd, Docker, CI/CD, Cursor IDE, Git, MCP Protocol, LiteLLM",
        },
      ],
    },
    projects: {
      title: "AiKarta",
      url: "https://aikarta.ru",
      head_of_ai: {
        description:
          "AI-powered real estate search platform. Built from 0 to 1, focusing on strategy, architecture, and fast time-to-market.",
        points: [
          {
            label: "Strategy:",
            text: "Analyzed PropTech market, identified AI agent entry point. Managed build vs buy decisions for LLMs and infrastructure.",
          },
          {
            label: "Architecture:",
            text: "Designed 4 microservices including LLM agent, MCP server, ETL pipeline, and Frontend.",
          },
          {
            label: "Optimization:",
            text: "Implemented 3-level agent memory reducing token consumption by 79%. Integrated multi-model LLM gateway.",
          },
          {
            label: "Analytics:",
            text: "Built product and technical dashboards to track conversions, data quality, and system load.",
          },
        ],
      },
      fullstack: {
        description:
          "Real estate search platform with AI agent, built solo in 6 months using Cursor IDE + Claude.",
        points: [
          {
            label: "Frontend:",
            text: "SPA on Vanilla JS, Yandex Maps API (~100K objects with clustering), AI chat with SSE streaming.",
          },
          {
            label: "Agent API:",
            text: "Python/FastAPI (async), LLM agent (LangGraph/LangChain) with 3 execution strategies.",
          },
          {
            label: "MCP Server:",
            text: "10+ tools, NLP query parsing, geodata (metro, districts, POI).",
          },
          {
            label: "Knowledge Base:",
            text: "ETL pipeline, CIAN API parsing, embeddings (pgvector), price clustering.",
          },
          {
            label: "Infra:",
            text: "Multi-model LLM Gateway (LiteLLM), monitoring dashboards, load tested to ~1000 RPS.",
          },
        ],
      },
    },
  },
  ru: {
    switcher: {
      head_of_ai: "Руководитель ИИ",
      fullstack: "Fullstack",
    },
    sections: {
      about: "О себе",
      experience: "Опыт работы",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    ui: {
      goToSite: "Перейти на сайт →",
    },
    personalInfo: {
      name: "Дмитрий Мгарь",
      titles: {
        head_of_ai: "Head of AI / Руководитель ИИ-направления",
        fullstack: "Senior Fullstack Developer / AI Engineer",
      },
      descriptions: {
        head_of_ai:
          "8 лет в data/ML/AI. Выпускник МФТИ. Построил B2C-платформу AiKarta с ИИ-агентом от стратегии до продакшна за 6 месяцев. Фокус на измеримом ROI, управлении командами и трансформации бизнес-задач в масштабируемую ИИ-архитектуру.",
        fullstack:
          "8 лет в data/ML/AI. Выпускник МФТИ. В одиночку построил B2C-платформу AiKarta с ИИ-агентом за 6 месяцев, используя Cursor IDE и Claude. T-shaped инженер: глубокая экспертиза в Python-бэкенде и ИИ, уверенный фронтенд.",
      },
      about:
        "МФТИ (Прикладные математика и физика, магистратура 2017). ICAgile Certified Professional (ICP), 2021. Русский (родной), Английский (B2).",
    },
    experience: {
      head_of_ai: [
        {
          company: "AiKarta",
          period: "2025–н.в.",
          role: "Co-founder, CTO",
          description:
            "Построил ИИ-продукт с нуля: от стратегии и архитектуры до продакшна. Управлял бюджетом на инфраструктуру и API. Принимал решения build vs buy. Спроектировал 4 микросервиса, включая LLM-агента (LangGraph) с трёхуровневой памятью (–79% расхода токенов).",
        },
        {
          company: "Яндекс",
          period: "2023–2025",
          role: "Старший аналитик-разработчик",
          description:
            "Внедрил LLM + RAG в пайплайн автоматической модерации рекламы — в 2 раза сократил time-to-market новых правил и значительно снизил расходы на ручную разметку. Обучил и вывел в прод 30+ классификаторов.",
        },
        {
          company: "Газпромнефть - Цифровые Решения",
          period: "2022–2023",
          role: "Главный аналитик / Tech Lead NLP",
          description:
            "Построил с нуля корпоративного чат-бота (text-to-SQL) и довёл до прода. Руководил кросс-функциональной командой. Принимал архитектурные решения по выбору NLP-стека. Внедрил систему контроля качества (MLFlow, DVC).",
        },
        {
          company: "Газпромнефть - Цифровые Решения",
          period: "2019–2022",
          role: "Ведущий аналитик",
          description:
            "Построил единый граф знаний компании (100K+ вершин) через text-mining 120 систем. Повысил релевантность корпоративного поиска, сэкономив время тысячам сотрудников. Руководил командой из 10 стажёров-аналитиков.",
        },
        {
          company: "Т-Банк (Тинькофф)",
          period: "2016–2017",
          role: "Аналитик",
          description:
            "Повысил take rate партнёрской сети через анализ воронки и A/B-тесты. Разработал алгоритм расчёта гибких ставок, повысивший NPV продукта.",
        },
      ],
      fullstack: [
        {
          company: "AiKarta",
          period: "2025–н.в.",
          role: "Co-founder, CTO / Solo Fullstack Developer",
          description:
            "В одиночку разработал B2C-платформу от архитектуры БД до продакшна с помощью Cursor IDE + Claude. SPA на Vanilla JS + Yandex Maps API (~100K объектов). Асинхронный Python/FastAPI бэкенд с LangGraph-агентом. Нагрузочное тестирование ~1000 RPS.",
        },
        {
          company: "Яндекс",
          period: "2023–2025",
          role: "Старший аналитик-разработчик",
          description:
            "Внедрял LLM в пайплайн автоматической модерации рекламы. Использование LLM + RAG сократило time-to-market в 2 раза. Обучил и вывел в прод 30+ ML-классификаторов. Улучшил детекцию мошенников (новые фичи в фингерпринт).",
        },
        {
          company: "Газпромнефть - Цифровые Решения",
          period: "2022–2023",
          role: "Главный аналитик / Tech Lead NLP",
          description:
            "Разработал прототип корпоративного чат-бота (text-to-SQL) на RASA с Action Server на Python. Спроектировал архитектуру на основе NLP-сервисов. Внедрил MLFlow/DVC, деплой через Docker.",
        },
        {
          company: "Газпромнефть - Цифровые Решения",
          period: "2019–2022",
          role: "Аналитик → Ведущий аналитик",
          description:
            "Построил граф знаний (100K+ вершин) через text-mining 120 систем с применением NLP. Разработал ETL-процессы на AirFlow. Создал дашборды аналитики с текстовым анализом запросов.",
        },
        {
          company: "Т-Банк (Тинькофф)",
          period: "2016–2017",
          role: "Аналитик",
          description:
            "Разработал алгоритм расчёта гибких ставок, повысивший NPV продукта. Выявлял причины отказов при подписании кредитных договоров методами NLP. Настроил мониторинг метрик в Splunk.",
        },
      ],
    },
    skills: {
      head_of_ai: [
        {
          title: "Управление",
          skills:
            "Построение команды (до 10 чел.), найм, онбординг, менторинг, защита проектов перед стейкхолдерами, управление бюджетом",
        },
        {
          title: "AI/ML",
          skills:
            "LLM (GPT-4, Claude, DeepSeek), RAG, LangChain, LangGraph, NLP, embeddings, ML classifiers, MLOps (MLFlow, DVC)",
        },
        {
          title: "Разработка",
          skills: "Python 3.11+, FastAPI, PostgreSQL, Docker, Linux, CI/CD",
        },
        {
          title: "Методологии",
          skills: "Agile (ICAgile certified), A/B-тестирование, оценка ROI",
        },
      ],
      fullstack: [
        {
          title: "Backend",
          skills:
            "Python 3.11+, FastAPI, asyncio, asyncpg, LangChain, LangGraph",
        },
        {
          title: "Frontend",
          skills: "JavaScript (ES6+), React, HTML/CSS, Yandex Maps API, SSE",
        },
        {
          title: "Data",
          skills: "PostgreSQL, pgvector, PostGIS, Redis, SQL",
        },
        {
          title: "AI/ML",
          skills:
            "LLM (GPT-4, Claude, DeepSeek), RAG, embeddings, NLP, scikit-learn, TensorFlow",
        },
        {
          title: "Infra & Tools",
          skills:
            "Linux, nginx, systemd, Docker, CI/CD, Cursor IDE, Git, MCP Protocol, LiteLLM",
        },
      ],
    },
    projects: {
      title: "AiKarta",
      url: "https://aikarta.ru",
      head_of_ai: {
        description:
          "Платформа поиска недвижимости с ИИ-агентом. Построена с нуля, фокус на стратегии, архитектуре и быстром запуске (time-to-market).",
        points: [
          {
            label: "Стратегия:",
            text: "Анализ PropTech рынка, выбор ИИ-агента как точки входа. Управление решениями build vs buy.",
          },
          {
            label: "Архитектура:",
            text: "Проектирование 4 микросервисов: LLM-агент, MCP-сервер, ETL-пайплайн и Frontend.",
          },
          {
            label: "Оптимизация:",
            text: "Внедрение трёхуровневой памяти агента (снижение расхода токенов на 79%). Интеграция мультимодельного LLM-шлюза.",
          },
          {
            label: "Аналитика:",
            text: "Создание продуктовых и технических дашбордов (конверсии, качество данных, нагрузка).",
          },
        ],
      },
      fullstack: {
        description:
          "Поиск недвижимости с ИИ-агентом, построен в одиночку за 6 месяцев (Cursor IDE + Claude).",
        points: [
          {
            label: "Frontend:",
            text: "SPA на Vanilla JS, Yandex Maps API (~100K объектов с кластеризацией), AI-чат с SSE-стримингом.",
          },
          {
            label: "Agent API:",
            text: "Python/FastAPI (async), LLM-агент (LangGraph/LangChain) с 3 стратегиями выполнения.",
          },
          {
            label: "MCP Server:",
            text: "10+ инструментов, NLP-парсинг запросов, геоданные (метро, районы, POI).",
          },
          {
            label: "Knowledge Base:",
            text: "ETL-пайплайн, парсинг CIAN API, embeddings (pgvector), кластеризация цен.",
          },
          {
            label: "Infra:",
            text: "Multi-model LLM Gateway (LiteLLM), дашборды мониторинга, нагрузочное тестирование ~1000 RPS.",
          },
        ],
      },
    },
  },
};
