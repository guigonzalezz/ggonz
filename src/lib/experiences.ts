export type Sector =
  | 'healthcare'
  | 'finance'
  | 'consumer-goods'
  | 'energy'
  | 'real-estate'
  | 'logistics'
  | 'technology';

export type Technology =
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'nestjs'
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'java'
  | 'php'
  | 'angular'
  | 'react-native'
  | 'docker'
  | 'kubernetes'
  | 'gcp'
  | 'azure'
  | 'aws'
  | 'mysql'
  | 'postgresql'
  | 'mongodb'
  | 'tailwindcss'
  | 'sass'
  | 'html'
  | 'css'
  | 'spring-boot'
  | 'langchain'
  | 'contentstack'
  | 'sitecore'
  | 'jquery'
  | 'bigquery'
  | 'powerbi';

export interface Experience {
  slug: string;
  hide?: boolean;
  locationCity: {
    en: string;
    pt: string;
    de: string;
  };
  sector: Sector;
  technologies: Technology[];
  titles: {
    en: string;
    pt: string;
    de: string;
  };
  descriptions: {
    en: string;
    pt: string;
    de: string;
  };
  shortDescriptions: {
    en: string;
    pt: string;
    de: string;
  };
  highlights: {
    en: string[];
    pt: string[];
    de: string[];
  };
}

export const experiences: Experience[] = [
  {
    slug: 'logistics-ai-tool',
    locationCity: {
      en: 'Santa Monica, CA, USA',
      pt: 'Santa Monica, CA, EUA',
      de: 'Santa Monica, CA, USA'
    },
    sector: 'logistics',
    technologies: ['typescript', 'nodejs', 'langchain', 'postgresql', 'docker', 'kubernetes', 'gcp'],
    titles: {
      en: 'AI-Powered Cargo Tracking Tool',
      pt: 'Ferramenta de Rastreamento de Cargas com IA',
      de: 'KI-gestütztes Frachtverfolgungstool'
    },
    shortDescriptions: {
      en: 'Microsoft Teams and Outlook integration with LLM-powered cargo tracking',
      pt: 'Integração com Microsoft Teams e Outlook com rastreamento de cargas via LLM',
      de: 'Microsoft Teams und Outlook Integration mit LLM-gestützter Frachtverfolgung'
    },
    descriptions: {
      en: 'Built an AI-powered tool for Microsoft Teams and Outlook that enables users to query cargo tracking information through a conversational interface. The system uses LangChain and LangSmith to process queries and provide real-time responses from a PostgreSQL database populated via an ETL pipeline.',
      pt: 'Construí uma ferramenta com IA para Microsoft Teams e Outlook que permite aos usuários consultar informações de rastreamento de cargas através de uma interface conversacional. O sistema usa LangChain e LangSmith para processar consultas e fornecer respostas em tempo real de um banco de dados PostgreSQL alimentado via pipeline ETL.',
      de: 'Entwickelte ein KI-gestütztes Tool für Microsoft Teams und Outlook, das Benutzern ermöglicht, Frachtverfolgungsinformationen über eine Konversationsschnittstelle abzufragen. Das System verwendet LangChain und LangSmith zur Verarbeitung von Anfragen und liefert Echtzeit-Antworten aus einer PostgreSQL-Datenbank, die über eine ETL-Pipeline befüllt wird.'
    },
    highlights: {
      en: [
        'Integrated LLM capabilities using LangChain for natural language cargo queries',
        'Maintained ETL pipeline to sync client data with internal PostgreSQL database',
        'Deployed on Kubernetes with GCP for scalable, real-time processing',
        'Implemented Dapr for microservices communication and state management'
      ],
      pt: [
        'Integrei capacidades de LLM usando LangChain para consultas de carga em linguagem natural',
        'Mantive pipeline ETL para sincronizar dados do cliente com banco PostgreSQL interno',
        'Deploy em Kubernetes com GCP para processamento escalável em tempo real',
        'Implementei Dapr para comunicação de microserviços e gerenciamento de estado'
      ],
      de: [
        'LLM-Funktionen mit LangChain für natürlichsprachliche Frachtabfragen integriert',
        'ETL-Pipeline zur Synchronisierung von Kundendaten mit interner PostgreSQL-Datenbank gewartet',
        'Auf Kubernetes mit GCP für skalierbare Echtzeit-Verarbeitung bereitgestellt',
        'Dapr für Microservices-Kommunikation und Zustandsverwaltung implementiert'
      ]
    }
  },
  {
    slug: 'engineering-website',
    locationCity: {
      en: 'Atlanta, GA, USA',
      pt: 'Atlanta, GA, EUA',
      de: 'Atlanta, GA, USA'
    },
    sector: 'technology',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'contentstack'],
    titles: {
      en: 'Engineering Company Website',
      pt: 'Website de Empresa de Engenharia',
      de: 'Website für Ingenieurbüro'
    },
    shortDescriptions: {
      en: 'Modern Next.js website with ContentStack CMS integration',
      pt: 'Website moderno em Next.js com integração ContentStack CMS',
      de: 'Moderne Next.js-Website mit ContentStack CMS-Integration'
    },
    descriptions: {
      en: 'Developed reusable Next.js components integrated with ContentStack CMS for a major engineering company. The project focused on creating a scalable component library that content editors could easily use to build and manage pages.',
      pt: 'Desenvolvi componentes Next.js reutilizáveis integrados com ContentStack CMS para uma grande empresa de engenharia. O projeto focou na criação de uma biblioteca de componentes escalável que editores de conteúdo pudessem usar facilmente para construir e gerenciar páginas.',
      de: 'Entwickelte wiederverwendbare Next.js-Komponenten integriert mit ContentStack CMS für ein großes Ingenieurbüro. Das Projekt konzentrierte sich auf die Erstellung einer skalierbaren Komponentenbibliothek, die Inhaltsredakteure einfach zum Erstellen und Verwalten von Seiten verwenden können.'
    },
    highlights: {
      en: [
        'Built dynamic components with TailwindCSS for consistent styling',
        'Integrated with ContentStack headless CMS for content management',
        'Created Storybook documentation for component library'
      ],
      pt: [
        'Construí componentes dinâmicos com TailwindCSS para estilização consistente',
        'Integração com ContentStack headless CMS para gerenciamento de conteúdo',
        'Criei documentação Storybook para biblioteca de componentes'
      ],
      de: [
        'Dynamische Komponenten mit TailwindCSS für konsistentes Styling erstellt',
        'Integration mit ContentStack Headless CMS für Content-Management',
        'Storybook-Dokumentation für Komponentenbibliothek erstellt'
      ]
    }
  },
  {
    slug: 'real-estate-website',
    locationCity: {
      en: 'Atlanta, GA, USA',
      pt: 'Atlanta, GA, EUA',
      de: 'Atlanta, GA, USA'
    },
    sector: 'real-estate',
    technologies: ['nextjs', 'typescript', 'sass', 'sitecore'],
    titles: {
      en: 'Real Estate Platform',
      pt: 'Plataforma Imobiliária',
      de: 'Immobilienplattform'
    },
    shortDescriptions: {
      en: 'Property showcase website with Sitecore CMS',
      pt: 'Website de exibição de propriedades com Sitecore CMS',
      de: 'Immobilien-Showcase-Website mit Sitecore CMS'
    },
    descriptions: {
      en: 'Created frontend components for a real estate company website using Next.js and Sitecore CMS. The platform showcases property listings with advanced filtering and search capabilities, optimized for both desktop and mobile experiences.',
      pt: 'Criei componentes frontend para um website de empresa imobiliária usando Next.js e Sitecore CMS. A plataforma exibe listagens de propriedades com filtros avançados e capacidades de busca, otimizada para experiências desktop e mobile.',
      de: 'Frontend-Komponenten für eine Immobilien-Website mit Next.js und Sitecore CMS erstellt. Die Plattform zeigt Immobilienangebote mit erweiterten Filter- und Suchfunktionen, optimiert für Desktop- und Mobile-Erlebnisse.'
    },
    highlights: {
      en: [
        'Designed responsive components with SASS for property listings',
        'Integrated with Sitecore CMS for content management',
        'Optimized performance with Next.js static generation',
        'Implemented advanced property search and filtering'
      ],
      pt: [
        'Projetei componentes responsivos com SASS para listagens de propriedades',
        'Integração com Sitecore CMS para gerenciamento de conteúdo',
        'Otimizei performance com geração estática do Next.js',
        'Implementei busca e filtragem avançada de propriedades'
      ],
      de: [
        'Responsive Komponenten mit SASS für Immobilienangebote gestaltet',
        'Integration mit Sitecore CMS für Content-Management',
        'Performance mit Next.js Static Generation optimiert',
        'Erweiterte Immobiliensuche und Filterung implementiert'
      ]
    }
  },
  {
    slug: 'energy-website',
    locationCity: {
      en: 'Atlanta, GA, USA',
      pt: 'Atlanta, GA, EUA',
      de: 'Atlanta, GA, USA'
    },
    sector: 'energy',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'contentstack'],
    titles: {
      en: 'Energy Company Website',
      pt: 'Website de Empresa de Energia',
      de: 'Website für Energieunternehmen'
    },
    shortDescriptions: {
      en: 'Corporate website with headless CMS architecture',
      pt: 'Website corporativo com arquitetura headless CMS',
      de: 'Unternehmenswebsite mit Headless-CMS-Architektur'
    },
    descriptions: {
      en: 'Built frontend components for an energy sector company using Next.js and ContentStack CMS. The project emphasized performance, accessibility, and a clean design system that reflected the company\'s brand identity.',
      pt: 'Construí componentes frontend para uma empresa do setor de energia usando Next.js e ContentStack CMS. O projeto enfatizou performance, acessibilidade e um sistema de design limpo que refletia a identidade da marca da empresa.',
      de: 'Frontend-Komponenten für ein Energieunternehmen mit Next.js und ContentStack CMS erstellt. Das Projekt betonte Performance, Barrierefreiheit und ein sauberes Designsystem, das die Markenidentität des Unternehmens widerspiegelt.'
    },
    highlights: {
      en: [
        'Created modular component system with TailwindCSS',
        'Implemented ContentStack integration for dynamic content',
        'Ensured WCAG accessibility compliance',
        'Set up Docker and Docker Compose for development'
      ],
      pt: [
        'Criei sistema de componentes modular com TailwindCSS',
        'Implementei integração ContentStack para conteúdo dinâmico',
        'Garantia de conformidade com acessibilidade WCAG',
        'Configurei Docker e Docker Compose para desenvolvimento'
      ],
      de: [
        'Modulares Komponentensystem mit TailwindCSS erstellt',
        'ContentStack-Integration für dynamische Inhalte implementiert',
        'WCAG-Barrierefreiheits-Konformität sichergestellt',
        'Docker und Docker Compose für Entwicklung eingerichtet'
      ]
    }
  },
  {
    slug: 'investment-platform',
    locationCity: {
      en: 'Granite Bay, CA, USA',
      pt: 'Granite Bay, CA, EUA',
      de: 'Granite Bay, CA, USA'
    },
    sector: 'finance',
    technologies: ['nextjs', 'typescript', 'nodejs', 'tailwindcss', 'azure'],
    titles: {
      en: 'Investment Management Platform',
      pt: 'Plataforma de Gestão de Investimentos',
      de: 'Investmentverwaltungsplattform'
    },
    shortDescriptions: {
      en: 'Multi-layer web platform for investment company',
      pt: 'Plataforma web multicamadas para empresa de investimentos',
      de: 'Multi-Layer-Webplattform für Investmentunternehmen'
    },
    descriptions: {
      en: 'Developed and maintained client-facing and internal platforms for an investment company. Led the migration from legacy systems to modern tech stacks, defining migration strategies and establishing project architecture patterns.',
      pt: 'Desenvolvi e mantive plataformas voltadas ao cliente e internas para uma empresa de investimentos. Liderei a migração de sistemas legados para stacks modernas, definindo estratégias de migração e estabelecendo padrões de arquitetura de projeto.',
      de: 'Entwickelte und pflegte kundenorientierte und interne Plattformen für ein Investmentunternehmen. Leitete die Migration von Legacy-Systemen zu modernen Tech-Stacks, definierte Migrationsstrategien und etablierte Projektarchitekturmuster.'
    },
    highlights: {
      en: [
        'Implemented new features and built reusable components for client portal with Next.js, Chakra UI, and Node.js',
        'Developed internal administration platform',
        'Led legacy to modern stack migration strategy',
      ],
      pt: [
        'Implementei novas funcionalidades e criei componentes reutilizáveis para portal do cliente com Next.js, Chakra UI e Node.js',
        'Desenvolvi plataforma de administração interna',
        'Liderei estratégia de migração de legado para stack moderna',
      ],
      de: [
        'Neue Features implementiert und wiederverwendbare Komponenten für Kundenportal mit Next.js, Chakra UI und Node.js erstellt',
        'Interne Administrationsplattform entwickelt',
        'Migrationsstrategie von Legacy zu modernem Stack geleitet',
      ]
    }
  },
  {
    slug: 'cosmetics-mobile-app',
    locationCity: {
      en: 'Bellingham, WA, USA',
      pt: 'Bellingham, WA, EUA',
      de: 'Bellingham, WA, USA'
    },
    sector: 'consumer-goods',
    technologies: ['react-native', 'angular', 'typescript', 'nodejs', 'java', 'spring-boot', 'azure'],
    titles: {
      en: 'Cosmetics Retail Mobile Apps',
      pt: 'Aplicativos Mobile para Varejo de Cosméticos',
      de: 'Mobile Apps für Kosmetik-Einzelhandel'
    },
    shortDescriptions: {
      en: 'Mobile applications for retail store operations',
      pt: 'Aplicativos mobile para operações de lojas de varejo',
      de: 'Mobile Anwendungen für Einzelhandelsgeschäftsbetrieb'
    },
    descriptions: {
      en: 'Led feature development for a cosmetics holding company\'s retail applications. Performed reverse engineering on legacy NativeScript/Angular app to upgrade to a secure version required by Apple, and created a new React Native app for store employees.',
      pt: 'Liderei o desenvolvimento de features para aplicativos de varejo de uma holding de cosméticos. Realizei engenharia reversa em app legado NativeScript/Angular para atualizar para versão segura exigida pela Apple, e criei novo app React Native para funcionários das lojas.',
      de: 'Leitete die Feature-Entwicklung für Einzelhandelsanwendungen eines Kosmetik-Holdingkonzerns. Führte Reverse Engineering an Legacy-NativeScript/Angular-App durch, um auf eine von Apple geforderte sichere Version zu aktualisieren, und erstellte eine neue React Native App für Mitarbeiter.'
    },
    highlights: {
      en: [
        'Reverse engineered node_modules to upgrade NativeScript/Angular app',
        'Built React Native app for in-store customer notifications',
        'Developed internal Angular platform with Java Spring Boot API',
        'Created support ticket webapp with Next.js and Tailwind'
      ],
      pt: [
        'Engenharia reversa em node_modules para atualizar app NativeScript/Angular',
        'Construí app React Native para notificações de clientes na loja',
        'Desenvolvi plataforma interna Angular com API Java Spring Boot',
        'Criei webapp de chamados de suporte com Next.js e Tailwind'
      ],
      de: [
        'Reverse Engineering von node_modules zum Upgrade der NativeScript/Angular-App',
        'React Native App für In-Store-Kundenbenachrichtigungen erstellt',
        'Interne Angular-Plattform mit Java Spring Boot API entwickelt',
        'Support-Ticket-Webapp mit Next.js und Tailwind erstellt'
      ]
    }
  },
  {
    slug: 'cosmetics-etl',
    locationCity: {
      en: 'Bellingham, WA, USA',
      pt: 'Bellingham, WA, EUA',
      de: 'Bellingham, WA, USA'
    },
    sector: 'consumer-goods',
    technologies: ['python', 'javascript', 'azure'],
    titles: {
      en: 'Consumer Data ETL Pipeline',
      pt: 'Pipeline ETL de Dados do Consumidor',
      de: 'ETL-Pipeline für Verbraucherdaten'
    },
    shortDescriptions: {
      en: 'Data processing pipeline for enhanced customer experience',
      pt: 'Pipeline de processamento de dados para experiência do cliente aprimorada',
      de: 'Datenverarbeitungspipeline für verbesserte Kundenerfahrung'
    },
    descriptions: {
      en: 'Contributed to an ETL system for a multinational cosmetics company that collected and processed consumer data to power endpoint applications used by store employees to enhance customer experiences.',
      pt: 'Contribuí para um sistema ETL de uma multinacional de cosméticos que coletava e processava dados de consumidores para alimentar aplicações de ponta usadas por funcionários das lojas para melhorar experiências dos clientes.',
      de: 'Trug zu einem ETL-System für ein multinationales Kosmetikunternehmen bei, das Verbraucherdaten sammelte und verarbeitete, um Endpunktanwendungen zu betreiben, die von Mitarbeitern zur Verbesserung der Kundenerfahrung genutzt werden.'
    },
    highlights: {
      en: [
        'Built data collection and processing pipelines with Python',
        'Processed data for real-time store applications',
        'Integrated with Azure cloud services',
        'Collaborated with cross-functional data teams'
      ],
      pt: [
        'Construí pipelines de coleta e processamento de dados com Python',
        'Processamento de dados para aplicações em tempo real nas lojas',
        'Integração com serviços cloud Azure',
        'Colaboração com equipes multifuncionais de dados'
      ],
      de: [
        'Datensammlungs- und Verarbeitungspipelines mit Python erstellt',
        'Datenverarbeitung für Echtzeit-Store-Anwendungen',
        'Integration mit Azure Cloud Services',
        'Zusammenarbeit mit funktionsübergreifenden Datenteams'
      ]
    }
  },
  {
    slug: 'solar-fintech',
    locationCity: {
      en: 'Bellingham, WA, USA',
      pt: 'Bellingham, WA, EUA',
      de: 'Bellingham, WA, USA'
    },
    sector: 'finance',
    technologies: ['react', 'typescript', 'java', 'spring-boot'],
    titles: {
      en: 'Solar Energy Fintech Platform',
      pt: 'Plataforma Fintech de Energia Solar',
      de: 'Solar-Energie-Fintech-Plattform'
    },
    shortDescriptions: {
      en: 'Financial platform for solar energy investments',
      pt: 'Plataforma financeira para investimentos em energia solar',
      de: 'Finanzplattform für Solarenergie-Investitionen'
    },
    descriptions: {
      en: 'Developed a web application for a fintech company in the solar energy sector. Built the frontend with React and TypeScript, consuming a Java Spring Boot backend API for financial operations and investment management.',
      pt: 'Desenvolvi uma aplicação web para uma fintech do setor de energia solar. Construí o frontend com React e TypeScript, consumindo uma API backend Java Spring Boot para operações financeiras e gestão de investimentos.',
      de: 'Entwickelte eine Webanwendung für ein Fintech-Unternehmen im Solarenergiesektor. Erstellte das Frontend mit React und TypeScript, das eine Java Spring Boot Backend-API für Finanzoperationen und Investitionsmanagement nutzt.'
    },
    highlights: {
      en: [
        'Built responsive React frontend with TypeScript',
        'Integrated with Java Spring Boot financial APIs',
        'Implemented investment management features',
        'Created reusable component library'
      ],
      pt: [
        'Construí frontend React responsivo com TypeScript',
        'Integração com APIs financeiras Java Spring Boot',
        'Implementei features de gestão de investimentos',
        'Criei biblioteca de componentes reutilizáveis'
      ],
      de: [
        'Responsives React-Frontend mit TypeScript erstellt',
        'Integration mit Java Spring Boot Finanz-APIs',
        'Investitionsmanagement-Features implementiert',
        'Wiederverwendbare Komponentenbibliothek erstellt'
      ]
    }
  },
  {
    slug: 'healthcare-platform',
    locationCity: {
      en: 'São Paulo, SP, Brazil',
      pt: 'São Paulo, SP, Brasil',
      de: 'São Paulo, SP, Brasilien'
    },
    sector: 'healthcare',
    technologies: ['react', 'nextjs', 'nodejs', 'nestjs', 'mysql', 'postgresql', 'php', 'docker', 'gcp', 'bigquery', 'powerbi'],
    titles: {
      en: 'Healthcare Multi-Platform System',
      pt: 'Sistema Multi-Plataforma de Saúde',
      de: 'Healthcare Multi-Plattform-System'
    },
    shortDescriptions: {
      en: 'Comprehensive healthcare platform with multiple services',
      pt: 'Plataforma abrangente de saúde com múltiplos serviços',
      de: 'Umfassende Healthcare-Plattform mit mehreren Diensten'
    },
    descriptions: {
      en: 'Worked on a large-scale healthcare platform consisting of patient-facing applications, internal hospital systems, microservices, and data pipelines. Contributed to multiple layers including the landing page, mobile app, patient portal, internal tools, and analytics dashboards.',
      pt: 'Trabalhei em uma plataforma de saúde em larga escala consistindo de aplicações voltadas ao paciente, sistemas internos hospitalares, microserviços e pipelines de dados. Contribuí em múltiplas camadas incluindo landing page, app mobile, portal do paciente, ferramentas internas e dashboards de analytics.',
      de: 'Arbeitete an einer großangelegten Healthcare-Plattform bestehend aus patientenorientierten Anwendungen, internen Krankenhaussystemen, Microservices und Datenpipelines. Trug zu mehreren Schichten bei, einschließlich Landing Page, Mobile App, Patientenportal, internen Tools und Analytics-Dashboards.'
    },
    highlights: {
      en: [
        'Developed patient portal features with React and Next.js',
        'Built GERACAOPAGAMENTOS payment microservice with NestJS',
        'Created DAG scripts for BigQuery to MySQL data pipelines',
        'Built PowerBI dashboards for business intelligence',
        'Implemented CRON jobs for push notifications, emails, and SMS',
        'Integrated PHP legacy API with WhatsApp Bot'
      ],
      pt: [
        'Desenvolvi features do portal do paciente com React e Next.js',
        'Construí microserviço de pagamentos GERACAOPAGAMENTOS com NestJS',
        'Criei scripts DAG para pipelines de dados BigQuery para MySQL',
        'Construí dashboards PowerBI para inteligência de negócios',
        'Implementei CRON jobs para notificações push, emails e SMS',
        'Integrei API PHP legada com WhatsApp Bot'
      ],
      de: [
        'Patientenportal-Features mit React und Next.js entwickelt',
        'GERACAOPAGAMENTOS Zahlungs-Microservice mit NestJS erstellt',
        'DAG-Skripte für BigQuery zu MySQL Datenpipelines erstellt',
        'PowerBI-Dashboards für Business Intelligence erstellt',
        'CRON-Jobs für Push-Benachrichtigungen, E-Mails und SMS implementiert',
        'PHP-Legacy-API mit WhatsApp Bot integriert'
      ]
    }
  },
  {
    slug: 'support-webapp',
    locationCity: {
      en: 'Presidente Prudente, SP, Brazil',
      pt: 'Presidente Prudente, SP, Brasil',
      de: 'Presidente Prudente, SP, Brasilien'
    },
    sector: 'technology',
    technologies: ['nestjs', 'postgresql', 'html', 'css', 'sass'],
    titles: {
      en: 'Support Ticket Management System',
      pt: 'Sistema de Gestão de Chamados de Suporte',
      de: 'Support-Ticket-Verwaltungssystem'
    },
    shortDescriptions: {
      en: 'Internal tool for IT support and client onboarding',
      pt: 'Ferramenta interna para suporte de TI e onboarding de clientes',
      de: 'Internes Tool für IT-Support und Kunden-Onboarding'
    },
    descriptions: {
      en: 'Built a web application for organizing support tickets and activities for the Support and Onboarding teams. The system streamlined internal communication and helped track client issues from creation to resolution.',
      pt: 'Construí uma aplicação web para organizar chamados de suporte e atividades para as equipes de Suporte e Onboarding. O sistema otimizou a comunicação interna e ajudou a rastrear problemas de clientes da criação à resolução.',
      de: 'Erstellte eine Webanwendung zur Organisation von Support-Tickets und Aktivitäten für die Support- und Onboarding-Teams. Das System optimierte die interne Kommunikation und half bei der Nachverfolgung von Kundenproblemen von der Erstellung bis zur Lösung.'
    },
    highlights: {
      en: [
        'Built REST API with NestJS and Swagger documentation',
        'Designed database schema with PostgreSQL',
        'Created responsive frontend with HTML, CSS, and SASS',
        'Implemented ticket workflow and status tracking'
      ],
      pt: [
        'Construí API REST com NestJS e documentação Swagger',
        'Projetei schema de banco de dados com PostgreSQL',
        'Criei frontend responsivo com HTML, CSS e SASS',
        'Implementei workflow de chamados e rastreamento de status'
      ],
      de: [
        'REST-API mit NestJS und Swagger-Dokumentation erstellt',
        'Datenbankschema mit PostgreSQL entworfen',
        'Responsives Frontend mit HTML, CSS und SASS erstellt',
        'Ticket-Workflow und Status-Tracking implementiert'
      ]
    }
  },
  {
    slug: 'lab-results-script',
    locationCity: {
      en: 'Presidente Prudente, SP, Brazil',
      pt: 'Presidente Prudente, SP, Brasil',
      de: 'Presidente Prudente, SP, Brasilien'
    },
    sector: 'healthcare',
    technologies: ['javascript'],
    titles: {
      en: 'Lab Results Processing Script',
      pt: 'Script de Processamento de Resultados Laboratoriais',
      de: 'Skript zur Verarbeitung von Laborergebnissen'
    },
    shortDescriptions: {
      en: 'Automation script for Excel data processing',
      pt: 'Script de automação para processamento de dados Excel',
      de: 'Automatisierungsskript für Excel-Datenverarbeitung'
    },
    descriptions: {
      en: 'Created a JavaScript automation script that reads Excel files containing exam results, groups and organizes the data, and generates a new formatted file ready for import into the laboratory\'s internal system.',
      pt: 'Criei um script de automação em JavaScript que lê arquivos Excel contendo resultados de exames, agrupa e organiza os dados, e gera um novo arquivo formatado pronto para importação no sistema interno do laboratório.',
      de: 'Erstellte ein JavaScript-Automatisierungsskript, das Excel-Dateien mit Untersuchungsergebnissen liest, die Daten gruppiert und organisiert und eine neue formatierte Datei für den Import in das interne Laborsystem generiert.'
    },
    highlights: {
      en: [
        'Automated manual data entry process',
        'Reduced processing time by 80%',
        'Built Excel file parsing and generation',
        'First programming project in professional environment'
      ],
      pt: [
        'Automatizei processo de entrada de dados manual',
        'Reduzi tempo de processamento em 80%',
        'Construí parsing e geração de arquivos Excel',
        'Primeiro projeto de programação em ambiente profissional'
      ],
      de: [
        'Manuellen Dateneingabeprozess automatisiert',
        'Verarbeitungszeit um 80% reduziert',
        'Excel-Datei-Parsing und -Generierung erstellt',
        'Erstes Programmierprojekt im beruflichen Umfeld'
      ]
    }
  }
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}

export function getExperiencesByFilters(
  sectors?: Sector[],
  technologies?: Technology[]
): Experience[] {
  return experiences.filter((exp) => {
    if (exp.hide) return false;
    const matchesSector = !sectors || sectors.length === 0 || sectors.includes(exp.sector);
    const matchesTech =
      !technologies ||
      technologies.length === 0 ||
      technologies.some((tech) => exp.technologies.includes(tech));
    return matchesSector && matchesTech;
  });
}

export const allSectors: Sector[] = [
  'healthcare',
  'finance',
  'consumer-goods',
  'energy',
  'real-estate',
  'logistics',
  'technology'
];

export const allTechnologies: Technology[] = [
  'react',
  'nextjs',
  'nodejs',
  'nestjs',
  'typescript',
  'javascript',
  'python',
  'java',
  'php',
  'angular',
  'react-native',
  'docker',
  'kubernetes',
  'gcp',
  'azure',
  'aws',
  'mysql',
  'postgresql',
  'mongodb',
  'tailwindcss',
  'sass',
  'spring-boot',
  'langchain'
];

export const technologyLabels: Record<Technology, string> = {
  'react': 'React',
  'nextjs': 'Next.js',
  'nodejs': 'Node.js',
  'nestjs': 'NestJS',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'python': 'Python',
  'java': 'Java',
  'php': 'PHP',
  'angular': 'Angular',
  'react-native': 'React Native',
  'docker': 'Docker',
  'kubernetes': 'Kubernetes',
  'gcp': 'GCP',
  'azure': 'Azure',
  'aws': 'AWS',
  'mysql': 'MySQL',
  'postgresql': 'PostgreSQL',
  'mongodb': 'MongoDB',
  'tailwindcss': 'TailwindCSS',
  'sass': 'SASS',
  'html': 'HTML',
  'css': 'CSS',
  'spring-boot': 'Spring Boot',
  'langchain': 'LangChain',
  'contentstack': 'ContentStack',
  'sitecore': 'Sitecore',
  'jquery': 'jQuery',
  'bigquery': 'BigQuery',
  'powerbi': 'PowerBI'
};
