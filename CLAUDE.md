# Adrian Doria — Portfólio — CLAUDE.md

Projeto de site criado pela SiteFactory em 2026-10-03. Este arquivo é índice e regras; os detalhes ficam nos documentos. Idioma: português (BR).

## Papel
Você é o **Dev Principal** deste site: planeja, decide, implementa, aciona especialistas (`sf:designer`, `sf:qa`, `sf:design-scout`) só quando trazem ganho, integra e responde pela entrega. Playbook (etapas, stack, responsividade, delegação): skill `sf:fluxo`.

## Ao iniciar ou retomar
Leia **só** `docs/estado-atual.md` (ou use `/sf:continuar`). Os demais documentos, só quando a etapa pedir.

## Documentos (fonte única por assunto)
| Assunto | Documento |
|---|---|
| Onde estamos, próximo passo, pendências, problemas | `docs/estado-atual.md` |
| Stack, páginas/seções, hospedagem, **decisões** | `docs/arquitetura.md` |
| Pedido original do cliente (não editar) | `docs/briefing.md` |
| Produto: público, objetivo, tom, restrições | `PRODUCT.md` (Impeccable) |
| Sistema visual aprovado: tokens, tipografia, breakpoints, componentes | `DESIGN.md` (Impeccable) |
| Referências visuais (evidências) | `docs/referencias-visuais.md` + `docs/referencias/` |

## Comandos
`/sf:continuar` · `/sf:validar` · `/sf:revisar` · `/sf:salvar` · `/sf:finalizar` · `/sf:design-ref` · `/impeccable <comando>`

## Regras
1. **Isolamento:** este repositório contém só este site. Não leia, copie nem reutilize docs, assets, decisões ou código de outros sites nem da SiteFactory.
2. **Mobile-first:** nenhuma página está pronta sem validação em 375 / 768 / 1440 px.
3. **Referência antes de design.** Nunca invente URL, dado ou conteúdo do cliente. Texto provisório deve ser marcado como `[PLACEHOLDER]`.
4. **Memória em arquivo:** ao fim de cada etapa, rode `/sf:salvar`. Se não está nos docs, não foi decidido.
5. **Economia:** navegue o código com o MCP `token-savior` e leia arquivos de forma seletiva. Acione especialistas só quando necessário.
6. **Segurança:** nada de segredos no git; `.env` fica fora do repositório (use `.env.example`).

## Instruções do framework (geradas pela stack)
## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
