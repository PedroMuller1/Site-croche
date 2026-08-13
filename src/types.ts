export type CategoryType = 'todos' | 'amigurumi' | 'bolsas' | 'roupas' | 'decoracao' | 'acessorios';

export interface Product {
  id: string;
  name: string;
  category: 'amigurumi' | 'bolsas' | 'roupas' | 'decoracao' | 'acessorios';
  price: number;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  dimensions: string;
  materials: string;
  productionTime: string;
  image: string;
  gallery?: string[];
  colors: { name: string; hex: string }[];
  isCustomizable: boolean;
  rating: number;
  reviewCount: number;
  inStockDirect?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedSize?: string;
  customNotes?: string;
  quantity: number;
  isGiftWrap?: boolean;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  avatar: string;
  rating: number;
  productName: string;
  text: string;
  date: string;
  verified: boolean;
  photo?: string;
}

export interface AuditPoint {
  id: string;
  category: 'CRO' | 'UX' | 'Atendimento' | 'Confiança' | 'Mobile';
  title: string;
  currentIssue: string;
  impactScore: 'Crítico' | 'Alto' | 'Médio';
  conversionLossRate: string;
  solutionApplied: string;
  recommendedNextSteps: string[];
}
