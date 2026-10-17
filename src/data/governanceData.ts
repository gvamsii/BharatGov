import { GovernanceRole, CivicsScenario } from '../types/governance';

export const GOVERNANCE_ROLES: GovernanceRole[] = [
  // ==================== APEX CONSTITUTIONAL ROOTS ====================
  {
    id: 'president',
    name: 'President of India',
    hindiName: 'भारत के राष्ट्रपति (Rashtrapati)',
    tier: 'union',
    branch: 'executive',
    level: 0,
    parentId: null,
    childrenIds: ['prime_minister', 'supreme_court_cji', 'governors', 'cag', 'election_commission', 'attorney_general'],
    salaryMonthly: '₹5,00,000 / month',
    salaryDetails: 'Fixed by Parliament (Second Schedule). Tax-free benefits, life pension of 50% salary, Rashtrapati Bhavan official residence, free medical, secretarial staff, security, and travel anywhere in India.',
    officialResidence: 'Rashtrapati Bhavan, New Delhi (Retreats at Shimla and Hyderabad)',
    tenure: '5 Years (Eligible for immediate re-election, Article 57)',
    constitutionalArticles: ['Article 52 (Office)', 'Article 53 (Executive Power)', 'Article 72 (Pardoning)', 'Article 74 (Council of Ministers advice)', 'Article 123 (Ordinances)', 'Article 352/356/360 (Emergency)'],
    primaryResponsibilities: [
      'De jure Head of State and supreme constitutional authority of the Republic of India',
      'Supreme Commander of the Indian Armed Forces (Army, Navy, Air Force)',
      'Guardian of the Constitution sworn to preserve, protect, and defend the law',
      'Appointing the Prime Minister, Union Ministers, Chief Justice of India, Judges, Governors, and Constitutional heads',
      'Assenting to Bills passed by Parliament to enact them into Acts of Parliament'
    ],
    powersByCategory: [
      {
        title: 'Executive Powers',
        items: [
          'All executive actions of the Union Government are formally taken in the President’s name (Art 77)',
          'Appoints Prime Minister and, on PM’s advice, other Ministers of the Union Council',
          'Appoints Chief Justice of India, Judges of Supreme Court & High Courts, Attorney General, CAG, CEC & ECs, UPSC Chairman, and Governors',
          'Administers Union Territories directly through Administrators / Lieutenant Governors'
        ]
      },
      {
        title: 'Legislative & Ordinance Powers',
        items: [
          'Summons, prorogues Parliament sessions and can dissolve the Lok Sabha on PM advice',
          'Addresses joint sitting of Parliament at the commencement of first session after general elections and first session of each year',
          'Can promulgate Ordinances under Article 123 when Parliament is not in session (has force of an Act, must be approved within 6 weeks of reassembly)',
          'Nomination of 12 members to Rajya Sabha with special knowledge in literature, science, art, and social service'
        ]
      },
      {
        title: 'Judicial & Pardoning Powers',
        items: [
          'Under Article 72, holds exclusive power to grant pardons, reprieves, respites, or remissions of punishment, or suspend, remit, or commute death sentences',
          'Can seek advisory opinion from the Supreme Court on questions of law or public importance (Article 143)'
        ]
      },
      {
        title: 'Emergency Powers',
        items: [
          'Article 352: Proclaim National Emergency on grounds of war, external aggression, or armed rebellion',
          'Article 356: Impose President’s Rule (State Emergency) on breakdown of constitutional machinery in a State',
          'Article 360: Proclaim Financial Emergency if financial stability or credit of India is threatened'
        ]
      }
    ],
    canDo: [
      'Return a non-Money Bill once to Parliament for reconsideration with a message (suspensive veto)',
      'Exercise pocket veto by withholding assent without time limit on non-constitutional amendment ordinary bills',
      'Invite the leader of the majority party or single largest coalition to form the government when no party holds clear majority',
      'Commute a death sentence to life imprisonment or grant complete presidential pardon',
      'Ask the Prime Minister for information relating to Union administration and legislative proposals (Art 78)'
    ],
    cannotDo: [
      'Cannot act independently in executive governance without the aid and advice of the Council of Ministers (Article 74(1) makes advice binding after one reconsideration)',
      'Cannot introduce or withhold assent from a Constitutional Amendment Bill (24th Amendment makes presidential assent mandatory)',
      'Cannot declare Emergency or promulgate an Ordinance unilaterally without written Cabinet recommendation',
      'Cannot withhold assent from a Money Bill passed by Parliament (as it is introduced with prior presidential recommendation)'
    ],
    appointmentProcess: 'Elected indirectly by an Electoral College consisting of elected members of both Houses of Parliament (MPs) and elected members of Legislative Assemblies of States and Delhi/Puducherry (MLAs) via proportional representation by Single Transferable Vote.',
    removalProcess: 'Impeachment under Article 61 on the sole ground of "violation of the Constitution". Charges must be initiated by either House with 1/4th members signing, 14 days notice, and passed by a 2/3rd majority of the TOTAL membership of both Houses.',
    reportsTo: 'Constitution of India (Accountable to the People & Parliament through Impeachment)',
    advisesOrCommands: ['Supreme Commander of Indian Armed Forces', 'Appoints Union Council of Ministers', 'Appoints Judiciary and Constitutional Commissions'],
    civicsNote: 'While the President is the nominal (de jure) head, the Prime Minister is the real (de facto) executive. Dr. B.R. Ambedkar stated: "The President occupies the same position as the King under the English Constitution. He represents the Nation but does not rule the Nation."',
    keyLegislation: ['Constitution of India (Articles 52-78)', 'President and Vice-President Elections Act, 1952', 'President’s Emoluments and Pension Act, 1951']
  },

  {
    id: 'vice_president',
    name: 'Vice-President of India',
    hindiName: 'भारत के उपराष्ट्रपति (Uparashtrapati)',
    tier: 'union',
    branch: 'legislature',
    level: 1,
    parentId: 'president',
    childrenIds: ['rajya_sabha'],
    salaryMonthly: '₹4,00,000 / month',
    salaryDetails: 'Receives salary in the capacity of Ex-officio Chairman of Rajya Sabha. Entitled to official residence (Vice-President Enclave), daily allowance, medical, security, and travel facilities.',
    officialResidence: 'Vice-President Enclave, New Delhi',
    tenure: '5 Years (Can be re-elected)',
    constitutionalArticles: ['Article 63 (Office)', 'Article 64 (Ex-officio Chairman of Rajya Sabha)', 'Article 65 (Acting as President)', 'Article 66 (Election)', 'Article 67 (Term & Removal)'],
    primaryResponsibilities: [
      'Second-highest constitutional office in India, next only to the President',
      'Ex-officio Chairman of the Rajya Sabha (Council of States), presiding over its sessions and debates',
      'Acts as President of India in the event of vacancy caused by death, resignation, removal, or illness until a new President takes office (maximum 6 months)'
    ],
    powersByCategory: [
      {
        title: 'Presiding Officer Powers (Rajya Sabha)',
        items: [
          'Maintains order and decorum in the Upper House of Parliament',
          'Decides admissibility of questions, motions, resolutions, and points of order',
          'Casts a deciding vote in case of an equality of votes (casting vote under Art 100)'
        ]
      },
      {
        title: 'Executive Contingency Powers',
        items: [
          'Discharges all presidential functions, privileges, and powers when acting as President',
          'Receives the resignation letter of the President of India'
        ]
      }
    ],
    canDo: [
      'Act as President of India when vacancy arises in the presidential office',
      'Suspend or name a Member of Parliament for unruly conduct in Rajya Sabha',
      'Cast a tie-breaking vote on a bill in Rajya Sabha'
    ],
    cannotDo: [
      'Cannot vote in the first instance on any bill in Rajya Sabha (can only exercise a casting vote in a tie)',
      'Cannot preside over Rajya Sabha when a resolution for his/her own removal is under consideration',
      'Cannot exercise executive government powers while performing duties as Rajya Sabha Chairman'
    ],
    appointmentProcess: 'Elected by an Electoral College consisting of members of both Houses of Parliament (both elected and nominated MPs) by proportional representation through Single Transferable Vote.',
    removalProcess: 'Resolution passed by a majority of all the then members of the Rajya Sabha (effective majority) and agreed to by the Lok Sabha (simple majority). 14 days prior notice required.',
    reportsTo: 'Constitution of India / Parliament',
    advisesOrCommands: ['Presides over Rajya Sabha', 'Deputizes for the President of India on state occasions'],
    civicsNote: 'The office is modeled on the lines of the American Vice-President, but unlike the US VP who assumes the presidency for the remainder of the term upon vacancy, the Indian VP only acts as President temporarily until an election is held within 6 months.',
    keyLegislation: ['Constitution of India (Articles 63-71)', 'Vice-President’s Pension Act, 1997']
  },

  {
    id: 'prime_minister',
    name: 'Prime Minister of India',
    hindiName: 'भारत के प्रधानमंत्री (Pradhan Mantri)',
    tier: 'union',
    branch: 'executive',
    level: 1,
    parentId: 'president',
    childrenIds: ['union_cabinet', 'pmo', 'cabinet_secretary', 'niti_aayog'],
    salaryMonthly: '₹1,66,000 / month (Basic ₹50k + Constituency ₹45k + Sumptuary/Office allowances = ₹2,80,000 gross)',
    salaryDetails: 'Receives salary and allowances as a Member of Parliament (Salaries and Allowances of Ministers Act, 1952). Entitled to 7, Lok Kalyan Marg residence, SPG (Special Protection Group) security, aircraft travel, and secretarial staff.',
    officialResidence: '7, Lok Kalyan Marg (formerly 7, Race Course Road), New Delhi',
    tenure: 'Holds office during pleasure of the President, but in practice as long as enjoying the majority confidence in Lok Sabha (typically 5-year terms).',
    constitutionalArticles: ['Article 74 (Council of Ministers to aid & advise)', 'Article 75 (Appointment & collective responsibility)', 'Article 78 (Duty to communicate to President)'],
    primaryResponsibilities: [
      'De facto executive head of the Government of India and chief spokesperson of the Nation',
      'Leader of the Union Council of Ministers and head of the Cabinet',
      'Principal advisor to the President of India and the chief architect of national policies',
      'Chairman of NITI Aayog, National Security Council, Nuclear Command Authority, Inter-State Council, and NDMA'
    ],
    powersByCategory: [
      {
        title: 'Cabinet & Ministry Leadership',
        items: [
          'Recommends appointment, reshuffling, and dismissal of Ministers to the President',
          'Allocates portfolios among Ministries and presides over Union Cabinet meetings',
          'Coordinates between various ministries and resolves inter-ministerial conflicts'
        ]
      },
      {
        title: 'Constitutional Link to President',
        items: [
          'Communicates to the President all decisions of the Council of Ministers relating to Union administration (Art 78)',
          'Submits for consideration of the Council of Ministers any matter on which a decision was taken by an individual minister but not considered by Cabinet'
        ]
      },
      {
        title: 'Strategic & Crisis Leadership',
        items: [
          'Political Head of the Nuclear Command Authority (authorizes use of nuclear weapons)',
          'Chairman of the National Disaster Management Authority (NDMA)',
          'Head of the Appointments Committee of the Cabinet (ACC), approving all top bureaucratic, judicial, and military promotions'
        ]
      }
    ],
    canDo: [
      'Advise the President to dissolve the Lok Sabha and call fresh general elections',
      'Determine India’s strategic foreign policy, defense priorities, and international treaties',
      'Resign at will, which automatically brings down the entire Council of Ministers',
      'Select and appoint the Cabinet Secretary, National Security Advisor, and Service Chiefs through Cabinet committees'
    ],
    cannotDo: [
      'Cannot govern or enact laws without parliamentary majority in Lok Sabha (must resign upon losing a No-Confidence Motion)',
      'Cannot bypass the Constitution or Supreme Court rulings on basic structure doctrine',
      'Cannot alter state boundaries or state lists unilaterally without constitutional parliamentary procedure'
    ],
    appointmentProcess: 'Appointed by the President of India. By convention, the President invites the leader of the party or coalition commanding a majority in the Lok Sabha. Must be a member of either Lok Sabha or Rajya Sabha (or get elected within 6 months of appointment).',
    removalProcess: 'Ceases to hold office if the Lok Sabha passes a Vote of No-Confidence or rejects a Money Bill, and the PM fails to prove a majority or resign.',
    reportsTo: 'Lok Sabha (Collective Responsibility under Art 75(3)) & the Electorate of India',
    advisesOrCommands: ['Leads Union Council of Ministers', 'Commands Bureaucracy via Cabinet Secretary', 'Directs Armed Forces via Ministry of Defence & NSA'],
    civicsNote: 'Described as "Primus inter pares" (first among equals) by Lord Morley and as "the keystone of the Cabinet arch" by Sir Ivor Jennings. Under India’s parliamentary democracy, the PM holds real operational power.',
    keyLegislation: ['Salaries and Allowances of Ministers Act, 1952', 'Special Protection Group Act, 1988', 'Government of India (Allocation of Business) Rules, 1961']
  },

  {
    id: 'union_cabinet',
    name: 'Union Council of Ministers',
    hindiName: 'केंद्रीय मंत्रिपरिषद (Kendriya Mantriparishad)',
    tier: 'union',
    branch: 'executive',
    level: 2,
    parentId: 'prime_minister',
    childrenIds: ['cabinet_ministers', 'ministers_of_state', 'ministries_departments'],
    salaryMonthly: '₹1,00,000 / month basic + daily allowance ₹2,000 + constituency allowance ₹70,000 + sumptuary allowance',
    salaryDetails: 'Paid under Salaries and Allowances of Ministers Act. Free government bungalow in Lutyens Delhi, official vehicle, security escort, travel vouchers, and staff.',
    tenure: 'Co-terminus with Lok Sabha or during the pleasure of the Prime Minister and President',
    constitutionalArticles: ['Article 74 (Aid & Advice to President)', 'Article 75 (Collective Responsibility to Lok Sabha)', '91st Amendment Act (Capped at 15% of Lok Sabha strength)'],
    primaryResponsibilities: [
      'Supreme decision-making body formulating government policies, legislative agendas, and executive ordinances',
      'Collective responsibility to the Lok Sabha: Sink or swim together',
      'Overseeing the administrative machinery and execution of Union laws'
    ],
    powersByCategory: [
      {
        title: 'Policy & Legislative Leadership',
        items: [
          'Prepares the Union Budget and all official government bills introduced in Parliament',
          'Approves mega infrastructure projects, international treaties, and defense procurement',
          'Recommends proclamation of National or Financial Emergency to the President in writing'
        ]
      }
    ],
    canDo: [
      'Approve draft legislation and introduce government bills in Parliament',
      'Issue executive notifications and statutory regulations under Acts of Parliament',
      'Allocate government funding across departments'
    ],
    cannotDo: [
      'No individual minister can publicly dissent from a Cabinet decision; must defend it or resign (Doctrine of Collective Responsibility)',
      'Total number of ministers cannot exceed 15% of the total strength of Lok Sabha (maximum ~81 ministers)'
    ],
    appointmentProcess: 'Appointed by the President on the advice of the Prime Minister. Must be an MP or become one within 6 months.',
    removalProcess: 'Dismissed by the President on the advice of the Prime Minister, or removed when Lok Sabha passes a No-Confidence Motion.',
    reportsTo: 'Prime Minister & Lok Sabha',
    advisesOrCommands: ['Advises President of India', 'Directs Union Ministries and Departments'],
    civicsNote: 'Consists of three categories: Cabinet Ministers (inner policy core), Ministers of State (Independent Charge), and Ministers of State (assisting Cabinet Ministers).',
    keyLegislation: ['Constitution of India (Articles 74, 75)', 'Allocation of Business Rules, 1961']
  },

  {
    id: 'cabinet_secretary',
    name: 'Cabinet Secretary of India',
    hindiName: 'भारत के कैबिनेट सचिव (Cabinet Sachiv)',
    tier: 'union',
    branch: 'administrative',
    level: 2,
    parentId: 'prime_minister',
    childrenIds: ['secretaries_departments', 'ias_cadre'],
    salaryMonthly: '₹2,50,000 / month (Apex Pay Scale - Level 18 of 7th CPC)',
    salaryDetails: 'Highest pay scale in the Indian Civil Service. Entitled to official Type VIII bungalow on Prithviraj Road, official staff car, Z-grade security, and domestic staff.',
    officialResidence: 'Prithviraj Road / New Delhi Government Estate',
    tenure: 'Normally 2 years (subject to extension by the Appointments Committee of the Cabinet)',
    constitutionalArticles: ['Government of India (Transaction of Business) Rules, 1961', 'Civil Services Regulations under Article 309 & 312'],
    primaryResponsibilities: [
      'Senior-most executive civil servant and head of the permanent administrative machinery in India',
      'Ex-officio Chairman of the Civil Services Board and chief coordinator among all Union Ministries',
      'Secretary to the Union Cabinet, preparing agenda and recording minutes of all Cabinet meetings',
      'Principal advisor to the Prime Minister on administrative matters and civil service crisis response'
    ],
    powersByCategory: [
      {
        title: 'Civil Service Leadership',
        items: [
          'Heads the Indian Administrative Service (IAS) and chairs meetings of all Secretaries to the Government of India',
          'Chairs the Civil Services Board recommending postings and transfers of senior IAS officers',
          'Coordinates joint crisis response during natural disasters, security crises, and national emergencies'
        ]
      },
      {
        title: 'Cabinet Operations',
        items: [
          'Ensures compliance with Cabinet decisions across all Ministries through Secretary reports',
          'Serves as the eyes and ears of the Prime Minister regarding administrative execution'
        ]
      }
    ],
    canDo: [
      'Convene and preside over meetings of all departmental Secretaries',
      'Call for files and information from any Ministry to brief the Prime Minister and Cabinet',
      'Issue administrative guidelines to all civil service cadres'
    ],
    cannotDo: [
      'Cannot make political policy decisions (serves strictly as a neutral, permanent civil servant)',
      'Cannot override decisions of a Cabinet Minister unless directed by the Prime Minister'
    ],
    appointmentProcess: 'Appointed by the Appointments Committee of the Cabinet (ACC) headed by the Prime Minister, selected from senior-most IAS officers with distinguished track records.',
    removalProcess: 'Subject to Central Civil Services (Classification, Control and Appeal) Rules, Article 311 safeguards.',
    reportsTo: 'Prime Minister of India',
    advisesOrCommands: ['Advises Prime Minister & Union Cabinet', 'Commands All Departmental Secretaries & Civil Service Cadres'],
    civicsNote: 'Ranks 11th in the Indian Order of Precedence, ahead of all Chief of Staffs of the Armed Forces and Judges of High Courts.',
    keyLegislation: ['Transaction of Business Rules, 1961', 'All India Services Act, 1951']
  },

  {
    id: 'supreme_court_cji',
    name: 'Chief Justice of India (CJI) & Supreme Court',
    hindiName: 'भारत के मुख्य न्यायाधीश (Mukhya Nyayadhish)',
    tier: 'union',
    branch: 'judiciary',
    level: 1,
    parentId: 'president',
    childrenIds: ['sc_judges', 'high_courts'],
    salaryMonthly: '₹2,80,000 / month (CJI) | ₹2,50,000 / month (SC Judges)',
    salaryDetails: 'Charged directly on the Consolidated Fund of India (cannot be varied to disadvantage during tenure). Official bungalow on Krishna Menon Marg, chauffeurs, Y+ security, free electricity/water, round-the-clock medical.',
    officialResidence: '5, Krishna Menon Marg, New Delhi',
    tenure: 'Holds office until attaining the age of 65 years (Article 124(2))',
    constitutionalArticles: ['Article 124 (Establishment & Appointment)', 'Article 129 (Court of Record & Contempt)', 'Article 131 (Original Jurisdiction)', 'Article 132-136 (Appellate Jurisdiction & SLP)', 'Article 141 (Law declared is binding on all courts)', 'Article 142 (Complete justice)'],
    primaryResponsibilities: [
      'Head of the Judiciary of India and Master of the Roster presiding over the Supreme Court of India',
      'Head of the Supreme Court Collegium recommending appointment and transfer of judges to the Supreme Court and 25 High Courts',
      'Ultimate interpreter and guardian of the Constitution of India and protector of Fundamental Rights (Art 32)',
      'Administers oath of office to the President of India'
    ],
    powersByCategory: [
      {
        title: 'Judicial & Constitutional Powers',
        items: [
          'Judicial Review: Striking down any parliamentary legislation or executive action violating the Constitution or Basic Structure',
          'Enforces Fundamental Rights through Writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) under Article 32',
          'Exclusive original jurisdiction in federal disputes between Union and States or between multiple States (Article 131)',
          'Article 142: Inherent power to pass any decree or order necessary for doing complete justice in any cause or matter'
        ]
      },
      {
        title: 'Master of the Roster & Administrative Powers',
        items: [
          'Exclusive prerogative to allocate cases and constitute Constitution Benches (5, 7, 9, 13 judges)',
          'Heads the National Legal Services Authority (NALSA) to provide free legal aid to underprivileged citizens'
        ]
      }
    ],
    canDo: [
      'Nullify any Union or State law that infringes upon the Fundamental Rights or Basic Structure of the Constitution',
      'Punish for contempt of court with fine or imprisonment (Article 129)',
      'Deliver binding legal precedents applicable to every court and tribunal in the territory of India (Article 141)',
      'Act as President of India if both the President and Vice-President offices become vacant simultaneously (as Justice M. Hidayatullah did in 1969)'
    ],
    cannotDo: [
      'Cannot hear cases without constitutional or statutory jurisdiction; must adhere to established legal procedures and principles of natural justice',
      'Cannot exercise legislative powers or enact new laws (separation of powers doctrine)',
      'Cannot initiate criminal proceedings against anyone without a filed petition or recognized suo motu public interest litigation (PIL)'
    ],
    appointmentProcess: 'Appointed by the President of India. By convention, the outgoing CJI recommends the senior-most judge of the Supreme Court. Collegium system (CJI + 4 senior-most judges) recommends candidates.',
    removalProcess: 'Impeached under Article 124(4) on grounds of "proved misbehaviour or incapacity". Requires an address passed by both Houses of Parliament supported by a majority of total membership and at least 2/3rd of members present and voting.',
    reportsTo: 'Constitution of India (Independent of Executive & Legislature)',
    advisesOrCommands: ['Commands All Courts and Tribunals in India', 'Advises President of India when requested under Art 143'],
    civicsNote: 'The Supreme Court of India is one of the most powerful apex courts in the world due to Article 142 (complete justice) and the Basic Structure Doctrine formulated in Kesavananda Bharati (1973).',
    keyLegislation: ['Supreme Court (Number of Judges) Act, 1956', 'Contempt of Courts Act, 1971', 'Supreme Court Rules, 2013']
  },

  {
    id: 'lok_sabha',
    name: 'Lok Sabha (House of the People)',
    hindiName: 'लोक सभा (Nichla Sadan)',
    tier: 'union',
    branch: 'legislature',
    level: 1,
    parentId: 'president',
    childrenIds: ['speaker_lok_sabha', 'mps_lok_sabha'],
    salaryMonthly: 'Speaker: ₹4,00,000 / month | Members of Parliament: ₹1,00,000 / month basic + ₹70,000 constituency + ₹2,000 daily allowance during sessions',
    salaryDetails: 'Governed by Salary, Allowances and Pension of Members of Parliament Act, 1954. Free official accommodation in New Delhi, 34 domestic air tickets per year, free rail travel, and pension.',
    officialResidence: 'Speaker: 20, Akbar Road, New Delhi',
    tenure: '5 Years from the date of first meeting (can be dissolved earlier by President on PM advice, or extended during National Emergency)',
    constitutionalArticles: ['Article 81 (Composition)', 'Article 93 (Speaker & Deputy Speaker)', 'Article 109-110 (Money Bills exclusive jurisdiction)', 'Article 112 (Annual Financial Statement/Budget)'],
    primaryResponsibilities: [
      'The primary legislative chamber representing the citizens of India directly elected on universal adult suffrage',
      'Holds the Union Council of Ministers accountable through questions, debates, and No-Confidence Motions',
      'Sole power over Money Bills and Union budget approval'
    ],
    powersByCategory: [
      {
        title: 'Legislative & Financial Supremacy',
        items: [
          'Money Bills can only originate in Lok Sabha (Article 109); Rajya Sabha can only delay for 14 days',
          'Demands for Grants in the Union Budget are voted exclusively in Lok Sabha',
          'Passes ordinary bills, constitutional amendments, and resolutions'
        ]
      },
      {
        title: 'Executive Accountability',
        items: [
          'Passes Motions of No-Confidence against the government; if passed, the entire Council of Ministers must resign',
          'Conducts Question Hour, Zero Hour, Calling Attention, and Adjournment Motions'
        ]
      }
    ],
    canDo: [
      'Vote down the Prime Minister and government by passing a No-Confidence Motion',
      'Approve, amend, or reject the Union Budget and all taxation proposals',
      'Initiate and vote on impeachment of the President and removal of judges'
    ],
    cannotDo: [
      'Cannot enact laws on matters exclusively assigned to State List (Seventh Schedule) unless authorized under Articles 249/250/252/253',
      'Cannot violate the Fundamental Rights or Basic Structure of the Constitution'
    ],
    appointmentProcess: 'Directly elected by eligible Indian citizens aged 18+ from 543 single-member parliamentary territorial constituencies across India.',
    removalProcess: 'Members can be disqualified under Article 102 or Tenth Schedule (Anti-Defection Law) by the Speaker.',
    reportsTo: 'Electorate of India',
    advisesOrCommands: ['Holds Union Council of Ministers accountable', 'Controls Public Purse of the Union'],
    civicsNote: 'The Speaker of Lok Sabha holds supreme authority within the House premises and decides whether a bill is a Money Bill (decision is final under Art 110(3)).',
    keyLegislation: ['Representation of the People Act, 1950 & 1951', 'Delimitation Act, 2002']
  },

  {
    id: 'rajya_sabha',
    name: 'Rajya Sabha (Council of States)',
    hindiName: 'राज्य सभा (Uchcha Sadan)',
    tier: 'union',
    branch: 'legislature',
    level: 1,
    parentId: 'president',
    childrenIds: [],
    salaryMonthly: '₹1,00,000 / month basic + ₹70,000 constituency + ₹2,000 daily session allowance',
    salaryDetails: 'Same salary and allowances as Lok Sabha MPs. Entitled to accommodation in Lutyens Delhi and parliamentary privileges.',
    tenure: 'Permanent body not subject to dissolution; 1/3rd of members retire every second year; each member serves 6-year terms.',
    constitutionalArticles: ['Article 80 (Composition)', 'Article 89 (Chairman & Deputy Chairman)', 'Article 249 (Authorizing Parliament on State List)', 'Article 312 (Creating All India Services)'],
    primaryResponsibilities: [
      'Federal chamber protecting the rights, interests, and autonomy of States and Union Territories in Parliament',
      'Revising and deliberating on legislation passed by the Lok Sabha, preventing hasty or ill-considered bills',
      'Exclusive federal powers under Articles 249 and 312'
    ],
    powersByCategory: [
      {
        title: 'Special Federal Powers',
        items: [
          'Article 249: Can pass a resolution by 2/3rd majority authorizing Parliament to legislate on a State List subject in national interest',
          'Article 312: Exclusive power to authorize Parliament to create new All India Services (like IAS, IPS, IFS)',
          'Must approve Proclamation of Emergency if Lok Sabha is dissolved at the time'
        ]
      }
    ],
    canDo: [
      'Delay an ordinary bill for up to 6 months to force a Joint Sitting of Parliament (Article 108)',
      'Amend ordinary bills and return them to Lok Sabha',
      'Create new All India Services under Article 312'
    ],
    cannotDo: [
      'Cannot reject or amend a Money Bill; can only make recommendations within 14 days (Article 109)',
      'Cannot vote on Demands for Grants in the Union Budget',
      'Cannot pass a No-Confidence Motion to bring down the Government'
    ],
    appointmentProcess: '238 members elected indirectly by the elected members of State Legislative Assemblies (MLAs) via proportional representation. 12 members nominated by the President for excellence in art, literature, science, or social service.',
    removalProcess: 'Members subject to disqualification under Article 102 or Tenth Schedule (decided by the Chairman).',
    reportsTo: 'State Legislatures & Constitutional Federal Structure',
    advisesOrCommands: ['Advises and reviews bills passed by Lok Sabha'],
    civicsNote: 'Envisioned by the framers as a council of elders offering deliberative maturity and guarding federal equilibrium against majoritarian swings in Lok Sabha.',
    keyLegislation: ['Constitution of India (Articles 80, 89, 249, 312)', 'RPA 1951']
  },

  {
    id: 'cag',
    name: 'Comptroller & Auditor General of India (CAG)',
    hindiName: 'भारत के नियंत्रक एवं महालेखापरीक्षक',
    tier: 'independent',
    branch: 'constitutional',
    level: 1,
    parentId: 'president',
    childrenIds: [],
    salaryMonthly: '₹2,50,000 / month (Equal to Supreme Court Judge)',
    salaryDetails: 'Charged on Consolidated Fund of India. Official residence, car, and pension safeguards.',
    tenure: '6 Years or until age 65, whichever is earlier',
    constitutionalArticles: ['Article 148 (Office of CAG)', 'Article 149 (Duties & Powers)', 'Article 150 (Form of Accounts)', 'Article 151 (Audit Reports)'],
    primaryResponsibilities: [
      'Supreme audit institution and guardian of the public purse at both Union and State levels',
      'Audits all expenditure from the Consolidated Fund of India and of every State and Union Territory',
      'Submits audit reports to President and Governors, which are examined by the Public Accounts Committee (PAC)'
    ],
    powersByCategory: [
      {
        title: 'Audit & Accountability Mandate',
        items: [
          'Audits all trading, manufacturing, profit/loss accounts of government departments and PSUs',
          'Inspects stores, stocks, and grants given to autonomous bodies from public funds',
          'Conducts performance, financial, and compliance audits across government schemes'
        ]
      }
    ],
    canDo: [
      'Demand access to any book, account, paper, or document from any Union or State department',
      'Highlight waste, corruption, and financial irregularity in public expenditures in official tabled audit reports'
    ],
    cannotDo: [
      'Cannot withhold disbursement of funds beforehand (audits ex-post facto / after expenditure is incurred)',
      'Cannot hold any government office after retirement (Article 148(4) complete bar)'
    ],
    appointmentProcess: 'Appointed by the President by warrant under his hand and seal.',
    removalProcess: 'Can only be removed in like manner and on like grounds as a Judge of the Supreme Court (Article 148(1) - Parliamentary impeachment).',
    reportsTo: 'Parliament of India (via Public Accounts Committee) & State Legislatures',
    advisesOrCommands: ['Advises Public Accounts Committee (Friend, philosopher, and guide to PAC)'],
    civicsNote: 'Dr. Ambedkar observed that the CAG is the most important officer in the Constitution of India, defending public finances against executive extravagance.',
    keyLegislation: ['CAG’s (Duties, Powers and Conditions of Service) Act, 1971']
  },

  {
    id: 'election_commission',
    name: 'Election Commission of India (ECI)',
    hindiName: 'भारत निर्वाचन आयोग',
    tier: 'independent',
    branch: 'constitutional',
    level: 1,
    parentId: 'president',
    childrenIds: [],
    salaryMonthly: '₹2,50,000 / month (Equal to Supreme Court Judge)',
    salaryDetails: 'Chief Election Commissioner & 2 Election Commissioners receive salary and perks equivalent to SC Judge.',
    tenure: '6 Years or until age 65, whichever is earlier',
    constitutionalArticles: ['Article 324 (Superintendence, direction & control of elections)', 'Article 325 (No exclusion on religion/race/caste)', 'Article 326 (Universal adult suffrage)'],
    primaryResponsibilities: [
      'Superintendence, direction, and control of all elections to Parliament, State Legislatures, and the offices of President & Vice-President',
      'Enforcing the Model Code of Conduct (MCC) for political parties and candidates during elections',
      'Preparing and updating the national electoral roll'
    ],
    powersByCategory: [
      {
        title: 'Quasi-Judicial & Regulatory Powers',
        items: [
          'Recognizes political parties and allocates election symbols (Election Symbols Order, 1968)',
          'Acts as a court for resolving disputes related to splits and mergers in recognized parties',
          'Can postpone, countermand, or cancel polling in constituencies where violence or booth capturing occurs'
        ]
      }
    ],
    canDo: [
      'Order transfer of any police officer, district collector, or civil servant during the election period',
      'Disqualify candidates for failing to lodge election expenses within time',
      'Censure leaders and ban them from campaigning for MCC violations'
    ],
    cannotDo: [
      'Does not conduct Panchayat and Municipal elections (those are conducted by independent State Election Commissions under Art 243K/243ZA)',
      'Cannot overturn election results after declaration (disputes must go to High Court via Election Petitions)'
    ],
    appointmentProcess: 'Appointed by the President based on recommendation of a selection committee comprising Prime Minister, Leader of Opposition/single largest opposition party, and a designated Union Cabinet Minister (Chief Election Commissioner and other Election Commissioners Act, 2023).',
    removalProcess: 'The CEC cannot be removed except in like manner and on like grounds as a Judge of the Supreme Court (Parliamentary address with 2/3rd majority). Other Commissioners can only be removed on the recommendation of the CEC.',
    reportsTo: 'Constitution of India & Supreme Court Judicial Scrutiny',
    advisesOrCommands: ['Advises President and Governors on disqualification of sitting MPs and MLAs under Art 103 and 192'],
    civicsNote: 'During general elections, the ECI assumes superintending control over millions of government employees and security personnel deployed for election duty.',
    keyLegislation: ['Representation of the People Act, 1950 & 1951', 'Chief Election Commissioner Act, 2023']
  },

  {
    id: 'attorney_general',
    name: 'Attorney General for India',
    hindiName: 'भारत के महान्यायवादी (Mahanayavadi)',
    tier: 'independent',
    branch: 'constitutional',
    level: 1,
    parentId: 'president',
    childrenIds: [],
    salaryMonthly: 'Retainer of ₹2,50,000 / month + appearance fees per Supreme Court hearing',
    salaryDetails: 'Receives retainer and official government representation allowances, official office and chamber.',
    tenure: 'Holds office during the pleasure of the President (by convention resigns when government falls)',
    constitutionalArticles: ['Article 76 (Office of Attorney General)', 'Article 88 (Rights regarding Parliament proceedings)', 'Article 105 (Parliamentary privileges)'],
    primaryResponsibilities: [
      'Highest law officer in the country, chief legal advisor to the Government of India',
      'Appears on behalf of the Government of India in all matters in the Supreme Court where the Union is concerned',
      'Represents the Union Government in references made by the President under Article 143'
    ],
    powersByCategory: [
      {
        title: 'Parliamentary & Audience Privileges',
        items: [
          'Has the right of audience in all courts in the territory of India (Article 76(3))',
          'Has the right to speak and take part in the proceedings of either House of Parliament or joint sitting, but without the right to vote (Article 88)',
          'Enjoys all privileges and immunities of a Member of Parliament (Article 105)'
        ]
      }
    ],
    canDo: [
      'Speak in Lok Sabha and Rajya Sabha debates on legal and constitutional matters',
      'Give formal legal opinion to the Union Cabinet on draft bills and treaties',
      'Grant or withhold consent for initiating criminal contempt proceedings in Supreme Court'
    ],
    cannotDo: [
      'Cannot vote in Parliament (Article 88 explicitly excludes voting rights)',
      'Cannot advise or hold briefs against the Government of India',
      'Cannot defend an accused person in criminal prosecutions without government permission'
    ],
    appointmentProcess: 'Appointed by the President of India on the advice of the Union Cabinet. Must be a person qualified to be appointed a Judge of the Supreme Court.',
    removalProcess: 'Holds office during pleasure of the President; can be replaced at any time by the incumbent government.',
    reportsTo: 'President & Ministry of Law and Justice',
    advisesOrCommands: ['Advises Union Government & Cabinet on Legal Matters'],
    civicsNote: 'Assisted by the Solicitor General of India and Additional Solicitors General.',
    keyLegislation: ['Constitution of India (Article 76)', 'Law Officers (Conditions of Service) Rules, 1972']
  },

  // ==================== STATE LEVEL GOVERNANCE ====================
  {
    id: 'governors',
    name: 'Governor of the State',
    hindiName: 'राज्य के राज्यपाल (Rajyapal)',
    tier: 'state',
    branch: 'executive',
    level: 2,
    parentId: 'president',
    childrenIds: ['chief_minister', 'high_courts'],
    salaryMonthly: '₹3,50,000 / month',
    salaryDetails: 'Fixed by Governors (Emoluments, Allowances and Privileges) Act. Free Raj Bhavan residence, staff, medical, and travel.',
    officialResidence: 'Raj Bhavan (State Capital)',
    tenure: '5 Years, subject to the pleasure of the President (can be transferred or removed anytime without cause)',
    constitutionalArticles: ['Article 153 (Governors of States)', 'Article 154 (Executive Power of State)', 'Article 161 (Pardoning Power)', 'Article 163 (Discretionary Powers)', 'Article 200 (Assent to Bills)', 'Article 213 (Ordinances)', 'Article 356 (Recommending President’s Rule)'],
    primaryResponsibilities: [
      'Constitutional Head of the State and agent of the Central Government in the State',
      'Appoints the Chief Minister and on CM’s advice, other State Ministers',
      'Assents to, withholds, or reserves bills passed by the State Legislature for the consideration of the President (Article 200)',
      'Ensures governance in the State conforms to the Constitution; sends fortnightly confidential reports to the President'
    ],
    powersByCategory: [
      {
        title: 'Executive & Legislative Powers',
        items: [
          'All executive actions of the State Government are formally taken in the Governor’s name (Art 166)',
          'Summons and prorogues the State Legislature and dissolves the Legislative Assembly on CM advice',
          'Promulgates Ordinances under Article 213 when State Legislature is in recess',
          'Appoints Advocate General of the State, State Election Commissioner, and State PSC Chairman'
        ]
      },
      {
        title: 'Constitutional Discretion (Article 163)',
        items: [
          'Selecting Chief Minister when no party has a clear majority in the Assembly',
          'Dismissing a Ministry that has lost the confidence of the Assembly but refuses to resign',
          'Recommending imposition of President’s Rule under Article 356',
          'Reserving a State bill for the consideration of the President (especially if it derogates from High Court powers)'
        ]
      }
    ],
    canDo: [
      'Reserve a State Bill for Presidential consideration (Article 200)',
      'Grant pardons, remissions, and reprieves for offenses against State laws (Article 161, but cannot pardon death sentence, which rests solely with President)',
      'Act in his/her independent personal discretion without Ministerial advice when Constitution requires (e.g. Schedule VI tribal areas or Art 371 special provisions)'
    ],
    cannotDo: [
      'Cannot refuse assent indefinitely to an ordinary bill returned by the Assembly without changes (must assent on second passage)',
      'Cannot commute a sentence of death into a pardon (exclusive to President of India under Art 72)',
      'Cannot govern directly except when President’s Rule is imposed under Article 356'
    ],
    appointmentProcess: 'Appointed by the President of India by warrant under hand and seal (effectively chosen by Central Union Cabinet).',
    removalProcess: 'No fixed security of tenure; removed at any time by the President of India on the advice of the Union Cabinet (pleasure doctrine).',
    reportsTo: 'President of India (Union Ministry of Home Affairs)',
    advisesOrCommands: ['State Council of Ministers', 'Chancellor of State Universities by convention'],
    civicsNote: 'The Governor has a dual role: constitutional head of the state bound by ministerial advice, and a representative/watchdog of the Union government.',
    keyLegislation: ['Governors (Emoluments, Allowances and Privileges) Act, 1982', 'Constitution of India (Articles 153-167)']
  },

  {
    id: 'chief_minister',
    name: 'Chief Minister of the State',
    hindiName: 'राज्य के मुख्यमंत्री (Mukhyamantri)',
    tier: 'state',
    branch: 'executive',
    level: 3,
    parentId: 'governors',
    childrenIds: ['state_cabinet', 'state_chief_secretary', 'state_legislature'],
    salaryMonthly: '₹2,50,000 - ₹4,10,000 / month (Varies by State: Telangana ~₹4.1L, Maharashtra ~₹3.4L, UP ~₹3.6L, Karnataka ~₹3L)',
    salaryDetails: 'Determined by individual State Legislatures under Article 164. Official Chief Minister residence, Z+ security, state aircraft/chopper, official motorcade, and secretarial staff.',
    officialResidence: 'Official Chief Minister’s Residence (State Capital)',
    tenure: 'Holds office during pleasure of the Governor, in practice as long as commanding majority in the State Legislative Assembly (Vidhan Sabha)',
    constitutionalArticles: ['Article 163 (Council of Ministers to aid & advise Governor)', 'Article 164 (Appointment & Responsibility)', 'Article 167 (Duties of CM to furnish info to Governor)'],
    primaryResponsibilities: [
      'De facto executive head of the State Government and principal architect of state policies and welfare schemes',
      'Leader of the State Council of Ministers and head of the State Cabinet',
      'Principal channel of communication between the Governor and the State Council of Ministers',
      'Leader of the State Legislative Assembly (Vidhan Sabha)'
    ],
    powersByCategory: [
      {
        title: 'Cabinet & Departmental Direction',
        items: [
          'Recommends appointment, portfolio allocation, and removal of State Ministers to Governor',
          'Presides over State Cabinet meetings and directs policy formulation across state subjects (Police, Health, Agriculture, Land)',
          'Chairs State Disaster Management Authority (SDMA) and State Planning Board'
        ]
      },
      {
        title: 'Administrative Supremacy',
        items: [
          'Oversees postings of Chief Secretary, Director General of Police (DGP), and District Magistrates/Collectors',
          'Defines law and order directives and state development initiatives'
        ]
      }
    ],
    canDo: [
      'Advise the Governor to dissolve the Legislative Assembly and seek fresh elections',
      'Reallocate or withdraw portfolios from any State Minister at will',
      'Shape state tax rates (State GST, excise on alcohol, stamp duty, motor vehicles)'
    ],
    cannotDo: [
      'Cannot pass laws on subjects in the Union List (e.g. Defense, Foreign Affairs, Railways, Currency)',
      'Cannot prevent Governor from reserving a bill that endangers the position of the High Court for President’s consideration',
      'Cannot govern if a No-Confidence Motion is passed in Vidhan Sabha'
    ],
    appointmentProcess: 'Appointed by the Governor. The Governor appoints the leader of the party or coalition holding a majority in Vidhan Sabha. Must be or become an MLA/MLC within 6 months.',
    removalProcess: 'Dismissed by the Governor if losing majority in the Legislative Assembly (Vidhan Sabha), or upon resignation.',
    reportsTo: 'State Legislative Assembly (Vidhan Sabha) & State Electorate',
    advisesOrCommands: ['Advises Governor', 'Commands State Cabinet & State Bureaucracy through Chief Secretary'],
    civicsNote: 'The CM is the nerve center of state governance. While Union PM commands national defense and foreign relations, the CM commands policing, land, agriculture, and public order.',
    keyLegislation: ['State Legislative Assembly Members and Ministers Salaries Acts', 'State Business Rules']
  },

  {
    id: 'state_cabinet',
    name: 'State Council of Ministers',
    hindiName: 'राज्य मंत्रिपरिषद (Rajya Mantriparishad)',
    tier: 'state',
    branch: 'executive',
    level: 3,
    parentId: 'chief_minister',
    childrenIds: ['state_departments'],
    salaryMonthly: '₹1,50,000 - ₹3,00,000 / month (Varies by State Act)',
    salaryDetails: 'Fixed by State Legislature. Official ministerial bungalow, vehicle, security, and staff allowances.',
    tenure: 'Co-terminus with Vidhan Sabha or pleasure of Chief Minister/Governor',
    constitutionalArticles: ['Article 163', 'Article 164 (Capped at 15% of Vidhan Sabha strength, minimum 12 ministers)'],
    primaryResponsibilities: [
      'Executes executive authority over State subjects (Seventh Schedule, List II) and Concurrent subjects (List III)',
      'Introduces state legislation and passes the State Budget in Vidhan Sabha',
      'Collectively responsible to the Legislative Assembly of the State'
    ],
    powersByCategory: [
      {
        title: 'Executive Administration',
        items: [
          'Formulates state policies on irrigation, education, policing, municipal development, and transport',
          'Approves state government resolutions and administrative sanctions for developmental infrastructure'
        ]
      }
    ],
    canDo: [
      'Introduce government bills in Vidhan Sabha',
      'Sanction departmental budgets and developmental schemes'
    ],
    cannotDo: [
      'Exceed 15% of total Vidhan Sabha strength or have fewer than 12 ministers (91st Constitutional Amendment)'
    ],
    appointmentProcess: 'Appointed by the Governor on the recommendation of the Chief Minister.',
    removalProcess: 'Dismissed by the Governor on advice of CM, or when Vidhan Sabha passes a Vote of No-Confidence.',
    reportsTo: 'Chief Minister & State Legislative Assembly',
    advisesOrCommands: ['Directs State Administrative Departments'],
    civicsNote: 'The 91st Amendment inserted Article 164(1A) ensuring a minimum of 12 ministers and a ceiling of 15% to curb jumbo cabinets.',
    keyLegislation: ['Constitution of India (Articles 163, 164)']
  },

  {
    id: 'state_legislature',
    name: 'State Legislature (Vidhan Sabha & Vidhan Parishad)',
    hindiName: 'राज्य विधान मंडल (विधान सभा / विधान परिषद)',
    tier: 'state',
    branch: 'legislature',
    level: 3,
    parentId: 'chief_minister',
    childrenIds: [],
    salaryMonthly: 'MLAs/MLCs: ₹1,00,000 - ₹2,75,000 / month + constituency/session allowances',
    salaryDetails: 'Determined by respective State Legislature Acts. Includes constituency office fund, travel vouchers, and medical.',
    tenure: 'Vidhan Sabha: 5 years | Vidhan Parishad: Permanent body, 6-year terms for members (1/3rd retire every 2 years)',
    constitutionalArticles: ['Article 168 (Constitution of Legislatures)', 'Article 170 (Composition of Legislative Assemblies)', 'Article 171 (Legislative Councils)', 'Article 191 (Disqualifications)'],
    primaryResponsibilities: [
      'Enacting laws on subjects in State List (Police, Land, Public Health, Agriculture, Local Government) and Concurrent List',
      'Approving the State Budget (Annual Financial Statement under Art 202) and scrutinizing executive spending',
      'Representing the citizens of the State and holding the state council of ministers to account'
    ],
    powersByCategory: [
      {
        title: 'State Law-Making Supremacy',
        items: [
          'Sole authority to pass state budget, tax proposals, and appropriation bills for the State Consolidated Fund',
          'Can ratify certain Constitutional Amendment Bills passed by Parliament (Article 368 federal provisions)',
          'Elected MLAs form part of the Electoral College electing the President of India and Rajya Sabha MPs'
        ]
      }
    ],
    canDo: [
      'Pass a Vote of No-Confidence to unseat the Chief Minister and State Cabinet',
      'Enact state legislation across agriculture, policing, municipal laws, and health'
    ],
    cannotDo: [
      'Cannot legislate on Concurrent List subjects contrary to Central Union laws without Presidential assent (Article 254)',
      'Vidhan Parishad cannot block a Money Bill for more than 14 days, or an ordinary bill for more than 4 months in total'
    ],
    appointmentProcess: 'MLAs directly elected from single-member assembly constituencies. MLCs (in 6 states: UP, Bihar, Maharashtra, Karnataka, AP, Telangana) elected by MLAs, local bodies, teachers, graduates, and Governor nominations.',
    removalProcess: 'Disqualification under Article 191 or Tenth Schedule anti-defection provisions by the Speaker/Chairman.',
    reportsTo: 'Electorate of the State',
    advisesOrCommands: ['Holds State Executive Accountable', 'Controls State Public Purse'],
    civicsNote: 'Only 6 of India’s 28 states have a bicameral legislature (Vidhan Parishad); the remaining 22 states are unicameral (Vidhan Sabha only).',
    keyLegislation: ['Representation of the People Act, 1950 & 1951']
  },

  {
    id: 'state_chief_secretary',
    name: 'Chief Secretary of the State',
    hindiName: 'राज्य के मुख्य सचिव (Mukhya Sachiv)',
    tier: 'state',
    branch: 'administrative',
    level: 3,
    parentId: 'chief_minister',
    childrenIds: ['divisional_commissioner', 'district_magistrate', 'dgp_police'],
    salaryMonthly: '₹2,25,000 / month (Apex Pay Scale Level 17 of 7th CPC)',
    salaryDetails: 'Senior-most civil servant in the State government. Official residence, staff car, security, and staff.',
    officialResidence: 'State Capital Senior Civil Service Enclave',
    tenure: 'Normally 2 to 3 years until superannuation at age 60',
    constitutionalArticles: ['State Rules of Business', 'Article 309 & 312 of the Constitution'],
    primaryResponsibilities: [
      'Head of the entire State Civil Service administration and principal administrative advisor to the Chief Minister',
      'Secretary to the State Cabinet, coordinating work of all state departments and recording Cabinet decisions',
      'Ex-officio head of the State Crisis Management Group during natural disasters and civil disturbances',
      'Head of the State Civil Services Board regulating transfers and promotions of IAS and state civil officers'
    ],
    powersByCategory: [
      {
        title: 'State Bureaucratic Command',
        items: [
          'Supervises all Principal Secretaries, Commissioners, and District Collectors/DMs in the State',
          'Liaises directly with the Cabinet Secretary and Central Ministries in New Delhi on Union-State matters',
          'Chief vigilance officer of the State administrative apparatus'
        ]
      }
    ],
    canDo: [
      'Summon meetings of all Principal Secretaries and District Collectors',
      'Issue administrative guidelines to all field officers across the State',
      'Intervene in any department’s file before submission to the Chief Minister'
    ],
    cannotDo: [
      'Cannot override political policy decisions enacted by the Chief Minister and State Cabinet'
    ],
    appointmentProcess: 'Appointed by the Chief Minister of the State from the senior-most IAS officers of the State cadre.',
    removalProcess: 'Transferred by the State Government or superannuated under All India Service Rules.',
    reportsTo: 'Chief Minister of the State',
    advisesOrCommands: ['Advises Chief Minister & State Cabinet', 'Commands All State Administrative Departments & Field Collectors'],
    civicsNote: 'Described as the "kingpin" of state administration. He/she is the single communication channel between the political executive and permanent civil service in the State.',
    keyLegislation: ['All India Services Act, 1951', 'State Government Allocation of Business Rules']
  },

  {
    id: 'dgp_police',
    name: 'Director General of Police (DGP)',
    hindiName: 'पुलिस महानिदेशक (DGP)',
    tier: 'state',
    branch: 'administrative',
    level: 3,
    parentId: 'state_chief_secretary',
    childrenIds: ['sp_police'],
    salaryMonthly: '₹2,25,000 / month (Apex Scale Level 17 of 7th CPC)',
    salaryDetails: 'Senior-most police officer in the State. Official bungalow, bulletproof official vehicle, Z-category security, and domestic staff.',
    officialResidence: 'State Police Enclave (State Capital)',
    tenure: 'Minimum 2 years guaranteed tenure per Supreme Court directives in Prakash Singh case (2006)',
    constitutionalArticles: ['State List Entry 2 (Police)', 'Police Act of 1861 / State Police Acts'],
    primaryResponsibilities: [
      'Head of the State Police force commanding all uniformed police personnel and law enforcement in the State',
      'Principal advisor to the Chief Minister and Home Minister on internal security, crime prevention, and counter-terrorism',
      'Commands state special units (State Anti-Terror Squad, CID, Armed Police, Intelligence Wing)'
    ],
    powersByCategory: [
      {
        title: 'Law Enforcement Command',
        items: [
          'Directs police investigations, deployment of Armed Reserve Police battalions, and anti-riot operations',
          'Transfers and posts police officers from Inspector to Additional SP / SP ranks',
          'Ensures crime reporting and maintenance of public order across all police ranges and commissionerates'
        ]
      }
    ],
    canDo: [
      'Deploy state armed police battalions and reserve forces to any riot or unrest zone in the State',
      'Institute statewide special investigation teams (SIT) for sensitive criminal probes',
      'Direct commissionerates (led by Commissioners of Police) and range IGs'
    ],
    cannotDo: [
      'Cannot deploy paramilitary central forces (CRPF, BSF, CISF) without approval from Central Home Ministry',
      'Cannot circumvent the Code of Criminal Procedure / Bharatiya Nagarik Suraksha Sanhita (BNSS) rules of arrest and remand'
    ],
    appointmentProcess: 'Empaneled by UPSC from eligible DG-rank IPS officers; State Government selects from top 3 recommended names per Supreme Court guidelines.',
    removalProcess: 'Cannot be removed before 2-year tenure except on specific grounds approved by State Security Commission.',
    reportsTo: 'Chief Minister / State Home Minister / Chief Secretary',
    advisesOrCommands: ['Commands All Police Personnel, Range IGs, SSPs/SPs in the State'],
    civicsNote: 'In metropolitan cities with a Police Commissionerate system (like Mumbai, Delhi, Bengaluru, Hyderabad), the Commissioner of Police has direct executive magisterial powers.',
    keyLegislation: ['Police Act, 1861 / State Police Acts', 'BNSS 2023 / CrPC 1973']
  },

  {
    id: 'high_courts',
    name: 'High Court of the State (Chief Justice & Judges)',
    hindiName: 'उच्च न्यायालय के मुख्य न्यायाधीश एवं न्यायाधीश',
    tier: 'state',
    branch: 'judiciary',
    level: 2,
    parentId: 'governors',
    childrenIds: ['district_judiciary'],
    salaryMonthly: 'Chief Justice: ₹2,50,000 / month | High Court Judges: ₹2,25,000 / month',
    salaryDetails: 'Charged on Consolidated Fund of the State (pension charged on Consolidated Fund of India). Official residence, chauffeur, security, and staff.',
    officialResidence: 'High Court Judges Bungalow Enclave',
    tenure: 'Holds office until attaining the age of 62 years (Article 217(1))',
    constitutionalArticles: ['Article 214 (High Courts for States)', 'Article 215 (Court of Record & Contempt)', 'Article 226 (Power to issue Writs)', 'Article 227 (Power of Superintendence over all Courts)'],
    primaryResponsibilities: [
      'Apex judicial authority within the territorial boundaries of the State',
      'Writ jurisdiction under Article 226: protecting Fundamental Rights and legal rights (wider scope than Supreme Court’s Article 32)',
      'Administrative superintendence and control over all Subordinate Courts and District Judiciary in the State (Article 227 and 235)'
    ],
    powersByCategory: [
      {
        title: 'Writ & Judicial Review',
        items: [
          'Issues writs against any government department, public authority, or municipal body for violation of fundamental or legal rights',
          'Strikes down State legislative acts or executive orders conflicting with the Constitution of India',
          'Appellate jurisdiction in civil and criminal matters originating from District & Sessions Courts'
        ]
      },
      {
        title: 'Subordinate Court Control',
        items: [
          'Recommends appointment, posting, promotion, and disciplinary action of District Judges to the Governor (Art 233-235)',
          'Regulates rules and procedures for civil and criminal courts across the State'
        ]
      }
    ],
    canDo: [
      'Issue writs for violation of statutory or ordinary legal rights (Article 226 is wider than Article 32 which is limited to Fundamental Rights)',
      'Confirm death sentences passed by District Sessions Courts before execution can proceed',
      'Punish for contempt of court with fine or simple imprisonment'
    ],
    cannotDo: [
      'Cannot override binding legal principles or rulings issued by the Supreme Court of India under Article 141'
    ],
    appointmentProcess: 'Appointed by the President of India after consultation with the Chief Justice of India, the Governor of the State, and the Chief Justice of the High Court (Collegium recommendation).',
    removalProcess: 'Can only be removed by the President of India on an address passed by both Houses of Parliament with a 2/3rd majority (same as Supreme Court judge).',
    reportsTo: 'Supreme Court of India (Appellate Jurisdiction) & Constitution of India',
    advisesOrCommands: ['Commands All District and Sessions Courts, Subordinate Judiciary, and Tribunals in the State'],
    civicsNote: 'India has 25 High Courts serving 28 States and 8 Union Territories. Some High Courts have jurisdiction over multiple states (e.g. Guwahati High Court covers 4 northeastern states; Bombay High Court covers Maharashtra and Goa).',
    keyLegislation: ['High Court Judges (Salaries and Conditions of Service) Act, 1954']
  },

  // ==================== DIVISION & DISTRICT ADMINISTRATION ====================
  {
    id: 'divisional_commissioner',
    name: 'Divisional Commissioner',
    hindiName: 'मंडलायुक्त (Mandlayukta)',
    tier: 'division',
    branch: 'administrative',
    level: 3,
    parentId: 'state_chief_secretary',
    childrenIds: ['district_magistrate'],
    salaryMonthly: '₹1,44,200 - ₹2,18,200 / month (Level 14 - Super Time Scale / SAG IAS)',
    salaryDetails: 'Senior IAS officer (approx 16-20 years seniority). Official colonial-style divisional residence, staff car, camp office.',
    officialResidence: 'Divisional Commissioner Residence (Division Headquarters)',
    tenure: '2 to 3 years per administrative posting',
    constitutionalArticles: ['State Land Revenue Codes', 'Criminal Procedure Code / BNSS'],
    primaryResponsibilities: [
      'Supervises and coordinates administration across 3 to 6 districts comprising an administrative division',
      'Senior appellate authority for land revenue, land tenure, ceiling, and tenancy cases',
      'Monitors mega state infrastructure projects, law and order situations, and inter-district disaster management'
    ],
    powersByCategory: [
      {
        title: 'Supervisory & Appellate Authority',
        items: [
          'Hears revenue appeals against orders of District Collectors/DMs',
          'Inspects district collectorates, sub-divisional offices, and municipal corporations in the division',
          'Coordinates food grain distribution, election observer duties, and law & order reinforcements'
        ]
      }
    ],
    canDo: [
      'Call for reports and records from any District Magistrate within the division',
      'Act as chief coordinator between district field administration and the state secretariat'
    ],
    cannotDo: [
      'Cannot directly interfere in the day-to-day magisterial powers of District Magistrates in criminal investigations'
    ],
    appointmentProcess: 'Posted by the State Government from senior IAS officers of Super Time Scale / Senior Administrative Grade.',
    removalProcess: 'Transferred by the State Government.',
    reportsTo: 'Chief Secretary of the State & Revenue Board',
    advisesOrCommands: ['Supervises District Magistrates / Collectors within the division'],
    civicsNote: 'The Divisional Commissioner office serves as a buffer between the state secretariat in the capital and the busy district magistrates on the ground.',
    keyLegislation: ['State Land Revenue Acts', 'Disaster Management Act, 2005']
  },

  {
    id: 'district_magistrate',
    name: 'District Magistrate & Collector (DM / DC)',
    hindiName: 'ज़िलाधिकारी / उपायुक्त (DM / Collector / DC)',
    tier: 'district',
    branch: 'administrative',
    level: 4,
    parentId: 'divisional_commissioner',
    childrenIds: ['sdm', 'tehsildar', 'bdo', 'sp_police', 'district_line_depts'],
    salaryMonthly: '₹1,18,500 - ₹1,82,200 / month (Level 12 to 14 of 7th CPC)',
    salaryDetails: 'Senior Scale / Selection Grade IAS officer. Historic Collectorate Residence, camp office, security guards, vehicle with official beacon, and secretarial staff.',
    officialResidence: 'DM Bungalow / Collectorate House (District Headquarters)',
    tenure: 'Typically 1 to 3 years per district',
    constitutionalArticles: ['Section 144 CrPC / Section 163 BNSS (Prohibitory Orders)', 'Representation of the People Act (District Election Officer)', 'Disaster Management Act 2005 (DDMA Chairman)'],
    primaryResponsibilities: [
      'Head of district administration, principal representative of the State Government at the grass-roots level',
      'Executive Magistrate: maintenance of law & order, peace, and public tranquility in the district',
      'District Collector: collection of land revenue, excise, stamp duty, and government dues',
      'District Election Officer (DEO): conducts parliamentary and assembly elections in the district',
      'Chairman of District Disaster Management Authority (DDMA): leads crisis and flood/relief operations'
    ],
    powersByCategory: [
      {
        title: 'Executive Magisterial & Law and Order Powers',
        items: [
          'Can promulgate curfew / prohibitory orders under Section 144 CrPC / Section 163 BNSS to prevent riots',
          'Sanctions preventive detention under National Security Act (NSA) or State preventive laws',
          'Issues arms licenses, explosive licenses, and regulates cinema/entertainment permits'
        ]
      },
      {
        title: 'Revenue & Development Administration',
        items: [
          'Acquires land for public purposes under the Land Acquisition Act (RFCTLARR 2013)',
          'Coordinates all central and state welfare schemes (MGNREGA, PM Awas, PDS food distribution)',
          'Supervises Sub-Divisional Magistrates (SDM), Tehsildars, and Block Development Officers (BDO)'
        ]
      }
    ],
    canDo: [
      'Impose Section 144 / Section 163 BNSS curfews, ban unlawful assemblies, and order internet suspensions during riots',
      'Requisition any private vehicle, building, or manpower during national emergencies or disaster relief',
      'Suspend village heads (Sarpanch) or municipal functionaries for gross financial embezzlement (under state Panchayat Acts)',
      'Inspect any jail, police station, hospital, or government office within the district'
    ],
    cannotDo: [
      'Cannot exercise judicial trials of criminal cases (separated under Article 50 of the Constitution; judicial trials belong to District Judiciary)',
      'Cannot direct police investigation details or alter charge-sheets filed by the Police (judiciary oversees charge-sheets)'
    ],
    appointmentProcess: 'Appointed by the State Government from Indian Administrative Service (IAS) cadre officers (direct recruits through UPSC Civil Services Examination or promoted State Civil Service officers).',
    removalProcess: 'Transferred by the State Government; disciplinary action governed by All India Services (Discipline & Appeal) Rules.',
    reportsTo: 'Divisional Commissioner & Chief Secretary of the State',
    advisesOrCommands: ['Commands Sub-Divisional Magistrates (SDMs), Tehsildars, BDOs, and coordinates District Police Chief (SP)'],
    civicsNote: 'Instituted by Warren Hastings in 1772 as "Collector", this role is the cornerstone of Indian public administration. Often called the "eyes, ears, and hands" of the government.',
    keyLegislation: ['Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)', 'RFCTLARR Act, 2013', 'Disaster Management Act, 2005', 'Arms Act, 1959']
  },

  {
    id: 'sp_police',
    name: 'Superintendent of Police (SP / SSP)',
    hindiName: 'पुलिस अधीक्षक / वरिष्ठ पुलिस अधीक्षक (SP / SSP)',
    tier: 'district',
    branch: 'administrative',
    level: 4,
    parentId: 'district_magistrate',
    childrenIds: ['dsp_circle_officer', 'station_house_officer'],
    salaryMonthly: '₹78,800 - ₹1,44,200 / month (Level 11 to 13 of 7th CPC)',
    salaryDetails: 'Senior Scale / Selection Grade IPS officer. Official SP Bungalow, security escort, official patrol vehicle, camp office.',
    officialResidence: 'SP Bungalow (District Police Lines)',
    tenure: '1 to 3 years per posting',
    constitutionalArticles: ['State Police Act', 'BNSS 2023 / CrPC 1973', 'Indian Penal Code / Bharatiya Nyaya Sanhita (BNS)'],
    primaryResponsibilities: [
      'Chief of police in the district, commanding the entire district police force and armed reserves',
      'Prevention, detection, and investigation of crime and maintenance of law and order',
      'Provides security for VIPs, vital government installations, and conducts anti-insurgency/riot operations'
    ],
    powersByCategory: [
      {
        title: 'District Police Command',
        items: [
          'Commands all Deputy SPs, Circle Officers, Station House Officers (SHOs), and constabulary',
          'Directs police deployment for festivals, political rallies, elections, and VIP visits',
          'Approves history sheets, surveillance files, and special crime detection squads'
        ]
      }
    ],
    canDo: [
      'Deploy the District Armed Police (Reserve Police Line) during violent disturbances',
      'Initiate departmental disciplinary proceedings and suspension against errant subordinate police personnel up to Sub-Inspector rank',
      'Order registration of FIRs and transfer criminal investigations to Special Teams'
    ],
    cannotDo: [
      'Cannot impose Section 144 / Section 163 BNSS curfew on his/her own motion (only District Magistrate / Executive Magistrate can issue Section 144 orders)',
      'Cannot detain an arrested person in police custody beyond 24 hours without remand order from a Judicial Magistrate'
    ],
    appointmentProcess: 'Appointed by State Government from Indian Police Service (IPS) cadre officers.',
    removalProcess: 'Transferred by the State Police Establishment Board / State Government.',
    reportsTo: 'Deputy Inspector General (DIG) of Police Range & coordinates closely with District Magistrate',
    advisesOrCommands: ['Commands All Police Stations, SHOs, Circle Officers, and Armed Reserve in District'],
    civicsNote: 'In non-commissionerate districts, the DM and SP work in a dual-command system: the DM represents the civilian authority, while the SP is the operational commander of the uniformed police force.',
    keyLegislation: ['Police Act, 1861', 'Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)', 'Arms Act']
  },

  {
    id: 'district_judiciary',
    name: 'District & Sessions Judge',
    hindiName: 'ज़िला एवं सत्र न्यायाधीश (Zila Evam Satra Nyayadhish)',
    tier: 'district',
    branch: 'judiciary',
    level: 4,
    parentId: 'high_courts',
    childrenIds: [],
    salaryMonthly: '₹1,44,840 - ₹2,24,100 / month (Cadre of District Judges per SNJPC recommendations)',
    salaryDetails: 'Senior judicial officer. Official judicial bungalow, official car, and judicial allowances.',
    officialResidence: 'District Judges Judicial Enclave',
    tenure: 'Holds office until superannuation age (typically 60 years)',
    constitutionalArticles: ['Article 233 (Appointment of District Judges)', 'Article 235 (Control over Subordinate Courts)', 'BNSS 2023 / CrPC 1973 (Sentencing Powers)'],
    primaryResponsibilities: [
      'Highest judicial authority in the civil and criminal district hierarchy',
      'When presiding over civil suits, referred to as District Judge; when presiding over criminal trials, referred to as Sessions Judge',
      'Administrative head of all civil judges, chief judicial magistrates, and judicial magistrates in the district court complex'
    ],
    powersByCategory: [
      {
        title: 'Trial & Sentencing Powers',
        items: [
          'Sessions Judge possesses unlimited criminal sentencing powers, including passing capital punishment (death sentence subject to mandatory confirmation by High Court)',
          'Appellate jurisdiction hearing appeals against orders of Assistant Sessions Judges and Judicial Magistrates',
          'Original jurisdiction in probate, matrimonial, guardianship, and high-value civil suits'
        ]
      }
    ],
    canDo: [
      'Pass a sentence of life imprisonment or death sentence (death sentence requires confirmation by High Court under Art 366/368 BNSS)',
      'Grant or reject regular and anticipatory bails in major offenses',
      'Inspect subordinate courts and review trial pendency across the district'
    ],
    cannotDo: [
      'Cannot execute a death sentence without formal confirmation from a Division Bench of the High Court'
    ],
    appointmentProcess: 'Appointed by the Governor of the State in consultation with the High Court (Article 233). Selected through Higher Judicial Services (HJS) examination or promotion from Subordinate Judicial Service.',
    removalProcess: 'Subject to disciplinary control of the High Court; dismissed by the Governor on the recommendation of the High Court.',
    reportsTo: 'High Court of the State',
    advisesOrCommands: ['Commands All Subordinate Judicial Magistrates, Civil Judges, and District Court Staff'],
    civicsNote: 'Article 50 of the Directive Principles mandates the separation of judiciary from the executive in public services, ensuring fair trials free from executive influence.',
    keyLegislation: ['Civil Procedure Code (CPC 1908)', 'Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)', 'State Judicial Service Rules']
  },

  {
    id: 'sdm',
    name: 'Sub-Divisional Magistrate (SDM) / Sub-Collector',
    hindiName: 'उप-ज़िलाधिकारी (SDM / RDO)',
    tier: 'district',
    branch: 'administrative',
    level: 4,
    parentId: 'district_magistrate',
    childrenIds: ['tehsildar', 'bdo'],
    salaryMonthly: '₹56,100 - ₹1,32,000 / month (Level 10 / 11 of 7th CPC)',
    salaryDetails: 'Junior Scale IAS officer (training phase) or senior State Civil Service (PCS/KAS/WBCS) officer. Official SDM residence, vehicle with red/blue flasher, camp office.',
    officialResidence: 'SDM Residence (Sub-Division Headquarters)',
    tenure: '1 to 2 years per posting',
    constitutionalArticles: ['Section 107, 116, 133, 144 CrPC / BNSS provisions', 'State Land Revenue Acts'],
    primaryResponsibilities: [
      'Administrative, revenue, and executive head of a Sub-Division (a cluster of 2 to 4 tehsils)',
      'Sub-Divisional Executive Magistrate: maintains peace, conducts inquests into suspicious deaths of married women within 7 years of marriage (dowry deaths)',
      'Supervises Tehsildars, Revenue Inspectors, Patwaris, and Block Development Officers',
      'Acts as Electoral Registration Officer (ERO) and Returning Officer (RO) for Assembly constituencies'
    ],
    powersByCategory: [
      {
        title: 'Executive Magisterial Powers',
        items: [
          'Can promulgate Section 144 / Section 163 BNSS orders within the sub-division',
          'Orders removal of public nuisances under Section 133 CrPC / BNSS',
          'Conducts magisterial inquiries into custodial deaths and police encounters'
        ]
      }
    ],
    canDo: [
      'Bind over habitual offenders to keep peace under surety bonds (Sec 107/116)',
      'Order sealing of illegal constructions, encroached government lands, and illicit stone crushers',
      'Preside as Returning Officer announcing Assembly election results'
    ],
    cannotDo: [
      'Cannot conduct trials of regular Indian Penal Code / BNS criminal offenses (strictly handled by Judicial Magistrates)'
    ],
    appointmentProcess: 'Posted by the State Government from IAS probationary cadres or State Provincial Civil Service (PCS) officers.',
    removalProcess: 'Transferred by the State Government / District Collector recommendation.',
    reportsTo: 'District Magistrate & Collector',
    advisesOrCommands: ['Commands Tehsildars, Naib Tehsildars, Revenue Staff, and BDOs in Sub-Division'],
    civicsNote: 'The SDM is the miniature District Collector at the sub-divisional level and the first senior administrative officer most rural citizens encounter for grievance redressal.',
    keyLegislation: ['BNSS 2023', 'State Land Revenue Code', 'Representation of the People Act']
  },

  {
    id: 'tehsildar',
    name: 'Tehsildar / Talukdar',
    hindiName: 'तहसीलदार / तालुकाधिकारी',
    tier: 'district',
    branch: 'administrative',
    level: 4,
    parentId: 'sdm',
    childrenIds: ['patwari_lekhpal'],
    salaryMonthly: '₹47,600 - ₹1,00,000 / month (Level 8 / 9 of 7th CPC)',
    salaryDetails: 'Class-II Gazetted State Revenue Officer. Official tehsil quarter, official jeep, camp staff.',
    officialResidence: 'Tehsil Headquarters Residence',
    tenure: '1 to 3 years per Tehsil',
    constitutionalArticles: ['State Land Revenue Code', 'Executive Magistrate under CrPC/BNSS'],
    primaryResponsibilities: [
      'Head of Tehsil / Taluk revenue administration and custodian of land records',
      'In charge of land mutation, demarcation, collection of land revenue, and recovery of bank dues as arrears of land revenue',
      'Executive Magistrate in the tehsil maintaining peace during local disputes and festivals',
      'Issues essential certificates: Caste, Income, Domicile, EWS, and Solvency certificates to citizens'
    ],
    powersByCategory: [
      {
        title: 'Revenue & Magistrate Court',
        items: [
          'Presides over Revenue Court deciding boundary disputes, partition of agricultural land, and mutation entries',
          'Conducts spot inspections, crop damage assessments during droughts or floods for relief distribution'
        ]
      }
    ],
    canDo: [
      'Order eviction of illegal encroachers from Gram Sabha (village community) land',
      'Attach property or arrest defaulters for non-payment of government land dues',
      'Verify and issue official certificates (Caste, Income, Domicile, EWS)'
    ],
    cannotDo: [
      'Cannot try criminal offenses or award prison sentences for offenses under criminal codes'
    ],
    appointmentProcess: 'Selected through State Public Service Commission (State PCS / Combined Civil Services) and promoted Naib-Tehsildars.',
    removalProcess: 'Transferred by District Collector / State Board of Revenue.',
    reportsTo: 'Sub-Divisional Magistrate (SDM) & District Collector',
    advisesOrCommands: ['Commands Naib Tehsildars, Kanungos (Revenue Inspectors), Patwaris / Lekhpals'],
    civicsNote: 'The Tehsil is the foundational grassroots revenue unit in India. The word dates back to the Mughal era and British Land Revenue systems.',
    keyLegislation: ['State Land Revenue Act', 'State Tenancy Act', 'BNSS 2023']
  },

  {
    id: 'bdo',
    name: 'Block Development Officer (BDO)',
    hindiName: 'खंड विकास अधिकारी (BDO)',
    tier: 'district',
    branch: 'administrative',
    level: 4,
    parentId: 'sdm',
    childrenIds: ['gram_panchayat'],
    salaryMonthly: '₹47,600 - ₹95,000 / month (Level 8 / 9 of 7th CPC)',
    salaryDetails: 'State Civil Service (Rural Development) Officer. Official block vehicle and quarter.',
    officialResidence: 'Block Development Office Campus',
    tenure: '2 to 3 years per Block',
    constitutionalArticles: ['73rd Constitutional Amendment Act', 'State Panchayati Raj Acts'],
    primaryResponsibilities: [
      'Administrative executive head of the Community Development Block (Vikas Khand)',
      'Ex-officio Chief Executive Officer of the Panchayat Samiti (intermediate tier of rural local government)',
      'Executes central and state rural development programs: MGNREGA, PM Awas Yojana (Rural), Swachh Bharat Mission (Grameen), PMGSY',
      'Monitors village panchayats and audits developmental expenditure in the block'
    ],
    powersByCategory: [
      {
        title: 'Rural Development Execution',
        items: [
          'Sanctions wage payments and job cards under MGNREGA rural employment guarantee',
          'Approves rural housing installments under PM Awas Yojana',
          'Inspects rural road construction, school buildings, and community drinking water borewells'
        ]
      }
    ],
    canDo: [
      'Withhold financial sanctions to Gram Panchayats if work quality or muster rolls fail audit standards',
      'Coordinate agricultural, animal husbandry, and child nutrition extension officers in the block'
    ],
    cannotDo: [
      'Does not exercise police powers or issue criminal magisterial orders'
    ],
    appointmentProcess: 'Selected through State Public Service Commission (State PCS) examinations.',
    removalProcess: 'Transferred by District Collector / Chief Development Officer (CDO).',
    reportsTo: 'Chief Development Officer (CDO) / District Collector & Sub-Divisional Magistrate',
    advisesOrCommands: ['Commands Village Development Officers (VDO), Gram Sevaks, Panchayat Secretaries'],
    civicsNote: 'BDOs act as the bridge between district-level planning and village-level execution under India’s Community Development Program launched in 1952.',
    keyLegislation: ['National Rural Employment Guarantee Act (MGNREGA 2005)', 'State Panchayati Raj Acts']
  },

  // ==================== LOCAL SELF-GOVERNMENT (PANCHAYATI RAJ & URBAN) ====================
  {
    id: 'zilla_parishad',
    name: 'Zilla Parishad (District Council)',
    hindiName: 'ज़िला परिषद (Zilla Panchayat)',
    tier: 'local_rural',
    branch: 'executive',
    level: 4,
    parentId: 'district_magistrate',
    childrenIds: ['panchayat_samiti'],
    salaryMonthly: 'Chairperson: ₹15,000 - ₹35,000 / month honorarium | CEO: ₹1,18,500 - ₹1,82,200 / month (Senior IAS/PCS)',
    salaryDetails: 'Chairperson receives state-prescribed honorarium + vehicle allowance; Chief Executive Officer (CEO Zilla Parishad) is a full-time Senior IAS officer paid per 7th CPC.',
    tenure: '5 Years for elected council from date of first meeting',
    constitutionalArticles: ['Article 243B (Constitution of Panchayats)', 'Article 243C (Composition)', 'Article 243G (Powers, authority and responsibilities - Eleventh Schedule 29 Subjects)'],
    primaryResponsibilities: [
      'Apex tier of the 3-tier Panchayati Raj system established under the 73rd Constitutional Amendment Act, 1992',
      'Plans, formulates, and coordinates economic development and social justice programs across the entire rural district',
      'Supervises Panchayat Samitis and coordinates rural health clinics, secondary schools, district roads, and irrigation tanks'
    ],
    powersByCategory: [
      {
        title: 'District Rural Governance (Eleventh Schedule)',
        items: [
          'Approves district rural budget and allocates state finance commission grants among blocks',
          'Maintains district rural road networks, vocational training centers, and rural water supply schemes'
        ]
      }
    ],
    canDo: [
      'Approve development plans prepared by intermediate Panchayat Samitis',
      'Levy specific rural license fees, toll taxes on bridges, and market tolls as authorized by State Act'
    ],
    cannotDo: [
      'Cannot govern urban municipal areas (which fall under Municipal Corporations/Councils under 74th Amendment)',
      'Cannot enact criminal statutes or override State Legislative Acts'
    ],
    appointmentProcess: 'Members directly elected from district territorial constituencies. Zilla Parishad President/Chairperson elected by the elected members from among themselves.',
    removalProcess: 'Chairperson can be removed by a Vote of No-Confidence passed by 2/3rd majority of elected members, or superseded by the State Government for gross dereliction.',
    reportsTo: 'State Government (Department of Panchayati Raj) & District Electorate',
    advisesOrCommands: ['Panchayat Samitis & Gram Panchayats in the District'],
    civicsNote: 'The 73rd Amendment transformed local panchayats into constitutional institutions, mandating 33% reservation for women (increased to 50% in many states like Bihar, MP, Maharashtra).',
    keyLegislation: ['Constitution (73rd Amendment) Act, 1992', 'State Panchayati Raj Acts']
  },

  {
    id: 'panchayat_samiti',
    name: 'Panchayat Samiti (Block Council)',
    hindiName: 'पंचायत समिति / क्षेत्र पंचायत (Panchayat Samiti)',
    tier: 'local_rural',
    branch: 'executive',
    level: 5,
    parentId: 'zilla_parishad',
    childrenIds: ['gram_panchayat'],
    salaryMonthly: 'Block Pramukh: ₹10,000 - ₹20,000 / month honorarium | BDO (Executive Officer): Full-time Gazetted pay scale',
    salaryDetails: 'Honorarium and meeting sitting fees fixed by State Panchayati Raj rules.',
    tenure: '5 Years',
    constitutionalArticles: ['Article 243B & 243C (Intermediate Panchayat tier)'],
    primaryResponsibilities: [
      'Intermediate middle tier of the Panchayati Raj system linking Gram Panchayats with Zilla Parishad',
      'Approves block-level developmental plans, rural sanitation drives, and primary health centers',
      'Executive work carried out by the Block Development Officer (BDO)'
    ],
    powersByCategory: [
      {
        title: 'Block Planning & Coordination',
        items: [
          'Coordinates agricultural seed distribution, soil testing, and minor irrigation schemes',
          'Approves consolidated rural development proposals before submitting to Zilla Parishad'
        ]
      }
    ],
    canDo: [
      'Allocate block development funds among Gram Panchayats in accordance with village needs',
      'Audit progress of village community halls and school infrastructure'
    ],
    cannotDo: [
      'Cannot dissolve an elected Gram Panchayat (only State Government has statutory power to supersede)'
    ],
    appointmentProcess: 'Directly elected BDC members elect the Pramukh / Chairperson from among themselves. Sarpanches of the block are ex-officio members.',
    removalProcess: 'No-confidence motion passed by elected members as prescribed by State Panchayat Act.',
    reportsTo: 'Zilla Parishad & District Magistrate',
    advisesOrCommands: ['Gram Panchayats within the Block'],
    civicsNote: 'Panchayat Samitis are called by different names: Janpad Panchayat (MP), Taluk Panchayat (Karnataka), Kshetra Panchayat (UP), Mandal Praja Parishad (AP/Telangana).',
    keyLegislation: ['State Panchayati Raj Acts']
  },

  {
    id: 'gram_panchayat',
    name: 'Gram Panchayat (Sarpanch & Gram Sabha)',
    hindiName: 'ग्राम पंचायत (सरपंच / ग्राम प्रधान एवं ग्राम सभा)',
    tier: 'local_rural',
    branch: 'executive',
    level: 5,
    parentId: 'panchayat_samiti',
    childrenIds: [],
    salaryMonthly: 'Sarpanch: ₹3,000 - ₹15,000 / month honorarium (Varies by State: e.g. UP ₹5,000, Haryana ₹5,000, Telangana ₹10,000) + sitting allowances',
    salaryDetails: 'Paid as a statutory monthly honorarium. The Panchayat Secretary / Gram Sevak is a salaried state government employee (Level 3-5).',
    tenure: '5 Years from the date of first meeting (Art 243E)',
    constitutionalArticles: ['Article 243A (Gram Sabha - Direct Democracy)', 'Article 243B (Gram Panchayat)', 'Article 243D (Reservation for Women & SC/ST)', 'Eleventh Schedule (29 Functional Subjects)'],
    primaryResponsibilities: [
      'Foundational grassroots institution of local self-government in rural India',
      'Gram Sabha: The assembly of ALL registered adult voters in the village (the supreme direct democracy body)',
      'Executes village development: internal concrete roads, streetlights, drainage, drinking water, sanitation, and pond rejuvenation',
      'Selects and verifies beneficiaries for welfare schemes (PM Awas, pensions, MGNREGA job cards, ration cards)'
    ],
    powersByCategory: [
      {
        title: 'Village Self-Governance & Community Development',
        items: [
          'Prepares the Gram Panchayat Development Plan (GPDP) approved in open Gram Sabha meetings',
          'Maintains village community assets, grazing grounds, cremation grounds, and village haats (markets)',
          'Registers births and deaths occurring within the village boundaries'
        ]
      },
      {
        title: 'Local Taxation Powers',
        items: [
          'Can levy modest property taxes on village houses, sanitation fees, and vehicle entry fees on commercial goods',
          'Manages Central 15th Finance Commission untied grants directly deposited into the Panchayat bank account'
        ]
      }
    ],
    canDo: [
      'Convene the mandatory open-air Gram Sabha meetings (at least 2 to 4 times a year on Republic Day, Independence Day, Gandhi Jayanti)',
      'Approve or reject lists of local beneficiaries for free government housing and welfare benefits in open Gram Sabha',
      'Issue village NOCs (No Objection Certificates) for business or installation of mobile towers in village area'
    ],
    cannotDo: [
      'Cannot spend government funds without prior approval and resolution of the Gram Sabha and co-signature of Panchayat Secretary',
      'Cannot adjudicate criminal trials or enforce arbitrary customary penalties (such as unconstitutional khap panchayat decrees)',
      'Cannot borrow money from external financial institutions without state government sanction'
    ],
    appointmentProcess: 'The Sarpanch / Pradhan and Ward Members (Panchs) are directly elected by all adult voters of the village through secret ballot conducted by the State Election Commission.',
    removalProcess: 'Can be removed through a No-Confidence Motion passed by the Gram Sabha / Ward Members, or suspended by the District Magistrate for misappropriation of public funds.',
    reportsTo: 'Gram Sabha (Direct Accountability) & Block Development Officer / District Magistrate',
    advisesOrCommands: ['Directs Village Panchayat Works & Village Field Volunteers'],
    civicsNote: 'Mahatma Gandhi termed Panchayati Raj as the cornerstone of "Gram Swaraj" (village self-rule). There are over 250,000 Gram Panchayats governing over 65% of India’s population.',
    keyLegislation: ['Constitution (73rd Amendment) Act, 1992', 'PESA Act, 1996 (for Scheduled Tribal Areas)', 'State Panchayati Raj Acts']
  },

  {
    id: 'municipal_corporation',
    name: 'Municipal Corporation (Mahanagar Palika)',
    hindiName: 'नगर निगम / महानगर पालिका (Mayor & Municipal Commissioner)',
    tier: 'local_urban',
    branch: 'executive',
    level: 4,
    parentId: 'district_magistrate',
    childrenIds: ['municipality_council', 'nagar_panchayat'],
    salaryMonthly: 'Mayor: ₹25,000 - ₹50,000 / month honorarium | Municipal Commissioner: ₹1,44,200 - ₹2,18,200 / month (Senior IAS Officer Level 14)',
    salaryDetails: 'Mayor receives city honorarium, official car, and office; Municipal Commissioner is a Senior IAS officer with full apex government pay scale and perks.',
    officialResidence: 'Municipal Commissioner Official Bungalow',
    tenure: '5 Years for elected Municipal Corporation Council; Mayor tenure varies from 1 to 5 years depending on State Municipal Act',
    constitutionalArticles: ['74th Constitutional Amendment Act, 1992', 'Article 243Q (Constitution of Municipalities)', 'Twelfth Schedule (18 Functional Subjects)'],
    primaryResponsibilities: [
      'Urban local governance for large metropolitan cities with populations exceeding 10 Lakh (1 Million)',
      'Dual structure: Mayor (First Citizen and political head of the city) and Municipal Commissioner (IAS executive officer with real administrative power)',
      'Town planning, water supply, sewage, public health, solid waste management, city bus transit, and fire services'
    ],
    powersByCategory: [
      {
        title: 'Metropolitan Administration & Finance',
        items: [
          'Prepares multi-crore city budget, collects municipal property taxes, professional taxes, and water cess',
          'Approves master plans, building blueprints, and regulates urban land use and floor area ratio (FAR)',
          'Maintains major city flyovers, storm-water drainage networks, and municipal public hospitals'
        ]
      }
    ],
    canDo: [
      'Seal or demolish unauthorized or dangerous buildings and encroachments',
      'Levy property taxes, billboard advertising charges, and trade licenses on commercial businesses',
      'Float municipal bonds for financing mega infrastructure projects (e.g. Ahmedabad, Pune Municipal Bonds)'
    ],
    cannotDo: [
      'The Mayor (in most Indian states) cannot exercise direct executive bureaucratic command over IAS Municipal Commissioners, except in states with "Mayor-in-Council" systems',
      'Cannot raise city police forces (policing in India remains strictly under State Government control)'
    ],
    appointmentProcess: 'City divided into Wards; citizens elect Ward Corporators / Councillors. Mayor is elected either directly by city voters or indirectly by elected Corporators. Municipal Commissioner is appointed by the State Government from the IAS.',
    removalProcess: 'Council can pass a No-Confidence Motion against Mayor; Commissioner is transferred by the State Government.',
    reportsTo: 'State Urban Development Department & City Citizens',
    advisesOrCommands: ['Commands City Engineering, Health, Sanitation, and Town Planning Departments'],
    civicsNote: 'The Municipal Corporation of Madras, established in 1688, is the oldest municipal body in the Commonwealth outside Great Britain.',
    keyLegislation: ['Constitution (74th Amendment) Act, 1992', 'State Municipal Corporation Acts (e.g. BMC Act, GHMC Act, BBMP Act)']
  },

  {
    id: 'municipality_council',
    name: 'Municipal Council (Nagar Palika Parishad)',
    hindiName: 'नगर पालिका परिषद (Nagar Palika)',
    tier: 'local_urban',
    branch: 'executive',
    level: 5,
    parentId: 'municipal_corporation',
    childrenIds: [],
    salaryMonthly: 'President: ₹10,000 - ₹25,000 / month honorarium | Chief Municipal Officer (CMO): ₹56,100 - ₹1,32,000 / month (Level 10-11 State Municipal Service)',
    salaryDetails: 'President receives state-mandated honorarium; CMO is a full-time State Urban Administrative Service officer.',
    tenure: '5 Years',
    constitutionalArticles: ['Article 243Q(1)(b) (Municipalities for smaller urban areas - pop. 20,000 to 300,000)', 'Twelfth Schedule'],
    primaryResponsibilities: [
      'Governs smaller cities and major towns',
      'Provides civic amenities: drinking water pipelines, street lighting, waste disposal, primary health, and local birth/death records',
      'Supervised administratively by the Chief Municipal Officer (CMO)'
    ],
    powersByCategory: [
      {
        title: 'Town Civic Administration',
        items: [
          'Sanctions residential building permits and regulates street vending zones',
          'Manages municipal markets, slaughterhouses, and public parks'
        ]
      }
    ],
    canDo: [
      'Collect town property taxes, water meter charges, and market shop rents',
      'Demolish illegal encroachments on municipal roads and footpaths'
    ],
    cannotDo: [
      'Cannot float international loans or municipal bonds without State Finance approval'
    ],
    appointmentProcess: 'Ward Councillors elected directly by town residents. President elected directly or by Councillors per State Act.',
    removalProcess: 'No-confidence motion by council members or superseded by State Urban Development department for gross mismanagement.',
    reportsTo: 'District Collector & State Urban Development Department',
    advisesOrCommands: ['Directs Municipal Staff, Sanitary Inspectors, and Town Tax Collectors'],
    civicsNote: 'Forms the middle tier of urban local governance, bridging rural blocks and mega metropolitan corporations.',
    keyLegislation: ['State Municipalities Acts']
  },

  {
    id: 'nagar_panchayat',
    name: 'Town Panchayat (Nagar Panchayat)',
    hindiName: 'नगर पंचायत (Nagar Panchayat)',
    tier: 'local_urban',
    branch: 'executive',
    level: 5,
    parentId: 'municipal_corporation',
    childrenIds: [],
    salaryMonthly: 'Chairperson: ₹5,000 - ₹12,000 / month honorarium | Executive Officer (EO): Level 7-9 State pay scale',
    salaryDetails: 'Honorarium for elected head; regular pay scale for state-deputed Executive Officer.',
    tenure: '5 Years',
    constitutionalArticles: ['Article 243Q(1)(a) (Transitional areas from rural to urban)'],
    primaryResponsibilities: [
      'Governs transitional urban settlements — large villages transitioning into small market towns (semi-urban centers)',
      'Provides basic urban infrastructure: paved lanes, solid waste collection, street lighting, and public sanitation'
    ],
    powersByCategory: [
      {
        title: 'Transitional Civic Amenities',
        items: [
          'Maintains town drainage lines, weekly cattle/farmers markets, and municipal street lighting',
          'Registers birth and death certificates and property records'
        ]
      }
    ],
    canDo: [
      'Levy small house taxes and market license fees on local commercial traders',
      'Enforce town cleanliness bylaws'
    ],
    cannotDo: [
      'Cannot initiate heavy industrial zoning or town master planning independently'
    ],
    appointmentProcess: 'Direct election by town voters across wards. Executive Officer appointed by State Urban Development Department.',
    removalProcess: 'No-confidence motion by ward members or dissolution by State Government.',
    reportsTo: 'Sub-Divisional Magistrate & District Collector',
    advisesOrCommands: ['Town sanitary staff and local revenue collectors'],
    civicsNote: 'Created under the 74th Amendment to prevent urban decay in rapidly urbanizing semi-rural mandi towns.',
    keyLegislation: ['State Municipalities Acts']
  }
];

// Interactive scenario questions to test and explore constitutional powers
export const CIVICS_SCENARIOS: CivicsScenario[] = [
  {
    id: 'ordinance_promulgation',
    title: 'Promulgating an Emergency Ordinance',
    question: 'Parliament is not in session and urgent economic regulations are required immediately. Who has the constitutional authority to promulgate a Union Ordinance?',
    context: 'The Union Cabinet has cleared a draft ordinance on banking security while both Lok Sabha and Rajya Sabha are adjourned sine die.',
    correctRoleId: 'president',
    optionsRoleIds: ['president', 'prime_minister', 'supreme_court_cji', 'speaker_lok_sabha'],
    explanation: 'Under Article 123 of the Constitution of India, only the President has the power to promulgate Ordinances during recess of Parliament, acting on the binding aid and advice of the Union Cabinet. The ordinance has the same force as an Act of Parliament but must be approved by Parliament within 6 weeks of reassembly.',
    constitutionalArticle: 'Article 123'
  },
  {
    id: 'curfew_imposition',
    title: 'Imposing Section 144 / Curfew During Unrest',
    question: 'Violent clashes break out in a district following a festival dispute. Who is constitutionally and legally empowered to promulgate prohibitory orders / curfew?',
    context: 'Immediate danger of unlawful assembly and breach of public peace requiring prohibition of assembly of 4 or more persons.',
    correctRoleId: 'district_magistrate',
    optionsRoleIds: ['district_magistrate', 'sp_police', 'chief_minister', 'district_judiciary'],
    explanation: 'Under Section 144 of the Code of Criminal Procedure (CrPC) / Section 163 of Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), only an Executive Magistrate (District Magistrate or Sub-Divisional Magistrate) is legally empowered to issue prohibitory orders and impose curfew. While the SP commands the police force, the legal order must be passed by the civilian Executive Magistrate.',
    constitutionalArticle: 'Section 144 CrPC / Section 163 BNSS'
  },
  {
    id: 'death_penalty_pardon',
    title: 'Pardoning a Capital Punishment (Death Sentence)',
    question: 'A convict sentenced to death has exhausted all appeals in the Supreme Court. Who alone holds the constitutional prerogative to grant a full pardon or commute the death sentence?',
    context: 'A mercy petition is submitted seeking constitutional clemency for a death-row inmate.',
    correctRoleId: 'president',
    optionsRoleIds: ['president', 'governors', 'supreme_court_cji', 'prime_minister'],
    explanation: 'Under Article 72 of the Constitution, the President has the exclusive power to grant pardons, reprieves, respites, or remissions of punishment in all cases where the sentence is a sentence of death. While Governors possess pardoning powers under Article 161 for offenses against state laws, the power to commute death sentences to pardons rests exclusively with the President of India.',
    constitutionalArticle: 'Article 72'
  },
  {
    id: 'no_confidence_vote',
    title: 'Defeating a Government in Power',
    question: 'An Opposition party alleges that the ruling Union government has lost its parliamentary majority. Which institution has the exclusive power to vote on and pass a Motion of No-Confidence?',
    context: 'Notice for a No-Confidence Motion is admitted during the Monsoon Session of Parliament.',
    correctRoleId: 'lok_sabha',
    optionsRoleIds: ['lok_sabha', 'rajya_sabha', 'president', 'supreme_court_cji'],
    explanation: 'Article 75(3) of the Constitution explicitly states: "The Council of Ministers shall be collectively responsible to the House of the People (Lok Sabha)." Therefore, a Motion of No-Confidence can ONLY be moved and voted upon in the Lok Sabha. The Rajya Sabha has no power to pass a No-Confidence Motion or dismiss the government.',
    constitutionalArticle: 'Article 75(3)'
  },
  {
    id: 'presidents_rule',
    title: 'Recommending President’s Rule in a State',
    question: 'Constitutional machinery breaks down in a State due to post-election horse-trading and no government can be formed. Who submits the official report recommending imposition of President’s Rule?',
    context: 'No political coalition is able to demonstrate a legislative majority on the floor of the State Assembly.',
    correctRoleId: 'governors',
    optionsRoleIds: ['governors', 'chief_minister', 'supreme_court_cji', 'district_magistrate'],
    explanation: 'Under Article 356 of the Constitution, the Governor of the State submits a report to the President certifying that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of the Constitution. Upon receiving this report, the President may proclaim President’s Rule.',
    constitutionalArticle: 'Article 356 & Article 163'
  },
  {
    id: 'gram_sabha_beneficiary',
    title: 'Approving Rural Welfare Beneficiaries',
    question: 'Under the 73rd Constitutional Amendment, which grassroots constitutional body has the direct democratic power to approve village developmental plans and verify beneficiary lists for welfare schemes?',
    context: 'Selection of families for housing subsidies under Pradhan Mantri Awas Yojana in a rural village.',
    correctRoleId: 'gram_panchayat',
    optionsRoleIds: ['gram_panchayat', 'bdo', 'district_magistrate', 'zilla_parishad'],
    explanation: 'Under Article 243A and the 73rd Constitutional Amendment Act, the Gram Sabha (the assembly of all registered adult voters of the village) possesses statutory authority to approve the Gram Panchayat Development Plan (GPDP) and conduct social audits verifying beneficiaries for government poverty-alleviation and housing programs.',
    constitutionalArticle: 'Article 243A & Eleventh Schedule'
  }
];

export const TIER_CONFIG: Record<
  string,
  { label: string; badge: string; color: string; border: string; bg: string }
> = {
  union: {
    label: 'Union (Center)',
    badge: 'Union Apex',
    color: 'text-amber-400',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10'
  },
  state: {
    label: 'State Level',
    badge: 'State Executive',
    color: 'text-sky-400',
    border: 'border-sky-500/40',
    bg: 'bg-sky-500/10'
  },
  division: {
    label: 'Division Level',
    badge: 'Division',
    color: 'text-indigo-400',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/10'
  },
  district: {
    label: 'District Administration',
    badge: 'District Field',
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10'
  },
  local_rural: {
    label: 'Panchayati Raj (Rural)',
    badge: 'Rural Local (73rd)',
    color: 'text-teal-400',
    border: 'border-teal-500/40',
    bg: 'bg-teal-500/10'
  },
  local_urban: {
    label: 'Urban Local Bodies (ULB)',
    badge: 'Urban Municipal (74th)',
    color: 'text-violet-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/10'
  },
  independent: {
    label: 'Constitutional Watchdogs',
    badge: 'Independent Body',
    color: 'text-rose-400',
    border: 'border-rose-500/40',
    bg: 'bg-rose-500/10'
  }
};

export const BRANCH_CONFIG: Record<
  string,
  { label: string; iconName: string; color: string }
> = {
  executive: { label: 'Executive', iconName: 'Shield', color: 'text-amber-400' },
  legislature: { label: 'Legislature', iconName: 'Landmark', color: 'text-purple-400' },
  judiciary: { label: 'Judiciary', iconName: 'Scale', color: 'text-emerald-400' },
  administrative: { label: 'Civil Service', iconName: 'Briefcase', color: 'text-blue-400' },
  constitutional: { label: 'Constitutional', iconName: 'Award', color: 'text-rose-400' }
};
