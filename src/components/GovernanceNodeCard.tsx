import React from 'react';
import {
  Shield,
  Landmark,
  Scale,
  Briefcase,
  Award,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Coins,
  BookOpen,
  ArrowRightLeft
} from 'lucide-react';
import { GovernanceRole } from '../types/governance';
import { TIER_CONFIG } from '../data/governanceData';

interface GovernanceNodeCardProps {
  role: GovernanceRole;
  isExpanded: boolean;
  isSelected: boolean;
  hasChildren: boolean;
  childCount: number;
  onToggleExpand: (roleId: string, e: React.MouseEvent) => void;
  onSelectRole: (role: GovernanceRole) => void;
  onCompareRole?: (role: GovernanceRole, e: React.MouseEvent) => void;
  isSearchMatch?: boolean;
}

export const GovernanceNodeCard: React.FC<GovernanceNodeCardProps> = ({
  role,
  isExpanded,
  isSelected,
  hasChildren,
  childCount,
  onToggleExpand,
  onSelectRole,
  onCompareRole,
  isSearchMatch
}) => {
  const tierMeta = TIER_CONFIG[role.tier] || TIER_CONFIG.union;

  const getBranchIcon = (branch: string) => {
    switch (branch) {
      case 'executive':
        return <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'legislature':
        return <Landmark className="w-3.5 h-3.5 text-purple-400 shrink-0" />;
      case 'judiciary':
        return <Scale className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'constitutional':
        return <Award className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
    }
  };

  return (
    <div
      onClick={() => onSelectRole(role)}
      className={`group relative text-left w-72 md:w-80 rounded-xl transition-all duration-200 cursor-pointer border select-none ${
        isSelected
          ? 'bg-slate-900 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/50'
          : isSearchMatch
          ? 'bg-slate-900/95 border-amber-500/80 shadow-md ring-1 ring-amber-500/30'
          : 'bg-slate-900/85 hover:bg-slate-850 border-slate-800 hover:border-slate-700 shadow-sm'
      }`}
    >
      {/* Top Header Strip with Tier and Branch */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-1.5 truncate">
          {getBranchIcon(role.branch)}
          <span className={`font-semibold capitalize ${tierMeta.color}`}>
            {role.branch}
          </span>
          <span className="text-slate-500 text-[11px] font-normal">·</span>
          <span className="text-slate-400 text-[11px] truncate">
            {tierMeta.badge}
          </span>
        </div>

        {/* Quick Compare Trigger */}
        {onCompareRole && (
          <button
            title="Compare with another role"
            onClick={(e) => onCompareRole(role, e)}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-amber-400 p-0.5 rounded hover:bg-slate-800"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Body */}
      <div className="p-3.5 space-y-2.5">
        {/* Title & Hindi Subtitle */}
        <div>
          <h4 className="text-sm md:text-base font-bold text-white font-display tracking-tight group-hover:text-amber-300 transition-colors line-clamp-1">
            {role.name}
          </h4>
          <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
            {role.hindiName}
          </p>
        </div>

        {/* Key Highlight: Salary & Primary Article */}
        <div className="flex items-center justify-between text-[11px] bg-slate-950/60 rounded-lg p-2 border border-slate-800/60">
          <div className="flex items-center gap-1.5 text-slate-300 font-mono">
            <Coins className="w-3 h-3 text-amber-400/90 shrink-0" />
            <span className="truncate max-w-[130px] font-semibold text-amber-300">
              {role.salaryMonthly.split('(')[0].trim()}
            </span>
          </div>

          {role.constitutionalArticles.length > 0 && (
            <div className="flex items-center gap-1 text-slate-400 font-mono shrink-0">
              <BookOpen className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate max-w-[95px] text-[10px]">
                {role.constitutionalArticles[0].split('(')[0].trim()}
              </span>
            </div>
          )}
        </div>

        {/* 1 Key Power bullet preview */}
        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
          {role.primaryResponsibilities[0]}
        </p>
      </div>

      {/* Footer Strip: Expand Affordance & Detail CTA */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/40 rounded-b-xl border-t border-slate-800/60 text-xs">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectRole(role);
          }}
          className="text-[11px] font-medium text-slate-400 group-hover:text-amber-400 flex items-center gap-1 transition-colors"
        >
          View Full Powers
          <ExternalLink className="w-2.5 h-2.5" />
        </button>

        {hasChildren ? (
          <button
            onClick={(e) => onToggleExpand(role.id, e)}
            className={`cursor-pointer flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
              isExpanded
                ? 'bg-amber-400/10 text-amber-300 border border-amber-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {isExpanded ? (
              <>
                <ChevronDown className="w-3 h-3" />
                <span>Fold ({childCount})</span>
              </>
            ) : (
              <>
                <ChevronRight className="w-3 h-3" />
                <span>Sub-Roles ({childCount})</span>
              </>
            )}
          </button>
        ) : (
          <span className="text-[10px] text-slate-400">Field Unit</span>
        )}
      </div>
    </div>
  );
};
