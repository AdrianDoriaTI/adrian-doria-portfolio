// Conteúdo do site em um só lugar.
// Fonte: currículo do Adrian (2026). Não acrescentar fatos sem confirmação; texto provisório = [PLACEHOLDER].

export const perfil = {
  nome: 'Adrian Doria',
  cargo: 'Analista Administrativo e Financeiro',
  frase: ['Entendo o negócio.', 'Automatizo o trabalho.'],
  resumo:
    'Analista administrativo e financeiro com mais de 4 anos de experiência, hoje construindo automações e sistemas com dados e IA.',
  local: 'Nossa Senhora do Socorro, SE',
  email: 'adrian.doria454@outlook.com',
  linkedin: 'https://www.linkedin.com/in/adriandoria454',
  github: 'https://github.com/AdrianDoriaTI',
};

// "Sobre": três tempos (o que eu sei, a virada, a prova). O último leva aos projetos.
export const sobre = {
  titulo: 'Do financeiro ao código',
  paragrafos: [
    'Comecei pela rotina: compras, notas fiscais, controle orçamentário, Capex e Opex, provisões no SAP. Passei pela Randstad e pela Stefanini e hoje estou na Cencosud, transformando números em relatórios e dashboards no Power BI.',
    'Foi nesse dia a dia que percebi quanto tempo vai embora em tarefas repetitivas. Por isso me formei em Análise e Desenvolvimento de Sistemas e passei a estudar automação de processos e IA.',
    'Hoje eu não só uso essas ferramentas: construo com elas. Já tenho projetos funcionando, e você pode ver cada um logo abaixo.',
  ],
  numeros: [
    { valor: 4, sufixo: '+', rotulo: 'anos em administrativo e financeiro' },
    { valor: 3, sufixo: '', rotulo: 'empresas de grande porte' },
    { valor: 2, sufixo: '', rotulo: 'projetos no ar para você testar' },
  ],
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

// Projetos. links.demo = ver funcionando; links.codigo = repositório público.
export const projetos = [
  {
    nome: 'Agenda Web Pro',
    icone: 'calendar',
    frase: 'Agenda online para barbearias, do horário marcado ao financeiro do dia.',
    detalhe:
      'Página do cliente, painel do barbeiro, equipe e comissão por profissional. A disponibilidade é calculada pelo banco de dados, então nunca há horário duplicado.',
    tags: ['PostgreSQL', 'JavaScript', 'n8n', 'Regras de negócio'],
    status: 'No ar',
    imagem: 'agenda',
    links: {
      demo: 'https://www.agendawebpro.com.br/site/barbearias/',
      codigo: 'https://github.com/AdrianDoriaTI/agenda-web-pro',
    },
  },
  {
    nome: 'Site Agenda Web Pro',
    icone: 'globe',
    frase: 'A vitrine do produto, com o sistema funcionando dentro da página.',
    detalhe:
      'Demonstração interativa com dados fictícios, tema claro e escuro e cabeçalhos de segurança. Feito em Astro e publicado na Cloudflare.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    status: 'No ar',
    imagem: 'agendaSite',
    links: {
      demo: 'https://www.agendawebpro.com.br/site/barbearias/',
      codigo: 'https://github.com/AdrianDoriaTI/agenda-web-pro-site',
    },
  },
  {
    nome: 'Este portfólio',
    icone: 'layers',
    frase: 'Feito por mim, do design ao código.',
    detalhe: 'Astro e Tailwind, tema claro e escuro, animações leves e a seção de conhecimentos funcionando como um fluxo do n8n.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Claude Code'],
    status: 'Você está aqui',
    imagem: 'portfolio',
    links: {
      demo: null,
      codigo: 'https://github.com/AdrianDoriaTI/adrian-doria-portfolio',
    },
  },
];
