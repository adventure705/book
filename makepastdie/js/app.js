// --- js/app.js ---
// Main Application Entry Point to handle SPA routing.

document.addEventListener('DOMContentLoaded', () => {
    // Dependency Check
    if (!window.React || !window.htm || !window.Layout || !window.Contents) {
        console.warn("Dependencies not ready yet. This script should be deferred.");
    }

    const html = window.htm.bind(window.React.createElement);
    const { useState, useEffect } = window.React;

    const App = () => {
        // Determine initial series from URL filename
        const getInitialSeries = () => {
            const path = window.location.pathname;
            if (path.includes('series2')) return 'series2';
            if (path.includes('series3')) return 'series3';
            if (path.includes('series4')) return 'series4';
            if (path.includes('series5')) return 'series5';
            if (path.includes('series6')) return 'series6';
            if (path.includes('series7')) return 'series7';
            if (path.includes('series8')) return 'series8';
            if (path.includes('series9')) return 'series9';
            if (path.includes('series10')) return 'series10';
            return 'series1';
        };

        const [currentSeriesId, setCurrentSeriesId] = useState(getInitialSeries());
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            setIsMounted(true);
            // Handle browser back/forward buttons if needed (simple hash support could be added here)
            const onPopState = () => {
                setCurrentSeriesId(getInitialSeries());
            };
            window.addEventListener('popstate', onPopState);
            return () => window.removeEventListener('popstate', onPopState);
        }, []);

        if (!isMounted) return null;

        // Content Component Selection
        let ContentComponent;
        switch (currentSeriesId) {
            case 'series1':
                ContentComponent = window.Contents.Series1;
                break;
            case 'series2':
                ContentComponent = window.Contents.Series2;
                break;
            case 'series3':
                ContentComponent = window.Contents.Series3;
                break;
            case 'series4':
                ContentComponent = window.Contents.Series4;
                break;

            case 'series5':
                ContentComponent = window.Contents.Series5;
                break;
            case 'series6':
                ContentComponent = window.Contents.Series6;
                break;
            case 'series7':
                ContentComponent = window.Contents.Series7;
                break;
            case 'series8':
                ContentComponent = window.Contents.Series8;
                break;
            case 'series9':
                ContentComponent = window.Contents.Series9;
                break;
            case 'series10':
                ContentComponent = window.Contents.Series10;
                break;
            default:
                ContentComponent = window.Contents.Series1;
        }

        if (!ContentComponent) {
            console.error(`Component for ${currentSeriesId} not found`);
            return html`
                <div className="flex items-center justify-center h-screen bg-zinc-950 text-white">
                    <div className="text-center p-8 bg-zinc-900 rounded-2xl border border-red-500/50">
                        <h2 className="text-2xl font-black text-red-500 mb-4">콘텐츠 로딩 오류</h2>
                        <p className="text-zinc-300 mb-4">"${currentSeriesId}" 시리즈를 불러올 수 없습니다.</p>
                        <button onClick=${() => window.location.reload()} className="px-6 py-3 bg-red-600 rounded-xl font-bold">새로고침</button>
                    </div>
                </div>
            `;
        }

        const handleSeriesChange = (id) => {
            setCurrentSeriesId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return html`
            <${window.Layout} currentSeriesId=${currentSeriesId} onChangeSeries=${handleSeriesChange}>
                <${ContentComponent} onNextSeries=${handleSeriesChange} />
            <//>
        `;
    };

    const rootEl = document.getElementById('root');
    if (rootEl) {
        const root = window.ReactDOM.createRoot(rootEl);
        root.render(html`<${App} />`);
    }
});
