# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-10-03. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

## Onde estamos
**v0 do site implementada** (página única, tema claro/escuro). Aguardando o usuário ver e propor melhorias. A v0 pulou referências e direção formal (D6); `DESIGN.md` documenta a v0, ainda não aprovada como final.

## Pronto
- `PRODUCT.md` aprovado. Impeccable instalado globalmente.
- Página única: header, hero com foto, fluxo de conhecimentos (estilo n8n), experiência/formação/certificações, projetos (placeholder), contato. Conteúdo em `src/data/perfil.ts`, vindo do currículo (D5).
- `DESIGN.md` v0 (tokens, tipografia, breakpoints, movimento).

## Testado
- Build de produção ok.
- Screenshots próprios (Chrome headless) em 375 / 768 / 1440, claro e escuro: sem overflow; corrigidos ícone de tema duplicado, botões do hero quebrando, hero apertado em 768.
- Não validado ainda: navegação por teclado, contraste medido, animação do fluxo em celular real.

## Falta (próximos passos, em ordem)
1. Usuário revisa a v0 (`npm run dev` → http://localhost:4321) e lista melhorias.
2. Aplicar melhorias; opcional: `/sf:design-ref` se quiser explorar outra direção.
3. `/sf:validar` → `/sf:revisar` → aprovação do `DESIGN.md`.
4. Hospedagem/deploy → `/sf:finalizar`.

## Decisões pendentes do usuário
- Melhorias na v0.
- Conteúdo: projetos (com links), ajustes de textos/experiências.
- Hospedagem/deploy e domínio.

## Última validação
- 2026-10-03: screenshots próprios (sem `sf:qa`).

## Problemas conhecidos
- Seção Projetos é `[PLACEHOLDER]`.
