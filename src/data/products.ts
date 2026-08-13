import { Product } from '../types';
import { PRODUCT_IMAGES } from './productImages';

export const PRODUCTS: Product[] = [
  // --- BOLSAS E ACESSÓRIOS AUTORAIS DA CLEU ---
  {
    id: 'bolsa-elegance-chocolate-madeira',
    name: 'Bolsa Elegance Chocolate com Alça de Madeira',
    category: 'bolsas',
    price: 185,
    badge: 'Destaque Ateliê',
    shortDesc: 'Bolsa estruturada de mão em fio de malha cor chocolate com alça torneada em madeira nobre e chaveiro de coração.',
    fullDesc: 'Peça nobre tecida manualmente pela Cleu. Apresenta corpo plissado encorpado que mantém o formato impecável, alça circular em madeira maciça com encaixe anatômico, chaveiro de coração dourado em crochê e alça transversal em corrente metálica dourada.',
    dimensions: '32 cm (L) x 25 cm (A) x 10 cm (P) + alça de madeira 14 cm',
    materials: 'Fio de malha premium selecionado, alça torneada em madeira maciça, argolas e corrente em metal dourado com verniz cataforético',
    productionTime: '4 a 6 dias úteis',
    image: PRODUCT_IMAGES.bolsaChocolate,
    gallery: [
      PRODUCT_IMAGES.bolsaChocolate
    ],
    colors: [
      { name: 'Chocolate & Madeira Natural', hex: '#5c3a28' },
      { name: 'Verde Sálvia Botânico', hex: '#6e9167' },
      { name: 'Preto Clássico & Dourado', hex: '#222222' },
      { name: 'Terracota Quente', hex: '#b85d38' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 64,
    inStockDirect: true
  },
  {
    id: 'bolsa-margaridas-azul-petroleo',
    name: 'Bolsa Tiracolo Margaridas Azul Petróleo 60s',
    category: 'bolsas',
    price: 165,
    badge: 'Coleção Floral 60s',
    shortDesc: 'Bolsa transversal em quadradinhos da vovó com flores margaridas em alto relevo 3D.',
    fullDesc: 'Inspirada no charme Flower Power dos anos 60. Confeccionada com quadrados florais em azul petróleo profundo contrastando com pétalas brancas e miolo amarelo solar. Alça de ombro larga e confortável em ponto baixo fechado.',
    dimensions: '28 cm (L) x 30 cm (A) + alça tiracolo de 90 cm',
    materials: 'Fio nobre 100% algodão mercerizado egípcio e etiqueta em couro sintético gravada',
    productionTime: '5 a 7 dias úteis',
    image: PRODUCT_IMAGES.bolsaMargaridas,
    gallery: [
      PRODUCT_IMAGES.bolsaMargaridas
    ],
    colors: [
      { name: 'Azul Petróleo & Margaridas Brancas', hex: '#1b5b6e' },
      { name: 'Verde Sálvia & Margaridas', hex: '#6e9167' },
      { name: 'Cru Natural & Margaridas Amarelas', hex: '#c7d1af' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 47,
    inStockDirect: true
  },
  {
    id: 'mochila-girassol-vintage',
    name: 'Mochila Artesanal Girassol Vintage',
    category: 'bolsas',
    price: 220,
    badge: 'Mais Desejada',
    shortDesc: 'Mochila em crochê cru estruturado com grandes girassóis bordados, cordão com contas de madeira e fecho metálico.',
    fullDesc: 'A queridinha do ateliê. Trama encorpada em barbante cru com aplicação de quadradinhos de girassóis vibrantes na aba e no corpo. Fechamento seguro tipo saco com cordão de puxar, contas em madeira natural e alças de ombro com fechos mosquetões reguláveis.',
    dimensions: '30 cm (L) x 34 cm (A) x 12 cm (P)',
    materials: 'Barbante ecológico nº 6 100% algodão, contas em madeira maciça, mosquetões de metal reforçado',
    productionTime: '7 a 10 dias úteis',
    image: PRODUCT_IMAGES.mochilaGirassol,
    gallery: [
      PRODUCT_IMAGES.mochilaGirassol
    ],
    colors: [
      { name: 'Cru & Girassóis Amarelos', hex: '#c7d1af' },
      { name: 'Verde Musgo & Girassóis', hex: '#6e9167' },
      { name: 'Mostarda & Flores Vintage', hex: '#d99b26' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 53,
    inStockDirect: true
  },
  {
    id: 'minibag-porta-celular-chevron',
    name: 'Mini Bag Tiracolo Porta-Celular Chevron',
    category: 'acessorios',
    price: 58,
    badge: 'Prática & Charmosa',
    shortDesc: 'Bolsinha tiracolo porta-celular em desenho geométrico chevron com pingente artesanal de miçangas.',
    fullDesc: 'Perfeita para caminhadas, passeios rápidos e festivais. Comporta qualquer smartphone grande, cartões e chaves. Possui botão artesanal de fechamento frontal e alça longa trançada em ponto espinha.',
    dimensions: '14 cm (L) x 19 cm (A) + alça de 110 cm',
    materials: 'Fio de algodão torcido macio e pingente artesanal com argola e pérolas coloridas',
    productionTime: '1 a 3 dias úteis',
    image: PRODUCT_IMAGES.miniBagChevron,
    gallery: [
      PRODUCT_IMAGES.miniBagChevron
    ],
    colors: [
      { name: 'Mostarda, Laranja, Oliva & Cru', hex: '#d99b26' },
      { name: 'Tons de Verde Sálvia & Pistache', hex: '#6e9167' },
      { name: 'Tons Terrosos & Marrom', hex: '#8a4b2a' }
    ],
    isCustomizable: true,
    rating: 4.9,
    reviewCount: 39,
    inStockDirect: true
  },

  // --- DECORAÇÃO E MESA POSTA DA CLEU ---
  {
    id: 'passadeira-hexagonal-modular',
    name: 'Passadeira Modular Hexagonal Geométrica',
    category: 'decoracao',
    price: 195,
    badge: 'Geometria 60s',
    shortDesc: 'Caminho de mesa ou passadeira em módulos hexagonais entrelaçados com acabamento ondulado.',
    fullDesc: 'Design contemporâneo inspirado na geometria modular dos anos 60. Os hexágonos individuais são unidos ponto a ponto criando uma passadeira fluida e volumosa que emoldura mesas de jantar, aparadores e bancadas.',
    dimensions: '1,40 m de comprimento x 42 cm de largura (tamanho ajustável sob encomenda)',
    materials: 'Barbante ecológico premium nº 6 de alta densidade',
    productionTime: '6 a 8 dias úteis',
    image: PRODUCT_IMAGES.passadeiraHexagonal,
    gallery: [
      PRODUCT_IMAGES.passadeiraHexagonal
    ],
    colors: [
      { name: 'Paleta Rubi, Rosa & Cru', hex: '#b82b3d' },
      { name: 'Paleta Grafite, Chumbo & Branco', hex: '#333333' },
      { name: 'Paleta Verde Sálvia, Oliva & Cru', hex: '#6e9167' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 31,
    inStockDirect: true
  },
  {
    id: 'trilho-espiral-ondas-florais',
    name: 'Trilho de Mesa Espiral Ondas Florais com Rosas 3D',
    category: 'decoracao',
    price: 170,
    badge: 'Design Autoral',
    shortDesc: 'Caminho de mesa em desenho espiral em "S" com listras lilás e rosas com flores em alto relevo.',
    fullDesc: 'Um dos modelos mais exclusivos da Cleu. A trama espiralada cria um movimento sinuoso sobre a toalha ou tampo da mesa, valorizado por duas rosas em camadas tridimensionais com pétalas abertas e folhas verdes.',
    dimensions: '1,25 m de comprimento x 45 cm de largura',
    materials: 'Fios 100% algodão de alta maciez e durabilidade',
    productionTime: '5 a 7 dias úteis',
    image: PRODUCT_IMAGES.trilhoEspiral,
    gallery: [
      PRODUCT_IMAGES.trilhoEspiral
    ],
    colors: [
      { name: 'Lilás, Rosa Chiclete & Flores Rosas', hex: '#c48bb5' },
      { name: 'Verde Sálvia, Pistache & Flores Brancas', hex: '#6e9167' },
      { name: 'Cru Natural & Flores Amarelas', hex: '#c7d1af' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 26,
    inStockDirect: true
  },
  {
    id: 'jogo-sousplat-tulipas-amarelas',
    name: 'Jogo Sousplat & Porta-Guardanapos Tulipas Amarelas (Kit 4 un)',
    category: 'decoracao',
    price: 145,
    badge: 'Mesa Posta Botânica',
    shortDesc: 'Sousplats redondos em cru com botões de tulipas amarelas e ramos verdes com anéis porta-guardanapos.',
    fullDesc: 'Elegância e frescor botânico para suas refeições. A base em ponto alto circular em fio cru recebe o bordado contínuo dos caules verdes e os botões tridimensionais de tulipas amarelas, acompanhados de anéis de crochê para guardanapos.',
    dimensions: '38 cm de diâmetro cada sousplat + anéis de 5 cm',
    materials: 'Barbante ecológico nº 6 e fio mercerizado colorido nos botões florais',
    productionTime: '4 a 6 dias úteis',
    image: PRODUCT_IMAGES.sousplatTulipas,
    gallery: [
      PRODUCT_IMAGES.sousplatTulipas
    ],
    colors: [
      { name: 'Cru Natural com Tulipas Amarelas', hex: '#d99b26' },
      { name: 'Cru Natural com Tulipas Vermelhas', hex: '#b82b3d' },
      { name: 'Cru Natural com Tulipas Lavanda', hex: '#9d7ca8' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 42,
    inStockDirect: true
  },
  {
    id: 'jogo-americano-flores-rubi',
    name: 'Jogo Americano Oval Flores Rubi Clássico (Par)',
    category: 'decoracao',
    price: 130,
    badge: 'Mesa Elegante',
    shortDesc: 'Jogo americano oval com barrado rendado festonado vermelho rubi e trio de flores centrais.',
    fullDesc: 'Um clássico atemporal que aquece a mesa de café da manhã, almoço ou ceia especial. Trama central entrelaçada em tom cru com faixa vermelha e aplicação de 3 flores com folhas verdes, emoldurado por bico rendado trabalhado.',
    dimensions: '52 cm (C) x 38 cm (L) cada peça (conjunto com 2 unidades)',
    materials: 'Barbante ecológico cru nº 6 e fio brilhante vermelho rubi',
    productionTime: '4 a 5 dias úteis',
    image: PRODUCT_IMAGES.jogoFloresRubi,
    gallery: [
      PRODUCT_IMAGES.jogoFloresRubi
    ],
    colors: [
      { name: 'Cru & Vermelho Rubi', hex: '#b82b3d' },
      { name: 'Cru & Verde Sálvia', hex: '#6e9167' },
      { name: 'Cru & Azul Marinho', hex: '#1b3b5a' }
    ],
    isCustomizable: true,
    rating: 4.9,
    reviewCount: 35,
    inStockDirect: true
  },
  {
    id: 'jogo-sousplat-mandala-petalas',
    name: 'Jogo Sousplat Mandala Pétalas Coloridas & Porta-Copos (Kit 4 un)',
    category: 'decoracao',
    price: 150,
    badge: 'Queridinho da Mesa',
    shortDesc: 'Sousplats em formato de flor mandala em tom sálvia suave com bicos coloridos e descansos de copo.',
    fullDesc: 'Design delicado com pétalas abertas tipo leque. O contorno de cada sousplat recebe um acabamento sutil em tons contrastantes pastel (terracota, turquesa, lavanda, rosa), acompanhado de um conjunto central de porta-copos florais correspondentes.',
    dimensions: '37 cm de diâmetro cada sousplat + porta-copos de 12 cm',
    materials: 'Fio de algodão premium com toque sedoso e antialérgico',
    productionTime: '4 a 6 dias úteis',
    image: PRODUCT_IMAGES.sousplatMandala,
    gallery: [
      PRODUCT_IMAGES.sousplatMandala
    ],
    colors: [
      { name: 'Verde Sálvia Suave & Bicos Multicoloridos', hex: '#6e9167' },
      { name: 'Cru Natural & Tons Pastéis', hex: '#c7d1af' },
      { name: 'Oliva Retrô Monocromático', hex: '#96b49c' }
    ],
    isCustomizable: true,
    rating: 5.0,
    reviewCount: 48,
    inStockDirect: true
  },
  {
    id: 'jogo-sousplat-elos-entrelacados',
    name: 'Jogo Sousplat Oval Elos Entrelaçados (Kit 3 un)',
    category: 'decoracao',
    price: 140,
    badge: 'Sofisticação',
    shortDesc: 'Sousplats ovais em tom cru com detalhe central de anéis entrelaçados em rosa e azul e bicos recortados.',
    fullDesc: 'Harmonia geométrica única. A peça é construída a partir de dois elos entrelaçados em rosa suave e azul marinho, expandindo-se em raios de ponto alto no tom cru e arrematado por um barrado rendado recortado em rosa.',
    dimensions: '48 cm (C) x 34 cm (L) cada sousplat (trio)',
    materials: 'Barbante nº 6 100% algodão sustentável de alta resistência',
    productionTime: '4 a 6 dias úteis',
    image: PRODUCT_IMAGES.sousplatElos,
    gallery: [
      PRODUCT_IMAGES.sousplatElos
    ],
    colors: [
      { name: 'Cru com Elos Rosa & Azul Marinho', hex: '#d4889c' },
      { name: 'Cru com Elos Verde Sálvia & Dourado', hex: '#6e9167' },
      { name: 'Cru com Elos Terracota & Café', hex: '#8a4b2a' }
    ],
    isCustomizable: true,
    rating: 4.9,
    reviewCount: 24,
    inStockDirect: true
  }
];

