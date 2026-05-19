# Alteração de Planos e Preços — PsicoSense

## Objetivo

Atualizar os planos do PsicoSense na landing React e alinhar os preços com o backend/billing, sem quebrar checkout, Asaas, assinaturas futuras ou plano gratuito.

## Decisão comercial

Reposicionar os valores como preço especial de lançamento.

## Planos novos

### Plano Gratuito

Preço: R$ 0/mês

Descrição:
Para conhecer o PsicoSense e testar os recursos principais com limite mensal.

Benefícios:
- Acesso inicial às áreas de apoio com IA
- Limite reduzido de gerações por mês
- Modelos básicos de documentos
- Materiais de exemplo
- Sem cartão de crédito, se essa regra já existir no projeto

### Plano Estudante

Preço antigo: R$ 49/mês  
Novo preço: R$ 35/mês

Descrição:
Para estudantes de Psicologia que querem organizar estudos, estágio, casos simulados e materiais com apoio de IA.

Benefícios:
- 4 áreas de apoio com IA para estudo e estágio
- Até 50 gerações por mês entre casos, atividades e materiais
- Exemplos de casos clínicos para estudo
- Materiais educativos e fichas para imprimir
- Suporte básico
- Atualizações gratuitas

Observação:
Este plano deve ser posicionado como apoio para estudo, estágio e organização acadêmica, não como plano completo de consultório.

### Plano Psicólogo Individual

Preço antigo: R$ 89/mês  
Novo preço: R$ 59/mês

Descrição:
Preço especial de lançamento para psicólogos autônomos que querem organizar atendimentos, documentos, agenda e rotina clínica com apoio de IA.

Benefícios:
- Todas as 4 áreas de apoio com IA
- Documentos salvos ilimitados
- Agenda e organização de sessões
- Apoio para documentos psicológicos
- Exportação em PDF
- Financeiro básico
- Backup automático
- Atualizações gratuitas
- Suporte padrão

Remover do plano Psicólogo Individual:
- Suporte prioritário

Motivo:
Suporte prioritário deve ficar reservado para plano superior futuro.

## Plano futuro

### Profissional Plus

Preço sugerido futuro: R$ 89/mês ou R$ 99/mês

Este plano ainda não deve ser implementado agora, apenas documentado como futuro.

Possíveis recursos:
- Portal do paciente completo
- Lembretes automáticos
- Confirmação de sessão
- Remarcação
- Financeiro avançado
- Pacotes de sessões
- Suporte prioritário
- Mais gerações com IA
- WhatsApp, quando existir integração oficial

## Regras de texto

Usar:
- "Preço especial de lançamento"
- "Valor especial para os primeiros assinantes"
- "Novos planos poderão ser criados conforme novos recursos forem liberados"

Não usar:
- "barato"
- "promoção desesperada"
- "IA ilimitada"
- "suporte prioritário" no plano Individual

## Regras técnicas

1. Atualizar a landing React.
2. Procurar os cards de planos/preços.
3. Atualizar textos e valores.
4. Verificar se os preços também existem em constantes, JSON, arrays, arquivos de configuração ou componentes.
5. Verificar se os botões de checkout usam slugs, links do Asaas ou rotas internas.
6. Não alterar o visual geral da landing além do necessário.
7. Não quebrar o plano gratuito.
8. Não alterar billing/backend sem antes mapear onde os planos são definidos.
9. Caso os preços estejam duplicados no frontend e backend, apontar todos os locais.
10. Caso existam links manuais do Asaas, listar quais links precisam ser editados ou recriados.
11. Caso o checkout seja dinâmico pelo backend, atualizar os valores no backend/billing, não apenas na landing.

## Resultado esperado

Ao final, informar:

- Arquivos React alterados
- Componentes de planos encontrados
- Valores antigos removidos
- Valores novos aplicados
- Se existem links manuais do Asaas
- Se existe integração dinâmica com Asaas
- Se precisa alterar backend/billing
- Se precisa alterar variáveis de ambiente
- Se precisa alterar seed/migration de planos
- Comandos para testar/buildar a landing