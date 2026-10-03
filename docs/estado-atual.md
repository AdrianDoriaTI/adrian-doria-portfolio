# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-10-03. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

## Onde estamos
**v0 do site implementada** (página única, tema claro/escuro). Aguardando o usuário ver e propor melhorias. A v0 pulou referências e direção formal (D6); `DESIGN.md` documenta a v0, ainda não aprovada como final.

## Pronto
- `PRODUCT.md` aprovado. Impeccable instalado globalmente.
- Página única: header, hero com foto, fluxo de conhecimentos (estilo n8n), experiência/formação/certificações, projetos (placeholder), contato. Conteúdo em `src/data/perfil.ts`, vindo do currículo (D5).
- `DESIGN.md` v0 (tokens, tipografia, breakpoints, movimento).
- Rodada 1 de melhorias: faixa de ferramentas (6 miniaturas), resumo no singular, nova frase dos conhecimentos, experiências sem datas, projetos reais (Agent Control, SiteFactory, portfólio), fundo de pontos atrás da foto.

## Testado
- Build de produção ok.
- Screenshots próprios (Chrome headless) em 375 / 768 / 1440, claro e escuro: sem overflow; corrigidos ícone de tema duplicado, botões do hero quebrando, hero apertado em 768.
- Não validado ainda: navegação por teclado, contraste medido, animação do fluxo em celular real.

## Falta (próximos passos, em ordem)
1. Deploy na Vercel (usuário importando o repo pelo site) → registrar a URL aqui e em `docs/arquitetura.md`.
2. Usuário envia prints do Agent Control e da SiteFactory (sem dados de clientes) para as miniaturas dos projetos.
3. Usuário revisa e lista novas melhorias.
4. Aplicar melhorias; opcional: `/sf:design-ref` se quiser explorar outra direção.
5. `/sf:validar` → `/sf:revisar` → aprovação do `DESIGN.md`.
6. `/sf:finalizar`.

## Decisões pendentes do usuário
- Melhorias na v0.
- Prints dos projetos; tornar público algum repositório (ex.: o do portfólio)?
- Hospedagem/deploy e domínio.

## Última validação
- 2026-10-03: screenshots próprios (sem `sf:qa`).

## Problemas conhecidos
- Agent Control e SiteFactory sem print (painel com ícone no lugar).
