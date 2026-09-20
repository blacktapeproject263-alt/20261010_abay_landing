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
      title: "Abay Syzdykov | Data Analyst & BI Specialist",
      description: "Senior Data Analyst & BI Specialist. Turning complex business telemetry into automated dashboards, revenue optimization, and board-ready insights."
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
      availableBadge: "AVAILABLE FOR NEW ENGAGEMENTS",
      headingPrefix: "Transforming Complex Data into ",
      headingGradient: "Actionable Business Alpha",
      bioIntro: "Hi, I’m ",
      bioName: "Abay Syzdykov",
      bioRole: "Data Analyst & BI Specialist",
      bioBody: ". I architect automated reporting engines, multi-touch attribution pipelines, and predictive churn models that bridge technical data infrastructure with C-suite commercial decisions.",
      contactBtn: "Discuss a Project",
      downloadCvBtn: "Download CV (PDF)",
      cvFileName: "Abay_Syzdykov_Data_Analyst_CV.pdf",
      toolingTitle: "Core Tooling & Competencies",
      tools: [
        "SQL (Snowflake / BigQuery / Postgres)",
        "Python (Pandas / Scikit / NumPy)",
        "Power BI & Advanced DAX",
        "Apache ECharts / DataViz",
        "ETL & dbt Pipelines",
        "Statistical Modeling & A/B Testing"
      ],
      topRatedBadge: "Top Rated",
      badge1Label: "Reporting Automation",
      badge1Value: "100% Zero-Touch",
      badge2Label: "Cost Reduction",
      badge2Value: "+$320K ARR Impact"
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
      title: "Featured Commercial Case Studies",
      description: "Real business challenges solved through quantitative rigor, production data engineering, and C-suite actionable reporting.",
      viewDashboardBtn: "View Interactive Dashboard",
      githubSourceBtn: "GitHub Source",
      clientPrefix: "Client: ",
      situationLabel: "Situation & Business Problem (Task)",
      actionLabel: "Technical Pipeline & Architecture (Action)",
      resultsLabel: "Quantified Outcomes (Result)",
      items: [
        {
          id: "churn-engine",
          tag: "FinTech & SaaS",
          title: "Subscriber Cohort Retention & Churn Prediction Engine",
          clientType: "B2B SaaS ($12M ARR)",
          situation: "Subscription churn was rising by 3.2% QoQ without visibility into which user cohorts decayed after month 2. The executive team relied on lagging 30-day billing summaries and lacked proactive leading risk indicators.",
          action: "Architected automated dbt/Snowflake data models structuring 1.8M subscriber activity logs. Built Python survival analysis (Kaplan-Meier & Cox Proportional Hazards) to isolate core friction milestones. Designed an automated Power BI dashboard with DAX-driven cohort decay tracking and real-time alerts for at-risk accounts.",
          resultMetrics: [
            { label: "Cohort Churn Reduction", value: "-18%", detail: "Across at-risk mid-tier subscribers" },
            { label: "Preserved Capital", value: "+$320K", detail: "Annualized Recurring Revenue saved" },
            { label: "Reporting Efficiency", value: "14h → 0h", detail: "Automated manual weekly spreadsheet tasks" }
          ],
          techStack: ["Snowflake", "dbt", "Python (Lifelines/Pandas)", "Power BI", "Advanced DAX"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "marketing-attribution",
          tag: "E-Commerce & DTC",
          title: "Multi-Touch Marketing Attribution & Unit Economics Engine",
          clientType: "Direct-to-Consumer Brand ($2.4M Ad Spend)",
          situation: "Marketing spend across Google Search, Meta Ads, and TikTok had conflicting channel ROAS due to last-click attribution bias, resulting in over-budgeting low-efficiency campaigns and underfunding discovery channels.",
          action: "Engineered a first-party Markov Chain multi-touch attribution algorithm in Python. Cleaned and joined 4.2M clickstream events using SQL window functions in BigQuery. Delivered an interactive executive scenario simulator that modeled revenue yield per dollar invested across each channel.",
          resultMetrics: [
            { label: "Blended ROAS Uplift", value: "+23%", detail: "Return on ad spend optimized" },
            { label: "Budget Reallocated", value: "28%", detail: "Shifted to high-converting mid-funnel paths" },
            { label: "Net Incremental Rev", value: "+$640K", detail: "Directly attributable to optimized mix" }
          ],
          techStack: ["Google BigQuery", "Python (NetworkX/NumPy)", "SQL Window Functions", "Power BI", "ECharts"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "logistics-sla",
          tag: "Supply Chain & Ops",
          title: "Fulfillment SLA Optimization & Warehouse Intake Forecasting",
          clientType: "Regional Logistics 3PL Network",
          situation: "Peak season volume surges caused a 12% SLA fulfillment breach rate, triggering $85K in contractual carrier penalties and overburdening warehouse dispatch teams.",
          action: "Trained Python ARIMA & Prophet time-series models for parcel intake volume prediction with a 94.2% accuracy rate. Streamlined ingestion pipelines into partitioned Postgres data marts and rolled out live operational Kanban dashboards for warehouse floor leads.",
          resultMetrics: [
            { label: "SLA Delivery Breaches", value: "12% → 2.4%", detail: "Slashing late dispatches by 80%" },
            { label: "Penalty Avoidance", value: "+$75,000", detail: "Contractual SLA fees avoided" },
            { label: "On-Time Dispatch Rate", value: "98.6%", detail: "Sustained during Q4 peak holiday season" }
          ],
          techStack: ["PostgreSQL", "Python (Prophet/Statsmodels)", "Automated ETL", "ECharts", "Metabase"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Verified Qualifications & Sandboxes",
      title: "Industry Certifications & Interactive Showcases",
      description: "Rigorous vendor certifications and verifiable technical sandboxes demonstrating enterprise data modeling, cloud engineering, and decision-support systems.",
      verifyBtn: "Verify Credential →",
      pdfBtn: "View Certificate (PDF) →",
      viewPlaygroundBtn: "Launch Interactive Showcase →",
      items: [
        {
          id: "python-data-analysis",
          title: "Python Data Analysis (NASBA Accredited)",
          issuer: "LinkedIn Learning & NASBA",
          badgeText: "Verified Certificate",
          description: "Accredited technical certification covering end-to-end data analysis, statistical data analysis, hypothesis testing, and quantitative modeling with Python (CPE Credit: 6.60, Certificate ID: e21ebcce0a232da0...).",
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
          id: "echarts-sandbox",
          title: "Interactive ECharts / Analytical Playground",
          issuer: "Live Telemetry Sandbox",
          badgeText: "Live Sandbox",
          description: "High-performance client-side interactive telemetry engine built with Apache ECharts. Simulates multi-cohort retention decay curves, MRR growth vectors, and dynamic unit economics with sub-second recalculation.",
          skills: ["Apache ECharts", "Cohort Retention Simulation", "Unit Economics", "Interactive Telemetry"],
          credentialUrl: "#showcase",
          isPlayground: true
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
      title: "Let’s Build Data Infrastructure That Converts",
      description: "Have an analytics pipeline bottleneck, need automated reporting, or looking for an experienced Data Analyst? Send an inquiry below.",
      sidebar: {
        name: "Abay Syzdykov",
        role: "Data Analyst & BI Specialist",
        bio: "Available for remote contracts, analytics consulting, dashboard implementations, and full-time senior analytical roles.",
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
      rights: "All rights reserved. Data Analyst & BI Specialist.",
      edgeBadge: "Zero-Cost Edge Infrastructure • Cloudflare Pages + Workers",
      backToTop: "↑ Back to Top"
    }
  },
  ru: {
    meta: {
      title: "Абай Сыздыков | Аналитик данных и BI-специалист",
      description: "Senior Data Analyst & BI-специалист. Превращаю сложные массивы данных в автоматизированные дашборды, рост выручки и управленческие инсайты для C-level."
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
      availableBadge: "ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ",
      headingPrefix: "Трансформация сложных данных в ",
      headingGradient: "измеримую прибыль и бизнес-преимущество",
      bioIntro: "Привет, я ",
      bioName: "Абай Сыздыков",
      bioRole: "аналитик данных и BI-специалист",
      bioBody: ". Я проектирую автоматизированные аналитические платформы, пайплайны сквозной атрибуции и прогнозные модели оттока, связывая инженерную инфраструктуру данных со стратегическими бизнес-решениями руководства.",
      contactBtn: "Обсудить проект",
      downloadCvBtn: "Скачать резюме (PDF)",
      cvFileName: "Abay_Syzdykov_Data_Analyst_CV.pdf",
      toolingTitle: "Ключевые компетенции и стек",
      tools: [
        "SQL (Snowflake / BigQuery / Postgres)",
        "Python (Pandas / Scikit / NumPy)",
        "Power BI & Advanced DAX",
        "Apache ECharts / DataViz",
        "ETL & dbt Pipelines",
        "Статистическое моделирование & A/B тесты"
      ],
      topRatedBadge: "Высший рейтинг",
      badge1Label: "Автоматизация отчетности",
      badge1Value: "100% без ручной рутины",
      badge2Label: "Оптимизация затрат",
      badge2Value: "+$320K к годовой выручке"
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
      title: "Избранные коммерческие кейсы",
      description: "Решение реальных бизнес-задач с помощью математической строгости, промышленной инженерии данных и наглядной аналитики для руководства.",
      viewDashboardBtn: "Открыть интерактивный дашборд",
      githubSourceBtn: "Исходный код на GitHub",
      clientPrefix: "Клиент: ",
      situationLabel: "Ситуация и бизнес-задача (Situation & Task)",
      actionLabel: "Технический пайплайн и архитектура (Action)",
      resultsLabel: "Измеримые результаты (Result)",
      items: [
        {
          id: "churn-engine",
          tag: "Финтех и SaaS",
          title: "Система когортного анализа удержания и прогнозирования оттока подписчиков",
          clientType: "B2B SaaS ($12M годовой выручки)",
          situation: "Отток подписчиков возрастал на 3.2% квартал к кварталу без понимания того, какие именно когорты пользователей деградируют после 2-го месяца. Руководство опиралось на запаздывающие 30-дневные биллинговые сводки и не имело опережающих индикаторов риска.",
          action: "Спроектировал автоматизированные модели данных в dbt/Snowflake для структурирования 1.8M логов активности пользователей. Разработал на Python модель анализа дожития (Каплан-Мейер и регрессия пропорциональных рисков Кокса) для выявления критических точек оттока. Создал интерактивный дашборд в Power BI на базе мер DAX с отслеживанием динамики когорт и алертами по аккаунтам группы риска.",
          resultMetrics: [
            { label: "Снижение оттока в когортах", value: "-18%", detail: "Среди подписчиков среднего чека в группе риска" },
            { label: "Сохраненный капитал", value: "+$320K", detail: "Спасенная годовая регулярная выручка (ARR)" },
            { label: "Эффективность отчетности", value: "14ч → 0ч", detail: "Автоматизация еженедельной ручной сборки таблиц" }
          ],
          techStack: ["Snowflake", "dbt", "Python (Lifelines/Pandas)", "Power BI", "Advanced DAX"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "marketing-attribution",
          tag: "E-Commerce и DTC",
          title: "Модель сквозной мультиканальной атрибуции и юнит-экономики маркетинга",
          clientType: "DTC-бренд (Рекламный бюджет $2.4M)",
          situation: "Рекламные бюджеты в Google Search, Meta Ads и TikTok имели противоречивые показатели ROAS из-за искажения модели 'последнего клика'. В результате неэффективные кампании перефинансировались, а охватные каналы первого касания недополучали бюджет.",
          action: "Разработал собственный алгоритм мультиканальной атрибуции на основе цепей Маркова на Python. Обработал и объединил 4.2M событий кликстрима с помощью оконных функций SQL в BigQuery. Внедрил интерактивный симулятор сценариев для руководства, моделирующий отдачу выручки на каждый вложенный доллар по каждому каналу.",
          resultMetrics: [
            { label: "Рост совокупного ROAS", value: "+23%", detail: "Оптимизация отдачи рекламных инвестиций" },
            { label: "Перераспределено бюджета", value: "28%", detail: "Направлено в наиболее конверсионные связки" },
            { label: "Чистый прирост выручки", value: "+$640K", detail: "Прямой результат оптимизации медиамикса" }
          ],
          techStack: ["Google BigQuery", "Python (NetworkX/NumPy)", "Оконные функции SQL", "Power BI", "ECharts"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "logistics-sla",
          tag: "Логистика и цепочки поставок",
          title: "Оптимизация SLA фулфилмента и прогнозирование складской загрузки",
          clientType: "Региональная логистическая сеть 3PL",
          situation: "Пиковые сезонные всплески объемов приводили к 12% нарушений SLA по доставке, что влекло $85K штрафов по договорам и вызывало регулярные перегрузки складских смен.",
          action: "Обучил модели временных рядов (ARIMA и Prophet) на Python для прогнозирования объемов входящих отправлений с точностью 94.2%. Оптимизировал пайплайны загрузки в секционированные витрины данных Postgres и внедрил операционные канбан-дашборды реального времени для начальников смен.",
          resultMetrics: [
            { label: "Нарушения SLA доставки", value: "12% → 2.4%", detail: "Сокращение задержек отправлений на 80%" },
            { label: "Предотвращение штрафов", value: "+$75,000", detail: "Сбережение средств по штрафным санкциям" },
            { label: "Своевременность отгрузок", value: "98.6%", detail: "Удержано в пиковый период 4-го квартала" }
          ],
          techStack: ["PostgreSQL", "Python (Prophet/Statsmodels)", "Автоматизированный ETL", "ECharts", "Metabase"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Подтвержденная квалификация и песочницы",
      title: "Профессиональные сертификаты и интерактивные шоукейсы",
      description: "Официальные вендорские сертификации и верифицируемые технические демонстрационные стенды, подтверждающие высокий уровень проектирования хранилищ, моделирования данных и разработки BI-систем.",
      verifyBtn: "Проверить сертификат →",
      pdfBtn: "Смотреть сертификат (PDF) →",
      viewPlaygroundBtn: "Открыть интерактивный стенд →",
      items: [
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
          id: "echarts-sandbox",
          title: "Interactive ECharts / Analytical Playground",
          issuer: "Песочница живой телеметрии",
          badgeText: "Интерактивный стенд",
          description: "Высокопроизводительный аналитический движок на Apache ECharts с мгновенным откликом: динамическое моделирование когортного оттока, векторов роста MRR и расчет юнит-экономики при смене временных горизонтов.",
          skills: ["Apache ECharts", "Когортный анализ оттока", "Юнит-экономика", "Интерактивная телеметрия"],
          credentialUrl: "#showcase",
          isPlayground: true
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
      title: "Создадим аналитическую инфраструктуру, работающую на результат",
      description: "Столкнулись со сложностями в пайплайнах данных, требуется автоматизация отчетности или ищете сильного аналитика в команду? Оставьте запрос ниже.",
      sidebar: {
        name: "Абай Сыздыков",
        role: "Аналитик данных и BI-специалист",
        bio: "Доступен для удаленных контрактов, консалтинга по аналитике, внедрения дашбордов и постоянных senior-позиций.",
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
      rights: "Все права защищены. Аналитик данных и BI-специалист.",
      edgeBadge: "Высокоскоростная инфраструктура Edge • Cloudflare Pages + Workers",
      backToTop: "↑ Наверх"
    }
  },
  kk: {
    meta: {
      title: "Абай Сыздықов | Деректер аналитигі және BI маманы",
      description: "Senior Data Analyst & BI маманы. Күрделі бизнес-деректерді автоматтандырылған дашбордтарға, табысты арттыруға және басшылыққа арналған стратегиялық шешімдерге айналдырамын."
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
      availableBadge: "ЖАҢА ЖОБАЛАРҒА АШЫҚ",
      headingPrefix: "Күрделі деректерді ",
      headingGradient: "бизнеске табыс әкелетін нақты шешімдерге айналдыру",
      bioIntro: "Сәлем, мен ",
      bioName: "Абай Сыздықов",
      bioRole: "деректер аналитигі және BI маманымын",
      bioBody: ". Мен инженерлік деректер инфрақұрылымын басшылықтың стратегиялық коммерциялық шешімдерімен байланыстыратын автоматтандырылған есептілік жүйелерін, көпдеңгейлі маркетингтік атрибуцияны және клиенттердің кетуін болжайтын моделдерді әзірлеймін.",
      contactBtn: "Жобаны талқылау",
      downloadCvBtn: "Түйіндемені жүктеу (PDF)",
      cvFileName: "Abay_Syzdykov_Data_Analyst_CV.pdf",
      toolingTitle: "Негізгі құзыреттер мен технологиялық стек",
      tools: [
        "SQL (Snowflake / BigQuery / Postgres)",
        "Python (Pandas / Scikit / NumPy)",
        "Power BI & Тереңдетілген DAX",
        "Apache ECharts / DataViz",
        "ETL & dbt Деректер құбырлары",
        "Статистикалық модельдеу & A/B тестілеу"
      ],
      topRatedBadge: "Жоғары бағаланған",
      badge1Label: "Есептілікті автоматтандыру",
      badge1Value: "100% қол еңбегінсіз",
      badge2Label: "Шығындарды азайту",
      badge2Value: "Жылдық табысқа +$320K үлес"
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
      title: "Таңдаулы коммерциялық кейстер",
      description: "Математикалық дәлдік, өндірістік деректер инженериясы және топ-менеджмент шешімдеріне арналған сапалы есептілік арқылы шешілген нақты бизнес міндеттері.",
      viewDashboardBtn: "Интерактивті дашбордты ашу",
      githubSourceBtn: "GitHub бастапқы коды",
      clientPrefix: "Тапсырыс беруші: ",
      situationLabel: "Жағдай және бизнес міндеті (Situation & Task)",
      actionLabel: "Техникалық құрылым және архитектура (Action)",
      resultsLabel: "Өлшенетін нәтижелер (Result)",
      items: [
        {
          id: "churn-engine",
          tag: "FinTech және SaaS",
          title: "Жазылушылар когортасын ұстап қалу және кетуді болжау жүйесі",
          clientType: "B2B SaaS ($12M жылдық табыс)",
          situation: "Жазылушылардың кету деңгейі екінші айдан кейін қай когорталардың азайғанын көрсетпей, тоқсан сайын 3.2%-ға өсіп отырды. Басшылық кешігіп келетін 30 күндік биллингтік есептерге ғана сүйеніп, қауіп-қатердің алдын алатын бақылау индикаторларына ие болмады.",
          action: "1.8M жазылушының белсенділік логтарын реттейтін dbt/Snowflake автоматтандырылған деректер моделін құрдым. Негізгі кедергілерді анықтау үшін Python-да өміршеңдік талдауын (Каплан-Мейер және Кокс пропорционалды қатерлері) әзірледім. Тәуекел тобындағы аккаунттар бойынша нақты уақытта ескертулері бар және когорталар динамикасын бақылайтын DAX негізіндегі Power BI дашбордын жасап шықтым.",
          resultMetrics: [
            { label: "Когорталардағы кетуді азайту", value: "-18%", detail: "Орташа чек деңгейіндегі қауіпті топ жазылушылары арасында" },
            { label: "Сақталған капитал", value: "+$320K", detail: "Сақталған жылдық тұрақты табыс (ARR)" },
            { label: "Есептілік тиімділігі", value: "14сағ → 0сағ", detail: "Апта сайынғы қолмен кесте толтыру толық автоматтандырылды" }
          ],
          techStack: ["Snowflake", "dbt", "Python (Lifelines/Pandas)", "Power BI", "Advanced DAX"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "marketing-attribution",
          tag: "E-Commerce және DTC",
          title: "Көпдеңгейлі маркетингтік атрибуция және юнит-экономика модулі",
          clientType: "DTC-бренд (Жарнамалық бюджет $2.4M)",
          situation: "Google Search, Meta Ads және TikTok арналарындағы жарнама шығындарының ROAS көрсеткіштері 'соңғы шерту' (last-click) қателігіне байланысты бұрмаланып, нәтижесінде тиімділігі төмен науқандар артық қаржыландырылып, алғашқы тарту арналарына қаржы жетіспеді.",
          action: "Python-да Марков тізбектеріне негізделген жеке көпдеңгейлі атрибуция алгоритмін жасап шықтым. BigQuery-дегі SQL терезелік функциялары арқылы 4.2M кликстрим оқиғаларын өңдеп, біріктірдім. Әр арнаға салынған әрбір доллардан түсетін кірісті болжайтын басшылыққа арналған интерактивті сценарийлер симуляторын енгіздім.",
          resultMetrics: [
            { label: "Жалпы ROAS өсімі", value: "+23%", detail: "Жарнамалық инвестициялардың қайтарымы оңтайландырылды" },
            { label: "Бюджетті қайта бөлу", value: "28%", detail: "Ең жоғары конверсия беретін кезеңдерге қайта бағытталды" },
            { label: "Таза қосымша табыс", value: "+$640K", detail: "Медиамиксті оңтайландырудың тікелей нәтижесі" }
          ],
          techStack: ["Google BigQuery", "Python (NetworkX/NumPy)", "SQL Терезелік функциялары", "Power BI", "ECharts"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        },
        {
          id: "logistics-sla",
          tag: "Логистика және жеткізу тізбегі",
          title: "Фулфилмент SLA оңтайландыру және қойма жүктемесін болжау",
          clientType: "Өңірлік логистикалық 3PL желісі",
          situation: "Маусымдық жүктеменің шарықтауы салдарынан жеткізу бойынша SLA бұзылуы 12%-ға жетіп, $85K көлемінде келісімшарттық айыппұл төлеуге және қойма жұмыскерлерінің шектен тыс шаршауына әкеп соқтырды.",
          action: "Кіріс жөнелтілімдер көлемін 94.2% дәлдікпен болжайтын уақыттық қатарлар моделдерін (Python ARIMA және Prophet) оқыттым. Бөлімделген Postgres деректер витриналарына жүктеу процесін оңтайландырып, ауысым жетекшілеріне арналған нақты уақыттағы жедел канбан-дашбордтарын іске қостым.",
          resultMetrics: [
            { label: "Жеткізу SLA бұзылуы", value: "12% → 2.4%", detail: "Жөнелту кешігулері 80%-ға қысқартылды" },
            { label: "Айыппұлдардың алдын алу", value: "+$75,000", detail: "Шарттық айыппұлдар бойынша сақталған қаражат" },
            { label: "Уақтылы жөнелту көрсеткіші", value: "98.6%", detail: "4-тоқсандағы ең қарбалас мерекелік кезеңде тұрақты сақталды" }
          ],
          techStack: ["PostgreSQL", "Python (Prophet/Statsmodels)", "Автоматтандырылған ETL", "ECharts", "Metabase"],
          githubUrl: "https://github.com/blacktapeproject263-alt/abay_landing",
          dashboardAnchor: "#showcase"
        }
      ]
    },
    certifications: {
      badge: "Расталған біліктілік пен сынақ алаңдары",
      title: "Кәсіби сертификаттар және интерактивті шоукейстер",
      description: "Дерекқорларды жобалау, бұлтты инженерия және басқарушылық BI-жүйелерін құру бойынша ресми халықаралық сертификаттар мен интерактивті сынақ алаңдары.",
      verifyBtn: "Сертификатты тексеру →",
      pdfBtn: "Сертификатты көру (PDF) →",
      viewPlaygroundBtn: "Интерактивті стендті ашу →",
      items: [
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
          id: "echarts-sandbox",
          title: "Interactive ECharts / Analytical Playground",
          issuer: "Тікелей телеметрия сынақ алаңы",
          badgeText: "Интерактивті стенд",
          description: "Apache ECharts негізінде жасалған өнімділігі жоғары талдау қозғалтқышы: когорталардың кету қисықтарын (churn), MRR өсу динамикасын және юнит-экономика көрсеткіштерін нақты уақытта модельдеу мүмкіндігі.",
          skills: ["Apache ECharts", "Когорталық талдау", "Юнит-экономика", "Интерактивті телеметрия"],
          credentialUrl: "#showcase",
          isPlayground: true
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
      title: "Бизнеске нәтиже беретін деректер инфрақұрылымын бірге құрайық",
      description: "Деректер құбырында кедергілер бар ма, есептілікті автоматтандыру қажет пе немесе тәжірибелі деректер аналитигін іздеп жүрсіз бе? Төменде өтінім қалдырыңыз.",
      sidebar: {
        name: "Абай Сыздықов",
        role: "Деректер аналитигі және BI маманы",
        bio: "Қашықтан келісімшарттарға, аналитикалық консалтингке, дашбордтарды енгізуге және тұрақты senior-лауазымдарға ашықпын.",
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
      rights: "Барлық құқықтар қорғалған. Деректер аналитигі және BI маманы.",
      edgeBadge: "Жоғары жылдамдықты Edge инфрақұрылымы • Cloudflare Pages + Workers",
      backToTop: "↑ Жоғарыға"
    }
  }
};
