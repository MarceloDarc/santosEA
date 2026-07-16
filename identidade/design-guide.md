# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

**Origem das cores:** extraídas pixel a pixel de `identidade/logo.svg` no /instalar. São os valores reais do arquivo, não aproximação.

---

## Cores

- **Fundo principal:** `#000000` — preto. É o campo do escudo e domina a arte da logo.

- **Cor de destaque / CTA:** `#BC9023` — dourado. Cor mais presente da marca depois do preto (~48% da arte colorida): borda do escudo e o "S". É a assinatura visual.

- **Texto principal:** `#FFFFFF` — branco. É como "SANTOS" aparece na faixa.

- **Vinho `#7D040E`:** **cor estrutural da marca, a par do dourado.** Usar como **atmosfera** — brasa radial no fundo, sombra colorida, degradê — nunca como bloco chapado de cor.

  > **Histórico dessa linha (importante, pra não errar de novo):** eu registrei primeiro que o vinho era "fundo alternativo/cards", extraindo do arquivo do logo. Depois "corrigi" pra "exclusivo do logo, não entra em peça", ao ver que nenhum material de marketing usava. **Essa segunda versão também estava errada, e pelo motivo mais sutil:** material antigo mostra o que *foi feito*, não o que *pode ser feito*. Eu tinha transformado observação de hábito em regra de marca. O Marc (a agência) decidiu em 15/07/2026 que o vinho entra — e ele está certo: preto + dourado sozinho é o clichê visual de toda estética e barbearia. O vinho é o que individualiza a Santos, porque vem do brasão dela.

  **Escala prática:** `#7D040E` puro pra detalhe e degradê; `#2a0508` como fundo profundo; `rgba(125,4,14,.2–.6)` pras brasas radiais.

- **Cor proibida:** *(não definido por você — sugestão minha, confirma ou corrige)* qualquer cor fora dessas quatro. Azul, verde e neon quebram a marca. O contraste da casa é dourado sobre preto.

**Paleta completa:**

| Cor | Hex | Papel na logo |
|---|---|---|
| Preto | `#000000` | campo do escudo |
| Dourado | `#BC9023` | borda + "S" |
| Vinho | `#7D040E` | faixa do topo |
| Branco | `#FFFFFF` | texto "SANTOS" |

---

## Tipografia

- **Títulos e destaques:** *(não identificável)* — o texto da logo foi vetorizado (virou curva), então o nome da fonte não existe mais dentro do arquivo. Não chutei. Se você tiver o arquivo original do designer ou souber o nome, edita aqui.

- **Corpo, subtítulos e botões:** *(a definir junto com a de título)*

- **Peso do título:** pesado. No brasão, "SANTOS" é bold condensado, caixa alta, levemente inclinado — fonte de tipo esportivo. Essa é a leitura visual da logo, não o nome da fonte.

---

## Estilo geral

Escuro, metálico, contraste alto. Dourado sobre preto é o par que carrega a marca. Estética de brasão/escudo — a marca se apresenta como selo de aprovação, não como logotipo corrido. Combina com foto de carro escuro, reflexo, detalhe de superfície.

## Sistema já em uso (observado nas peças reais, 15/07/2026)

A Santos **já tem uma linguagem visual consistente** rodando no Instagram. O site estende ela — não inventa outra. O padrão de toda peça:

- **Fundo:** foto escura do processo, com escurecimento na base pro texto respirar
- **Título:** condensada bold, caixa alta, branco, alinhado à esquerda, na base da peça
- **Fio dourado** curto separando título e subtítulo
- **Subtítulo:** uma linha, sans humanista, peso leve, caixa alta ou frase curta
- **CTA:** botão retangular vazado, contorno dourado fino, texto branco caixa alta — "AGENDE SUA AVALIAÇÃO"
- **Formato:** 1080×1350 (retrato de Instagram)

Variação vista no slide de CTA: **degradê dourado aplicado na palavra-chave** do título ("BORA **VITRIFICAR** SEU CARRO?").

**Repertório de título já usado:** "VITRIFICAÇÃO PREMIUM", "APLICAÇÃO DE PELÍCULA PPF", "BRILHO", "BORA VITRIFICAR SEU CARRO?"

**Subtítulos já usados:** "PROTEJA E VALORIZE A SUA NAVE.", "PRESERVE O BRILHO. EVITE MARCAS. VALORIZE O SEU CARRO.", "realça a cor da pintura e traz um efeito espelhado."

> Nota de tom: "PROTEJA E VALORIZE A SUA NAVE" é a melhor linha do conjunto — tem a gíria da casa. Já "PRESERVE O BRILHO. EVITE MARCAS. VALORIZE O SEU CARRO." é a fórmula genérica que `preferencias.md` manda evitar. As duas convivem hoje; a direção acordada é puxar pra primeira.

## Fotografia

O material bruto é **bom** — foto escura, de processo, com mão na massa e reflexo. É o ativo mais forte da marca depois do brasão. Mantém: baixa luz, superfície molhada/espelhada, close de processo, equipe trabalhando (o uniforme tem o brasão bordado).

**Limitação conhecida:** todo o material fotográfico está em 1080×1350 (retrato). Serve pra galeria e card; **não serve pro hero do site**, que pede horizontal. Pro topo, usar vídeo.

---

## Elementos-chave

- Bordas: dourado `#BC9023`, finas
- Border-radius dos cards: *(a definir)*
- Botões: fundo dourado `#BC9023` com texto preto, ou contorno dourado sobre preto
- Sombras: *(a definir)*

---

## O que NUNCA fazer

- Fundo claro como padrão — a marca vive no escuro
- **Preto + dourado sozinhos.** É o clichê visual do setor inteiro — toda estética, toda barbearia, toda hamburgueria artesanal. Sem o vinho, a marca vira genérica e "amarela demais" (crítica do Marc, 15/07/2026). O vinho é o antídoto.
- Dourado chapado sobre vinho chapado (contraste ruim, os dois são médios/escuros) — o dourado quer preto atrás. Vinho como brasa **atrás** do preto funciona; vinho como fundo **direto** do dourado, não.
- Distorcer ou recortar o escudo; ele é selo, usa inteiro
- Vinho chapado em área grande — ele é atmosfera e faixa, não tinta de parede

## Padrão do site (implementado em `site/index.html`, 15/07/2026)

- **Brasa de vinho:** três `radial-gradient` de baixa opacidade no `body`, fixos — canto superior direito, meio-esquerda, base direita. Dão profundidade sem pesar.
- **Faixa de prova = faixa do brasão.** A barra de números (10+ anos, 1.000+ carros, 4,8) usa fundo vinho com números em dourado — mesma estrutura da faixa vinho do escudo, que carrega "SANTOS" em branco. Não foi planejado; foi reconhecido depois. É o que faz a página parecer da Santos e não de qualquer marca escura.
- **Degradê dourado na palavra-chave:** `linear-gradient(178deg, #e3bc55, #BC9023 52%, #8a6519)` com `background-clip:text`. Direto do carrossel "BORA **VITRIFICAR**" da própria Santos.
- **Fio divisor:** degradê dourado → vinho, 64×2px.
- **Fotos:** brasa vinho desfocada por trás, sombra projetada preta + halo vinho, e overlay subindo em `rgba(26,2,3,…)` — nunca preto puro.

---

## Logo

- **Arquivo:** `identidade/logo.svg`
- **Formato real:** apesar da extensão `.svg`, é um **PNG de 1254×1254 embutido numa casca SVG** — não é vetor de verdade. Escala bem até ~1250px e depois pixeliza. Se você tiver o vetor original do designer, vale trocar.
- **Versão pra fundo escuro:** não precisa — a logo já é feita pra fundo escuro
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs

---

## Observações adicionais

O 🛡️ que você usa nas legendas do Insta é coerente com a marca — é o escudo do brasão. Manter.
