// src/i18n/translations.ts

export type Locale = 'en' | 'ru' | 'kk';

export const locales: Locale[] = ['en', 'ru', 'kk'];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ru: 'РУС',
  kk: 'ҚАЗ'
};

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    overview: string;
    showcase: string;
    cases: string;
    certs: string;
    skills: string;
    contact: string;
  };
  hero: {
    availableBadge: string;
    headingPrefix: string;
    headingGradient: string;
    bioIntro: string;
    bioName: string;
    bioRole: string;
    bioBody: string;
    contactBtn: string;
    downloadCvBtn: string;
    cvFileName: string;
    toolingTitle: string;
    tools: string[];
    topRatedBadge: string;
    badge1Label: string;
    badge1Value: string;
    badge2Label: string;
    badge2Value: string;
  };
  metrics: {
    badge: string;
    title: string;
    description: string;
    ranges: {
      '7d': string;
      '30d': string;
      '90d': string;
      '1y': string;
    };
    kpis: {
      mrr: {
        label: string;
        trend: string;
      };
      nrr: {
        label: string;
        trend: string;
      };
      ltv: {
        label: string;
        trend: string;
      };
      cac: {
        label: string;
        trend: string;
      };
    };
    tabs: {
      revenue: string;
      retention: string;
      ltv: string;
    };
    telemetrySource: string;
    modelInfo: string;
    visualEngine: string;
    chartLabels: {
      revenueMetricName: string;
      retentionMetricName: string;
      ltvMetricName: string;
      dates: {
        '7d': string[];
        '30d': string[];
        '90d': string[];
        '1y': string[];
      };
    };
  };
  cases: {
    badge: string;
    title: string;
    description: string;
    viewDashboardBtn: string;
    githubSourceBtn: string;
    clientPrefix: string;
    situationLabel: string;
    actionLabel: string;
    resultsLabel: string;
    items: {
      id: string;
      tag: string;
      title: string;
      clientType: string;
      situation: string;
      action: string;
      resultMetrics: { label: string; value: string; detail: string }[];
      techStack: string[];
      githubUrl: string;
      dashboardAnchor: string;
    }[];
  };
  certifications: {
    badge: string;
    title: string;
    description: string;
    verifyBtn: string;
    pdfBtn: string;
    viewPlaygroundBtn: string;
    items: {
      id: string;
      title: string;
      issuer: string;
      badgeText: string;
      description: string;
      skills: string[];
      credentialUrl: string;
      isPlayground?: boolean;
    }[];
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    categories: {
      title: string;
      icon: 'database' | 'code' | 'bar-chart' | 'trending-up';
      desc: string;
      tools: string[];
    }[];
    frameworkBadge: string;
    frameworkTitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    sidebar: {
      name: string;
      role: string;
      bio: string;
      responseTimeLabel: string;
      responseTimeValue: string;
      locationLabel: string;
      locationValue: string;
      networkLabel: string;
      networkLink: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
      errorPrefix: string;
      defaultError: string;
      networkError: string;
      requiredFieldsError: string;
    };
  };
  footer: {
    rights: string;
    edgeBadge: string;
    backToTop: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "Abay Syzdykov | Lead Analytics & BI Engineer",
      description: "Lead Analytics & BI Engineer. Enterprise DWH architectures, Qlik-to-Power BI migrations, procurement intelligence, and autonomous AI data pipelines."
    },
    nav: {
      overview: "Overview",
      showcase: "Live Showcase",
      cases: "Case Studies",
      certs: "Certifications",
      skills: "Stack & Methods",
      contact: "Contact"
    },
    hero: {
      availableBadge: "AVAILABLE FOR LEAD & ARCHITECT ROLES",
      headingPrefix: "Architecting Enterprise Data & ",
      headingGradient: "Next-Gen AI Intelligence",
      bioIntro: "Hi, I’m ",
      bioName: "Abay Syzdykov",
      bioRole: "Lead Analytics & BI Engineer",
      bioBody: ". I architect resilient enterprise data warehouses (PostgreSQL Bronze-Silver-Gold, FDW), orchestrate automated data pipelines, and deploy applied AI systems (Autonomous Multi-LLM Council) bridging technical telemetry with board-level commercial decisions.",
      contactBtn: "Discuss a Project",
      downloadCvBtn: "Download CV (PDF)",
      cvFileName: "Abay_Syzdykov_CV_EN.pdf",
      toolingTitle: "Core Enterprise & AI Stack",
      tools: [
        "PostgreSQL (DWH Bronze-Silver-Gold, FDW)",
        "Qlik Sense Enterprise & Power BI (DAX, RLS)",
        "Python (EDA, Stats, FastAPI, Survival Models)",
        "Kestra & Docker (Workflow Orchestration)",
        "Modern Data Stack (Snowflake & dbt)",
        "Multi-LLM Orchestration & Agentic Systems"
      ],
      topRatedBadge: "Lead Impact",
      badge1Label: "Enterprise Cluster Scale",
      badge1Value: "100+ Active Users",
      badge2Label: "Procurement & BI TCO",
      badge2Value: "-20% Cycle / License Savings"
    },
    metrics: {
      badge: "Interactive Proof of Work",
      title: "Executive Telemetry & SaaS Unit Economics",
      description: "Live embedded analytics engine displaying multi-cohort subscriber retention, MRR growth vectors, and unit economic health. Switch metrics and time horizons below.",
      ranges: {
        '7d': '7D',
        '30d': '30D',
        '90d': '90D',
        '1y': '1Y'
      },
      kpis: {
        mrr: {
          label: "Monthly Recurring Revenue",
          trend: "+18.4% MoM"
        },
        nrr: {
          label: "Net Retention Rate (NRR)",
          trend: "+3.1% YoY"
        },
        ltv: {
          label: "Avg Customer LTV",
          trend: "+12.6% vs Q1"
        },
        cac: {
          label: "LTV / CAC Efficiency",
          trend: "Top-Decile Benchmark"
        }
      },
      tabs: {
        revenue: "Revenue & ARR Growth",
        retention: "Cohort Retention Curve",
        ltv: "LTV / Unit Economics"
      },
      telemetrySource: "Telemetry Source: Snowflake / dbt mart",
      modelInfo: "Model: Autoregressive Moving-Average (ARIMA) + Kaplan-Meier Cohort Analysis",
      visualEngine: "Visual Engine: Apache ECharts 5.6",
      chartLabels: {
        revenueMetricName: "REVENUE",
        retentionMetricName: "RETENTION",
        ltvMetricName: "LTV",
        dates: {
          '7d': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          '30d': ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          '90d': ['M1-W1', 'M1-W3', 'M2-W1', 'M2-W3', 'M3-W1', 'M3-W3'],
          '1y': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    },
    cases: {
      badge: "STAR Framework Evidence",
      title: "Featured Commercial & AI Case Studies",
      description: "Real enterprise challenges solved through rigorous data warehousing, modern BI migrations, and autonomous AI architectures.",
      viewDashboardBtn: "View Live Dashboard",
      githubSourceBtn: "GitHub Source",
      clientPrefix: "Client: ",
      situationLabel: "Situation & Business Problem (Task)",
      actionLabel: "Technical Pipeline & Architecture (Action)",
      resultsLabel: "Quantified Outcomes (Result)",
      items: [
        {
          id: "kmg-bi-modernization",
          tag: "Enterprise BI Modernization",
          title: "Qlik Sense to Power BI Enterprise Migration & TCO Optimization",
          clientType: "KMG DIGITAL LLP (National Oil & Gas Sector)",
          situation: "Legacy undocumented Qlik Sense reporting estate required recurring heavy licensing costs and suffered from fragmented load scripts across production KPI monitors.",
          action: "Reverse-engineered and overhauled legacy Qlik load scripts, migrating two flagship corporate dashboards to Power BI. Automated data reload tasks across 100+ enterprise accounts with strict Row-Level Security (RLS), vibe-coded an interactive analytics web portal, and mentored 3 data engineers.",
          resultMetrics: [
            { label: "License TCO Savings", value: "Recurring", detail: "Annual Qlik Sense license overhead eliminated" },
            { label: "Cluster Scale", value: "100+ Users", detail: "30 scheduled data reload tasks managed" },
            { label: "Team Velocity", value: "3 Engineers", detail: "Upskilled and mentored in modern BI practices" }
          ],
          techStack: ["Power BI", "Qlik Sense Enterprise", "DAX", "Row-Level Security (RLS)", "Vibe-Coding (HTML/JS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        },
        {
          id: "hr-attrition-platform",
          tag: "Interactive Production Dashboard",
          title: "HR Attrition & Workforce Retention Intelligence Platform",
          clientType: "Enterprise Workforce Telemetry (Live Web App)",
          situation: "HR and operations leaders lacked proactive leading indicators of attrition risk, causing delayed intervention and turnover among critical roles.",
          action: "Engineered a production-ready interactive analytics web application with dynamic KPI cards, department & role multi-filters, tenure distributions, and an employee retention risk simulator with sub-second reactivity.",
          resultMetrics: [
            { label: "Sub-Second Latency", value: "<100ms", detail: "Instant multi-factor cohort slicing" },
            { label: "Serverless Edge", value: "Zero-Cost", detail: "Deployed on Cloudflare Pages" },
            { label: "Risk Simulator", value: "Real-Time", detail: "Scenario testing for flight-risk talent" }
          ],
          techStack: ["React 18", "Vite", "TailwindCSS", "Chart.js", "Cloudflare Pages"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "https://webdashboards.pages.dev"
        },
        {
          id: "llm-counsil",
          tag: "Next-Gen AI Systems",
          title: "Autonomous Multi-LLM Strategic Council Orchestrator",
          clientType: "Open-Source AI Data Architecture",
          situation: "Single LLM reasoning suffers from cognitive bias and hallucinations when evaluating complex enterprise system architectures and multi-million dollar procurement decisions.",
          action: "Engineered an autonomous multi-agent council orchestrator on Google Antigravity 2.0 running 5 leading frontier models (Claude, ChatGPT, Gemini Pro, Grok, Nemotron) through blind peer review, Anti-Leak Sanitizer (RFC #2), Concurrency Clipboard Mutex (RFC #3), and automated grounding in Google NotebookLM.",
          resultMetrics: [
            { label: "Divergence Depth", value: "5 Models", detail: "Zero-bias anonymous cross-review" },
            { label: "Synthesis Quality", value: ">50 KB", detail: "RFC #1 Quality Floor validated output" },
            { label: "Execution Standard", value: "DONE = VERIFIED", detail: "Live automated verification loops" }
          ],
          techStack: ["Google Antigravity 2.0", "Python", "PowerShell 7 Core", "Ollama", "Chrome CDP", "NotebookLM"],
          githubUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          dashboardAnchor: "https://github.com/blacktapeproject263-alt/llm-counsil"
        },
        {
          id: "erg-procurement-dwh",
          tag: "Procurement & TCO",
          title: "Enterprise Procurement DWH & Sensitive Pricing Governance",
          clientType: "ERG Capital Projects (Eurasian Resources Group)",
          situation: "Procurement approval cycles took 90 days across disparate silos (SAP, OutSystems, Oracle MDM), exposing enterprise bids to risk of price leaks and vendor collusion.",
          action: "Led the architecture of a Strategic Procurement Reporting System unifying SAP, Oracle MDM, and Qlik Sense into an audited Single Source of Truth. Enforced strict Row-Level Security (RLS) on sensitive TCO data and built predictive delay trackers.",
          resultMetrics: [
            { label: "Procurement Cycle", value: "-20%", detail: "Reduced from 90 to 72 business days" },
            { label: "Compliance Breaches", value: "-15%", detail: "Slashed engineering review lag by 35%" },
            { label: "Supplier Base", value: "1,000+ Vendors", detail: "Audited & governed in central registry" }
          ],
          techStack: ["PostgreSQL DWH", "SAP MM/PTP", "Oracle MDM", "Qlik Sense", "Row-Level Security (RLS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Verified Qualifications & Sandboxes",
      title: "Industry Certifications & Interactive Showcases",
      description: "Rigorous vendor certifications, live production platforms, and verifiable credentials demonstrating enterprise data architecture and applied AI systems.",
      verifyBtn: "Verify Credential →",
      pdfBtn: "View Certificate (PDF) →",
      viewPlaygroundBtn: "Launch Live App →",
      items: [
        {
          id: "hr-attrition-app",
          title: "HR Attrition Analytics Portal (webdashboards.pages.dev)",
          issuer: "Cloudflare Pages Production",
          badgeText: "Live Interactive App",
          description: "High-performance client-side interactive telemetry engine built with React 18, Vite, and Chart.js. Simulates employee turnover risk, department tenure, and flight-risk intervention with sub-second reactivity.",
          skills: ["React 18", "Vite", "TailwindCSS", "Chart.js", "HR Analytics", "Cloudflare Pages"],
          credentialUrl: "https://webdashboards.pages.dev",
          isPlayground: true
        },
        {
          id: "llm-counsil-open-source",
          title: "Multi-LLM Strategic Council Orchestrator",
          issuer: "Google Antigravity 2.0 & Open-Source",
          badgeText: "AI Architecture",
          description: "Autonomous multi-agent orchestration architecture executing blind peer review across 5 LLMs with RFC #1 Quality Floor, Anti-Leak Sanitizer, Concurrency Clipboard Mutex, and NotebookLM synchronization.",
          skills: ["Multi-Agent AI", "Google Antigravity 2.0", "Python", "Ollama", "Chrome CDP", "Google NotebookLM"],
          credentialUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          isPlayground: true
        },
        {
          id: "qlik-sense-expert",
          title: "Qlik Sense Expert Certification",
          issuer: "Datanomix Academy",
          badgeText: "Enterprise BI",
          description: "Advanced data modeling, load scripts, complex set analysis, NPrinting automated report generation, and enterprise cluster administration (100+ seats, Row-Level Security).",
          skills: ["Qlik Sense Enterprise", "Load Scripts", "Set Analysis", "NPrinting", "Row-Level Security"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        },
        {
          id: "python-data-analysis",
          title: "Python Data Analysis (NASBA Accredited)",
          issuer: "LinkedIn Learning & NASBA",
          badgeText: "Verified Certificate",
          description: "Accredited technical certification covering end-to-end exploratory data analysis (EDA), statistical tests, hypothesis testing, and quantitative modeling with Python (CPE Credit: 6.60, Certificate ID: e21ebcce0a232da0...).",
          skills: ["Data Analysis", "Statistical Analysis", "Python", "NASBA CPE #140940"],
          credentialUrl: "/certificate-python-data-analysis.pdf"
        },
        {
          id: "dbt-mds",
          title: "dbt & Modern Data Stack Specialist",
          issuer: "dbt Labs & Snowflake Ecosystem",
          badgeText: "Verified Competency",
          description: "Production mastery in building modular, version-controlled ELT data pipelines, Snowflake warehouse optimization, automated schema testing, documentation generation, and star-schema data mart engineering.",
          skills: ["dbt Core/Cloud", "Snowflake", "Data Marts", "Schema Testing", "CI/CD Data Ops"],
          credentialUrl: "https://www.getdbt.com/"
        },
        {
          id: "toastmasters-international",
          title: "Toastmasters International (Competent Communicator)",
          issuer: "Toastmasters International",
          badgeText: "Leadership & Speaking",
          description: "Recognized public speaker, cross-functional communication leader, and community organizer for international data events, engineering workshops, and technical mentorship.",
          skills: ["Executive Communication", "Technical Mentorship", "Stakeholder Alignment"],
          credentialUrl: "https://www.toastmasters.org/"
        },
        {
          id: "chinese-hsk5",
          title: "Chinese Language Proficiency (HSK Level 5)",
          issuer: "Confucius Institute / Hanban",
          badgeText: "Full Professional Fluency",
          description: "Bilingual technical communication, negotiation, and documentation translation for cross-border engineering projects with Chinese EPC contractors (Sinopec, KERUI, Sitan). Graduated from Xi’an Shiyou University.",
          skills: ["Chinese (HSK 5)", "Petroleum Engineering", "Bilingual EPC Negotiation", "Cross-Border Ops"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        }
      ]
    },
    skills: {
      badge: "Capabilities & Methodology",
      title: "Engineered for Analytical Rigor",
      description: "Combining data engineering fundamentals with executive commercial awareness to deliver reports that leaders trust.",
      categories: [
        {
          title: "SQL & Data Modeling",
          icon: "database",
          desc: "Complex analytical queries, recursive CTEs, window functions, star schema design, and query optimization for high-cardinality databases.",
          tools: ["PostgreSQL", "Snowflake", "Google BigQuery", "dbt", "Dimensional Modeling"]
        },
        {
          title: "Python Analytics & ML",
          icon: "code",
          desc: "Exploratory data analysis, statistical tests, cohort decay curves, regression, classification, and time-series demand forecasting.",
          tools: ["Pandas", "NumPy", "Scikit-Learn", "Prophet", "Lifelines"]
        },
        {
          title: "Business Intelligence & DAX",
          icon: "bar-chart",
          desc: "Enterprise Power BI reporting architecture, dynamic DAX measures, calculation groups, row-level security (RLS), and drill-through UX.",
          tools: ["Power BI", "Advanced DAX", "Tabular Editor", "Dataflows", "Executive KPIs"]
        },
        {
          title: "Commercial Decision Support",
          icon: "trending-up",
          desc: "Translating ambiguous operational problems into structured hypotheses, unit economics tracking (LTV, CAC, Payback), and board presentations.",
          tools: ["Unit Economics", "A/B Testing", "Churn Mitigation", "Marketing Attribution", "Stakeholder Alignment"]
        }
      ],
      frameworkBadge: "Delivery Framework",
      frameworkTitle: "From Raw Ingestion to Executive Action",
      steps: [
        {
          step: "01",
          title: "Diagnose & Align",
          desc: "Isolate the commercial bottleneck, interview key stakeholders, and define unambiguous North Star metrics."
        },
        {
          step: "02",
          title: "Model & Transform",
          desc: "Clean raw telemetry, write robust dbt/SQL transforms, and validate data integrity against business edge cases."
        },
        {
          step: "03",
          title: "Predict & Visualize",
          desc: "Build self-serve interactive dashboards and statistical forecasting models with transparent confidence bounds."
        },
        {
          step: "04",
          title: "Automate & Drive ROI",
          desc: "Deploy scheduled alerting, eliminate manual reporting cycles, and present synthesized recommendations."
        }
      ]
    },
    contact: {
      badge: "Direct Engagement",
      title: "Let’s Build Data Infrastructure That Drives Results",
      description: "Have a complex DWH bottleneck, planning a BI modernization (Qlik to Power BI), or looking for a Lead Analytics Engineer? Send an inquiry below.",
      sidebar: {
        name: "Abay Syzdykov",
        role: "Lead Analytics & BI Engineer",
        bio: "Available for Lead & Architect engagements, DWH architecture consulting, enterprise BI migrations, and applied AI systems.",
        responseTimeLabel: "Typical Response Time",
        responseTimeValue: "Within 24 business hours",
        locationLabel: "Location & Timezone",
        locationValue: "Remote (UTC+5 / Flexible EMEA & US)",
        networkLabel: "Professional Network",
        networkLink: "LinkedIn Profile →"
      },
      form: {
        nameLabel: "Your Full Name",
        namePlaceholder: "Elena Rostova",
        emailLabel: "Work Email",
        emailPlaceholder: "elena@company.com",
        messageLabel: "Project Details & Business Challenge",
        messagePlaceholder: "Tell me about your dataset, current reporting setup, timeline, or analytics role requirements...",
        submitBtn: "Submit Inquiry",
        submittingBtn: "Transmitting securely...",
        successMsg: "✓ Thank you! Your inquiry has been dispatched to Abay Syzdykov. Expect a response within 24 hours.",
        errorPrefix: "Submission failed: ",
        defaultError: "Server error. Please try again or reach out on LinkedIn.",
        networkError: "Network transmission error. Please verify your connection or reach out on LinkedIn.",
        requiredFieldsError: "Please fill out all required fields."
      }
    },
    footer: {
      rights: "All rights reserved. Lead Analytics & BI Engineer.",
      edgeBadge: "Zero-Cost Edge Infrastructure • Cloudflare Pages + Workers",
      backToTop: "↑ Back to Top"
    }
  },
  ru: {
    meta: {
      title: "Абай Сыздыков | Ведущий BI-инженер & Analytics Architect",
      description: "Ведущий BI-инженер и архитектор аналитических данных. Корпоративные DWH (PostgreSQL, FDW), миграции Qlik в Power BI, аналитика закупок и мульти-LLM системы."
    },
    nav: {
      overview: "Обзор",
      showcase: "Дашборд",
      cases: "Кейсы",
      certs: "Сертификаты",
      skills: "Стек и методы",
      contact: "Контакты"
    },
    hero: {
      availableBadge: "ОТКРЫТ ДЛЯ LEAD & ARCHITECT РОЛЕЙ",
      headingPrefix: "Корпоративная инженерия данных и ",
      headingGradient: "прикладной искусственный интеллект",
      bioIntro: "Привет, я ",
      bioName: "Абай Сыздыков",
      bioRole: "Ведущий BI-инженер и архитектор данных",
      bioBody: ". Я проектирую отказоустойчивые корпоративные хранилища данных (Bronze-Silver-Gold на PostgreSQL с FDW), руковожу миграцией аналитики (Qlik Sense в Power BI) и внедряю прикладной ИИ (Multi-LLM Council, вайбкодинг веб-интерфейсов), связывая инженерные платформы с управленческими решениями C-level.",
      contactBtn: "Обсудить проект",
      downloadCvBtn: "Скачать резюме (PDF)",
      cvFileName: "Abay_Syzdykov_CV_RU.pdf",
      toolingTitle: "Ключевые компетенции и корпоративный стек",
      tools: [
        "PostgreSQL (DWH Bronze-Silver-Gold, FDW)",
        "Qlik Sense Enterprise и Power BI (DAX, RLS)",
        "Python (EDA, статистика, FastAPI, модели выживаемости)",
        "Kestra & Docker (Оркестрация пайплайнов)",
        "Modern Data Stack (Snowflake & dbt)",
        "Мультиагентный ИИ (Multi-LLM Council, Antigravity 2.0)"
      ],
      topRatedBadge: "Lead Impact",
      badge1Label: "Масштаб кластера",
      badge1Value: "100+ активных пользователей",
      badge2Label: "Оптимизация TCO и процессов",
      badge2Value: "-20% цикл / экономия лицензий"
    },
    metrics: {
      badge: "Интерактивная демонстрация",
      title: "Управленческая телеметрия и юнит-экономика SaaS",
      description: "Интерактивный аналитический модуль: когортное удержание подписчиков, динамика регулярной выручки (MRR) и показатели юнит-экономики. Переключайте метрики и временные интервалы ниже.",
      ranges: {
        '7d': '7 Дней',
        '30d': '30 Дней',
        '90d': '90 Дней',
        '1y': '1 Год'
      },
      kpis: {
        mrr: {
          label: "Ежемесячная регулярная выручка (MRR)",
          trend: "+18.4% к пред. мес."
        },
        nrr: {
          label: "Чистый коэффициент удержания (NRR)",
          trend: "+3.1% г/г"
        },
        ltv: {
          label: "Средний LTV клиента",
          trend: "+12.6% к 1-му кв."
        },
        cac: {
          label: "Эффективность LTV / CAC",
          trend: "Топ-дециль бенчмарк"
        }
      },
      tabs: {
        revenue: "Выручка и динамика ARR",
        retention: "Кривая когортного удержания",
        ltv: "LTV и юнит-экономика"
      },
      telemetrySource: "Источник данных: Snowflake / витрины dbt",
      modelInfo: "Модель: авторегрессионное скользящее среднее (ARIMA) + когортный анализ Каплана-Мейера",
      visualEngine: "Визуализация: Apache ECharts 5.6",
      chartLabels: {
        revenueMetricName: "ВЫРУЧКА",
        retentionMetricName: "УДЕРЖАНИЕ",
        ltvMetricName: "LTV",
        dates: {
          '7d': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
          '30d': ['Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4', 'Неделя 5', 'Неделя 6'],
          '90d': ['М1-Н1', 'М1-Н3', 'М2-Н1', 'М2-Н3', 'М3-Н1', 'М3-Н3'],
          '1y': ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
        }
      }
    },
    cases: {
      badge: "Методология STAR: Реальный опыт",
      title: "Флагманские инженерные кейсы и прикладной ИИ",
      description: "Решение задач национальных холдингов и бизнеса методами DWH, миграции систем отчетности и мультиагентного ИИ.",
      viewDashboardBtn: "Открыть живой дашборд",
      githubSourceBtn: "Исходный код на GitHub",
      clientPrefix: "Заказчик: ",
      situationLabel: "Ситуация и бизнес-задача (Situation & Task)",
      actionLabel: "Технический пайплайн и архитектура (Action)",
      resultsLabel: "Измеримые результаты (Result)",
      items: [
        {
          id: "kmg-bi-modernization",
          tag: "Корпоративная модернизация BI",
          title: "Миграция корпоративной отчетности с Qlik Sense на Power BI и оптимизация TCO",
          clientType: "ТОО «KMG DIGITAL» (Национальный нефтегазовый холдинг)",
          situation: "Легаси-инфраструктура дашбордов Qlik Sense без исходной документации требовала постоянных высоких лицензионных затрат и страдала от разрозненных скриптов загрузки производственных KPI.",
          action: "Провел глубокий реинжиниринг Qlik load scripts, осуществил перенос двух ключевых корпоративных дашбордов на Power BI. Администрировал кластерную инфраструктуру на 100+ пользователей с настройкой политик Row-Level Security (RLS), завайбкодил интерактивный веб-сайт с аналитикой и обучал 3 специалистов команды.",
          resultMetrics: [
            { label: "Экономия на лицензиях", value: "Ежегодно", detail: "Оптимизация лицензионного бюджета Qlik" },
            { label: "Масштаб кластера", value: "100+ польз.", detail: "Диспетчеризация 30 регулярных задач reload" },
            { label: "Развитие команды", value: "3 инженера", detail: "Регулярное менторство и повышение грейдов" }
          ],
          techStack: ["Power BI", "Qlik Sense Enterprise", "DAX", "Row-Level Security (RLS)", "Вайбкодинг (HTML/JS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        },
        {
          id: "hr-attrition-platform",
          tag: "Интерактивная аналитика",
          title: "Интерактивная платформа HR-оттока и моделирования удержания кадров",
          clientType: "Корпоративная кадровая телеметрия (Live Web App)",
          situation: "Руководство испытывало нехватку оперативных опережающих метрик риска ухода ценных сотрудников, опираясь на запоздалые квартальные отчеты об увольнениях.",
          action: "Спроектировал и развернул на Cloudflare Pages интерактивный веб-портал на React 18, Vite и TailwindCSS с мульти-фильтрацией по департаментам и должностям, профилями сотрудников и динамическим симулятором факторов риска удержания.",
          resultMetrics: [
            { label: "Отклик интерфейса", value: "<100мс", detail: "Мгновенная клиентская фильтрация когорт" },
            { label: "Serverless Edge", value: "Cloudflare", detail: "Нулевая стоимость серверной инфраструктуры" },
            { label: "Симулятор рисков", value: "Real-Time", detail: "Проактивная оценка факторов удержания" }
          ],
          techStack: ["React 18", "Vite", "TailwindCSS", "Chart.js", "Cloudflare Pages"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "https://webdashboards.pages.dev"
        },
        {
          id: "llm-counsil",
          tag: "Мультиагентный ИИ",
          title: "Автономный оркестратор стратегического консилиума мульти-LLM",
          clientType: "Открытая архитектура ИИ-агентов (`llm-counsil`)",
          situation: "Одиночные языковые модели подвержены галлюцинациям и когнитивным искажениям при оценке сложнейших архитектурных решений и многомиллионных инвестиционных проектов.",
          action: "Создал автономный оркестратор консилиума на Google Antigravity 2.0, запускающий 5 передовых моделей (Claude, ChatGPT, Gemini Pro, Grok, Nemotron) через слепое анонимное рецензирование, Anti-Leak Sanitizer (RFC #2), Concurrency Clipboard Mutex (RFC #3) и интеграцию в Google NotebookLM.",
          resultMetrics: [
            { label: "Глубина дивергенции", value: "5 моделей", detail: "Полное исключение предвзятости моделей" },
            { label: "Качество синтеза", value: ">50 КБ", detail: "Валидация по RFC #1 Quality Floor" },
            { label: "Стандарт надежности", value: "DONE = VERIFIED", detail: "Автоматизированные циклы проверок" }
          ],
          techStack: ["Google Antigravity 2.0", "Python", "PowerShell 7 Core", "Ollama", "Chrome CDP", "NotebookLM"],
          githubUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          dashboardAnchor: "https://github.com/blacktapeproject263-alt/llm-counsil"
        },
        {
          id: "erg-procurement-dwh",
          tag: "Закупки и TCO",
          title: "Корпоративное DWH закупок и защита чувствительных коммерческих цен",
          clientType: "ERG Capital Projects (Евразийская Группа)",
          situation: "Цикл согласования закупочных процедур занимал 90 дней из-за разрозненных данных в SAP, OutSystems и Oracle MDM, что создавало риск ценового сговора и утечки внутренних лимитов.",
          action: "Возглавил создание Единой стратегической аналитической системы закупок, объединившей SAP, Oracle MDM и Qlik Sense в единый источник правды (Single Source of Truth). Внедрил строгие политики Row-Level Security (RLS) и предиктивное выявление задержек согласований.",
          resultMetrics: [
            { label: "Цикл процедур", value: "-20%", detail: "Сокращение сроков с 90 до 72 дней" },
            { label: "Снижение нарушений", value: "-15%", detail: "Ускорение согласования документации на 35%" },
            { label: "База поставщиков", value: "1 000+ комп.", detail: "Единый аналитический аудит-реестр" }
          ],
          techStack: ["PostgreSQL DWH", "SAP MM/PTP", "Oracle MDM", "Qlik Sense", "Row-Level Security (RLS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Подтвержденная квалификация и стенды",
      title: "Профессиональные сертификаты и интерактивные стенды",
      description: "Официальные вендорские сертификации, развернутые веб-приложения и верифицированные квалификации в области DWH и прикладного ИИ.",
      verifyBtn: "Проверить сертификат →",
      pdfBtn: "Смотреть сертификат (PDF) →",
      viewPlaygroundBtn: "Открыть приложение →",
      items: [
        {
          id: "hr-attrition-app",
          title: "Портал HR-аналитики оттока (webdashboards.pages.dev)",
          issuer: "Продакшн-приложение на Cloudflare Pages",
          badgeText: "Живое веб-приложение",
          description: "Интерактивная аналитическая система на React 18, Vite и Chart.js: сквозной мониторинг текучести кадров, фильтрация департаментов, карточки сотрудников и симулятор факторов риска удержания.",
          skills: ["React 18", "Vite", "TailwindCSS", "Chart.js", "HR-аналитика", "Cloudflare Pages"],
          credentialUrl: "https://webdashboards.pages.dev",
          isPlayground: true
        },
        {
          id: "llm-counsil-open-source",
          title: "Оркестратор стратегического консилиума Multi-LLM",
          issuer: "Google Antigravity 2.0 & Open-Source",
          badgeText: "ИИ-архитектура",
          description: "Автономная мультиагентная система на 5 передовых моделях с протоколами RFC #1 Quality Floor, Anti-Leak Sanitizer, Concurrency Clipboard Mutex и синхронизацией с Google NotebookLM.",
          skills: ["Мультиагентный ИИ", "Google Antigravity 2.0", "Python", "Ollama", "Chrome CDP", "Google NotebookLM"],
          credentialUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          isPlayground: true
        },
        {
          id: "qlik-sense-expert",
          title: "Эксперт Qlik Sense (Qlik Sense Expert)",
          issuer: "Академия Datanomix",
          badgeText: "Enterprise BI",
          description: "Продвинутое моделирование данных, реинжиниринг load scripts, сложный Set Analysis, генерация отчетов NPrinting и администрирование корпоративного кластера (100+ пользователей, RLS).",
          skills: ["Qlik Sense Enterprise", "Load Scripts", "Set Analysis", "NPrinting", "Row-Level Security"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        },
        {
          id: "python-data-analysis",
          title: "Python Data Analysis (Аккредитация NASBA)",
          issuer: "LinkedIn Learning & NASBA",
          badgeText: "Верифицированный сертификат",
          description: "Аккредитованная профессиональная программа по полному циклу анализа данных на Python: разведочный и статистический анализ, проверка гипотез и квантитативное моделирование (6.60 CPE кредитов, Certificate ID: e21ebcce0a232da0...).",
          skills: ["Анализ данных", "Статистический анализ", "Python", "NASBA CPE #140940"],
          credentialUrl: "/certificate-python-data-analysis.pdf"
        },
        {
          id: "dbt-mds",
          title: "dbt & Modern Data Stack Specialist",
          issuer: "dbt Labs & Snowflake Ecosystem",
          badgeText: "Подтвержденная квалификация",
          description: "Промышленный опыт построения модульных ELT-пайплайнов с версионированием кода, оптимизация хранилищ Snowflake, автоматизированное тестирование качества данных (Data Quality Tests) и построение витрин данных.",
          skills: ["dbt Core/Cloud", "Snowflake", "Витрины данных", "Тесты данных", "DataOps"],
          credentialUrl: "https://www.getdbt.com/"
        },
        {
          id: "toastmasters-international",
          title: "Toastmasters International (Competent Communicator)",
          issuer: "Toastmasters International",
          badgeText: "Лидерство и коммуникации",
          description: "Признанный спикер, лидер кросс-функциональных коммуникаций и организатор профессиональных митапов и воркшопов по инженерии данных.",
          skills: ["Executive-коммуникация", "Менторство инженеров", "Стейкхолдер-менеджмент"],
          credentialUrl: "https://www.toastmasters.org/"
        },
        {
          id: "chinese-hsk5",
          title: "Китайский язык: HSK Уровень 5 (Свободное владение)",
          issuer: "Институт Конфуция / Hanban",
          badgeText: "Профессиональное владение",
          description: "Двуязычные технические и коммерческие переговоры, перевод документации и ведение международных проектов с китайскими EPC-подрядчиками (Sinopec, KERUI, Sitan). Выпускник Сианьского нефтяного университета.",
          skills: ["Китайский язык (HSK 5)", "Нефтегазовый инжиниринг", "B2B-переговоры EPC", "Кросс-культурные проекты"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        }
      ]
    },
    skills: {
      badge: "Компетенции и методология",
      title: "Инженерный подход и аналитическая строгость",
      description: "Сочетание фундаментальной инженерии данных и глубокого понимания бизнеса для создания аналитики, которой безоговорочно доверяет руководство.",
      categories: [
        {
          title: "SQL и моделирование данных",
          icon: "database",
          desc: "Сложные аналитические запросы, рекурсивные CTE, оконные функции, проектирование схем 'звезда' и оптимизация запросов для высоконагруженных хранилищ.",
          tools: ["PostgreSQL", "Snowflake", "Google BigQuery", "dbt", "Размерное моделирование"]
        },
        {
          title: "Аналитика на Python и ML",
          icon: "code",
          desc: "Разведочный анализ данных (EDA), статистические тесты, когортные кривые дожития, регрессионный и классификационный анализ, прогнозирование спроса.",
          tools: ["Pandas", "NumPy", "Scikit-Learn", "Prophet", "Lifelines"]
        },
        {
          title: "Бизнес-аналитика (BI) и DAX",
          icon: "bar-chart",
          desc: "Корпоративная архитектура отчетов Power BI, динамические меры DAX, группы вычислений, безопасность на уровне строк (RLS) и сквозная детализация.",
          tools: ["Power BI", "Advanced DAX", "Tabular Editor", "Dataflows", "Executive KPIs"]
        },
        {
          title: "Поддержка коммерческих решений",
          icon: "trending-up",
          desc: "Перевод неструктурированных бизнес-проблем в проверяемые гипотезы, расчет юнит-экономики (LTV, CAC, Payback) и подготовка материалов для совета директоров.",
          tools: ["Юнит-экономика", "A/B тестирование", "Снижение оттока", "Маркетинговая атрибуция", "Стейкхолдер-менеджмент"]
        }
      ],
      frameworkBadge: "Фреймворк реализации",
      frameworkTitle: "От сырых логов к управленческим действиям",
      steps: [
        {
          step: "01",
          title: "Диагностика и согласование",
          desc: "Выявление узких мест бизнеса, интервью с ключевыми стейкхолдерами и определение единой метрики North Star."
        },
        {
          step: "02",
          title: "Моделирование и трансформация",
          desc: "Очистка сырых логов, разработка надежных dbt/SQL-преобразований и проверка целостности данных на граничных случаях."
        },
        {
          step: "03",
          title: "Прогнозирование и визуализация",
          desc: "Создание интерактивных дашбордов самообслуживания и статистических моделей прогнозирования с прозрачными доверительными интервалами."
        },
        {
          step: "04",
          title: "Автоматизация и окупаемость (ROI)",
          desc: "Настройка регулярных алертов, исключение ручной рутины из отчетности и презентация аргументированных рекомендаций."
        }
      ]
    },
    contact: {
      badge: "Прямой контакт",
      title: "Построим масштабируемую аналитическую инфраструктуру",
      description: "Планируете миграцию отчетности с Qlik Sense на Power BI, рефакторинг DWH или требуется Lead-эксперт по данным? Оставьте запрос ниже.",
      sidebar: {
        name: "Абай Сыздыков",
        role: "Ведущий BI-инженер и архитектор данных",
        bio: "Доступен для контрактных ролей Lead / Architect, консалтинга по архитектуре DWH, миграциям BI (Qlik в Power BI) и внедрению ИИ-пайплайнов.",
        responseTimeLabel: "Время ответа",
        responseTimeValue: "В течение 24 рабочих часов",
        locationLabel: "Локация и часовой пояс",
        locationValue: "Удаленно (UTC+5 / Гибкий график под EMEA и US)",
        networkLabel: "Профессиональная сеть",
        networkLink: "Профиль в LinkedIn →"
      },
      form: {
        nameLabel: "Ваше имя и фамилия",
        namePlaceholder: "Елена Ростова",
        emailLabel: "Корпоративный Email",
        emailPlaceholder: "elena@company.com",
        messageLabel: "Детали проекта и бизнес-задача",
        messagePlaceholder: "Опишите ваш массив данных, текущую систему отчетности, сроки или требования к аналитику...",
        submitBtn: "Отправить запрос",
        submittingBtn: "Безопасная отправка...",
        successMsg: "✓ Спасибо! Ваш запрос успешно отправлен Абаю Сыздыкову. Ответ придет в течение 24 часов.",
        errorPrefix: "Ошибка отправки: ",
        defaultError: "Ошибка сервера. Пожалуйста, попробуйте снова или напишите в LinkedIn.",
        networkError: "Сетевая ошибка при передаче. Пожалуйста, проверьте подключение или напишите в LinkedIn.",
        requiredFieldsError: "Пожалуйста, заполните все обязательные поля."
      }
    },
    footer: {
      rights: "Все права защищены. Ведущий BI-инженер и архитектор данных.",
      edgeBadge: "Высокоскоростная инфраструктура Edge • Cloudflare Pages + Workers",
      backToTop: "↑ Наверх"
    }
  },
  kk: {
    meta: {
      title: "Абай Сыздықов | Жетекші BI-инженер & Деректер архитекторы",
      description: "Жетекші BI-инженер және деректер архитекторы. Корпоративтік DWH (PostgreSQL, FDW), Qlik-тен Power BI-ге көшіру, мемлекеттік және өнеркәсіптік сатып алулар аналитикасы және жасанды интеллект жүйелері."
    },
    nav: {
      overview: "Шолу",
      showcase: "Дашборд",
      cases: "Кейстер",
      certs: "Сертификаттар",
      skills: "Стек пен әдістер",
      contact: "Байланыс"
    },
    hero: {
      availableBadge: "LEAD & ARCHITECT РОЛДЕРІНЕ АШЫҚ",
      headingPrefix: "Корпоративтік деректер инженериясы және ",
      headingGradient: "қолданбалы жасанды интеллект",
      bioIntro: "Сәлем, мен ",
      bioName: "Абай Сыздықов",
      bioRole: "Жетекші BI-инженер және деректер архитекторымын",
      bioBody: ". Мен сенімді корпоративтік деректер қоймаларын (PostgreSQL-дегі Bronze-Silver-Gold архитектурасы, FDW) жобалаймын, есептілік жүйелерін жаңғыртамын (Qlik Sense-тен Power BI-ге көшіру) және қолданбалы ЖИ шешімдерін (Multi-LLM Council) өндіріске енгіземін.",
      contactBtn: "Жобаны талқылау",
      downloadCvBtn: "Түйіндемені жүктеу (PDF)",
      cvFileName: "Abay_Syzdykov_CV_EN.pdf",
      toolingTitle: "Негізгі құзыреттер мен корпоративтік стек",
      tools: [
        "PostgreSQL (DWH Bronze-Silver-Gold, FDW)",
        "Qlik Sense Enterprise және Power BI (DAX, RLS)",
        "Python (EDA, статистика, FastAPI, өміршеңдік моделдері)",
        "Kestra & Docker (Құбырларды басқару)",
        "Modern Data Stack (Snowflake & dbt)",
        "Мультиагенттік ЖИ (Multi-LLM Council, Antigravity 2.0)"
      ],
      topRatedBadge: "Lead Impact",
      badge1Label: "Инфрақұрылым ауқымы",
      badge1Value: "100+ кластер пайдаланушысы",
      badge2Label: "Үдерістер мен TCO оңтайландыру",
      badge2Value: "-20% цикл / лицензия үнемдеу"
    },
    metrics: {
      badge: "Интерактивті тәжірибе көрсетілімі",
      title: "Басқарушылық телеметрия және SaaS юнит-экономикасы",
      description: "Жазылушылардың когорттық ұсталуын, тұрақты табыс (MRR) динамикасын және юнит-экономика көрсеткіштерін нақты уақытта көрсететін интерактивті жүйе. Төмендегі метрикалар мен уақыт аралығын таңдаңыз.",
      ranges: {
        '7d': '7 Күн',
        '30d': '30 Күн',
        '90d': '90 Күн',
        '1y': '1 Жыл'
      },
      kpis: {
        mrr: {
          label: "Ай сайынғы тұрақты табыс (MRR)",
          trend: "+18.4% өткен айға қарағанда"
        },
        nrr: {
          label: "Таза ұстап қалу көрсеткіші (NRR)",
          trend: "+3.1% өткен жылға қарағанда"
        },
        ltv: {
          label: "Клиенттің орташа LTV көрсеткіші",
          trend: "+12.6% 1-тоқсанмен салыстырғанда"
        },
        cac: {
          label: "LTV / CAC тиімділігі",
          trend: "Үздік дециль бенчмаркі"
        }
      },
      tabs: {
        revenue: "Табыс пен ARR өсімі",
        retention: "Когорталарды ұстап қалу қисығы",
        ltv: "LTV және юнит-экономика"
      },
      telemetrySource: "Деректер көзі: Snowflake / dbt витриналары",
      modelInfo: "Модель: авторегрессиялық жылжымалы орташа (ARIMA) + Каплан-Мейер когорттық талдауы",
      visualEngine: "Визуализация жүйесі: Apache ECharts 5.6",
      chartLabels: {
        revenueMetricName: "ТАБЫС",
        retentionMetricName: "ҰСТАП ҚАЛУ",
        ltvMetricName: "LTV",
        dates: {
          '7d': ['Дүй', 'Сей', 'Сәр', 'Бей', 'Жұм', 'Сен', 'Жек'],
          '30d': ['1-апта', '2-апта', '3-апта', '4-апта', '5-апта', '6-апта'],
          '90d': ['1А-1Ап', '1А-3Ап', '2А-1Ап', '2А-3Ап', '3А-1Ап', '3А-3Ап'],
          '1y': ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел']
        }
      }
    },
    cases: {
      badge: "STAR әдістемесі: Нақты нәтижелер",
      title: "Флагмандық инженерлік кейстер және қолданбалы ЖИ",
      description: "Ұлттық холдингтер мен өнеркәсіп міндеттерін DWH, есептілік миграциясы және автономды ЖИ агенттері арқылы шешу.",
      viewDashboardBtn: "Тікелей дашбордты ашу",
      githubSourceBtn: "GitHub бастапқы коды",
      clientPrefix: "Тапсырыс беруші: ",
      situationLabel: "Жағдай және бизнес міндеті (Situation & Task)",
      actionLabel: "Техникалық құрылым және архитектура (Action)",
      resultsLabel: "Өлшенетін нәтижелер (Result)",
      items: [
        {
          id: "kmg-bi-modernization",
          tag: "Корпоративтік BI жаңғырту",
          title: "Корпоративтік есептілікті Qlik Sense-тен Power BI-ге көшіру және TCO оңтайландыру",
          clientType: "«KMG DIGITAL» ЖШС (Ұлттық мұнай-газ холдингі)",
          situation: "Бастапқы құжаттамасы жоқ Qlik Sense легаси-дашбордтары тұрақты жоғары лицензиялық шығындарды талап етті және өндірістік KPI көрсеткіштерінің скрипттері шашыраңқы болды.",
          action: "Qlik load scripts құрылымына реинжиниринг жүргізіп, екі негізгі корпоративтік дашбордты Power BI-ге сәтті көшірдім. 100+ пайдаланушыға арналған кластерлік инфрақұрылымды Row-Level Security (RLS) арқылы басқардым, веб-аналитика порталын вайбкодтап, команданың 3 маманына менторлық еттім.",
          resultMetrics: [
            { label: "Лицензия үнемдеу", value: "Жыл сайын", detail: "Qlik лицензиялық шығындары оңтайландырылды" },
            { label: "Кластер ауқымы", value: "100+ пайдал.", detail: "Деректерді жаңартудың 30 тұрақты міндеті" },
            { label: "Команда дамуы", value: "3 инженер", detail: "Тұрақты менторлық пен біліктілікті арттыру" }
          ],
          techStack: ["Power BI", "Qlik Sense Enterprise", "DAX", "Row-Level Security (RLS)", "Вайбкодинг (HTML/JS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        },
        {
          id: "hr-attrition-platform",
          tag: "Интерактивті аналитика",
          title: "Кадрлардың кетуі мен тұрақтылығын талдайтын интерактивті HR-платформасы",
          clientType: "Корпоративтік кадрлық телеметрия (Live Web App)",
          situation: "Басшылық тоқсан сайынғы кешіккен есептерге ғана сүйеніп, маңызды қызметкерлердің кету қаупін алдын ала ескертетін жедел құралдарға ие болмады.",
          action: "Cloudflare Pages-те React 18, Vite және TailwindCSS негізінде интерактивті портал әзірледім: департаменттер мен лауазымдар бойынша көпсатылы сүзгілер, қызметкерлер профилі және кадрларды сақтап қалу қаупін болжайтын динамикалық симулятор.",
          resultMetrics: [
            { label: "Интерфейс жылдамдығы", value: "<100мс", detail: "Когорталарды нақты уақытта жылдам сүзу" },
            { label: "Serverless Edge", value: "Cloudflare", detail: "Серверлік инфрақұрылымға нөлдік шығын" },
            { label: "Қауіп симуляторы", value: "Real-Time", detail: "Кадрларды ұстап қалуды проактивті бағалау" }
          ],
          techStack: ["React 18", "Vite", "TailwindCSS", "Chart.js", "Cloudflare Pages"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "https://webdashboards.pages.dev"
        },
        {
          id: "llm-counsil",
          tag: "Мультиагенттік ЖИ",
          title: "Автономды стратегиялық мульти-LLM консилиум оркестраторы",
          clientType: "Ашық кодты ЖИ архитектурасы (`llm-counsil`)",
          situation: "Күрделі жүйелік архитектураны және ірі жобаларды бағалау кезінде жеке тілдік моделдер субъективтілік пен галлюцинацияға ұшырайды.",
          action: "Google Antigravity 2.0 ортасында 5 озық тілдік модельді (Claude, ChatGPT, Gemini Pro, Grok, Nemotron) анонимді түрде өзара сыннан өткізетін, Anti-Leak Sanitizer (RFC #2), Concurrency Clipboard Mutex (RFC #3) және Google NotebookLM интеграциясы бар автономды оркестратор құрдым.",
          resultMetrics: [
            { label: "Дивергенция тереңдігі", value: "5 модель", detail: "Модельдердің біржақтылығын толық жою" },
            { label: "Синтез сапасы", value: ">50 КБ", detail: "RFC #1 Quality Floor талаптарымен расталған" },
            { label: "Сенімділік стандарты", value: "DONE = VERIFIED", detail: "Тікелей автоматтандырылған тексеру циклі" }
          ],
          techStack: ["Google Antigravity 2.0", "Python", "PowerShell 7 Core", "Ollama", "Chrome CDP", "NotebookLM"],
          githubUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          dashboardAnchor: "https://github.com/blacktapeproject263-alt/llm-counsil"
        },
        {
          id: "erg-procurement-dwh",
          tag: "Сатып алу және TCO",
          title: "Сатып алудың корпоративтік DWH қоймасы және баға құпиялылығын қорғау",
          clientType: "ERG Capital Projects (Еуразиялық Топ)",
          situation: "SAP, OutSystems және Oracle MDM жүйелерінің оқшаулануы салдарынан сатып алу рәсімдерінің келісу циклі 90 күнге созылып, ішкі баға лимиттерінің жария болып кету қаупі туындады.",
          action: "SAP, Oracle MDM және Qlik Sense деректерін бірыңғай сенімді көзге (Single Source of Truth) біріктірген Сатып алудың бірыңғай стратегиялық есептілік жүйесін құруға жетекшілік еттім. Құпия бағалар бойынша қатаң Row-Level Security (RLS) саясатын енгіздім.",
          resultMetrics: [
            { label: "Сатып алу циклі", value: "-20%", detail: "Мерзімдерді 90 күннен 72 күнге дейін қысқарту" },
            { label: "Келісу кешігулері", value: "-15%", detail: "Инженерлік құжаттаманы бекітуді 35%-ға жеделдету" },
            { label: "Жеткізушілер базасы", value: "1 000+ кәсіп.", detail: "Орталықтандырылған аудиторлық тізілім" }
          ],
          techStack: ["PostgreSQL DWH", "SAP MM/PTP", "Oracle MDM", "Qlik Sense", "Row-Level Security (RLS)"],
          githubUrl: "https://github.com/blacktapeproject263-alt",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Расталған біліктілік пен сынақ алаңдары",
      title: "Кәсіби сертификаттар және интерактивті шоукейстер",
      description: "Дерекқорларды жобалау, бұлтты инженерия және қолданбалы ЖИ жүйелері бойынша ресми халықаралық сертификаттар мен тікелей веб-қосымшалар.",
      verifyBtn: "Сертификатты тексеру →",
      pdfBtn: "Сертификатты көру (PDF) →",
      viewPlaygroundBtn: "Қосымшаны ашу →",
      items: [
        {
          id: "hr-attrition-app",
          title: "Кадрлар аналитикасы порталы (webdashboards.pages.dev)",
          issuer: "Cloudflare Pages-тегі өндірістік қосымша",
          badgeText: "Тікелей веб-қосымша",
          description: "React 18, Vite және Chart.js негізіндегі интерактивті талдау жүйесі: кадрлардың ауысу динамикасын бақылау, департаменттерді сүзу, қызметкерлер карточкасы және кету қаупін модельдеу симуляторы.",
          skills: ["React 18", "Vite", "TailwindCSS", "Chart.js", "HR-аналитика", "Cloudflare Pages"],
          credentialUrl: "https://webdashboards.pages.dev",
          isPlayground: true
        },
        {
          id: "llm-counsil-open-source",
          title: "Multi-LLM стратегиялық консилиум оркестраторы",
          issuer: "Google Antigravity 2.0 & Ашық код",
          badgeText: "ЖИ-архитектурасы",
          description: "RFC #1 Quality Floor, Anti-Leak Sanitizer, Concurrency Clipboard Mutex хаттамалары мен Google NotebookLM синхрондауы бар 5 озық модель негізіндегі автономды мультиагенттік жүйе.",
          skills: ["Мультиагенттік ЖИ", "Google Antigravity 2.0", "Python", "Ollama", "Chrome CDP", "Google NotebookLM"],
          credentialUrl: "https://github.com/blacktapeproject263-alt/llm-counsil",
          isPlayground: true
        },
        {
          id: "qlik-sense-expert",
          title: "Qlik Sense сарапшысы (Qlik Sense Expert)",
          issuer: "Datanomix Академиясы",
          badgeText: "Enterprise BI",
          description: "Күрделі деректерді модельдеу, load scripts реинжинирингі, Set Analysis, NPrinting автоматты есептілігі және корпоративтік кластерді басқару (100+ пайдаланушы, RLS).",
          skills: ["Qlik Sense Enterprise", "Load Scripts", "Set Analysis", "NPrinting", "Row-Level Security"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        },
        {
          id: "python-data-analysis",
          title: "Python Data Analysis (NASBA аккредитациясы)",
          issuer: "LinkedIn Learning & NASBA",
          badgeText: "Расталған сертификат",
          description: "Python тілінде деректерді талдаудың толық циклі бойынша аккредиттелген кәсіби бағдарлама: барлау және статистикалық талдау, гипотезаларды тексеру және сандық модельдеу (6.60 CPE кредиттері, Certificate ID: e21ebcce0a232da0...).",
          skills: ["Деректерді талдау", "Статистикалық талдау", "Python", "NASBA CPE #140940"],
          credentialUrl: "/certificate-python-data-analysis.pdf"
        },
        {
          id: "dbt-mds",
          title: "dbt & Modern Data Stack Specialist",
          issuer: "dbt Labs & Snowflake Ecosystem",
          badgeText: "Расталған біліктілік",
          description: "Модульдік нұсқаланған ELT деректер құбырларын құру, Snowflake қоймаларын оңтайландыру, деректер сапасын автоматты тестілеу (Data Quality Tests) және деректер витриналарын жобалау.",
          skills: ["dbt Core/Cloud", "Snowflake", "Деректер витриналары", "Сапа сынақтары", "DataOps"],
          credentialUrl: "https://www.getdbt.com/"
        },
        {
          id: "toastmasters-international",
          title: "Toastmasters International (Competent Communicator)",
          issuer: "Toastmasters International",
          badgeText: "Көшбасшылық пен шешендік",
          description: "Халықаралық деректер инженериясы іс-шаралары мен техникалық воркшоптардың мойындалған спикері, кросс-функционалды байланыс көшбасшысы.",
          skills: ["Executive-байланыс", "Инженерлік менторлық", "Стейкхолдерлермен жұмыс"],
          credentialUrl: "https://www.toastmasters.org/"
        },
        {
          id: "chinese-hsk5",
          title: "Қытай тілі: HSK 5-деңгей (Еркін меңгерген)",
          issuer: "Конфуций Институты / Hanban",
          badgeText: "Кәсіби еркін деңгей",
          description: "Қытайлық EPC-мердігерлермен (Sinopec, KERUI, Sitan) екітілді техникалық және коммерциялық келіссөздер жүргізу, құжаттама аудару және халықаралық жобаларды басқару. Сиань мұнай университетінің түлегі.",
          skills: ["Қытай тілі (HSK 5)", "Мұнай-газ инженериясы", "B2B EPC келіссөздері", "Халықаралық операциялар"],
          credentialUrl: "https://www.linkedin.com/in/abay-syzdykov-ba4b75113/"
        }
      ]
    },
    skills: {
      badge: "Құзыреттер мен әдіснама",
      title: "Аналитикалық дәлдік пен инженерлік шеберлік",
      description: "Басшылар сенім артатын сапалы есептер жасау үшін деректер инженериясы мен бизнесті түсінуді ұштастыру.",
      categories: [
        {
          title: "SQL және деректерді модельдеу",
          icon: "database",
          desc: "Күрделі аналитикалық сұраныстар, рекурсивті CTE, терезелік функциялар, 'жұлдыз' сұлбасын жобалау және үлкен дерекқорлар сұраныстарын оңтайландыру.",
          tools: ["PostgreSQL", "Snowflake", "Google BigQuery", "dbt", "Өлшемдік модельдеу"]
        },
        {
          title: "Python аналитикасы және ML",
          icon: "code",
          desc: "Барлау деректерін талдау (EDA), статистикалық тестілер, өміршеңдік қисықтары, регрессия мен классификация, уақыттық қатарлар арқылы сұранысты болжау.",
          tools: ["Pandas", "NumPy", "Scikit-Learn", "Prophet", "Lifelines"]
        },
        {
          title: "Бизнес-аналитика (BI) және DAX",
          icon: "bar-chart",
          desc: "Power BI корпоративтік есептілік архитектурасы, серпінді DAX өлшемдері, есептеу топтары, қатар деңгейіндегі қауіпсіздік (RLS) және егжей-тегжейлі талдау.",
          tools: ["Power BI", "Тереңдетілген DAX", "Tabular Editor", "Dataflows", "Басқарушылық KPI"]
        },
        {
          title: "Коммерциялық шешімдерді қолдау",
          icon: "trending-up",
          desc: "Күрделі бизнес мәселелерін тексерілетін гипотезаларға айналдыру, юнит-экономиканы есептеу (LTV, CAC, Payback) және директорлар кеңесіне арналған есептер.",
          tools: ["Юнит-экономика", "A/B тестілеу", "Кетуді азайту", "Маркетингтік атрибуция", "Стейкхолдерлермен өзара әрекет"]
        }
      ],
      frameworkBadge: "Жобаны жеткізу фреймворкі",
      frameworkTitle: "Шикі деректерден басқарушылық шешімдерге дейін",
      steps: [
        {
          step: "01",
          title: "Диагностика және келісу",
          desc: "Бизнестің түйткілді тұстарын анықтау, негізгі стейкхолдерлермен сұхбаттасу және бірыңғай North Star метрикасын бекіту."
        },
        {
          step: "02",
          title: "Модельдеу және түрлендіру",
          desc: "Шикі деректерді тазалау, сенімді dbt/SQL түрлендірулерін жасау және шекті жағдайларда деректер тұтастығын тексеру."
        },
        {
          step: "03",
          title: "Болжау және визуализация",
          desc: "Өзіндік қызмет көрсететін интерактивті дашбордтар мен сенімділік шектері айқын статистикалық болжам моделдерін құру."
        },
        {
          step: "04",
          title: "Автоматтандыру және ROI арттыру",
          desc: "Тұрақты ескертулерді баптау, қолмен есеп жасауды толық жою және дәйекті ұсыныстарды қорғау."
        }
      ]
    },
    contact: {
      badge: "Тікелей байланыс",
      title: "Нәтижеге бағытталған деректер инфрақұрылымын бірге құрайық",
      description: "Qlik Sense-тен Power BI-ге есептілікті көшіруді жоспарлап отырсыз ба, DWH архитектурасын рефакторингтеу қажет пе немесе Lead-маман іздеп жүрсіз бе? Төменде өтінім қалдырыңыз.",
      sidebar: {
        name: "Абай Сыздықов",
        role: "Жетекші BI-инженер және деректер архитекторы",
        bio: "Lead / Architect деңгейіндегі келісімшарттарға, DWH архитектурасы бойынша консалтингке, BI көшіруге және ЖИ жүйелерін енгізуге ашықпын.",
        responseTimeLabel: "Жауап беру уақыты",
        responseTimeValue: "24 жұмыс сағаты ішінде",
        locationLabel: "Орналасқан жері және уақыт белдеуі",
        locationValue: "Қашықтан (UTC+5 / EMEA және US үшін икемді)",
        networkLabel: "Кәсіби желі",
        networkLink: "LinkedIn профилі →"
      },
      form: {
        nameLabel: "Толық аты-жөніңіз",
        namePlaceholder: "Айгерім Серікова",
        emailLabel: "Корпоративтік Email",
        emailPlaceholder: "aigerim@company.com",
        messageLabel: "Жоба туралы және бизнес міндеті",
        messagePlaceholder: "Деректеріңіз, қазіргі есептілік жүйеңіз, мерзімдер немесе аналитикке қойылатын талаптар туралы жазыңыз...",
        submitBtn: "Өтінімді жіберу",
        submittingBtn: "Қауіпсіз жіберілуде...",
        successMsg: "✓ Рақмет! Сіздің өтініміңіз Абай Сыздықовқа сәтті жіберілді. Жауап 24 сағат ішінде жолданады.",
        errorPrefix: "Жіберу қатесі: ",
        defaultError: "Серверлік қате. Қайталап көріңіз немесе LinkedIn арқылы хабарласыңыз.",
        networkError: "Желілік жіберу қатесі. Байланысыңызды тексеріңіз немесе LinkedIn арқылы хабарласыңыз.",
        requiredFieldsError: "Барлық міндетті өрістерді толтырыңыз."
      }
    },
    footer: {
      rights: "Барлық құқықтар қорғалған. Жетекші BI-инженер және деректер архитекторы.",
      edgeBadge: "Жоғары жылдамдықты Edge инфрақұрылымы • Cloudflare Pages + Workers",
      backToTop: "↑ Жоғарыға"
    }
  }
};
