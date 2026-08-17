import React, { useState } from 'react';
import { Sparkles, Instagram, Heart, Palette, Clock, Gift, CheckCircle2, Flower2, Check, Copy } from 'lucide-react';

export const CustomOrderBuilder: React.FC = () => {
  const [pieceType, setPieceType] = useState('Bolsa Vintage Anos 60');
  const [selectedPalette, setSelectedPalette] = useState('Harmonia Botânica 60s (Sálvia, Pistache & Menta)');
  const [occasion, setOccasion] = useState('Uso próprio / Look vintage anos 60');
  const [deadline, setDeadline] = useState('Sem pressa (prazo normal de ateliê)');
  const [details, setDetails] = useState('');
  const [clientName, setClientName] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const pieceTypes = [
    { name: 'Bolsa Vintage Anos 60', icon: '👜', desc: 'Bolsas estruturadas, alça de madeira ou tote bags' },
    { name: 'Peça de Roupa / Colete', icon: '🧶', desc: 'Coletes granny square, tops ou cardigans boho' },
    { name: 'Decoração / Mesa Posta', icon: '🌻', desc: 'Sousplats flower power, mantas chevron ou almofadas' },
    { name: 'Amigurumi Afetivo', icon: '🧸', desc: 'Bichinhos e personagens com margaridas 60s' },
    { name: 'Acessório / Bandana', icon: '✨', desc: 'Faixas de cabelo, golas ou clutches de mão' }
  ];

  const palettes = [
    { name: 'Harmonia Botânica 60s (Sálvia, Pistache & Menta)', colors: ['#6e9167', '#c7d1af', '#96c3a6'] },
    { name: 'Laurel & Verde Eucalipto Retrô', colors: ['#96b49c', '#6e9167', '#FAFBF7'] },
    { name: 'Oliva Suave & Cru Natural', colors: ['#c7d1af', '#96c3a6', '#1E2B1D'] },
    { name: 'Floresta Vintage Profunda', colors: ['#1E2B1D', '#6e9167', '#c7d1af'] },
    { name: 'Quero sugerir uma paleta exclusiva', colors: ['#6e9167', '#96b49c', '#c7d1af'] }
  ];

  const handleGenerateInstagramQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const text = 
      `🧵 *SOLICITAÇÃO DE ENCOMENDA PERSONALIZADA - CROCHÊ DA CLEU*\n\n` +
      `Olá Cleu! ${clientName ? `Meu nome é *${clientName}*. ` : ''}Gostaria de um orçamento para uma peça sob medida com estética anos 60:\n\n` +
      `📌 *Tipo de Peça:* ${pieceType}\n` +
      `🎨 *Paleta de Cores:* ${selectedPalette}\n` +
      `🎉 *Finalidade:* ${occasion}\n` +
      `⏳ *Prazo Desejado:* ${deadline}\n` +
      (details ? `📝 *Ideia / Medidas:* ${details}\n` : '') +
      `\nPoderia me passar o valor estimado e disponibilidade de fios? Obrigado!`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }

    setSentSuccess(true);
    setTimeout(() => {
      window.open(`https://www.instagram.com/crochedacleu.pravoce/`, '_blank');
      setSentSuccess(false);
    }, 800);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F2F5ED] dark:bg-[#151c14] border-y border-[#DCE5D3] dark:border-[#2c3c2b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#6e9167] dark:text-[#96c3a6] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <Flower2 className="w-3.5 h-3.5 text-[#6e9167]" />
            <span>Ateliê Sob Medida</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] dark:text-[#F3F6F1] leading-tight">
            Monte sua Peça em Crochê Sob Medida
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5B49] dark:text-[#A3B5A1] font-light max-w-lg mx-auto leading-relaxed">
            Deseja uma bolsa em medidas específicas, um colete na sua numeração exata ou um jogo de decoração para sua casa? Defina as opções e converse diretamente com a Cleu no Instagram.
          </p>
        </div>

        {/* Customizer Form Card */}
        <form
          onSubmit={handleGenerateInstagramQuote}
          className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 sm:p-10 vintage-shadow-lg space-y-7 sm:space-y-8"
        >
          {/* Step 1: Piece Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-3 flex items-center gap-2.5">
              <span className="w-6 h-6 bg-[#6e9167] text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
              Qual peça você deseja criar?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {pieceTypes.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setPieceType(item.name)}
                  className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 cursor-pointer ${
                    pieceType === item.name
                      ? 'bg-[#F2F5ED] dark:bg-[#1f2a1e] border-[#1E2B1D] dark:border-[#96c3a6] shadow-sm ring-1 ring-[#1E2B1D] dark:ring-[#96c3a6]'
                      : 'bg-white dark:bg-[#192118] border-[#DCE5D3] dark:border-[#2c3c2b] hover:border-[#6e9167]'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <strong className="block text-xs font-semibold text-[#1E2B1D] dark:text-[#F3F6F1]">{item.name}</strong>
                    <span className="text-[11px] text-[#4A5B49] dark:text-[#A3B5A1] leading-tight block mt-0.5 font-light">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Palettes */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-3 flex items-center gap-2.5">
              <span className="w-6 h-6 bg-[#6e9167] text-white rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
              Harmonia botânica anos 60 desejada:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {palettes.map((pal) => (
                <button
                  key={pal.name}
                  type="button"
                  onClick={() => setSelectedPalette(pal.name)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                    selectedPalette === pal.name
                      ? 'bg-[#1E2B1D] dark:bg-[#6e9167] text-white border-[#1E2B1D] dark:border-[#6e9167] font-medium'
                      : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b] hover:border-[#1E2B1D]'
                  }`}
                >
                  <span className="truncate pr-2">{pal.name}</span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {pal.colors.map((hex, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: hex }} />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Occasion & Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-1.5 flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-[#6e9167]" />
                Ocasião / Finalidade:
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full text-xs p-3 rounded-xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#1E2B1D] dark:text-[#F3F6F1] focus:ring-2 focus:ring-[#6e9167] focus:outline-none"
              >
                <option value="Uso próprio / Look vintage anos 60">Uso próprio / Look vintage anos 60</option>
                <option value="Decoração de sala / mesa posta">Decoração de sala / mesa posta</option>
                <option value="Presente de Aniversário Especial">Presente de Aniversário Especial</option>
                <option value="Maternidade / Enxoval de Bebê">Maternidade / Enxoval de Bebê</option>
                <option value="Casamento / Bodas / Padrinhos">Casamento / Bodas / Padrinhos</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6e9167]" />
                Prazo necessário:
              </label>
              <select
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full text-xs p-3 rounded-xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#1E2B1D] dark:text-[#F3F6F1] focus:ring-2 focus:ring-[#6e9167] focus:outline-none"
              >
                <option value="Sem pressa (prazo normal do ateliê)">Sem pressa (prazo normal do ateliê)</option>
                <option value="Tenho uma data comemorativa próxima">Tenho uma data comemorativa próxima</option>
                <option value="Urgência (para os próximos 7 dias)">Urgência (para os próximos 7 dias)</option>
              </select>
            </div>
          </div>

          {/* Step 4: Details & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-1.5">
                Seu Nome:
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Como prefere ser chamado?"
                className="w-full text-xs p-3 rounded-xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#1E2B1D] dark:text-[#F3F6F1] focus:ring-2 focus:ring-[#6e9167] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2B1D] dark:text-[#F3F6F1] mb-1.5">
                Detalhes da peça (medidas, alças, referências):
              </label>
              <input
                type="text"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Ex: Quero um colete M com comprimento 45cm ou bolsa com alça de ombro..."
                className="w-full text-xs p-3 rounded-xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#1E2B1D] dark:text-[#F3F6F1] focus:ring-2 focus:ring-[#6e9167] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              {sentSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-[#c7d1af]" />
                  <span>Resumo copiado! Abrindo Instagram @crochedacleu.pravoce...</span>
                </>
              ) : (
                <>
                  <Instagram className="w-4 h-4 text-[#c7d1af] dark:text-white" />
                  <span>Enviar Orçamento para a Cleu no Instagram</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-[#4A5B49] dark:text-[#A3B5A1] mt-3 font-light">
              ✓ Atendimento carinhoso da artesã • Sem compromisso de compra • Envio de fotos das cartelas de fios pelo Direct
            </p>
          </div>
        </form>

      </div>
    </section>
  );
};

