import React, { useState, useMemo, useRef } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Search,
  Filter,
  Check,
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { GovernanceRole, GovernanceBranch, GovernanceTier } from '../types/governance';
import { GovernanceNodeCard } from './GovernanceNodeCard';

interface NodeTreeCanvasProps {
  roles: GovernanceRole[];
  selectedRole: GovernanceRole | null;
  onSelectRole: (role: GovernanceRole) => void;
  onCompareRole: (role: GovernanceRole) => void;
}

export const NodeTreeCanvas: React.FC<NodeTreeCanvasProps> = ({
  roles,
  selectedRole,
  onSelectRole,
  onCompareRole
}) => {
  // Set of expanded role IDs
  const [expandedRoleIds, setExpandedRoleIds] = useState<Set<string>>(() => {
    // Initial sensible expansion: President -> PM & Governors -> CM & DM
    return new Set(['president', 'prime_minister', 'governors', 'chief_minister', 'state_chief_secretary']);
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [branchFilter, setBranchFilter] = useState<GovernanceBranch | 'all'>('all');
  const [tierFilter, setTierFilter] = useState<GovernanceTier | 'all'>('all');
  const [zoomLevel, setZoomLevel] = useState(1);

  const canvasRef = useRef<HTMLDivElement>(null);

  // Map of role ID to role object
  const roleMap = useMemo(() => {
    const map = new Map<string, GovernanceRole>();
    roles.forEach((r) => map.set(r.id, r));
    return map;
  }, [roles]);

  // Handle expand/collapse toggle
  const handleToggleExpand = (roleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedRoleIds((prev) => {
      const next = new Set(prev);
      if (next.has(roleId)) {
        next.delete(roleId);
      } else {
        next.add(roleId);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allParentIds = roles
      .filter((r) => r.childrenIds.length > 0)
      .map((r) => r.id);
    setExpandedRoleIds(new Set(allParentIds));
  };

  const collapseAll = () => {
    setExpandedRoleIds(new Set());
  };

  const resetToApex = () => {
    setExpandedRoleIds(new Set(['president']));
    setSearchQuery('');
    setBranchFilter('all');
    setTierFilter('all');
    setZoomLevel(1);
    const pres = roleMap.get('president');
    if (pres) onSelectRole(pres);
  };

  // Search filtering
  const matchingRoleIds = useMemo(() => {
    if (!searchQuery.trim()) return new Set<string>();
    const query = searchQuery.toLowerCase().trim();
    const matches = new Set<string>();

    roles.forEach((r) => {
      const matchName = r.name.toLowerCase().includes(query);
      const matchHindi = r.hindiName.toLowerCase().includes(query);
      const matchArticle = r.constitutionalArticles.some((a) =>
        a.toLowerCase().includes(query)
      );
      const matchSalary = r.salaryMonthly.toLowerCase().includes(query);
      const matchPower = r.primaryResponsibilities.some((p) =>
        p.toLowerCase().includes(query)
      );
      const matchCanDo = r.canDo.some((c) => c.toLowerCase().includes(query));

      if (matchName || matchHindi || matchArticle || matchSalary || matchPower || matchCanDo) {
        matches.add(r.id);
        // Automatically expand ancestors of matching nodes so user can find them!
        let curr = r;
        while (curr.parentId) {
          matches.add(curr.parentId);
          const parent = roleMap.get(curr.parentId);
          if (!parent) break;
          curr = parent;
        }
      }
    });

    return matches;
  }, [searchQuery, roles, roleMap]);

  // When searching, auto-expand parents of matching nodes
  React.useEffect(() => {
    if (searchQuery.trim() && matchingRoleIds.size > 0) {
      setExpandedRoleIds((prev) => {
        const next = new Set(prev);
        matchingRoleIds.forEach((id) => next.add(id));
        return next;
      });
    }
  }, [searchQuery, matchingRoleIds]);

  // Compute hierarchical trees starting from roots (parentId === null)
  const rootRoles = useMemo(() => {
    return roles.filter((r) => r.parentId === null);
  }, [roles]);

  // Recursive tree renderer
  const renderSubTree = (roleId: string, depth = 0): React.ReactNode => {
    const role = roleMap.get(roleId);
    if (!role) return null;

    // Filter check: If branch or tier filter applied, check if this branch or any descendant matches
    if (branchFilter !== 'all' && role.branch !== branchFilter) {
      const hasMatchingDescendant = role.childrenIds.some((cId) => {
        const c = roleMap.get(cId);
        return c && c.branch === branchFilter;
      });
      if (!hasMatchingDescendant) return null;
    }

    if (tierFilter !== 'all' && role.tier !== tierFilter) {
      const hasMatchingDescendant = role.childrenIds.some((cId) => {
        const c = roleMap.get(cId);
        return c && c.tier === tierFilter;
      });
      if (!hasMatchingDescendant) return null;
    }

    const isExpanded = expandedRoleIds.has(roleId);
    const hasChildren = role.childrenIds.length > 0;
    const isSelected = selectedRole?.id === roleId;
    const isSearchMatch = matchingRoleIds.has(roleId);

    return (
      <div key={role.id} className="flex flex-col items-center">
        {/* Node Card */}
        <div className="relative z-10 my-3">
          <GovernanceNodeCard
            role={role}
            isExpanded={isExpanded}
            isSelected={isSelected}
            hasChildren={hasChildren}
            childCount={role.childrenIds.length}
            onToggleExpand={handleToggleExpand}
            onSelectRole={onSelectRole}
            onCompareRole={(r, e) => {
              e.stopPropagation();
              onCompareRole(r);
            }}
            isSearchMatch={isSearchMatch}
          />

          {/* Vertical down-connector stub if expanded with children */}
          {hasChildren && isExpanded && (
            <div className="w-0.5 h-6 bg-slate-700 mx-auto" />
          )}
        </div>

        {/* Children Row with Branching SVG connector */}
        {hasChildren && isExpanded && (
          <div className="relative flex items-start justify-center gap-6 md:gap-8 pt-3 pb-6 px-4">
            {/* Top horizontal branch bar across all children */}
            {role.childrenIds.length > 1 && (
              <div className="absolute top-0 left-12 right-12 h-0.5 bg-slate-700/80 -translate-y-0.5" />
            )}

            {role.childrenIds.map((childId) => (
              <div key={childId} className="relative flex flex-col items-center">
                {/* Vertical dropdown line connecting to horizontal branch */}
                <div className="w-0.5 h-3 bg-slate-700/80 -mt-3" />
                {renderSubTree(childId, depth + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Breadcrumbs path from root to selected node
  const breadcrumbTrail = useMemo(() => {
    if (!selectedRole) return [];
    const trail: GovernanceRole[] = [];
    let curr: GovernanceRole | undefined = selectedRole;
    while (curr) {
      trail.unshift(curr);
      curr = curr.parentId ? roleMap.get(curr.parentId) : undefined;
    }
    return trail;
  }, [selectedRole, roleMap]);

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-100 overflow-hidden">
      {/* Interactive Control & Filter Toolbar */}
      <div className="p-3.5 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0 z-30">
        {/* Left: Search Bar & Branch Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative w-64 md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search role, Article, salary, powers..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>

          {/* Branch Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            {(
              [
                { id: 'all', label: 'All Organs' },
                { id: 'executive', label: 'Executive' },
                { id: 'legislature', label: 'Legislature' },
                { id: 'judiciary', label: 'Judiciary' },
                { id: 'administrative', label: 'Civil Service' }
              ] as const
            ).map((b) => (
              <button
                key={b.id}
                onClick={() => setBranchFilter(b.id)}
                className={`cursor-pointer px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  branchFilter === b.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Canvas Zoom & Node Expansion Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Presets */}
          <button
            onClick={expandAll}
            className="cursor-pointer px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors flex items-center gap-1"
            title="Expand all levels dynamically"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Expand All</span>
          </button>

          <button
            onClick={collapseAll}
            className="cursor-pointer px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors flex items-center gap-1"
            title="Collapse all to roots"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Collapse All</span>
          </button>

          <button
            onClick={resetToApex}
            className="cursor-pointer px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors flex items-center gap-1"
            title="Reset to default apex view"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <div className="h-4 w-px bg-slate-800 mx-1" />

          {/* Zoom Controls */}
          <div className="flex items-center bg-slate-950 rounded-lg border border-slate-800 p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.1))}
              className="cursor-pointer p-1 text-slate-400 hover:text-white rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-1.5 text-slate-400 min-w-[36px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
              className="cursor-pointer p-1 text-slate-400 hover:text-white rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb Hierarchy Path Banner */}
      {breadcrumbTrail.length > 0 && (
        <div className="px-5 py-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-1.5 text-xs overflow-x-auto whitespace-nowrap shrink-0">
          <span className="text-slate-500 font-medium">Hierarchy Path:</span>
          {breadcrumbTrail.map((node, index) => (
            <React.Fragment key={node.id}>
              {index > 0 && <span className="text-slate-600">→</span>}
              <button
                onClick={() => onSelectRole(node)}
                className={`cursor-pointer hover:underline ${
                  index === breadcrumbTrail.length - 1
                    ? 'text-amber-400 font-bold'
                    : 'text-slate-300'
                }`}
              >
                {node.name}
              </button>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Main Interactive Zoomable Canvas */}
      <div
        ref={canvasRef}
        className="flex-1 overflow-auto p-8 bg-slate-950 relative"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <div
          className="min-w-fit mx-auto transition-transform duration-150 origin-top flex flex-col items-center justify-start pb-24"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Top Instruction Banner */}
          <div className="mb-6 px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-2 shadow-sm">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Click any node to inspect powers & salary; click <strong>Sub-Roles (+)</strong> to expand lower tiers.</span>
          </div>

          {/* Roots rendering (Union Apex -> Branches) */}
          <div className="flex flex-col items-center gap-8">
            {rootRoles.map((root) => renderSubTree(root.id))}
          </div>
        </div>
      </div>
    </div>
  );
};
