# DESIGN — Adrian Doria — Portfólio

**Status:** v0 implementada direto para o usuário ver e propor melhorias (2026-10-03). Ainda **não aprovada** como direção final. Fonte do código: `src/styles/global.css`.

## Ideia central
Minimalista, muito respiro, um acento azul claro. A assinatura é a seção de conhecimentos como um **fluxo de nós no estilo n8n** (Negócio → Dados → Automação & IA): nós com portas, fios e selo de "executado".

## Temas
Claro e escuro com alternância no cabeçalho. Padrão = preferência do sistema; a escolha fica salva em `localStorage` (`theme`). Aplicado via `data-theme` no `<html>` antes da pintura.

## Tokens (OKLCH)
| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `--paper` | 98.6% 0.005 230 | 14.5% 0.012 250 | fundo |
| `--surface` | 100% 0 0 | 18.5% 0.014 250 | seções alternadas, chips |
| `--ink` | 21% 0.03 250 | 95% 0.008 230 | texto |
| `--muted` | 45% 0.03 245 | 72% 0.022 240 | texto secundário |
| `--line` | 90% 0.014 235 | 28% 0.018 250 | bordas, fios |
| `--accent` | 81% 0.11 225 | 82% 0.11 225 | azul claro: preenchimentos, CTA |
| `--accent-soft` | 94.5% 0.035 225 | 25% 0.045 235 | fundos de ícone, hover |
| `--accent-ink` | 47% 0.13 240 | 84% 0.1 225 | azul como texto/ícone (contraste AA) |
| `--on-accent` | 20% 0.04 245 | 18% 0.04 245 | texto sobre azul claro |

Regra: azul claro nunca é cor de texto sobre fundo claro; usar `--accent-ink`.

## Tipografia
- Display: **Bricolage Grotesque Variable** (títulos, frase do hero, e-mail do contato). Tracking -0.03em.
- Texto: **Instrument Sans Variable**, 17px, line-height 1.6.
- Ambas self-hosted via `@fontsource-variable`.
- Escala: H1 `clamp(3rem, 9vw, 5.75rem)`; H2 `clamp(2rem, 5vw, 3.25rem)`; contato `clamp(2.25rem, 6vw, 4.5rem)`.

## Layout e breakpoints
- Container `max-w-6xl`, gutter 20px (mobile) / 32px (md+).
- Hero: 1 coluna (foto acima, alinhada à esquerda) até 1023px; 2 colunas a partir de `lg` (1024).
- Fluxo: vertical até 1023px; horizontal (3 nós + fios) a partir de `lg`.
- Experiência: período acima do cargo no mobile; coluna de período (11rem) a partir de `md`.

## Componentes
- Botões em pílula: primário = fundo `--accent`; secundário = borda `--line`, hover borda `--ink`.
- Chips de conhecimento: pílula com borda `--line`.
- Foto: cantos 1.75rem + bloco azul claro deslocado/rotacionado atrás.
- Ícones: SVG de traço único 1.75 (estilo Lucide) em `src/components/Icon.astro`.

## Movimento
- Momento único: ao entrar na tela, o fluxo "executa" — fios preenchem em sequência, selos aparecem, um pulso percorre os fios em loop.
- Sem JS: tudo visível. `prefers-reduced-motion`: sem pulso nem transições.
- Micro: hover leve em botões/nós; sublinhado animado no e-mail.

## Evitado (de propósito)
Barras de % de habilidade, eyebrows acima de títulos, numeração de seções, texto em gradiente, glow neon.
