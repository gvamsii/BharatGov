import React from 'react';

interface HeaderProps {
  activeTab: 'tree' | 'matrix' | 'compare' | 'quiz';
  setActiveTab: (tab: 'tree' | 'matrix' | 'compare' | 'quiz') => void;
  onResetFocus: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onResetFocus
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab('tree');
          onResetFocus();
        }}
        className="text-lg font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-amber-400 transition-colors"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
        BharatGov
      </a>

      {/* Zone 2: 4 concise single-line text navigation links with subtle hover underlines */}
      <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
        <button
          onClick={() => setActiveTab('tree')}
          className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-white ${
            activeTab === 'tree' ? 'text-amber-400 font-semibold underline decoration-amber-400 underline-offset-8' : ''
          }`}
        >
          Hierarchy Tree
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-white ${
            activeTab === 'matrix' ? 'text-amber-400 font-semibold underline decoration-amber-400 underline-offset-8' : ''
          }`}
        >
          Organ Matrix
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-white ${
            activeTab === 'compare' ? 'text-amber-400 font-semibold underline decoration-amber-400 underline-offset-8' : ''
          }`}
        >
          Compare Roles
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-white ${
            activeTab === 'quiz' ? 'text-amber-400 font-semibold underline decoration-amber-400 underline-offset-8' : ''
          }`}
        >
          Power Scenarios
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => {
            setActiveTab('tree');
            onResetFocus();
          }}
          className="cursor-pointer px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Reset to Apex
        </button>
      </div>
    </header>
  );
};
