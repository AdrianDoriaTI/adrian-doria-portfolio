# Arquitetura — Adrian Doria — Portfólio

## Stack
Astro + TypeScript + Tailwind CSS v4 (estático por padrão, ilhas para interatividade).

- Rodar: `npm run dev` · Build: `npm run build`

## Páginas e seções
Página única (`src/pages/index.astro`). Conteúdo centralizado em `src/data/perfil.ts`.

1. **Header** fixo: nome, âncoras (md+), alternância de tema, botão Contato.
2. **Hero** (`#topo`): foto, nome, frase "Entendo o negócio. / Automatizo o trabalho.", resumo, local, CTAs (e-mail, LinkedIn, GitHub).
3. **Conhecimentos** (`#conhecimentos`): fluxo Negócio → Dados → Automação & IA.
4. **Experiência** (`#experiencia`): 3 cargos + formação + certificações.
5. **Projetos** (`#projetos`): `[PLACEHOLDER]` + link do GitHub.
6. **Contato** (`#contato`) + rodapé.

## Hospedagem
A definir.

## Decisões
| # | Data | Decisão | Motivo |
|---|---|---|---|
| D1 | 2026-10-03 | Stack `astro` | Site de conteúdo/portfólio: HTML estático (performance e SEO), JS só nas ilhas de animação, deploy em qualquer host estático |
| D2 | 2026-10-03 | Posicionamento híbrido ADM + Automação; contato por e-mail, LinkedIn e GitHub; com foto; sem CV em PDF por enquanto | Respostas do usuário na etapa de produto (`PRODUCT.md` aprovado) |
| D3 | 2026-10-03 | Impeccable instalado globalmente, sem hooks | Disponível para todos os sites sem copiar arquivos para cada repositório; hooks rodariam em todos os projetos |
| D4 | 2026-10-03 | Alternância de tema claro/escuro (padrão = sistema) | Pedido do usuário |
| D5 | 2026-10-03 | Conteúdo inicial tirado do currículo do usuário (`curriculo-base.md` do projeto Buscador de Vagas), sem acréscimos | Usuário autorizou; dados reais em vez de placeholders |
| D6 | 2026-10-03 | v0 implementada antes de referências/direção formal (`DESIGN.md` documenta a v0) | Usuário quer ver o site e propor melhorias a partir dele |
