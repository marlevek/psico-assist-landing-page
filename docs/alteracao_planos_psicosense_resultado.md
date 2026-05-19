# Resultado da alteração de planos - PsicoSense

## Fonte consultada

- Arquivo solicitado: `docs/alteracao_planos_psicosense.md`
- Status: não encontrado neste repositório.
- Arquivo usado como referência: `docs/planos.md`

## Arquivos alterados

- `src/components/Plans.js`
- `docs/alteracao_planos_psicosense_resultado.md`

## Onde os preços e planos aparecem

### `src/components/Plans.js`

Os planos estão hardcoded em um array/objeto local dentro do componente React `Plans`.

Tipo encontrado:
- Hardcoded em componente React: Sim
- Array/objeto de configuração local: Sim
- Arquivo JSON: Não
- API/backend: Não encontrado nesta landing
- Links manuais do Asaas: Não encontrado
- Rota/link interno de checkout/signup: Sim

Links atuais dos botões:
- Plano Gratuito: `https://app.psicosense.com.br/accounts/login/`
- Psicólogo Individual: `https://app.psicosense.com.br/accounts/signup/?plano=profissional`
- Estudante: `https://app.psicosense.com.br/accounts/signup/?plano=estudante`

Não existe botão com texto literal "Assinar" na landing. O botão equivalente do plano Psicólogo Individual é "Começar agora" e aponta para o app interno do PsicoSense com o slug/query `plano=profissional`.

## Preços antigos encontrados

- `R$ 89` no plano Psicólogo Individual em `src/components/Plans.js`
- `R$ 49` no plano Estudante em `src/components/Plans.js`

Também existem menções documentais em `docs/planos.md`:
- `R$ 89/mês` como preço antigo do Psicólogo Individual e possível preço futuro do plano Profissional Plus
- `R$ 49/mês` como preço antigo do Estudante
- `R$ 59/mês` e `R$ 35/mês` como novos preços esperados

## Preços novos aplicados

- Plano Gratuito: `R$ 0/mês`
- Plano Estudante: `R$ 35/mês`
- Plano Psicólogo Individual: `R$ 59/mês`

## Textos e benefícios atualizados

### Plano Gratuito

- Atualizado para `Plano Gratuito`
- Atualizado para `R$ 0/mês`
- Texto ajustado para conhecer o PsicoSense e testar recursos principais com limite mensal
- Benefícios ajustados para acesso inicial, limite reduzido de gerações, modelos básicos, materiais de exemplo e sem cartão de crédito

### Plano Estudante

- Atualizado para `R$ 35/mês`
- Mantido limite de até 50 gerações por mês
- Mantido suporte básico
- Texto reposicionado para estudo, estágio, casos simulados e materiais com apoio de IA
- Adicionada menção a atualizações gratuitas

### Plano Psicólogo Individual

- Atualizado para `R$ 59/mês`
- Adicionado selo discreto: `Preço de lançamento`
- Texto atualizado para preço especial de lançamento
- Removido `Suporte prioritário`
- Adicionado `Suporte padrão`
- Mantido `Documentos salvos ilimitados`
- Mantidas promessas sem indicar IA ilimitada

## Observação adicionada

Foi adicionada a observação pequena:

> Valor especial para os primeiros assinantes. Novos planos poderão ser criados conforme novos recursos forem liberados.

## Links do Asaas encontrados

Não foram encontrados links manuais do Asaas nesta landing.

Busca realizada por:
- `Asaas`
- `checkout`
- `accounts/signup`
- `plano=`
- termos relacionados a assinatura/billing

## Backend precisa ser alterado?

Sim, provavelmente.

Motivo: a landing envia o usuário para o app interno do PsicoSense:

- `https://app.psicosense.com.br/accounts/signup/?plano=profissional`
- `https://app.psicosense.com.br/accounts/signup/?plano=estudante`

Como não há link manual do Asaas na landing, o preço real deve estar definido no app/backend/billing ou em uma integração posterior ao signup. Este repositório aparenta conter apenas a landing React, então backend/billing não foi alterado neste passo.

## Integração backend/Asaas a revisar depois

Arquivo encontrado na landing:
- `src/components/Plans.js`

Rotas/links usados:
- `https://app.psicosense.com.br/accounts/signup/?plano=profissional`
- `https://app.psicosense.com.br/accounts/signup/?plano=estudante`

Slugs/queries de plano:
- `profissional`
- `estudante`

Valores anteriores na landing:
- `profissional`: `R$ 89`
- `estudante`: `R$ 49`

Valores novos na landing:
- `profissional`: `R$ 59`
- `estudante`: `R$ 35`

Onde precisa alterar depois:
- Backend/app do PsicoSense em `app.psicosense.com.br`
- Configuração de billing/checkout ligada aos slugs `profissional` e `estudante`
- Integração Asaas, se o backend criar cobranças, assinaturas ou links de pagamento a partir desses slugs

## Variáveis de ambiente, seeds e migrations

- Variáveis de ambiente: nenhuma encontrada ou alterada neste repositório.
- Seed/migration de planos: não encontrada neste repositório.
- Billing/backend: não encontrado neste repositório.

## Comandos executados

- `Get-Content docs/alteracao_planos_psicosense.md`
- `rg -n "R\$ 89|R\$ 59|R\$ 49|R\$ 35|Psicólogo Individual|Psicologo Individual|Estudante|Gratuito|suporte prioritário|suporte prioritario|documentos ilimitados|gerações por mês|geracoes por mes|Asaas|checkout|assinatura" .`
- `Get-ChildItem -Force`
- `rg --files`
- `Get-Content docs/planos.md`
- `Get-Content src/components/Plans.js`
- `Get-Content src/components/PlanCard.js`
- `Get-Content package.json`
- `Get-Content src/App.js`
- `rg -n "PlanCard|<Plans|Plans" src`
- `rg -n "app\.psicosense|accounts/signup|accounts/login|plano=|asaas|checkout|billing|subscription|assinatura" src public docs package.json README.md`
- `git status --short`
- `rg -n "Assinar|Começar agora|Comecar agora|Asaas|checkout|accounts/signup|plano=|R\$ 89|R\$ 59|R\$ 49|R\$ 35|suporte prioritário|suporte prioritario|Documentos salvos ilimitados|Preço de lançamento" src public docs package.json README.md`
- `git diff -- src/components/Plans.js`
- `npm run build`

## Comandos não executados

- `npm install`: não executado porque `node_modules` e `package-lock.json` já existem.
- `npm run lint`: não executado porque não existe script `lint` no `package.json`.

## Erros encontrados

- `docs/alteracao_planos_psicosense.md` não existe neste repositório.
- `npm run build` compilou com sucesso.
- Avisos do build: `baseline-browser-mapping` e `caniuse-lite` estão desatualizados. Não bloqueiam a build.

## Próximos passos

1. Revisar no app/backend do PsicoSense os slugs `profissional` e `estudante`.
2. Confirmar onde o backend cria checkout, assinatura ou cobrança no Asaas.
3. Atualizar o valor real do plano `profissional` para `R$ 59/mês`.
4. Atualizar o valor real do plano `estudante` para `R$ 35/mês`.
5. Verificar se existem links de pagamento recorrente do Asaas antigos e recriá-los ou ajustar a configuração segura correspondente.
