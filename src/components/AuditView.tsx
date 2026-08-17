import React, { useState } from 'react';
import { AUDIT_POINTS, AUDIT_SUMMARY } from '../data/auditData';
import {
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Zap,
  Copy,
  Check,
  Flower2
} from 'lucide-react';

interface AuditViewProps {
  onBackToSite: () => void;
}

export const AuditView: React.FC<AuditViewProps> = ({ onBackToSite }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  const categories = ['todos', 'CRO', 'UX', 'Mobile'];

  const filteredPoints = selectedCategory === 'todos'
    ? AUDIT_POINTS
    : AUDIT_POINTS.filter((p) => p.category === selectedCategory);

  const handleCopyChecklist = () => {
    const text = `📋 PLANO DE AÇÃO CRO & UX - CROCHÊ DA CLEU (COLEÇÃO 60s)\n\n` +
      AUDIT_POINTS.map((p, i) => `${i + 1}. [${p.category}] ${p.title}\n   ⚠️ Problema: ${p.currentIssue}\n   ✅ Solução: ${p.solutionApplied}\n`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2000);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FAFBF7] dark:bg-[#121811] min-h-screen text-[#1E2B1D] dark:text-[#F3F6F1] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* Top Header Banner */}
        <div className="bg-[#1E2B1D] dark:bg-[#192118] text-white rounded-3xl p-6 sm:p-12 border border-[#DCE5D3] dark:border-[#2c3c2b] vintage-shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#c7d1af] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full border border-white/15">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Auditoria Especializada UX & CRO</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl text-white leading-tight">
                Diagnóstico de Conversão & Experiência
              </h1>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Análise aprofundada do projeto original, identificando os gargalos de compra e as soluções aplicadas no novo ateliê digital da Cleu.
              </p>
            </div>

            <button
              onClick={onBackToSite}
              className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-sm cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              <span>Ver Loja Otimizada</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c7d1af]" />
            </button>
          </div>
        </div>

        {/* KPI Scorecards (Antes vs Depois) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Score Geral */}
          <div className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 sm:p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49] dark:text-[#A3B5A1]">
                Maturidade Digital (Score)
              </span>
              <Zap className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-[#6e9167] dark:text-[#96c3a6]">
                {AUDIT_SUMMARY.currentSiteScore}<span className="text-lg text-[#4A5B49] dark:text-[#A3B5A1]">/100</span>
              </span>
              <span className="text-xs text-[#4A5B49] dark:text-[#A3B5A1]">→ Antes</span>
            </div>
            <div className="pt-3 border-t border-[#DCE5D3] dark:border-[#2c3c2b] flex items-center justify-between text-xs text-[#6e9167] dark:text-[#96c3a6] font-medium">
              <span>Após Reformulação:</span>
              <span className="font-serif font-bold text-base">{AUDIT_SUMMARY.optimizedSiteScore}/100 (+130%)</span>
            </div>
          </div>

          {/* Card 2: Fuga no Funil */}
          <div className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 sm:p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49] dark:text-[#A3B5A1]">
                Taxa de Abandono de Compra
              </span>
              <AlertTriangle className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
            </div>
            <div className="font-serif font-bold text-3xl text-[#1E2B1D] dark:text-[#F3F6F1]">
              76%
            </div>
            <p className="text-[11px] text-[#4A5B49] dark:text-[#A3B5A1] font-light">
              Desistência causada por links soltos para Instagram sem dados pré-preenchidos.
            </p>
            <div className="pt-3 border-t border-[#DCE5D3] dark:border-[#2c3c2b] text-xs text-[#6e9167] dark:text-[#96c3a6] font-medium">
              Reduzido para ~18% com Direcionamento Inteligente
            </div>
          </div>

          {/* Card 3: Potencial de Vendas */}
          <div className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 sm:p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49] dark:text-[#A3B5A1]">
                Impacto Estimado na Conversão
              </span>
              <TrendingUp className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
            </div>
            <div className="font-serif font-bold text-3xl text-[#6e9167] dark:text-[#96c3a6]">
              {AUDIT_SUMMARY.estimatedConversionBoost}
            </div>
            <p className="text-[11px] text-[#4A5B49] dark:text-[#A3B5A1] font-light">
              Com catálogo fotográfico de bolsas, roupas e decorações, sacola ágil e personalizador.
            </p>
            <div className="pt-3 border-t border-[#DCE5D3] dark:border-[#2c3c2b] text-xs text-[#6e9167] dark:text-[#96c3a6] font-medium">
              Aumento de ticket médio com opções de presente
            </div>
          </div>

        </div>

        {/* Funnel Comparison: Original vs Otimizado */}
        <div className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-6 sm:p-10 vintage-shadow-sm space-y-6 sm:space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#6e9167] dark:text-[#96c3a6]">
              Comparativo de Experiência
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] dark:text-[#F3F6F1]">
              O que mudou no fluxo do cliente?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Fluxo Antigo */}
            <div className="bg-[#FAFBF7] dark:bg-[#151c14] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#4A5B49] dark:text-[#A3B5A1] text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
                <span>Fluxo Original (Alta Fricção)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#4A5B49] dark:text-[#A3B5A1] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✕</span>
                  <span><strong>Placeholders genéricos:</strong> Cards cinzas sem fotos reais das bolsas ou roupas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✕</span>
                  <span><strong>Botão 'Pedir' solto:</strong> Redirecionava ao feed do Instagram sem o nome da peça.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✕</span>
                  <span><strong>Incerteza de prazos:</strong> Sem informação clara de produção e valores de entrega.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✕</span>
                  <span><strong>Sem validação social:</strong> Ausência de depoimentos de clientes anteriores.</span>
                </li>
              </ul>
            </div>

            {/* Novo Fluxo */}
            <div className="bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#6e9167] dark:text-[#96c3a6] text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
                <span>Novo Ateliê Otimizado</span>
              </div>
              <ul className="space-y-3 text-xs text-[#1E2B1D] dark:text-[#F3F6F1] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Fotos reais em alta definição:</strong> Bolsas, roupas e decorações com estética anos 60.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Instagram com 1-Clique & Cópia:</strong> Pedido organizado copiado pronto para o Direct.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Sacola multi-itens & Frete:</strong> Simulação de frete grátis inteligente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Modo Escuro & Responsivo:</strong> Experiência impecável em qualquer celular ou monitor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filterable Audit Breakdown */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] dark:text-[#F3F6F1]">
                Os 7 Pontos Críticos & Soluções
              </h3>
              <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] font-light">
                Filtre por categoria para visualizar cada melhoria implementada.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer min-h-[38px] ${
                    selectedCategory === cat
                      ? 'bg-[#6e9167] text-white border-[#6e9167] font-semibold'
                      : 'bg-white dark:bg-[#192118] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b] hover:border-[#6e9167]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Audit Cards Grid */}
          <div className="space-y-4 sm:space-y-5">
            {filteredPoints.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 sm:p-8 vintage-shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE5D3] dark:border-[#2c3c2b] pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#6e9167] text-white">
                      Impacto {item.impactScore}
                    </span>
                    <span className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] uppercase tracking-wider font-medium">
                      Categoria: {item.category}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#6e9167] dark:text-[#96c3a6]">
                    Perda estimada: {item.conversionLossRate}
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-[#1E2B1D] dark:text-[#F3F6F1]">
                  {item.title}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                  <div className="bg-[#FAFBF7] dark:bg-[#151c14] p-4 rounded-2xl border border-[#DCE5D3] dark:border-[#2c3c2b] space-y-1.5">
                    <strong className="text-[#1E2B1D] dark:text-[#F3F6F1] block uppercase text-[10px] tracking-wider font-semibold">
                      ⚠️ Situação no site original:
                    </strong>
                    <p className="text-[#4A5B49] dark:text-[#A3B5A1] leading-relaxed">{item.currentIssue}</p>
                  </div>

                  <div className="bg-[#F2F5ED] dark:bg-[#1f2a1e] p-4 rounded-2xl border border-[#DCE5D3] dark:border-[#2c3c2b] space-y-1.5">
                    <strong className="text-[#6e9167] dark:text-[#96c3a6] block uppercase text-[10px] tracking-wider font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Solução Implementada:
                    </strong>
                    <p className="text-[#1E2B1D] dark:text-[#F3F6F1] leading-relaxed">{item.solutionApplied}</p>
                  </div>
                </div>

                {item.recommendedNextSteps && item.recommendedNextSteps.length > 0 && (
                  <div className="pt-3 border-t border-[#DCE5D3] dark:border-[#2c3c2b]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e9167] dark:text-[#96c3a6] block mb-1.5">
                      💡 Próximas ações práticas recomendadas para a Cleu:
                    </span>
                    <ul className="list-disc list-inside text-xs text-[#4A5B49] dark:text-[#A3B5A1] space-y-1 font-light">
                      {item.recommendedNextSteps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Checklist Export */}
        <div className="bg-[#1E2B1D] dark:bg-[#192118] text-white rounded-3xl p-6 sm:p-10 border border-[#DCE5D3] dark:border-[#2c3c2b] flex flex-col sm:flex-row items-center justify-between gap-6 vintage-shadow-lg">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Pronto para aplicar na prática?
            </h3>
            <p className="text-xs text-white/70 max-w-md font-light leading-relaxed">
              Você pode copiar este diagnóstico e o plano de ação para orientar o crescimento da loja da Cleu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyChecklist}
              className="bg-white/10 hover:bg-white hover:text-[#1E2B1D] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all border border-white/20 cursor-pointer min-h-[44px]"
            >
              {copiedChecklist ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedChecklist ? 'Copiado!' : 'Copiar Resumo em Texto'}</span>
            </button>

            <button
              onClick={onBackToSite}
              className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer min-h-[44px]"
            >
              <span>Navegar na Loja Otimizada</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c7d1af]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

