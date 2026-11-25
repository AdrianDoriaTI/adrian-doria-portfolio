# Histórico — Adrian Doria — Portfólio

Detalhes antigos retirados do estado-atual (por tópico). Ler só quando precisar.

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

## Situação do usuário (2026-10-21)
Não está mais empregado (Cencosud foi o último emprego). Procura vaga e estuda desenvolvimento com IA (Claude Code) e automação. **Não dizer "tempo integral" nem "me dedico integralmente"** (pedido dele): o texto é "sigo estudando e me desenvolvendo em automação e IA, com alguns projetos". Site e perfil já dizem isso, com o selo "Disponível para novas oportunidades". Termo escolhido: "desenvolvimento com IA" (não "vibecoding"); trocar se ele pedir.

## Posicionamento (decidido 2026-10-22)
- Ele não programa sozinho: os projetos foram feitos com o Claude. Discurso honesto: "desenho a solução, entendo o negócio e uso IA para construir; sei explicar como funciona". Nunca dizer que ele programa em X.
- Vagas-alvo: analista de processos, automação, BI, financeiro com automação, suporte a sistemas (não dev tradicional).
- Código aberto só no que é prova (portfólio, site do Agenda, futuro dashboard); produto comercial (Agenda) e Revela ficam como vitrine.
- Próximo passo sugerido: guia de estudo por projeto (como funciona em português simples + perguntas de entrevista com respostas), depois o dashboard Capex/Opex aberto.

## Rodadas
- 2026-11-10 (dd3beee): painel em formato de dashboard, "Estudando atualmente", ícones nos conhecimentos.
- 2026-11-24 (4bd47f4): print do projeto Portfólio recomprimido (461 KB → 350 KB).
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

