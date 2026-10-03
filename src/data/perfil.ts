// Conteúdo do site em um só lugar.
// Fonte: currículo do Adrian (2026). Não acrescentar fatos sem confirmação; texto provisório = [PLACEHOLDER].

export const perfil = {
  nome: 'Adrian Doria',
  cargo: 'Analista Administrativo e Financeiro',
  frase: ['Entendo o negócio.', 'Automatizo o trabalho.'],
  resumo:
    'Mais de 4 anos em rotinas administrativas, financeiras e de controle orçamentário em empresas de grande porte. Hoje aprofundo automação de processos e IA aplicada à produtividade.',
  local: 'Nossa Senhora do Socorro, SE',
  email: 'adrian.doria454@outlook.com',
  linkedin: 'https://www.linkedin.com/in/adriandoria454',
  github: 'https://github.com/AdrianDoriaTI',
};

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
    periodo: 'dez/2023 – mai/2026',
    resumo: 'Controle orçamentário de TI: Capex e Opex, provisões, SAP e dashboards em Power BI.',
  },
  {
    cargo: 'Analista Administrativo',
    empresa: 'Stefanini Group',
    periodo: 'ago/2022 – dez/2023',
    resumo: 'Acompanhamento de projetos de TI, compras, notas fiscais e controle financeiro.',
  },
  {
    cargo: 'Assistente Administrativo',
    empresa: 'Randstad Brasil',
    periodo: 'nov/2021 – ago/2022',
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
