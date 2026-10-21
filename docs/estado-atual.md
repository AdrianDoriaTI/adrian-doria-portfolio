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

## Situação do usuário (2026-10-21)
Não está mais empregado (Cencosud foi o último emprego). Procura vaga e estuda desenvolvimento com IA (Claude Code) e automação em tempo integral. Site e perfil já dizem isso, com o selo "Disponível para novas oportunidades". Termo escolhido: "desenvolvimento com IA" (não "vibecoding"); trocar se ele pedir.

## Pendências do usuário (só ele faz)
- Fixar no perfil: agenda-web-pro, agenda-web-pro-site, adrian-doria-portfolio (no celular: navegador em modo computador → "Customize your pins").
- Bio do GitHub + campo Website (o `gh` não tem o escopo `user`; ou ele roda `gh auth refresh -h github.com -s user` e o Claude atualiza). Bio sugerida: "Analista ADM e Financeiro (+4 anos) estudando desenvolvimento com IA e automação. Disponível para oportunidades. n8n · PostgreSQL · Power BI · Astro."
- LinkedIn com o mesmo discurso (Cencosud encerrado, Open to work).
- Ligar 2FA no GitHub.
- Revisar os textos da rodada 2 (a copy é sugestão inicial).
- Domínio próprio (opcional).

## Onde fica cada coisa publicada
- Cópias locais dos repositórios novos foram feitas numa pasta temporária: para mexer neles de novo, clonar (`gh repo clone AdrianDoriaTI/<nome>`).
- README do perfil: editar `github/perfil/README.md` aqui e copiar para o repositório `AdrianDoriaTI`.
- `to-do-list` e `site-nao-clique` foram deixados privados (reversível).

## Problemas conhecidos
- O print do portfólio (`src/assets/projetos/portfolio.png`) precisa ser refeito quando o hero mudar.
- `agenda-web-pro-site` é uma cópia: mudanças no site real não vão sozinhas para lá.
