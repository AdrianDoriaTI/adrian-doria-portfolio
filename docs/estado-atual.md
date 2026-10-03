# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-10-03. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

## Onde estamos
Site (página única, tema claro/escuro) implementado e com **1 rodada de melhorias** aplicada. Aguardando: deploy na Vercel, prints dos projetos e novas melhorias do usuário. A v0 pulou referências e direção formal (D6); `DESIGN.md` documenta o que existe, ainda não aprovado como final.

## Pronto
- `PRODUCT.md` aprovado. Impeccable instalado globalmente (`~/.claude/skills/impeccable`).
- Seções: header, hero com foto (fundo de pontos), faixa de ferramentas (Excel, Power BI, Dashboards, n8n, Sites, Claude), fluxo de conhecimentos estilo n8n, experiência (sem datas) + formação + certificações, projetos (Agent Control, SiteFactory, portfólio), contato.
- Conteúdo todo em `src/data/perfil.ts` (do currículo, D5; projetos dos READMEs, D8). Logos em `src/data/logos.ts`.
- `DESIGN.md` atualizado com a rodada 1.

## Testado
- Build de produção ok.
- Screenshots próprios em 375 / 768 / 1440, claro e escuro: sem overflow.
  - Como capturar: Chrome headless (`--blink-settings=preferredColorScheme=1` = claro). Abaixo de 500px o Chrome headless não reduz a janela: usar um HTML com `<iframe>` de 375px (deslocar com `margin-top` negativo para ver outras partes).
- Não validado: navegação por teclado, contraste medido, animação do fluxo em celular real.

## Falta (próximos passos, em ordem)
1. **Deploy na Vercel:** usuário criou conta (Google + GitHub conectado) e foi orientado a importar o repo em vercel.com/new sem mudar configurações. Confirmar se concluiu → registrar a URL aqui e em `docs/arquitetura.md` (Hospedagem). Cada push na `main` publica sozinho.
2. Prints do Agent Control e da SiteFactory (sem dados de clientes) → `src/assets/projetos/` + campo `imagem` em `projetos` (`perfil.ts`) e mapa `imagens` em `Projetos.astro`.
3. Novas melhorias do usuário.
4. `/sf:validar` → `/sf:revisar` → aprovação do `DESIGN.md` → `/sf:finalizar`.

## Decisões pendentes do usuário
- Resumo: manter "em uma empresa de grande porte" ou só "em uma empresa"?
- Formação: manter o ano (2023–2025) já que as experiências ficaram sem datas?
- Tornar público o repositório do portfólio (para recrutador ver o código)? Agent Control deve seguir privado.
- Vídeo curto (30–60 s) do agente no WhatsApp para o projeto Agent Control (opcional).
- Domínio próprio (opcional).

## Última validação
- 2026-10-03: screenshots próprios (sem `sf:qa`).

## Problemas conhecidos
- Agent Control e SiteFactory sem print (painel com ícone no lugar).
- O print do portfólio em `src/assets/projetos/portfolio.png` precisa ser refeito quando o hero mudar.
