# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-10-22. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

## Onde estamos
Rodada 2 publicada: copy nova (narrativa ADM/Finanças → automação → projetos), seção **Sobre** com números, movimento leve (D11) e projetos com prints reais e links (Agenda Web Pro e o site dele). O GitHub virou vitrine (D12): README de perfil com banner animado e 2 repositórios públicos novos.

URL: https://adrian-doria-portfolio.vercel.app (cada push na `main` publica).

## Pronto
- Seções: header, hero (frase palavra por palavra, paralaxe nos pontos da foto), ferramentas, **Sobre** (3 parágrafos que acendem ao rolar + contadores), fluxo n8n, experiência, projetos (paralaxe na tela, inclinação no mouse, Ver ao vivo / Código), contato.
- Movimento em `src/scripts/motion.ts` (`data-reveal`, `data-count`, `data-parallax`, `data-tilt`).
- `github/perfil/`: README do perfil (`AdrianDoriaTI/AdrianDoriaTI`), `gerar-banner.py` e imagens. Ao mudar texto ou print, atualizar lá e enviar ao repositório do perfil.
- Repositórios públicos: `AdrianDoriaTI` (perfil), `revela` (vitrine, sem código), `agenda-web-pro` (vitrine, sem código), `agenda-web-pro-site` (cópia limpa do site, sem histórico, WhatsApp de exemplo), `adrian-doria-portfolio`.

## Testado
- Checklist de segurança 2026-10-22: gitleaks (histórico e arquivos) limpo em todos os repositórios públicos e no Revela; `npm audit fix` no portfólio (2 altas → 0); agenda-web-pro-site 0; pip-audit do Revela 0.
- Build ok. Screenshots 1440 (claro) e 375 (escuro): sem overflow.
- gitleaks: nada encontrado no portfólio (incluindo histórico), no perfil e nos dois repositórios novos.

## Falta (próximos passos)
1. Revela: vitrine publicada (`AdrianDoriaTI/revela`, código privado). Falta GIF/vídeo curto.
2. Projeto que prove o lado ADM/Financeiro (dashboard Capex/Opex com dados fictícios ou fluxo n8n exportável).
3. Versão em inglês do README de perfil (opcional).
4. `/sf:validar` → `/sf:revisar` → aprovar `DESIGN.md`.

## Situação do usuário (2026-10-21)
Não está mais empregado (Cencosud foi o último emprego). Procura vaga e estuda desenvolvimento com IA (Claude Code) e automação. **Não dizer "tempo integral" nem "me dedico integralmente"** (pedido dele): o texto é "sigo estudando e me desenvolvendo em automação e IA, com alguns projetos". Site e perfil já dizem isso, com o selo "Disponível para novas oportunidades". Termo escolhido: "desenvolvimento com IA" (não "vibecoding"); trocar se ele pedir.

## Posicionamento (decidido 2026-10-22)
- Ele não programa sozinho: os projetos foram feitos com o Claude. Discurso honesto: "desenho a solução, entendo o negócio e uso IA para construir; sei explicar como funciona". Nunca dizer que ele programa em X.
- Vagas-alvo: analista de processos, automação, BI, financeiro com automação, suporte a sistemas (não dev tradicional).
- Código aberto só no que é prova (portfólio, site do Agenda, futuro dashboard); produto comercial (Agenda) e Revela ficam como vitrine.
- Próximo passo sugerido: guia de estudo por projeto (como funciona em português simples + perguntas de entrevista com respostas), depois o dashboard Capex/Opex aberto.

## Pendências do usuário (só ele faz)
- Fixar no perfil: revela, agenda-web-pro, agenda-web-pro-site, adrian-doria-portfolio (no celular: navegador em modo computador → "Customize your pins").
- Bio do GitHub + campo Website (o `gh` não tem o escopo `user`; ou ele roda `gh auth refresh -h github.com -s user` e o Claude atualiza). Bio sugerida: "Analista ADM e Financeiro (+4 anos) estudando desenvolvimento com IA e automação. Disponível para oportunidades. n8n · PostgreSQL · Power BI · Astro."
- LinkedIn com o mesmo discurso (Cencosud encerrado, Open to work).
- Ligar 2FA no GitHub.
- Revisar os textos da rodada 2 (a copy é sugestão inicial).
- Domínio próprio (opcional).

## Onde fica cada coisa publicada
- Cópias locais dos repositórios novos foram feitas numa pasta temporária: para mexer neles de novo, clonar (`gh repo clone AdrianDoriaTI/<nome>`).
- README do perfil: editar `github/perfil/README.md` aqui e copiar para o repositório `AdrianDoriaTI`.
- `to-do-list` e `site-nao-clique` foram deixados privados (reversível).

## Segurança (não esquecer)
- NÃO tornar público `meus-apps-ia`: o histórico tem o endereço real do relay (`revela-relay.adriandoria.workers.dev`), o nome do amigo e a organização dos convites. Se abrir um dia, fazer cópia limpa sem histórico.
- A foto de referência com as duas mulheres ficou fora da vitrine (origem incerta).
- Opcional: cabeçalhos de segurança no portfólio (hoje só HSTS).

## Problemas conhecidos
- O print do portfólio (`src/assets/projetos/portfolio.png`) precisa ser refeito quando o hero mudar.
- `agenda-web-pro-site` é uma cópia: mudanças no site real não vão sozinhas para lá.
