import React, { useState } from 'react';
import {
  X,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  Coins,
  BookOpen,
  UserCheck,
  Shield,
  Scale
} from 'lucide-react';
import { GovernanceRole } from '../types/governance';
import { TIER_CONFIG } from '../data/governanceData';

interface RoleComparisonModalProps {
  initialRoleA: GovernanceRole;
  initialRoleB?: GovernanceRole;
  allRoles: GovernanceRole[];
  onClose: () => void;
  onSelectRole: (role: GovernanceRole) => void;
}

export const RoleComparisonModal: React.FC<RoleComparisonModalProps> = ({
  initialRoleA,
  initialRoleB,
  allRoles,
  onClose,
  onSelectRole
}) => {
  const [roleAId, setRoleAId] = useState<string>(initialRoleA.id);
  const [roleBId, setRoleBId] = useState<string>(
    initialRoleB?.id ||
      (initialRoleA.id === 'president'
        ? 'prime_minister'
        : initialRoleA.id === 'governors'
        ? 'chief_minister'
        : initialRoleA.id === 'district_magistrate'
        ? 'sp_police'
        : 'president')
  );

  const roleA = allRoles.find((r) => r.id === roleAId) || initialRoleA;
  const roleB = allRoles.find((r) => r.id === roleBId) || allRoles[1];

  const tierA = TIER_CONFIG[roleA.tier] || TIER_CONFIG.union;
  const tierB = TIER_CONFIG[roleB.tier] || TIER_CONFIG.union;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg md:text-xl font-bold text-white font-display">
              Constitutional Role Comparison
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selectors Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-950/60 p-4 border-b border-slate-800 gap-4">
          {/* Selector A */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Role A
            </label>
            <select
              value={roleAId}
              onChange={(e) => setRoleAId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
            >
              {allRoles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.tier.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          {/* Selector B */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Role B
            </label>
            <select
              value={roleBId}
              onChange={(e) => setRoleBId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
            >
              {allRoles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.tier.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparative Matrix Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Titles & Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className={`text-xs font-semibold ${tierA.color}`}>
                {tierA.badge} · {roleA.branch.toUpperCase()}
              </span>
              <h4 className="text-lg font-bold text-white font-display">
                {roleA.name}
              </h4>
              <p className="text-xs text-slate-400">{roleA.hindiName}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className={`text-xs font-semibold ${tierB.color}`}>
                {tierB.badge} · {roleB.branch.toUpperCase()}
              </span>
              <h4 className="text-lg font-bold text-white font-display">
                {roleB.name}
              </h4>
              <p className="text-xs text-slate-400">{roleB.hindiName}</p>
            </div>
          </div>

          {/* Section: Official Salary & Perks */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-amber-400 flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5" />
              Monthly Remuneration & Perks
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                <p className="text-base font-bold text-amber-300 font-mono">
                  {roleA.salaryMonthly}
                </p>
                <p className="text-xs text-slate-400 mt-1">{roleA.salaryDetails}</p>
              </div>

              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                <p className="text-base font-bold text-amber-300 font-mono">
                  {roleB.salaryMonthly}
                </p>
                <p className="text-xs text-slate-400 mt-1">{roleB.salaryDetails}</p>
              </div>
            </div>
          </div>

          {/* Section: Constitutional Articles */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Constitutional Mandate & Key Articles
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                {roleA.constitutionalArticles.map((art, idx) => (
                  <div key={idx} className="text-xs font-mono text-slate-200 bg-slate-900 px-2 py-1 rounded">
                    {art}
                  </div>
                ))}
              </div>

              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                {roleB.constitutionalArticles.map((art, idx) => (
                  <div key={idx} className="text-xs font-mono text-slate-200 bg-slate-900 px-2 py-1 rounded">
                    {art}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: What They CAN Do */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Operational Powers & What They CAN Do
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 bg-emerald-950/10 p-3.5 rounded-xl border border-emerald-900/30">
                {roleA.canDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 bg-emerald-950/10 p-3.5 rounded-xl border border-emerald-900/30">
                {roleB.canDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: What They CANNOT Do (Checks & Balances) */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-rose-400 flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5" />
              Constitutional Limits: What They CANNOT Do
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 bg-rose-950/10 p-3.5 rounded-xl border border-rose-900/30">
                {roleA.cannotDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 bg-rose-950/10 p-3.5 rounded-xl border border-rose-900/30">
                {roleB.cannotDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Appointment & Removal */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-sky-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" />
              Appointment & Removal Procedures
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Appointed by:</span>
                  <p className="text-slate-300">{roleA.appointmentProcess}</p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 font-semibold block mb-0.5">Removed via:</span>
                  <p className="text-slate-300">{roleA.removalProcess}</p>
                </div>
              </div>

              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Appointed by:</span>
                  <p className="text-slate-300">{roleB.appointmentProcess}</p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 font-semibold block mb-0.5">Removed via:</span>
                  <p className="text-slate-300">{roleB.removalProcess}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Comparing constitutional prerogatives under the Constitution of India
          </span>
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
