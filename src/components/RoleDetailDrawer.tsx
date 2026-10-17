import React, { useState } from 'react';
import {
  X,
  Shield,
  Coins,
  BookOpen,
  CheckCircle2,
  XCircle,
  UserCheck,
  Building2,
  Scale,
  ArrowRightLeft,
  ChevronRight,
  Landmark,
  Award,
  Briefcase
} from 'lucide-react';
import { GovernanceRole } from '../types/governance';
import { TIER_CONFIG, BRANCH_CONFIG } from '../data/governanceData';

interface RoleDetailDrawerProps {
  role: GovernanceRole | null;
  onClose: () => void;
  onCompareRole: (role: GovernanceRole) => void;
  onSelectRelatedRole?: (roleId: string) => void;
  allRoles: GovernanceRole[];
}

export const RoleDetailDrawer: React.FC<RoleDetailDrawerProps> = ({
  role,
  onClose,
  onCompareRole,
  onSelectRelatedRole,
  allRoles
}) => {
  const [activeTab, setActiveTab] = useState<'powers' | 'checks' | 'salary' | 'appointment'>('powers');

  if (!role) return null;

  const tierMeta = TIER_CONFIG[role.tier] || TIER_CONFIG.union;
  const branchMeta = BRANCH_CONFIG[role.branch] || BRANCH_CONFIG.executive;

  const parentRole = role.parentId
    ? allRoles.find((r) => r.id === role.parentId)
    : null;
  const childRoles = allRoles.filter((r) => role.childrenIds.includes(r.id));

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label={`${role.name} Details`}
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[540px] md:w-[600px] bg-slate-900/98 backdrop-blur-xl border-l border-slate-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 border-b border-slate-800 bg-slate-950/80">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className={`font-semibold capitalize ${branchMeta.color} flex items-center gap-1`}>
                {role.branch === 'judiciary' && <Scale className="w-3.5 h-3.5" />}
                {role.branch === 'legislature' && <Landmark className="w-3.5 h-3.5" />}
                {role.branch === 'constitutional' && <Award className="w-3.5 h-3.5" />}
                {role.branch === 'administrative' && <Briefcase className="w-3.5 h-3.5" />}
                {role.branch === 'executive' && <Shield className="w-3.5 h-3.5" />}
                {branchMeta.label}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">{tierMeta.label}</span>
              <span className="text-slate-500">·</span>
              <span className="text-amber-400 font-mono text-[11px]">Level {role.level}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white font-display tracking-tight">
              {role.name}
            </h3>
            <p className="text-sm font-medium text-slate-400">
              {role.hindiName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onCompareRole(role)}
              className="cursor-pointer px-2.5 py-1 text-xs font-semibold text-slate-300 hover:text-amber-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-700"
              title="Compare with another role"
            >
              <ArrowRightLeft className="w-3 h-3" />
              <span>Compare</span>
            </button>

            <button
              onClick={onClose}
              className="cursor-pointer p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick KPI Strip */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Salary</span>
            </div>
            <p className="text-sm font-bold text-amber-300 font-mono">
              {role.salaryMonthly.split('(')[0]}
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Tenure / Term</span>
            </div>
            <p className="text-xs font-semibold text-slate-200 line-clamp-1">
              {role.tenure}
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 mt-4 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('powers')}
            className={`cursor-pointer flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors whitespace-nowrap ${
              activeTab === 'powers'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Powers & Can Do
          </button>
          <button
            onClick={() => setActiveTab('checks')}
            className={`cursor-pointer flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors whitespace-nowrap ${
              activeTab === 'checks'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cannot Do & Limits
          </button>
          <button
            onClick={() => setActiveTab('salary')}
            className={`cursor-pointer flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors whitespace-nowrap ${
              activeTab === 'salary'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Salary & Perks
          </button>
          <button
            onClick={() => setActiveTab('appointment')}
            className={`cursor-pointer flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors whitespace-nowrap ${
              activeTab === 'appointment'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Appoint & Removal
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm text-slate-300">
        {/* TAB 1: POWERS & WHAT THEY CAN DO */}
        {activeTab === 'powers' && (
          <div className="space-y-6">
            {/* Primary Responsibilities */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Primary Constitutional Responsibilities
              </h4>
              <ul className="space-y-2">
                {role.primaryResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-amber-400 font-bold text-xs mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorized Powers */}
            {role.powersByCategory.map((category, catIdx) => (
              <div key={catIdx} className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {category.title}
                </h4>
                <div className="space-y-1.5 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                  {category.items.map((power, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                      <span>{power}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* What They CAN Do in Real Practice */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Operational Scope: What They CAN Do
              </h4>
              <div className="space-y-2">
                {role.canDo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CHECKS & WHAT THEY CANNOT DO */}
        {activeTab === 'checks' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-rose-400 mb-2 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                Constitutional Limits: What They CANNOT Do
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                The Indian Constitution enforces a robust system of checks and balances across all administrative levels to prevent abuse of executive or legislative power.
              </p>

              <div className="space-y-2.5">
                {role.cannotDo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-slate-200 leading-relaxed"
                  >
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Civics Insight */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Constitutional Precedent & Civics Analysis
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {role.civicsNote}
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: SALARY & PERKS */}
        {activeTab === 'salary' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Monthly Pay</span>
                <span className="text-lg font-bold font-mono text-amber-300">
                  {role.salaryMonthly}
                </span>
              </div>
              <div className="border-t border-slate-800/80 pt-3">
                <h5 className="text-xs font-semibold text-slate-300 mb-1">
                  Salary Structure & Allowances
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {role.salaryDetails}
                </p>
              </div>

              {role.officialResidence && (
                <div className="border-t border-slate-800/80 pt-3 flex items-start gap-2 text-xs">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">Official Residence: </span>
                    <span className="text-slate-200 font-medium">{role.officialResidence}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Relevant Constitutional Articles */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Constitutional Mandate & Articles
              </h4>
              <div className="space-y-2">
                {role.constitutionalArticles.map((art, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 font-mono text-xs text-slate-200 flex items-center justify-between"
                  >
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>

            {role.keyLegislation && role.keyLegislation.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Governing Statutes & Acts
                </h4>
                <div className="space-y-1.5">
                  {role.keyLegislation.map((leg, idx) => (
                    <div key={idx} className="text-xs text-slate-400 bg-slate-950/40 px-3 py-2 rounded-lg border border-slate-800/60">
                      {leg}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: APPOINTMENT & REMOVAL */}
        {activeTab === 'appointment' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-sky-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                Appointment & Selection Mechanism
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {role.appointmentProcess}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-rose-400 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" />
                Removal & Impeachment Safeguards
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {role.removalProcess}
              </p>
            </div>

            {/* Reporting Chain & Advisory Links */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Administrative Chain of Command
              </h4>

              <div className="text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 shrink-0">Reports to:</span>
                  <span className="text-amber-300 font-medium">{role.reportsTo}</span>
                </div>

                {parentRole && onSelectRelatedRole && (
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Direct Hierarchical Parent:</span>
                    <button
                      onClick={() => onSelectRelatedRole(parentRole.id)}
                      className="cursor-pointer text-amber-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      {parentRole.name}
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {childRoles.length > 0 && onSelectRelatedRole && (
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 text-xs block mb-2">Direct Subordinate Roles ({childRoles.length}):</span>
                  <div className="flex flex-wrap gap-1.5">
                    {childRoles.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onSelectRelatedRole(c.id)}
                        className="cursor-pointer px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Source: Constitution of India & Seventh Pay Commission
        </span>

        <button
          onClick={() => onCompareRole(role)}
          className="cursor-pointer px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>Compare with another Role</span>
        </button>
      </div>
    </aside>
  );
};
