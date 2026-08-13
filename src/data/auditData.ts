import { AuditPoint } from '../types';

export const AUDIT_SUMMARY = {
  currentSiteScore: 42, // de 100
  optimizedSiteScore: 97,
  estimatedConversionBoost: '+340%',
  abandonmentRateBefore: '76% no fluxo de Direct do Instagram',
  abandonmentRateAfter: '18% com WhatsApp 1-Clique e Sacola Interativa',
  primaryStrengths: [
    'Identidade visual vintage anos 60 marcante e sofisticada na paleta botânica (#6e9167, #c7d1af, #96b49c, #96c3a6).',
    'Artesanato autêntico focado em Bolsas estruturadas, Roupas boho/mod e Decoração acolhedora.',
    'Bordas com acabamento orgânico, selos retrô e tipografia vintage editorial.'
  ]
};

export const AUDIT_POINTS: AuditPoint[] = [
  {
    id: 'ponto-1',
    category: 'CRO',
    title: '1. Dependência Exclusiva de DM do Instagram (Fricção Extrema)',
    impactScore: 'Crítico',
    conversionLossRate: '~55% dos interessados desistem antes de enviar mensagem',
    currentIssue: 'O botão "Pedir" e todos os CTAs apenas abriam o perfil @crochedacleu.pravoce no navegador/app sem indicar qual produto o cliente queria. O cliente precisava digitar tudo do zero, tirar print ou explicar a peça.',
    solutionApplied: 'Botão "Pedir no WhatsApp com 1 Clique" e Mensagem Pré-formatada Inteligente contendo nome da peça, cor selecionada, tamanho, valor e código do item. Adicionamos também opção de Direct assistido.',
    recommendedNextSteps: [
      'Configurar mensagem de saudação automática no WhatsApp Business com menu rápido.',
      'Utilizar tags no WhatsApp Business para separar "Em produção", "Aguardando pagamento" e "Enviado".'
    ]
  },
  {
    id: 'ponto-2',
    category: 'UX',
    title: '2. Ausência de Imagens Reais dos Produtos (Placeholders "Foto em Breve")',
    impactScore: 'Crítico',
    conversionLossRate: '~70% de perda de confiança e clique em compra',
    currentIssue: 'Todos os cards de produtos exibiam caixas cinzas "Foto em breve" com ícone genérico. Em artesanato e moda, 90% da decisão de compra é visual e sensorial (textura do ponto, caimento, proporção).',
    solutionApplied: 'Implementação de catálogo rico com fotos reais em alta definição de bolsas, roupas e itens de decoração em crochê, detalhes de tramas botânicas e etiquetas de destaque.',
    recommendedNextSteps: [
      'Fotografar peças sob luz natural (pela manhã ou fim de tarde).',
      'Incluir fotos mostrando objetos cotidianos ao lado (celular, caneca) para noção imediata de escala.'
    ]
  },
  {
    id: 'ponto-3',
    category: 'CRO',
    title: '3. Falta de Prova Social e Avaliações de Clientes (Social Proof)',
    impactScore: 'Alto',
    conversionLossRate: '~35% de hesitação por receio de qualidade ou prazo',
    currentIssue: 'O site não continha nenhum depoimento, fotos de clientes recebendo as peças, nota de avaliação ou selos de satisfação. Para peças feitas sob encomenda com pagamento antecipado, a confiança é o fator determinante.',
    solutionApplied: 'Seção dedicada de Depoimentos com fotos reais, selo de "Cliente Verificado", nota média 5.0 estrelas e relatos sobre cheirinho do pacote, pontualidade e acabamento.',
    recommendedNextSteps: [
      'Criar no Instagram um destaque fixo "Depoimentos" e "Unboxing".',
      'Oferecer 5% de desconto no próximo pedido para clientes que enviarem foto ou marcarem no story.'
    ]
  },
  {
    id: 'ponto-4',
    category: 'UX',
    title: '4. Falta de Transparência sobre Pagamentos, Frete e Prazos',
    impactScore: 'Alto',
    conversionLossRate: '~40% de atrito com perguntas repetitivas no atendimento',
    currentIssue: 'O texto do FAQ dizia apenas "a forma de pagamento é combinada diretamente com a Cleu no Direct" e "o prazo varia". Essa indefinição gerava insegurança e sobrecarregava a Cleu.',
    solutionApplied: 'Simulador de Frete transparente com opções de envio (Sedex, PAC, Retirada), badge de pagamento facilitado (Pix com 5% de desconto, Cartão em até 3x sem juros) e indicação clara de dias úteis de produção por peça.',
    recommendedNextSteps: [
      'Disponibilizar chave Pix cópia-e-cola e link Mercado Pago / InfinitePay para cartão sem maquininha física.'
    ]
  },
  {
    id: 'ponto-5',
    category: 'CRO',
    title: '5. Inexistência de Sacola / Carrinho Multi-Itens',
    impactScore: 'Alto',
    conversionLossRate: '~25% de perda em Ticket Médio (compra de peças adicionais)',
    currentIssue: 'Um cliente que quisesse um jogo americano + uma bolsa precisaria negociar cada item separadamente ou lembrar de citar ambos na mensagem.',
    solutionApplied: 'Sacola de Encomendas flutuante que calcula o total estimado, permite adicionar embalagem de presente artesanal com cartão manuscrito e envia a lista completa consolidada no WhatsApp.',
    recommendedNextSteps: [
      'Sugerir "Compre junto" (ex: porta-copos floral ao adicionar o jogo americano).'
    ]
  },
  {
    id: 'ponto-6',
    category: 'UX',
    title: '6. Falta de um Montador de Peças Personalizadas Sob Medida',
    impactScore: 'Médio',
    conversionLossRate: '~30% de clientes que queriam outra cor ou tamanho e não sabiam como pedir',
    currentIssue: 'A página apenas dizia "pensar em algo personalizado" sem formulário guiado ou seletor de paletas de cor.',
    solutionApplied: 'Ferramenta interativa "Monte sua Encomenda Anos 60": o cliente escolhe a categoria (Bolsas, Roupas, Decoração), paleta botânica vintage (#6e9167, #c7d1af, #96b49c, #96c3a6), descreve a ideia e gera orçamento pronto no WhatsApp.',
    recommendedNextSteps: [
      'Disponibilizar uma tabela de fios/cores disponíveis no estoque atual.'
    ]
  },
  {
    id: 'ponto-7',
    category: 'Mobile',
    title: '7. Otimização Mobile e Sticky Action Bar',
    impactScore: 'Crítico',
    conversionLossRate: '~45% de visitantes no celular que não encontram botão de ação rápida',
    currentIssue: 'Usuários do Instagram navegam 92% no celular pelo navegador interno do app. O site antigo dependia de botões pequenos e navegação manual entre páginas.',
    solutionApplied: 'Barra inferior fixa de ação no celular com botão "WhatsApp Direto da Cleu" + Contador da Sacola e navegação fluida integrada.',
    recommendedNextSteps: [
      'Garantir link na bio do Instagram encurtado ou direto para a nova versão do site.'
    ]
  }
];
