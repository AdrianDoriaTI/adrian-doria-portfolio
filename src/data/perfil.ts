// Conteúdo do site em um só lugar.
// Fonte: currículo do Adrian (2026). Não acrescentar fatos sem confirmação.

export const perfil = {
  nome: 'Adrian Doria',
  cargo: 'Analista Administrativo e Financeiro',
  frase: ['4 anos em administrativo e financeiro,', 'e agora me desenvolvendo em automação e IA.'],
  resumo:
    'Experiência em análise financeira, controle orçamentário, compras e dashboards em empresa multinacional. Hoje estudo e desenvolvo projetos próprios em automação e IA, e estou disponível para novas oportunidades.',
  local: 'Nossa Senhora do Socorro, SE',
  email: 'adrian.doria454@outlook.com',
  linkedin: 'https://www.linkedin.com/in/adriandoria454',
  github: 'https://github.com/AdrianDoriaTI',
  disponivel: 'Disponível para novas oportunidades',
};

// "Sobre": três tempos (o que eu sei, a virada, a prova). O último leva aos projetos.
export const sobre = {
  titulo: 'Do financeiro à automação',
  paragrafos: [
    'Comecei pela rotina: compras, notas fiscais, controle orçamentário, Capex e Opex, provisões no SAP. Passei pela Randstad, pela Stefanini e pela Cencosud, onde transformava números em relatórios e dashboards no Power BI.',
    'Foi nesse dia a dia que percebi quanto tempo vai embora em tarefas repetitivas. Por isso cursei Análise e Desenvolvimento de Sistemas e passei a estudar automação de processos e IA.',
    'Hoje desenho as soluções, entendo a regra de negócio e uso IA (Claude Code) para construir fluxos em n8n, bancos PostgreSQL e sites. Sei explicar como cada projeto funciona. Eles estão logo abaixo.',
  ],
  numeros: [
    { valor: 4, sufixo: '+', rotulo: 'anos em administrativo e financeiro' },
    { valor: 3, sufixo: '', rotulo: 'empresas de grande porte' },
    { valor: 3, sufixo: '', rotulo: 'projetos no ar para você testar' },
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
  { nome: 'PostgreSQL', icone: 'database' },
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
    itens: ['Excel', 'Power BI', 'Dashboards', 'Relatórios gerenciais', 'SQL', 'PostgreSQL'],
  },
  {
    id: 'automacao',
    icone: 'workflow',
    titulo: 'Automação & IA',
    sub: 'Menos trabalho manual',
    itens: ['n8n', 'Fluxos e integrações', 'Agentes de IA', 'Claude e Claude Code', 'Automação de processos'],
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

// Projetos. links.demo = ver funcionando; links.detalhes = página do projeto no GitHub (explicação, sem código).
// Todos foram criados com IA (Claude Code): o Adrian define o objetivo e as regras e valida o resultado.
export const projetos = [
  {
    nome: 'Agenda Web Pro',
    icone: 'calendar',
    frase: 'Sistema de agendamento online para barbearias.',
    objetivo: 'Tirar a agenda do caderno e do WhatsApp: o cliente marca sozinho e o barbeiro vê o dia e o financeiro.',
    detalhe:
      'Tem página para o cliente, painel do barbeiro, equipe e comissão por profissional. Eu defini as regras do negócio (como o horário é liberado, como a comissão é calculada) e criei o sistema com o Claude Code, com automações em n8n e banco PostgreSQL.',
    tags: ['Criado com Claude Code', 'n8n', 'PostgreSQL', 'Regras de negócio'],
    status: 'No ar',
    imagem: 'agenda',
    links: {
      demo: null,
      detalhes: 'https://github.com/AdrianDoriaTI/agenda-web-pro',
    },
  },
  {
    nome: 'Site Agenda Web Pro',
    icone: 'globe',
    frase: 'O site que apresenta o sistema, com uma demonstração dentro da página.',
    objetivo: 'Mostrar o Agenda Web Pro para o dono de barbearia entender e testar em poucos minutos.',
    detalhe:
      'A demonstração usa dados fictícios e tem tema claro e escuro. Eu desenhei a página e o texto, e criei o site com o Claude Code. Está publicado na internet.',
    tags: ['Criado com Claude Code', 'Astro', 'Site publicado'],
    status: 'No ar',
    imagem: 'agendaSite',
    links: {
      demo: 'https://www.agendawebpro.com.br/site/barbearias/',
      detalhes: 'https://github.com/AdrianDoriaTI/agenda-web-pro-site',
    },
  },
  {
    nome: 'Revela',
    icone: 'bot',
    frase: 'Gerador de imagens com IA que funciona no próprio computador, em português.',
    objetivo: 'Criar imagens conversando, sem pagar assinatura e sem enviar nada para a nuvem.',
    detalhe:
      'Você escreve ou fala o que quer, e a IA monta o pedido e gera a imagem. Eu defini como deveria funcionar e criei com o Claude Code, usando modelos de IA que rodam local.',
    tags: ['Criado com Claude Code', 'IA local', 'ComfyUI'],
    status: 'Projeto pessoal',
    imagem: 'revela',
    links: {
      demo: null,
      detalhes: 'https://github.com/AdrianDoriaTI/revela',
    },
  },
  {
    nome: 'Este portfólio',
    icone: 'layers',
    frase: 'O site que você está vendo.',
    objetivo: 'Apresentar minha experiência, meus conhecimentos e meus projetos de forma clara.',
    detalhe: 'Eu escolhi o conteúdo, o visual e o jeito de contar a história, e construí com o Claude Code. Tema claro e escuro, no celular e no computador.',
    tags: ['Criado com Claude Code', 'Astro', 'Site publicado'],
    status: 'Você está aqui',
    imagem: 'portfolio',
    links: {
      demo: null,
      detalhes: 'https://github.com/AdrianDoriaTI/adrian-doria-portfolio',
    },
  },
];
