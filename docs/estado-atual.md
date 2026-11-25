# Estado atual — Adrian Doria — Portfólio

Atualizado em 2026-11-25. Resumo curto: reescrever o trecho que mudou. Detalhes e decisões antigas: `docs/historico.md`.

## Onde estamos
Site publicado em https://adrian-doria-portfolio.vercel.app (cada push na `main` publica). Última rodada (11-10): painel em formato de dashboard, "Estudando atualmente" e ícones nos conhecimentos. GitHub é vitrine: README de perfil com banner e repositórios públicos `AdrianDoriaTI`, `revela`, `agenda-web-pro`, `agenda-web-pro-site`, `adrian-doria-portfolio`.

## Consolidado
- Seções: header, hero, ferramentas, Sobre, fluxo n8n, experiência/conhecimentos/formação (menu "Experiência e formação"), projetos (prints reais, botão "Sobre o projeto no GitHub"), contato.
- Movimento: `src/scripts/motion.ts` (`data-reveal`, `data-count`, `data-parallax`, `data-tilt`). Textos: `src/data/perfil.ts`.
- `github/perfil/`: README do perfil + `gerar-banner.py`. Mudou texto ou print → atualizar lá e enviar ao repo `AdrianDoriaTI`.

## Regras de texto vigentes
- Financeiro e automação em pé de igualdade; nunca "saí do financeiro para a automação". Tom de portfólio (conhecimento, não "eu fazia").
- Ele não programa sozinho: "desenho a solução e uso IA para construir". Nada de linguagens/"código" nos cards; "criado com Claude Code".
- Não dizer "tempo integral"/"me dedico integralmente". Selo "Disponível para novas oportunidades".
- Empresa no singular ("numa multinacional"); não inventar dados (períodos, idiomas, transações SAP só se ele confirmar).
- Não publicar a cada detalhe; só ao fechar uma parte maior.

## Pendente (decisões do Adrian)
1. Seção "Administrativo e financeiro" (dashboards/Excel, dados fictícios) e reordenar a página. Precisa saber se há material real.
2. Resumo profissional: períodos, idiomas, "fechamento contábil" (só com confirmação).
3. Botão "Baixar currículo" (precisa do PDF) e og:image.
4. Faixa de ferramentas repete conhecimentos: manter ou remover (sugestão: remover).
5. Enviar ao repo do perfil: `github/perfil/README.md` (alt do banner) e discurso novo do Sobre.

## Próximo passo
1. Projeto que prove o lado ADM/Financeiro (dashboard Capex/Opex aberto ou fluxo n8n exportável).
2. Revela: GIF/vídeo curto na vitrine. READMEs dos repos vitrine no padrão (objetivo, como funciona, como foi criado).
3. `/sf:validar` → `/sf:revisar` → aprovar `DESIGN.md`.

## Pendências do usuário (só ele faz)
- Fixar repos no perfil; bio + Website do GitHub (ou rodar `gh auth refresh -h github.com -s user`); 2FA.
- LinkedIn com o mesmo discurso (Open to work). Domínio próprio (opcional).

## Segurança
- NÃO tornar público `meus-apps-ia` (histórico com relay real e dados de terceiros); se abrir, cópia limpa sem histórico.
- Opcional: cabeçalhos de segurança no portfólio (hoje só HSTS).

## Problemas conhecidos
- Print `src/assets/projetos/portfolio.png` precisa ser refeito quando o hero mudar.
- `agenda-web-pro-site` é cópia: mudanças no site real não vão sozinhas.
- Repos novos não têm cópia local: `gh repo clone AdrianDoriaTI/<nome>`.
