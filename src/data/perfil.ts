// Conteúdo do site em um só lugar.
// Fonte: currículo do Adrian (2026). Não acrescentar fatos sem confirmação; texto provisório = [PLACEHOLDER].

export const perfil = {
  nome: 'Adrian Doria',
  cargo: 'Analista Administrativo e Financeiro',
  frase: ['Entendo o negócio.', 'Automatizo o trabalho.'],
  resumo:
    'Mais de 4 anos em rotinas administrativas, financeiras e de controle orçamentário em uma empresa de grande porte. Hoje aprofundo automação de processos e IA aplicada à produtividade.',
  local: 'Nossa Senhora do Socorro, SE',
  email: 'adrian.doria454@outlook.com',
  linkedin: 'https://www.linkedin.com/in/adriandoria454',
  github: 'https://github.com/AdrianDoriaTI',
};

export const fluxoIntro =
  'Conheço a rotina por dentro, transformo números em indicadores e automatizo o que é repetitivo.';

// Miniaturas da faixa de ferramentas. logo = marca em src/data/logos.ts; icone = ícone genérico.
export const ferramentas = [
  { nome: 'Excel', logo: 'excel' },
  { nome: 'Power BI', logo: 'powerbi' },
  { nome: 'Dashboards', icone: 'dashboard' },
  { nome: 'n8n', logo: 'n8n' },
  { nome: 'Sites', icone: 'globe' },
  { nome: 'Claude', logo: 'claude' },
] as const;

// Conhecimentos como um fluxo: negócio → dados → automação.
export const fluxo = [
  {
    id: 'negocio',
    icone: 'briefcase',
    titulo: 'Negócio',
    sub: 'Administrativo e financeiro',
    itens: ['Controle orçamentário', 'Capex e Opex', 'Provisões e reclassificações', 'ERP SAP', 'Compras e notas fiscais'],
  },
  {
    id: 'dados',
    icone: 'chart',
    titulo: 'Dados',
    sub: 'Análise e indicadores',
    itens: ['Excel', 'Power BI', 'Dashboards', 'Relatórios gerenciais', 'SQL'],
  },
  {
    id: 'automacao',
    icone: 'workflow',
    titulo: 'Automação & IA',
    sub: 'Menos trabalho manual',
    itens: ['n8n', 'Agentes de IA', 'Claude', 'Automação de processos'],
  },
] as const;

export const experiencias = [
  {
    cargo: 'Control Analyst',
    empresa: 'Cencosud S.A.',
    resumo: 'Controle orçamentário de TI: Capex e Opex, provisões, SAP e dashboards em Power BI.',
  },
  {
    cargo: 'Analista Administrativo',
    empresa: 'Stefanini Group',
    resumo: 'Acompanhamento de projetos de TI, compras, notas fiscais e controle financeiro.',
  },
  {
    cargo: 'Assistente Administrativo',
    empresa: 'Randstad Brasil',
    resumo: 'CSC financeiro: compras, pedidos e ajustes fiscais das lojas da Cencosud Brasil.',
  },
];

export const formacao = {
  curso: 'Análise e Desenvolvimento de Sistemas',
  instituicao: 'UNINASSAU',
  periodo: '2023 – 2025',
};

export const certificacoes = {
  emissor: 'Alura',
  itens: ['Dashboard com Power BI', 'Dashboards Financeiros', 'Análise Financeira Eficiente', 'SQLite Online: instruções SQL'],
};

// Projetos. Repositórios privados: sem link para o código.
export const projetos = [
  {
    nome: 'Agent Control',
    icone: 'bot',
    frase: 'Agentes de IA que atendem pelo WhatsApp e cuidam de agendamentos.',
    detalhe:
      'O n8n orquestra as conversas, o PostgreSQL guarda a agenda e as regras de negócio, e o modelo de IA conversa com o cliente e transcreve áudios.',
    tags: ['n8n', 'PostgreSQL', 'Evolution API', 'Gemini', 'WhatsApp'],
    status: 'Em produção',
    imagem: null, // [PLACEHOLDER] print do painel ou do fluxo n8n (sem dados de clientes)
  },
  {
    nome: 'SiteFactory',
    icone: 'layers',
    frase: 'Uma fábrica de sites com Claude Code, do briefing ao site publicado.',
    detalhe:
      'Plugin com agentes especialistas (design, QA, referências visuais), um roteiro de etapas e a documentação como memória de cada projeto.',
    tags: ['Claude Code', 'Agentes de IA', 'Python', 'Astro'],
    status: 'Em uso',
    imagem: null, // [PLACEHOLDER] print ou diagrama do fluxo
  },
  {
    nome: 'Este portfólio',
    icone: 'globe',
    frase: 'O primeiro site criado com a SiteFactory.',
    detalhe: 'Astro e Tailwind, tema claro e escuro, e a seção de conhecimentos animada como um fluxo do n8n.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Claude Code'],
    status: 'Você está aqui',
    imagem: 'portfolio',
  },
];
