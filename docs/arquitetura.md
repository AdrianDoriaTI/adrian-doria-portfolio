# Arquitetura — Adrian Doria — Portfólio

## Stack
Astro + TypeScript + Tailwind CSS v4 (estático por padrão, ilhas para interatividade).

- Rodar: `npm run dev` · Build: `npm run build`

## Páginas e seções
Página única (`src/pages/index.astro`). Conteúdo centralizado em `src/data/perfil.ts`.

1. **Header** fixo: nome, âncoras (md+), alternância de tema, botão Contato.
2. **Hero** (`#topo`): foto, nome, frase "Entendo o negócio. / Automatizo o trabalho.", resumo, local, CTAs (e-mail, LinkedIn, GitHub).
2b. **Ferramentas**: 6 miniaturas.
2c. **Sobre** (`#sobre`): 3 parágrafos (o que sei → virada → projetos) + 3 contadores.
3. **Conhecimentos** (`#conhecimentos`): fluxo Negócio → Dados → Automação & IA.
4. **Experiência** (`#experiencia`): 3 cargos (sem datas) + formação + certificações.
5. **Projetos** (`#projetos`): Agenda Web Pro, Site Agenda Web Pro, este portfólio; cada um com Ver ao vivo e Código.
6. **Contato** (`#contato`) + rodapé.

## Hospedagem
Vercel: https://adrian-doria-portfolio.vercel.app (push na `main` publica).

## Decisões
| # | Data | Decisão | Motivo |
|---|---|---|---|
| D1 | 2026-10-03 | Stack `astro` | Site de conteúdo/portfólio: HTML estático (performance e SEO), JS só nas ilhas de animação, deploy em qualquer host estático |
| D2 | 2026-10-03 | Posicionamento híbrido ADM + Automação; contato por e-mail, LinkedIn e GitHub; com foto; sem CV em PDF por enquanto | Respostas do usuário na etapa de produto (`PRODUCT.md` aprovado) |
| D3 | 2026-10-03 | Impeccable instalado globalmente, sem hooks | Disponível para todos os sites sem copiar arquivos para cada repositório; hooks rodariam em todos os projetos |
| D4 | 2026-10-03 | Alternância de tema claro/escuro (padrão = sistema) | Pedido do usuário |
| D5 | 2026-10-03 | Conteúdo inicial tirado do currículo do usuário (`curriculo-base.md` do projeto Buscador de Vagas), sem acréscimos | Usuário autorizou; dados reais em vez de placeholders |
| D6 | 2026-10-03 | v0 implementada antes de referências/direção formal (`DESIGN.md` documenta a v0) | Usuário quer ver o site e propor melhorias a partir dele |
| D7 | 2026-10-03 | Experiências sem datas; resumo cita "uma empresa de grande porte" | Pedido do usuário |
| D8 | 2026-10-03 | Projetos: Agent Control, SiteFactory e o portfólio, descritos a partir dos READMEs; repositórios privados, sem link para o código | Pedido do usuário; repos são privados |
| D9 | 2026-10-03 | Dev toolbar do Astro desligada | Não aparecer nos prints/screenshots |
| D10 | 2026-10-21 | Projetos em destaque: Agenda Web Pro (sistema) e o site dele; saem Agent Control e SiteFactory | Pedido do usuário: projetos que o recrutador consegue abrir e testar |
| D11 | 2026-10-21 | Movimento leve: frase palavra por palavra, leitura guiada no Sobre, contadores, paralaxe e inclinação nos projetos; nada em loop | Pedido do usuário (marcante sem exagero); tudo desliga com movimento reduzido e no celular o paralaxe fica desligado |
| D12 | 2026-10-21 | GitHub como vitrine: README de perfil com banner SVG animado; sistema só como vitrine (`agenda-web-pro`, código privado); site como cópia limpa sem histórico (`agenda-web-pro-site`); portfólio público | Padrão de portfólio no GitHub sem expor produto pago, dados de clientes nem o histórico com imagens de terceiros |
