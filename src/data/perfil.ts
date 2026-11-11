// Conteúdo do site em um só lugar.
// Fonte: currículo do Adrian (2026). Não acrescentar fatos sem confirmação.

export const perfil = {
  nome: 'Adrian Doria',
  cargo: 'Analista Administrativo e Financeiro',
  frase: ['4 anos em administrativo e financeiro,', 'e agora me desenvolvendo em automação e IA.'],
  resumo:
    'Experiência em análise financeira, controle orçamentário, compras e dashboards em empresa multinacional. Atualmente estudando e desenvolvendo projetos próprios em automação e IA, e estou disponível para novas oportunidades.',
  local: 'Nossa Senhora do Socorro, SE',
  email: 'adrian.doria454@outlook.com',
  linkedin: 'https://www.linkedin.com/in/adriandoria454',
  github: 'https://github.com/AdrianDoriaTI',
  disponivel: 'Disponível para novas oportunidades',
};

// "Sobre": três tempos (o que eu sei, a virada, a prova). O último leva aos projetos.
export const sobre = {
  titulo: 'Financeiro e automação',
  // tipo 'citacao' = frase em destaque, em linha própria.
  // tipo 'citacao' = frase em destaque, em linha própria.
  paragrafos: [
    { tipo: 'texto', texto: 'Mais de quatro anos em administrativo e financeiro numa multinacional, exercendo atividades na área de finanças e depois na TI, com relação a controle de orçamento, pagamentos mensais e esporádicos de diversos fornecedores com foco nos projetos da área, novas contratações de serviço, compras de equipamentos, ciclo de compras e notas fiscais e relatórios.' },
    { tipo: 'citacao', texto: 'Controle financeiro é necessário porque o que não se acompanha só aparece quando já não há o que corrigir. Quando orçamento e investimentos ficam visíveis, a decisão se apoia em fatos.' },
    { tipo: 'texto', texto: 'Melhorar processos sempre me atraiu, e foi nessa busca que cheguei à automação e IA. Hoje me desenvolvo na área com vibe coding: entendo o que precisa ser feito, busco o melhor caminho, escolho as ferramentas certas e uso o Claude Code de forma inteligente e com critério, acompanhando cada etapa, da criação às melhorias e à manutenção. Tenho formação em Análise e Desenvolvimento de Sistemas e projetos próprios, como fluxos em n8n para Agentes de IA no WhatsApp, sistema web de agendamento, sites e um gerador de imagens com IA local. Valorizo o que construí até aqui e enxergo com grandes expectativas o que ainda está por vir.' },
  ],
  numeros: [
    { valor: 4, sufixo: '+', rotulo: 'anos em administrativo e financeiro' },
    { valor: 3, sufixo: '', rotulo: 'empresas de grande porte' },
    { valor: 3, sufixo: '', rotulo: 'projetos no ar disponíveis para você conferir' },
  ],
};

export const fluxoIntro =
  'O que levo para o trabalho: a base em administrativo e financeiro, a análise de dados e o que venho desenvolvendo em automação e IA.';

// Miniaturas da faixa de ferramentas. logo = marca em src/data/logos.ts; icone = ícone genérico.
export const ferramentas = [
  { nome: 'Excel', logo: 'excel' },
  { nome: 'Power BI', logo: 'powerbi' },
  { nome: 'Dashboards', icone: 'dashboard' },
  { nome: 'n8n', logo: 'n8n' },
  { nome: 'PostgreSQL', icone: 'database' },
  { nome: 'Claude', logo: 'claude' },
] as const;

// Conhecimentos como um fluxo: negócio → dados → automação. Cada item tem uma linha explicando o que faço.
export const fluxo = [
  {
    id: 'negocio',
    icone: 'briefcase',
    titulo: 'Negócio',
    sub: 'Administrativo e financeiro',
    itens: [
      { nome: 'Controle orçamentário', icone: 'chart', desc: 'Controle de todo o orçamento da área.' },
      { nome: 'Capex e Opex', icone: 'layers', desc: 'Separação e acompanhamento de investimentos e despesas operacionais.' },
      { nome: 'Provisões e reclassificações', icone: 'calendar', desc: 'Lançamentos de provisão e reclassificações de contas e centros de custo.' },
      { nome: 'ERP SAP', icone: 'database', desc: 'Requisições e pedidos de compra, lançamentos individuais de fornecedores, previsões de pagamento e relatórios KSB1.' },
      { nome: 'Compras e notas fiscais', icone: 'briefcase', desc: 'Lançamentos de notas fiscais e acompanhamento até o pagamento.' },
    ],
  },
  {
    id: 'dados',
    icone: 'chart',
    titulo: 'Dados',
    sub: 'Análise e indicadores',
    itens: [
      { nome: 'Excel', logo: 'excel', desc: 'Planilhas de controle, conciliação e análise do dia a dia.' },
      { nome: 'Power BI', logo: 'powerbi', desc: 'Dashboards financeiros para acompanhamento e apoio a decisões.' },
      { nome: 'Relatórios gerenciais', icone: 'dashboard', desc: 'Consolidação dos números e status em relatórios para a gestão.' },
      { nome: 'SQL e PostgreSQL', icone: 'database', desc: 'Consulta e organização de dados, usados nos meus projetos de automação.' },
    ],
  },
  {
    id: 'automacao',
    icone: 'workflow',
    titulo: 'Automação & IA',
    sub: 'Menos trabalho manual',
    itens: [
      { nome: 'n8n', logo: 'n8n', desc: 'Fluxos de automação de atendimento e sistema web de agendamento.' },
      { nome: 'Integrações', icone: 'workflow', desc: 'Conexão entre ferramentas, como WhatsApp, banco de dados e planilhas.' },
      { nome: 'Agentes de IA', icone: 'bot', desc: 'Assistentes que executam etapas do processo com regras que eu defino.' },
      { nome: 'Claude e Claude Code', logo: 'claude', desc: 'Uso o Claude Code para construir meus projetos: defino o objetivo, acompanho cada etapa, testo e ajusto, e vou aprendendo no processo.' },
    ],
  },
] as const;

// O que estou estudando agora. Linguagens ficam em segundo plano, de propósito.
export const estudando = {
  foco: [
    { nome: 'LLMs e IA generativa', icone: 'bot' },
    { nome: 'Claude Code', logo: 'claude' },
    { nome: 'Agentes de IA', icone: 'bot' },
    { nome: 'MCP (Model Context Protocol)', icone: 'workflow' },
    { nome: 'APIs e integrações', icone: 'globe' },
    { nome: 'Automação com n8n', logo: 'n8n' },
    { nome: 'SQL e PostgreSQL', icone: 'database' },
    { nome: 'Power BI e dashboards', logo: 'powerbi' },
  ],
  linguagens: 'Tecnologias dos meus projetos, em segundo plano: Astro, Tailwind, TypeScript, JavaScript, Python, HTML e CSS. Sites hospedados na Cloudflare e na Vercel.',
} as const;

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
    tags: ['Criado com Claude Code', 'Astro', 'Tailwind', 'Cloudflare', 'Site publicado'],
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
    tags: ['Criado com Claude Code', 'Astro', 'Tailwind', 'Site publicado'],
    status: 'Você está aqui',
    imagem: 'portfolio',
    links: {
      demo: null,
      detalhes: 'https://github.com/AdrianDoriaTI/adrian-doria-portfolio',
    },
  },
];
