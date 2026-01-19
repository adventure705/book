// --- js/layout.js ---
// Handles the Sidebar, Navigation, Search, and Main Layout structure.

(function () {
  const getHtml = () => window.htm.bind(window.React.createElement);

  // onChangeSeries prop added for SPA support
  window.Layout = ({ children, currentSeriesId, onChangeSeries }) => {
    const html = getHtml();
    const { useState, useRef, useMemo, useEffect } = window.React;
    const LucideIcon = window.LucideIcon;

    // 1. Data Loading State
    const [seriesData, setSeriesData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
      const checkData = () => {
        if (window.seriesData && Array.isArray(window.seriesData) && window.seriesData.length > 0) {
          setSeriesData(window.seriesData);
          setIsDataLoaded(true);
          return true;
        }
        return false;
      };
      if (checkData()) return;
      const interval = setInterval(() => { if (checkData()) clearInterval(interval); }, 50);
      setTimeout(() => clearInterval(interval), 3000);
      return () => clearInterval(interval);
    }, []);


    // 2. UI State
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedSeries, setExpandedSeries] = useState(['series1', 'series2', 'series3', 'series4']);
    const [showTopBtn, setShowTopBtn] = useState(false);
    const scrollContainerRef = useRef(null);


    // 3. Search Logic
    const filteredResults = useMemo(() => {
      if (!searchTerm.trim()) return [];
      const results = [];
      seriesData.forEach(series => {
        if (series.items) {
          series.items.forEach(item => {
            const searchTarget = (item.title + (item.keywords || '')).toLowerCase();
            if (searchTarget.includes(searchTerm.toLowerCase())) {
              results.push({ ...item, seriesId: series.id, seriesTitle: series.title });
            }
          });
        }
      });
      return results;
    }, [searchTerm, seriesData]);


    // 4. Scroll Logic
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const handleScroll = () => setShowTopBtn(container.scrollTop > 400);
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);


    // 5. Navigation Logic
    const toggleSeries = (id) => {
      // Keep current expansion logic
      const isCurrentlyExpanded = expandedSeries.includes(id);

      // If simply toggling expansion regardless of current series
      if (id === currentSeriesId) {
        setExpandedSeries(prev => isCurrentlyExpanded ? prev.filter(item => item !== id) : [...prev, id]);
      } else {
        // If switching series (SPA Navigation)
        if (onChangeSeries) {
          onChangeSeries(id);
          // Ensure the new series is expanded
          if (!isCurrentlyExpanded) {
            setExpandedSeries(prev => [...prev, id]);
          }
        } else {
          // Fallback to MPA if no handler provided (legacy support)
          window.location.href = `${id}.html`;
        }
      }
    };

    const scrollToSection = (id, seriesId) => {
      if (seriesId && seriesId !== currentSeriesId) {
        // Switch series first
        if (onChangeSeries) {
          onChangeSeries(seriesId);
          // Wait a bit for render, then scroll
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 300);
        } else {
          window.location.href = `${seriesId}.html#${id}`;
        }
      } else {
        // Same series scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (window.innerWidth < 1024) setIsSidebarOpen(false);
      }
    };

    const scrollToTop = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };


    return html`
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden text-lg font-sans">
      
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 z-[100] flex items-center justify-between px-6 transition-all duration-300">
        <h1 className="text-lg font-black gradient-text flex items-center gap-2">
          <${LucideIcon} name="TrendingUp" size=${20} className="text-red-500" />
          유튜브 성공 전략
        </h1>
        <button onClick=${() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-300 hover:text-white transition-colors">
          ${isSidebarOpen
        ? html`<${LucideIcon} name="X" size=${24} />`
        : html`<${LucideIcon} name="Menu" size=${24} />`
      }
        </button>
      </header>

      ${isSidebarOpen && html`
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] animate-fadeIn" onClick=${() => setIsSidebarOpen(false)} />
      `}

      <aside className=${`fixed lg:relative inset-y-0 left-0 w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col z-[110] transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} shadow-2xl lg:shadow-none shrink-0`}>
        <div className="p-6 border-b border-zinc-800 bg-zinc-900 z-10">
          <h1 className="text-xl font-black gradient-text flex items-center gap-2 text-white">
            <${LucideIcon} name="TrendingUp" size=${22} className="text-red-500" />
            유튜브 성공 전략
          </h1>
          <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-[0.2em] font-bold">Professional Masterclass</p>
        </div>

        <div className="p-4 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md z-10 sticky top-0">
          <div className="relative group">
            <span className=${`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${searchTerm ? 'text-red-500' : 'text-zinc-500'}`}>
              <${LucideIcon} name="Search" size=${16} />
            </span>
            <input
              type="text"
              placeholder="키워드 검색"
              value=${searchTerm}
              onChange=${(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl py-3 pl-10 pr-10 text-sm font-medium text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-800 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-inner"
            />
            ${searchTerm && html`
              <button onClick=${() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 hover:bg-zinc-700 rounded-full transition-colors">
                <${LucideIcon} name="X" size=${14} />
              </button>
            `}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          ${searchTerm.trim() !== '' ? html`
            <div className="animate-fadeIn">
              <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-3 px-2 flex justify-between items-center">
                검색 결과 <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full text-[10px]">${filteredResults.length}</span>
              </p>
              ${filteredResults.length > 0 ? html`
                <div className="space-y-2">
                  ${filteredResults.map((result) => html`
                    <button key=${result.id} onClick=${() => scrollToSection(result.id, result.seriesId)} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left bg-zinc-800/40 border border-zinc-700/50 text-zinc-200 hover:bg-zinc-800 hover:border-red-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                      <span className="text-red-500/80 group-hover:text-red-500 shrink-0 transition-colors bg-red-500/10 p-2 rounded-lg">
                        <${LucideIcon} name=${result.icon} size=${16} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold truncate leading-tight group-hover:text-white transition-colors">${result.title}</p>
                        <p className="text-[10px] text-zinc-500 truncate mt-1 group-hover:text-zinc-400">${result.seriesTitle.replace('\n', ' ')}</p>
                      </div>
                    </button>
                  `)}
                </div>
              ` : html`
                 <div className="text-center py-10 text-zinc-500 text-sm">결과 없음</div>
              `}
            </div>
          ` : html`
            ${isDataLoaded ? seriesData.map((series) => html`
              <div key=${series.id} className="space-y-1 mb-2">
                <button
                  onClick=${() => toggleSeries(series.id)}
                  className=${`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${currentSeriesId === series.id ? 'bg-zinc-800 text-white shadow-md cursor-default' : 'hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 cursor-pointer'}`}
                >
                  <span className="text-sm font-bold flex items-center gap-3 text-left leading-tight flex-1">
                    <span className=${`p-1.5 rounded-lg transition-colors shrink-0 ${currentSeriesId === series.id ? 'bg-red-600 text-white' : 'bg-zinc-800 group-hover:bg-zinc-700 text-zinc-500'}`}>
                      <${LucideIcon} name="Layers" size=${14} />
                    </span>
                    <span className=${`block ${currentSeriesId === series.id ? 'opacity-100' : 'opacity-80'}`}>
                      ${series.title.split('\n').map((line, i) => html`
                        <span key=${i} className="block">${line}</span>
                      `)}
                    </span>
                  </span>
                  <${LucideIcon} name="ChevronDown" size=${14} className=${`transition-transform duration-300 shrink-0 text-zinc-600 group-hover:text-zinc-400 ml-2 ${expandedSeries.includes(series.id) ? 'rotate-180' : ''}`} />
                </button>

                ${expandedSeries.includes(series.id) && html`
                  <div className="ml-4 pl-3 border-l-2 border-zinc-800/50 space-y-0.5 mt-1 animate-fadeIn origin-top">
                    ${series.items.map((item) => html`
                      <button
                        key=${item.id}
                        onClick=${() => scrollToSection(item.id, series.id)}
                        className=${`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all text-sm font-medium group relative overflow-hidden ${currentSeriesId === series.id ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-red-500 group-hover:h-1/2 transition-all duration-300 rounded-full"></span>
                        <span className="group-hover:text-red-400 transition-colors shrink-0 opacity-70 group-hover:opacity-100">
                          <${LucideIcon} name=${item.icon} size=${15} />
                        </span>
                        <span className="truncate transition-transform group-hover:translate-x-1">${item.title}</span>
                      </button>
                    `)}
                  </div>
                `}
              </div>
            `) : html`
              <div class="text-zinc-500 text-sm text-center py-4 flex flex-col items-center">
                 <div class="w-5 h-5 border-2 border-zinc-600 border-t-red-500 rounded-full animate-spin mb-2"></div>
                 Loading Data...
              </div>
            `}
          `}
        </nav>
        
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-600 text-center">
          &copy; 2026 YouTube Success Strategy
        </div>
      </aside>

      <main ref=${scrollContainerRef} className="flex-1 overflow-y-auto scroll-smooth pt-16 lg:pt-0 relative bg-black/50">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px]"></div>
        </div>
      
        <div className="relative w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-40 lg:pb-60 pt-8 lg:pt-16 z-10 transition-all duration-500">
          ${children}

          ${showTopBtn && html`
            <button onClick=${scrollToTop} className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center p-0 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all hover:scale-110 active:scale-95 animate-bounce-subtle" aria-label="Scroll to top">
              <${LucideIcon} name="ArrowUp" size=${24} />
            </button>
          `}
        </div>
      </main>
    </div>
  `;
  };
})();
