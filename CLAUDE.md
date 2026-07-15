# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---
---

# Santos Estética Automotiva

> Daqui pra baixo: regras específicas do negócio, escritas pelo `/instalar`.
> Perfil aplicado: **Empresa** (moldado em `templates/perfis/claude-md-empresa.md`).

## O que é esse workspace

A operação digital da Santos Estética Automotiva. O trabalho na oficina acontece na oficina; aqui é onde o negócio aparece pra fora — conteúdo, marca e captação.

**Estrutura de pastas:**
- `_memoria/` — quem é a empresa, como falamos, foco atual
- `identidade/` — marca aplicada em tudo que o sistema gera
- `marketing/` — campanhas, conteúdo, mídia paga *(o centro de gravidade desse workspace hoje)*
- `saidas/` — documentos pontuais
- `dados/` — arquivos a analisar
- `scripts/` — utilitários do sistema
- `templates/` — moldes do MazyOS

*(O template de Empresa prevê pastas de comercial, financeiro, RH e operações. Não foram criadas: a empresa tem 5 pessoas e o dono toca o geral — seriam setores inventados. Criar quando existir necessidade real.)*

## Sobre a empresa

Santos Estética Automotiva é uma empresa de serviços de estética automotiva. Entrega da lavagem básica à premium, vitrificação completa, PPF (película de proteção de pintura), polimento técnico, hidratação e proteção de bancos, e reparos/repinturas.

Somos 5 pessoas: 2 no polimento, 1 na lavagem, 1 em reparos e repinturas, e o dono no geral.

## Quem atende

Gente que liga de verdade pro carro. O corte é o cuidado do dono, não a faixa do veículo — na mesma semana entram Mercedes CLA 45 AMG e Porsche 991 pra PPF e vitrificação, e um Tiguan 2016 pro mesmo serviço. O Tiguan conta tanto quanto a Porsche.

## Equipe e frentes

- **Produção — polimento:** 2 pessoas
- **Produção — lavagem:** 1 pessoa (é também a porta de entrada comercial)
- **Produção — reparos e repinturas:** 1 pessoa
- **Geral — dono:** marca, digital, orçamento, tudo que sobra

## O que mais fazemos aqui

- Ideias e pauta de post *(a dor semanal — ver `_memoria/estrategia.md`)*
- Conteúdo de PPF e vitrificação — os serviços de maior retorno
- Conteúdo de lavagem — topo de funil, traz o cliente pro upsell

## Tom de voz

Frases curtas e batidas. Carro é "nave", a assinatura é "padrão Santos", emoji fecha linha (🛡️ do brasão). A fórmula acordada: **abertura com a gíria dele, miolo com processo concreto, assinatura "padrão Santos"**.

Evitar: cliché e qualquer coisa com cara de IA. Nada de "cada detalhe importa", "quem não abre mão da excelência", "seu carro merece o melhor". Se o concorrente pode copiar e colar sem trocar uma palavra, não é padrão Santos. Na dúvida entre elogiar o resultado e descrever o processo — **descreve o processo**, o resultado se vende sozinho na foto.

Detalhe completo, com o exemplo real: `_memoria/preferencias.md`.

## Foco atual

Retomada digital. O negócio parou no digital e precisa reconquistar volume de mensagens. Ver `_memoria/estrategia.md` antes de sugerir prioridade.

## Regras do negócio

- Conteúdo e campanhas em `marketing/`
- Documentos pontuais em `saidas/`
- Usar o carro real da agenda quando houver — especificidade é a marca ("PPF frontal no CLA 45", não "proteção premium")
- Lavagem não é serviço menor: é topo de funil e merece conteúdo

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Google Ads
- [ ] Meta Ads
- [ ] Slack

*(Marcar conforme for instalando os MCPs)*
