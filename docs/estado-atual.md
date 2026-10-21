# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-10-21. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

## Onde estamos
Rodada 2 publicada: copy nova (narrativa ADM/Finanças → automação → projetos), seção **Sobre** com números, movimento leve (D11) e projetos com prints reais e links (Agenda Web Pro e o site dele). O GitHub virou vitrine (D12): README de perfil com banner animado e 2 repositórios públicos novos.

URL: https://adrian-doria-portfolio.vercel.app (cada push na `main` publica).

## Pronto
- Seções: header, hero (frase palavra por palavra, paralaxe nos pontos da foto), ferramentas, **Sobre** (3 parágrafos que acendem ao rolar + contadores), fluxo n8n, experiência, projetos (paralaxe na tela, inclinação no mouse, Ver ao vivo / Código), contato.
- Movimento em `src/scripts/motion.ts` (`data-reveal`, `data-count`, `data-parallax`, `data-tilt`).
- `github/perfil/`: README do perfil (`AdrianDoriaTI/AdrianDoriaTI`), `gerar-banner.py` e imagens. Ao mudar texto ou print, atualizar lá e enviar ao repositório do perfil.
- Repositórios públicos: `AdrianDoriaTI` (perfil), `agenda-web-pro` (vitrine, sem código), `agenda-web-pro-site` (cópia limpa do site, sem histórico, WhatsApp de exemplo), `adrian-doria-portfolio`.

## Testado
- Build ok. Screenshots 1440 (claro) e 375 (escuro): sem overflow.
- gitleaks: nada encontrado no portfólio (incluindo histórico), no perfil e nos dois repositórios novos.

## Falta (próximos passos)
1. Revela (gerador de imagens com IA local) como 3º projeto: checklist de segurança → decidir código aberto ou vitrine; GIF/vídeo curto.
2. Projeto que prove o lado ADM/Financeiro (dashboard Capex/Opex com dados fictícios ou fluxo n8n exportável).
3. Versão em inglês do README de perfil (opcional).
4. `/sf:validar` → `/sf:revisar` → aprovar `DESIGN.md`.

## Decisões pendentes do usuário
- Ajustes de texto da rodada 2 (a copy é sugestão inicial).
- Ligar 2FA no GitHub.
- Domínio próprio (opcional).

## Problemas conhecidos
- O print do portfólio (`src/assets/projetos/portfolio.png`) precisa ser refeito quando o hero mudar.
- `agenda-web-pro-site` é uma cópia: mudanças no site real não vão sozinhas para lá.
