/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GOVERNANCE_ROLES, CIVICS_SCENARIOS } from './data/governanceData';
import { GovernanceRole } from './types/governance';
import { Header } from './components/Header';
import { NodeTreeCanvas } from './components/NodeTreeCanvas';
import { OrganMatrixView } from './components/OrganMatrixView';
import { CivicsScenarioQuiz } from './components/CivicsScenarioQuiz';
import { RoleDetailDrawer } from './components/RoleDetailDrawer';
import { RoleComparisonModal } from './components/RoleComparisonModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'tree' | 'matrix' | 'compare' | 'quiz'>('tree');
  
  // Selected role for the Inspector Drawer
  const [selectedRole, setSelectedRole] = useState<GovernanceRole | null>(() => {
    return GOVERNANCE_ROLES.find((r) => r.id === 'president') || GOVERNANCE_ROLES[0];
  });

  // Comparison modal state
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareRoleA, setCompareRoleA] = useState<GovernanceRole>(() => {
    return GOVERNANCE_ROLES.find((r) => r.id === 'president') || GOVERNANCE_ROLES[0];
  });
  const [compareRoleB, setCompareRoleB] = useState<GovernanceRole | undefined>(() => {
    return GOVERNANCE_ROLES.find((r) => r.id === 'prime_minister');
  });

  const handleSelectRole = (role: GovernanceRole) => {
    setSelectedRole(role);
  };

  const handleOpenCompare = (role: GovernanceRole) => {
    setCompareRoleA(role);
    // Find an interesting natural counterpart if possible
    let counterpartId = 'prime_minister';
    if (role.id === 'president') counterpartId = 'prime_minister';
    else if (role.id === 'prime_minister') counterpartId = 'president';
    else if (role.id === 'governors') counterpartId = 'chief_minister';
    else if (role.id === 'chief_minister') counterpartId = 'governors';
    else if (role.id === 'district_magistrate') counterpartId = 'sp_police';
    else if (role.id === 'sp_police') counterpartId = 'district_magistrate';
    else if (role.id === 'supreme_court_cji') counterpartId = 'attorney_general';
    else if (role.id === 'municipal_corporation') counterpartId = 'zilla_parishad';
    else if (role.id === 'gram_panchayat') counterpartId = 'bdo';

    const counterpart = GOVERNANCE_ROLES.find((r) => r.id === counterpartId);
    setCompareRoleB(counterpart);
    setIsCompareModalOpen(true);
  };

  const handleResetFocus = () => {
    const pres = GOVERNANCE_ROLES.find((r) => r.id === 'president');
    if (pres) setSelectedRole(pres);
  };

  const handleSelectRelatedRole = (roleId: string) => {
    const found = GOVERNANCE_ROLES.find((r) => r.id === roleId);
    if (found) setSelectedRole(found);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'compare') {
            setIsCompareModalOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        onResetFocus={handleResetFocus}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        {activeTab === 'tree' && (
          <NodeTreeCanvas
            roles={GOVERNANCE_ROLES}
            selectedRole={selectedRole}
            onSelectRole={handleSelectRole}
            onCompareRole={handleOpenCompare}
          />
        )}

        {activeTab === 'matrix' && (
          <OrganMatrixView
            roles={GOVERNANCE_ROLES}
            onSelectRole={handleSelectRole}
            onCompareRole={handleOpenCompare}
          />
        )}

        {activeTab === 'quiz' && (
          <CivicsScenarioQuiz
            scenarios={CIVICS_SCENARIOS}
            allRoles={GOVERNANCE_ROLES}
            onSelectRole={handleSelectRole}
          />
        )}

        {/* Detailed Role Inspector Drawer */}
        <RoleDetailDrawer
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
          onCompareRole={handleOpenCompare}
          onSelectRelatedRole={handleSelectRelatedRole}
          allRoles={GOVERNANCE_ROLES}
        />

        {/* Side-by-Side Role Comparison Modal */}
        {isCompareModalOpen && (
          <RoleComparisonModal
            initialRoleA={compareRoleA}
            initialRoleB={compareRoleB}
            allRoles={GOVERNANCE_ROLES}
            onClose={() => setIsCompareModalOpen(false)}
            onSelectRole={handleSelectRole}
          />
        )}
      </main>
    </div>
  );
}
