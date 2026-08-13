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
    <div className="py-12 sm:py-16 bg-[#FAFBF7] min-h-screen text-[#1E2B1D]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">

        {/* Top Header Banner */}
        <div className="bg-[#1E2B1D] text-white rounded-3xl p-8 sm:p-12 border border-[#DCE5D3] vintage-shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#c7d1af] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full border border-white/15">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Auditoria Especializada UX & CRO</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Diagnóstico de Conversão & Experiência
              </h1>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Análise aprofundada do projeto original, identificando os gargalos de compra e as soluções aplicadas no novo ateliê digital da Cleu.
              </p>
            </div>

            <button
              onClick={onBackToSite}
              className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Ver Loja Otimizada</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c7d1af]" />
            </button>
          </div>
        </div>

        {/* KPI Scorecards (Antes vs Depois) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Score Geral */}
          <div className="bg-white border border-[#DCE5D3] rounded-3xl p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49]">
                Maturidade Digital (Score)
              </span>
              <Zap className="w-4 h-4 text-[#6e9167]" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-bold text-4xl text-[#6e9167]">
                {AUDIT_SUMMARY.currentSiteScore}<span className="text-lg text-[#4A5B49]">/100</span>
              </span>
              <span className="text-xs text-[#4A5B49]">→ Antes</span>
            </div>
            <div className="pt-3 border-t border-[#DCE5D3] flex items-center justify-between text-xs text-[#6e9167] font-medium">
              <span>Após Reformulação:</span>
              <span className="font-serif font-bold text-base">{AUDIT_SUMMARY.optimizedSiteScore}/100 (+130%)</span>
            </div>
          </div>

          {/* Card 2: Fuga no Funil */}
          <div className="bg-white border border-[#DCE5D3] rounded-3xl p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49]">
                Taxa de Abandono de Compra
              </span>
              <AlertTriangle className="w-4 h-4 text-[#6e9167]" />
            </div>
            <div className="font-serif font-bold text-3xl text-[#1E2B1D]">
              76%
            </div>
            <p className="text-[11px] text-[#4A5B49] font-light">
              Desistência causada por links soltos para Instagram sem dados pré-preenchidos.
            </p>
            <div className="pt-3 border-t border-[#DCE5D3] text-xs text-[#6e9167] font-medium">
              Reduzido para ~18% com WhatsApp 1-Clique
            </div>
          </div>

          {/* Card 3: Potencial de Vendas */}
          <div className="bg-white border border-[#DCE5D3] rounded-3xl p-6 vintage-shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A5B49]">
                Impacto Estimado na Conversão
              </span>
              <TrendingUp className="w-4 h-4 text-[#6e9167]" />
            </div>
            <div className="font-serif font-bold text-3xl text-[#6e9167]">
              {AUDIT_SUMMARY.estimatedConversionBoost}
            </div>
            <p className="text-[11px] text-[#4A5B49] font-light">
              Com catálogo fotográfico de bolsas, roupas e decorações, sacola ágil e personalizador.
            </p>
            <div className="pt-3 border-t border-[#DCE5D3] text-xs text-[#6e9167] font-medium">
              Aumento de ticket médio com opções de presente
            </div>
          </div>

        </div>

        {/* Funnel Comparison: Original vs Otimizado */}
        <div className="bg-white border border-[#DCE5D3] rounded-3xl p-8 sm:p-10 vintage-shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#6e9167]">
              Comparativo de Experiência
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D]">
              O que mudou no fluxo do cliente?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fluxo Antigo */}
            <div className="bg-[#FAFBF7] border border-[#DCE5D3] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#4A5B49] text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#6e9167]" />
                <span>Fluxo Original (Alta Fricção)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#4A5B49] font-light">
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
            <div className="bg-[#F2F5ED] border border-[#DCE5D3] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#6e9167] text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#6e9167]" />
                <span>Novo Fluxo (Otimizado p/ Vendas)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#1E2B1D] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Fotos reais em alta definição:</strong> Bolsas, roupas e decorações com estética anos 60.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>WhatsApp com 1-Clique:</strong> Mensagem montada com nome, cor, tamanho e código.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Sacola multi-itens & Frete:</strong> Simulação de CEP e frete grátis inteligente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6e9167] font-bold">✓</span>
                  <span><strong>Prova Social & Personalizador:</strong> Depoimentos reais com fotos e montador guiado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filterable Audit Breakdown */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D]">
                Os 7 Pontos Críticos & Soluções
              </h3>
              <p className="text-xs text-[#4A5B49] font-light">
                Filtre por categoria para visualizar cada melhoria implementada.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#6e9167] text-white border-[#6e9167] font-semibold'
                      : 'bg-white text-[#1E2B1D] border-[#DCE5D3] hover:border-[#6e9167]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Audit Cards Grid */}
          <div className="space-y-5">
            {filteredPoints.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#DCE5D3] rounded-3xl p-6 sm:p-8 vintage-shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE5D3] pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#6e9167] text-white">
                      Impacto {item.impactScore}
                    </span>
                    <span className="text-xs text-[#4A5B49] uppercase tracking-wider font-medium">
                      Categoria: {item.category}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#6e9167]">
                    Perda estimada: {item.conversionLossRate}
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-[#1E2B1D]">
                  {item.title}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                  <div className="bg-[#FAFBF7] p-4 rounded-2xl border border-[#DCE5D3] space-y-1.5">
                    <strong className="text-[#1E2B1D] block uppercase text-[10px] tracking-wider font-semibold">
                      ⚠️ Situação no site original:
                    </strong>
                    <p className="text-[#4A5B49] leading-relaxed">{item.currentIssue}</p>
                  </div>

                  <div className="bg-[#F2F5ED] p-4 rounded-2xl border border-[#DCE5D3] space-y-1.5">
                    <strong className="text-[#6e9167] block uppercase text-[10px] tracking-wider font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Solução Implementada:
                    </strong>
                    <p className="text-[#1E2B1D] leading-relaxed">{item.solutionApplied}</p>
                  </div>
                </div>

                {item.recommendedNextSteps && item.recommendedNextSteps.length > 0 && (
                  <div className="pt-3 border-t border-[#DCE5D3]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e9167] block mb-1.5">
                      💡 Próximas ações práticas recomendadas para a Cleu:
                    </span>
                    <ul className="list-disc list-inside text-xs text-[#4A5B49] space-y-1 font-light">
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
        <div className="bg-[#1E2B1D] text-white rounded-3xl p-8 sm:p-10 border border-[#DCE5D3] flex flex-col sm:flex-row items-center justify-between gap-6 vintage-shadow-lg">
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
              className="bg-white/10 hover:bg-white hover:text-[#1E2B1D] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all border border-white/20 cursor-pointer"
            >
              {copiedChecklist ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedChecklist ? 'Copiado!' : 'Copiar Resumo em Texto'}</span>
            </button>

            <button
              onClick={onBackToSite}
              className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
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
