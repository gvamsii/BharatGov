export type GovernanceTier =
  | 'union'
  | 'state'
  | 'division'
  | 'district'
  | 'local_rural'
  | 'local_urban'
  | 'independent';

export type GovernanceBranch =
  | 'executive'
  | 'legislature'
  | 'judiciary'
  | 'constitutional'
  | 'administrative';

export interface PowerCategory {
  title: string;
  items: string[];
}

export interface GovernanceRole {
  id: string;
  name: string;
  hindiName: string;
  tier: GovernanceTier;
  branch: GovernanceBranch;
  level: number; // 0: Apex/Sovereign, 1: High Constitutional, 2: Ministerial/Apex Bureaucracy, 3: State/High Court, 4: District/Field, 5: Grassroots
  parentId: string | null;
  childrenIds: string[];
  
  // Core metadata requested by user
  salaryMonthly: string;
  salaryDetails: string;
  officialResidence?: string;
  tenure: string;
  constitutionalArticles: string[];
  
  primaryResponsibilities: string[];
  
  // Deep breakdown of what they can and cannot do
  powersByCategory: PowerCategory[];
  canDo: string[];
  cannotDo: string[];
  
  // Appointment & Removal
  appointmentProcess: string;
  removalProcess: string;
  
  // Relations
  reportsTo: string;
  advisesOrCommands: string[];
  
  // Civics / Contextual Insight
  civicsNote: string;
  keyLegislation?: string[];
}

export interface CivicsScenario {
  id: string;
  title: string;
  question: string;
  context: string;
  correctRoleId: string;
  optionsRoleIds: string[];
  explanation: string;
  constitutionalArticle: string;
}
