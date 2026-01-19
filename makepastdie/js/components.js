// --- js/components.js ---
// Define components globally on the window object to allow access from any file without modules.

(function () {
    // Helper to get HTML builder
    const getHtml = () => window.htm.bind(window.React.createElement);

    // 1. LucideIcon Component
    window.LucideIcon = ({ name, size = 16, className = "" }) => {
        const html = getHtml();
        const { useRef, useEffect } = window.React;
        const iconRef = useRef(null);

        useEffect(() => {
            if (window.lucide && iconRef.current) {
                const iconNode = window.lucide.icons[name];
                if (iconNode) {
                    iconRef.current.innerHTML = '';
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('width', size);
                    svg.setAttribute('height', size);
                    svg.setAttribute('viewBox', '0 0 24 24');
                    svg.setAttribute('fill', 'none');
                    svg.setAttribute('stroke', 'currentColor');
                    svg.setAttribute('stroke-width', '2');
                    svg.setAttribute('stroke-linecap', 'round');
                    svg.setAttribute('stroke-linejoin', 'round');
                    svg.setAttribute('class', `lucide lucide-${name.toLowerCase()} ${className}`);

                    iconNode.forEach(([tag, attrs]) => {
                        const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
                        Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
                        svg.appendChild(element);
                    });
                    iconRef.current.appendChild(svg);
                }
            }
        }, [name, size, className]);

        return html`<span ref=${iconRef} className=${"inline-flex items-center justify-center " + className} style=${{ width: size, height: size }} />`;
    };

    // 2. Section Component
    window.Section = ({ id, children }) => {
        const html = getHtml();
        return html`
            <section id=${id} className="py-16 lg:py-28 border-b border-zinc-800 last:border-0 scroll-mt-24 px-4 md:px-0 animate-fadeIn">
                ${children}
            </section>
        `;
    };

    // 3. Highlight Component (Updated: No Bold, Background Highlight)
    window.Highlight = ({ children, color = "red" }) => {
        const html = getHtml();
        // Colors: red, blue, emerald, orange
        const colorClasses = {
            red: "bg-red-500/20 text-red-200",
            blue: "bg-blue-500/20 text-blue-200",
            emerald: "bg-emerald-500/20 text-emerald-200",
            orange: "bg-orange-500/20 text-orange-200",
            purple: "bg-purple-500/20 text-purple-200",
        };
        const selectedColor = colorClasses[color] || colorClasses.red;

        return html`<span className=${`px-1.5 py-0.5 rounded-md mx-0.5 ${selectedColor} font-normal transition-colors hover:bg-opacity-30`}>${children}</span>`;
    };

    // 4. Badge Component
    window.Badge = ({ children, color = "zinc" }) => {
        const html = getHtml();
        return html`<span className=${`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>${children}</span>`;
    };

    // 5. Card Component (Glassmorphism)
    window.Card = ({ children, className = "" }) => {
        const html = getHtml();
        return html`
            <div className=${`glass-card p-6 md:p-8 rounded-[2rem] border border-white/5 bg-zinc-900/40 relative overflow-hidden backdrop-blur-xl ${className}`}>
                ${children}
            </div>
        `;
    };
})();
