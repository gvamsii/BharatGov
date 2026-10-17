import React, { useState } from 'react';
import {
  Shield,
  Landmark,
  Scale,
  Briefcase,
  Award,
  Coins,
  BookOpen,
  ArrowRight,
  ArrowRightLeft
} from 'lucide-react';
import { GovernanceRole, GovernanceBranch } from '../types/governance';
import { TIER_CONFIG } from '../data/governanceData';

interface OrganMatrixViewProps {
  roles: GovernanceRole[];
  onSelectRole: (role: GovernanceRole) => void;
  onCompareRole: (role: GovernanceRole) => void;
}

export const OrganMatrixView: React.FC<OrganMatrixViewProps> = ({
  roles,
  onSelectRole,
  onCompareRole
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredRoles = selectedTier === 'all'
    ? roles
    : roles.filter((r) => r.tier === selectedTier);

  const executiveRoles = filteredRoles.filter((r) => r.branch === 'executive');
  const legislativeRoles = filteredRoles.filter((r) => r.branch === 'legislature');
  const judicialRoles = filteredRoles.filter((r) => r.branch === 'judiciary');
  const administrativeRoles = filteredRoles.filter((r) => r.branch === 'administrative');
  const constitutionalRoles = filteredRoles.filter((r) => r.branch === 'constitutional');

  const renderRoleMiniCard = (role: GovernanceRole) => {
    const tierMeta = TIER_CONFIG[role.tier] || TIER_CONFIG.union;

    return (
      <div
        key={role.id}
        onClick={() => onSelectRole(role)}
        className="group p-3.5 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/60 rounded-xl cursor-pointer transition-all duration-150 shadow-sm space-y-2 select-none"
      >
        <div className="flex items-center justify-between text-xs">
          <span className={`font-semibold text-[11px] ${tierMeta.color}`}>
            {tierMeta.badge}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompareRole(role);
            }}
            className="text-slate-400 hover:text-amber-400 p-1 rounded hover:bg-slate-800"
            title="Compare role"
          >
            <ArrowRightLeft className="w-3 h-3" />
          </button>
        </div>

        <div>
          <h5 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-1 font-display">
            {role.name}
          </h5>
          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
            {role.hindiName}
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] bg-slate-950/70 p-2 rounded-lg border border-slate-800/80 font-mono">
          <div className="flex items-center gap-1 text-amber-300 font-semibold truncate max-w-[130px]">
            <Coins className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">{role.salaryMonthly.split('(')[0].trim()}</span>
          </div>
          {role.constitutionalArticles.length > 0 && (
            <div className="text-slate-400 text-[10px] truncate max-w-[100px]">
              {role.constitutionalArticles[0].split('(')[0].trim()}
            </div>
          )}
        </div>

        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
          {role.primaryResponsibilities[0]}
        </p>

        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-amber-400">
          <span>View constitutional dossier</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
      {/* Tier Filter Toolbar */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider">
            Filter by Tier:
          </span>
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {[
              { id: 'all', label: 'All Tiers' },
              { id: 'union', label: 'Union' },
              { id: 'state', label: 'State' },
              { id: 'district', label: 'District' },
              { id: 'local_rural', label: 'Panchayati Raj' },
              { id: 'local_urban', label: 'Urban Bodies' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`cursor-pointer px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedTier === t.id
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-400">
          Total Roles in View: <span className="font-mono text-amber-300 font-bold">{filteredRoles.length}</span>
        </div>
      </div>

      {/* 5 Column Grid */}
      <div className="flex-1 overflow-x-auto overflow-y-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 min-w-[1100px]">
          {/* Column 1: Executive */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-2 border-b border-amber-500/40">
              <Shield className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className="font-bold text-sm text-white font-display uppercase tracking-wider">
                Executive Organ ({executiveRoles.length})
              </h4>
            </div>
            <div className="space-y-3">
              {executiveRoles.map(renderRoleMiniCard)}
            </div>
          </div>

          {/* Column 2: Legislature */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-2 border-b border-purple-500/40">
              <Landmark className="w-4 h-4 text-purple-400 shrink-0" />
              <h4 className="font-bold text-sm text-white font-display uppercase tracking-wider">
                Legislature ({legislativeRoles.length})
              </h4>
            </div>
            <div className="space-y-3">
              {legislativeRoles.map(renderRoleMiniCard)}
            </div>
          </div>

          {/* Column 3: Judiciary */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/40">
              <Scale className="w-4 h-4 text-emerald-400 shrink-0" />
              <h4 className="font-bold text-sm text-white font-display uppercase tracking-wider">
                Judiciary ({judicialRoles.length})
              </h4>
            </div>
            <div className="space-y-3">
              {judicialRoles.map(renderRoleMiniCard)}
            </div>
          </div>

          {/* Column 4: Civil Service & Administration */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-2 border-b border-blue-500/40">
              <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
              <h4 className="font-bold text-sm text-white font-display uppercase tracking-wider">
                Civil Service ({administrativeRoles.length})
              </h4>
            </div>
            <div className="space-y-3">
              {administrativeRoles.map(renderRoleMiniCard)}
            </div>
          </div>

          {/* Column 5: Constitutional Watchdogs */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-2 border-b border-rose-500/40">
              <Award className="w-4 h-4 text-rose-400 shrink-0" />
              <h4 className="font-bold text-sm text-white font-display uppercase tracking-wider">
                Constitutional Bodies ({constitutionalRoles.length})
              </h4>
            </div>
            <div className="space-y-3">
              {constitutionalRoles.map(renderRoleMiniCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
