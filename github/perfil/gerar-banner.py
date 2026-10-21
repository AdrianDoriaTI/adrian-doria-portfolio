# Gera os banners animados do README de perfil (claro e escuro): python gerar-banner.py
# Mesma assinatura do site: fluxo Negócio → Dados → Automação & IA, cores do DESIGN.md (convertidas para hex).
from pathlib import Path

TEMAS = {
    'light': dict(bg='#f7fafc', surface='#ffffff', ink='#141c2b', muted='#55627a', line='#dde5ee', accent='#7cc8ec', accentInk='#1f63a8', soft='#e3f2fb', dot='#1f63a8'),
    'dark': dict(bg='#0b0f15', surface='#121821', ink='#eef3f8', muted='#a2afc2', line='#252e3b', accent='#82cdf0', accentInk='#9fd6f2', soft='#13283a', dot='#9fd6f2'),
}
NOS = [
    ('Negócio', 'Administrativo e financeiro', 'Capex · Opex · SAP'),
    ('Dados', 'Análise e indicadores', 'Excel · Power BI · SQL'),
    ('Automação &amp; IA', 'Menos trabalho manual', 'n8n · Agentes · Claude'),
]
FONTE = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
W, H = 1200, 360
NX, NW, NY, NH = [500, 746, 992], 190, 118, 124


def banner(c):
    nos, fios = [], []
    for i, (titulo, sub, itens) in enumerate(NOS):
        x, d = NX[i], 0.4 + i * 0.7
        destaque = i == len(NOS) - 1
        nos.append(f'''<g class="node" style="animation-delay:{d}s">
  <rect x="{x}" y="{NY}" width="{NW}" height="{NH}" rx="16" fill="{c['surface']}" stroke="{c['accent'] if destaque else c['line']}" stroke-width="{2 if destaque else 1.2}"/>
  <circle cx="{x}" cy="{NY + NH / 2}" r="5" fill="{c['bg']}" stroke="{c['accentInk']}" stroke-width="1.6"/>
  <circle cx="{x + NW}" cy="{NY + NH / 2}" r="5" fill="{c['bg']}" stroke="{c['accentInk']}" stroke-width="1.6"/>
  <text x="{x + 18}" y="{NY + 38}" font-size="17.5" font-weight="700" fill="{c['ink']}">{titulo}</text>
  <text x="{x + 18}" y="{NY + 60}" font-size="12.5" fill="{c['muted']}">{sub}</text>
  <text x="{x + 18}" y="{NY + 98}" font-size="12.5" font-weight="600" fill="{c['accentInk']}">{itens}</text>
  <g class="ok" style="animation-delay:{d + 0.5}s"><circle cx="{x + NW - 18}" cy="{NY + 18}" r="10" fill="{c['accent']}"/><path d="M{x + NW - 23} {NY + 18} l3.5 3.5 l6.5 -7" fill="none" stroke="{c['bg']}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>
</g>''')
    for i in range(len(NOS) - 1):
        x1, x2, y = NX[i] + NW + 6, NX[i + 1] - 6, NY + NH / 2
        L, d = x2 - x1, 0.4 + i * 0.7 + 0.45
        fios.append(f'''<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{c['line']}" stroke-width="2"/>
<line class="wire" x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{c['accent']}" stroke-width="2.4" stroke-dasharray="{L}" stroke-dashoffset="{L}" style="animation-delay:{d}s"/>
<circle class="pulse" cx="{x1}" cy="{y}" r="3.6" fill="{c['accentInk']}" style="animation-delay:{2.6 + i * 0.6}s;--dx:{L}px"/>''')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Adrian Doria. Entendo o negócio. Automatizo o trabalho. Negócio, Dados, Automação e IA.">
<defs>
  <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="{c['dot']}" fill-opacity=".16"/></pattern>
  <radialGradient id="fade" cx="78%" cy="50%" r="55%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <mask id="m"><rect width="{W}" height="{H}" fill="url(#fade)"/></mask>
</defs>
<style>
  text {{ font-family: {FONTE}; }}
  .node {{ opacity: 0; animation: in .8s cubic-bezier(.16,1,.3,1) forwards; }}
  .ok {{ opacity: 0; transform-box: fill-box; transform-origin: center; animation: pop .5s cubic-bezier(.16,1,.3,1) forwards; }}
  .wire {{ animation: draw .6s ease-out forwards; }}
  .pulse {{ opacity: 0; animation: run 1.8s ease-in-out infinite; }}
  .t1 {{ opacity: 0; animation: in .9s cubic-bezier(.16,1,.3,1) .05s forwards; }}
  .t2 {{ opacity: 0; animation: in .9s cubic-bezier(.16,1,.3,1) .2s forwards; }}
  @keyframes in {{ from {{ opacity: 0; transform: translateY(10px); }} to {{ opacity: 1; transform: none; }} }}
  @keyframes pop {{ from {{ opacity: 0; transform: scale(.4); }} to {{ opacity: 1; transform: none; }} }}
  @keyframes draw {{ to {{ stroke-dashoffset: 0; }} }}
  @keyframes run {{ 0% {{ opacity: 0; transform: translateX(0); }} 15% {{ opacity: 1; }} 85% {{ opacity: 1; }} 100% {{ opacity: 0; transform: translateX(var(--dx)); }} }}
  @media (prefers-reduced-motion: reduce) {{ .node, .ok, .t1, .t2 {{ animation: none; opacity: 1; }} .wire {{ animation: none; stroke-dashoffset: 0; }} .pulse {{ display: none; }} }}
</style>
<rect width="{W}" height="{H}" rx="24" fill="{c['bg']}"/>
<rect width="{W}" height="{H}" fill="url(#dots)" mask="url(#m)"/>
<g class="t1"><text x="56" y="150" font-size="56" font-weight="700" letter-spacing="-1.6" fill="{c['ink']}">Adrian Doria</text></g>
<g class="t2">
  <text x="58" y="198" font-size="24" fill="{c['muted']}">Entendo o negócio.</text>
  <text x="58" y="230" font-size="24" font-weight="600" fill="{c['ink']}">Automatizo o trabalho.</text>
  <rect x="58" y="258" width="300" height="30" rx="15" fill="{c['soft']}"/>
  <text x="74" y="278" font-size="13.5" font-weight="600" fill="{c['accentInk']}">ADM e Financeiro  ·  Automação e IA</text>
</g>
{''.join(fios)}
{''.join(nos)}
</svg>'''


pasta = Path(__file__).parent / 'img'
pasta.mkdir(exist_ok=True)
for nome, cores in TEMAS.items():
    (pasta / f'banner-{nome}.svg').write_text(banner(cores), encoding='utf8')
print('banners gerados em', pasta)
