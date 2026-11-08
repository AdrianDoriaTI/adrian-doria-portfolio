# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-11-07. Leia ao retomar. Mantenha curto: substitua o que ficou velho (o histórico está no git).

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

## Rodada 3 (2026-11-07): Sobre e Principais conhecimentos
- **Sobre** reescrito (texto + citação em linha própria + parágrafo de automação com vibe coding). Regras do Adrian: tom de portfólio (conhecimento, nunca "meu trabalho era/eu fazia"); lista de atividades direta, sem artigos; empresa no singular ("numa multinacional", sem citar terceirização no texto); sem programação específica, o foco é vibe coding; frases de efeito próprias, não literais. Final: "Valorizo o que construí até aqui e enxergo com grandes expectativas o que ainda está por vir." Dados do Sobre agora são objetos `{tipo:'texto'|'citacao', texto}` em `src/data/perfil.ts`.
- **Principais conhecimentos**: cada item tem uma linha (`{nome, desc}`); texto do Negócio definido pelo Adrian (ERP SAP cita KSB1; códigos de transação só se ele confirmar quais usava).
- Faixa de ferramentas: ainda a decidir (sugestão: remover).
- Ainda não enviado ao repositório do perfil: `github/perfil/README.md` (alt do banner corrigido) e o discurso novo do Sobre.

## Decisões de 2026-11-04 (publicadas no site e no perfil)
- Hero: "4 anos em administrativo e financeiro, e agora me desenvolvendo em automação e IA." Resumo: "Experiência em análise financeira, controle orçamentário, compras e dashboards em empresa multinacional. Atualmente estudando e desenvolvendo projetos próprios em automação e IA, e estou disponível para novas oportunidades." (removido "sem deixar o financeiro de lado" a pedido do Adrian; publicado no commit a00298a em 2026-11-04, no site e no README do perfil). Só essa troca foi pedida: o resto do texto, inclusive "Comecei pela rotina…" no Sobre, fica igual. Não acrescentar nada no lugar do que foi removido. 
- As DUAS áreas em pé de igualdade; nunca "saí do financeiro para a automação". Contato: "Busco oportunidades em administrativo e financeiro, principalmente onde a automação de processos faça diferença." (sem "me chame").
- Nada de "código": cards com o que é, objetivo e como foi criado ("criado com Claude Code"); botão "Sobre o projeto no GitHub"; etiquetas sem linguagens. Jogo 2D fica de fora por enquanto. Agenda Web Pro (sistema) sem demo; a demo é o Site Agenda Web Pro.
- "Principais conhecimentos" + "Experiência profissional" + cartão Formação/Certificações funcionam como resumo profissional (menu: "Experiência e formação").
- README do perfil e banner (gerar-banner.py) atualizados com o mesmo discurso e publicados no repositório AdrianDoriaTI/AdrianDoriaTI.
- Regra: não publicar a cada detalhe; só ao fechar uma parte maior.

## Pendente para a próxima rodada (Adrian ainda vai pensar/ajustar)
1. Seção "Administrativo e financeiro" (dashboards, Excel, dados fictícios) + reordenar página (hero, sobre, duas áreas, experiência, contato). Perguntei se ele tem material real ou se crio do zero.
2. Resumo profissional: períodos de cada emprego, uma linha por conhecimento, idiomas (precisa dele; não inventar). "Fechamento contábil" só se confirmar.
3. Botão "Baixar currículo" (precisa do PDF), og:image, refazer print do portfólio.
4. Faixa de ferramentas repete conhecimentos: decidir se mantém.
5. Perfil GitHub: bio/Website (`gh auth refresh -h github.com -s user`), fixar repos, 2FA (só ele). READMEs dos repos vitrine no mesmo padrão (objetivo, como funciona, como foi criado).

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
