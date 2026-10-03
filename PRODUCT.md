# Product

<!-- impeccable:product-schema 1 -->

Fonte: `docs/briefing.md` + respostas do usuário (aprovado em 2026-10-03). Idioma do site: PT-BR.

## Platform

web

## Stack
Astro + TypeScript + Tailwind CSS v4, estático (decisão D1 em `docs/arquitetura.md`).

## Users
- **Primário:** recrutadores e entrevistadores avaliando Adrian para uma vaga. Leem rápido (30–60 s), muitas vezes no celular, antes ou durante a entrevista. Querem saber: qual o perfil, o que ele sabe usar, como falar com ele.
- **Secundário:** gestores técnicos que querem conferir projetos no GitHub.

## Product Purpose
Portfólio pessoal de página única que apresenta Adrian Doria em processos seletivos: quem é, o que sabe fazer e como falar com ele.

Sucesso, em ordem:
1. Em poucos segundos, o perfil híbrido e as áreas de conhecimento ficam claros.
2. O visitante entra em contato por **e-mail** ou **LinkedIn**.
3. O visitante abre os projetos no **GitHub** (github.com/AdrianDoriaTI).

## Positioning
Perfil **híbrido ADM + Automação**, com as duas frentes no mesmo peso:
- **Administrativo / Financeiro:** rotinas administrativas, financeiro, Excel, Power BI.
- **Automação e IA:** n8n, agentes de IA, Claude.

Mensagem central: *alguém que entende o negócio (ADM/finanças) e automatiza o trabalho com dados e IA.* Vagas-alvo: analista administrativo/financeiro com foco em automação e dados.

## Operating Context
- Acessado por link enviado em candidatura, currículo ou LinkedIn; aberto no celular ou no desktop durante a triagem/entrevista.
- Pode ser mostrado em tela compartilhada numa entrevista.

## Capabilities and Constraints
- Página única com contato por e-mail, LinkedIn e GitHub. **Sem WhatsApp.**
- **CV em PDF:** não por enquanto (pode entrar depois).
- Mobile-first; validar em 375 / 768 / 1440 px.
- Estático e rápido; JS só onde houver animação/interação.
- Só PT-BR por enquanto; inglês pode vir depois.
- **Em aberto:** hospedagem/deploy e domínio.

## Brand Commitments
- Nome: Adrian Doria. Sem logo ou identidade visual prévia.
- Voz: profissional, direta, acessível; primeira pessoa, frases curtas. **Pouco texto**: o destaque vai para as áreas de conhecimento.
- Restrições visuais definidas pelo usuário (não expandir aqui): criativo e **minimalista**; **animações leves** só onde agregam; cor predominante **branco + azul claro** ou **preto + azul claro** (escolha fica para a direção visual).
- Evitar: cara de template genérico de portfólio dev (barras de % de habilidade), excesso de texto, efeitos chamativos.

## Evidence on Hand
- **Foto pessoal:** será enviada pelo usuário (ainda não está no repositório).
- **GitHub:** github.com/AdrianDoriaTI.
- **Ainda não recebidos:** sobre mim, experiências, formação, projetos (com links), e-mail, URL do LinkedIn. Até chegarem, usar `[PLACEHOLDER]`. Nunca inventar empresas, cargos, números, depoimentos ou projetos.

## Product Principles
1. **Clareza em segundos:** o recrutador entende o perfil híbrido sem rolar muito nem ler parágrafos.
2. **Mostrar, não listar:** conhecimentos aparecem com contexto (área + ferramentas), não como lista longa de logos.
3. **Duas frentes, um perfil:** ADM/Finanças e Automação/IA se reforçam; nenhuma vira nota de rodapé.
4. **Contato sempre à mão:** e-mail e LinkedIn acessíveis de qualquer ponto da página.
5. **Só fatos reais:** nada de conteúdo inventado.

## Accessibility & Inclusion
Contraste AA, navegação por teclado, textos alternativos (incluindo a foto) e respeito a `prefers-reduced-motion`.
