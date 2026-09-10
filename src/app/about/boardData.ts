export interface BoardMember {
  id: string;
  name: string;
  shortName?: string;
  role: string;
  image?: string;
  shortBio: string;
  fullBio: string[];
  credentials?: string[];
  linkedinUrl?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 'ruth-sekleh',
    name: 'Ruth Sekleh',
    role: 'Director',
    image: '/directors/Ruth.png',
    shortBio: 'Over a decade of leadership across human resource management, public relations, and organizational development in education and commercial marketing.',
    fullBio: [
      'Ruth Sekleh brings over a decade of experience across human resource management, public relations, and organizational development.',
      'She holds a background in Psychology and Linguistics from the University of Ghana, alongside specialized training in Human Resource Management and Organizational Behavior from the Global Academy of Finance and Management (USA).',
      'Her professional career spans roles in commercial marketing management, coordination with the Ghana Education Service, and international development project support.',
      'At African-Caribbean Manufacturing Ltd, Ruth provides strategic leadership in human capital, corporate communication, and personnel administration.',
    ],
    credentials: ['Human Resource Management', 'Organizational Behavior', 'Corporate PR'],
  },
  {
    id: 'daniel-oku-adamah',
    name: 'Daniel Oku Adamah',
    role: 'Director',
    image: '/directors/Adama.jpg',
    shortBio: 'Four decades of public service leadership, machine shop operations, and administrative oversight within the Ghana Civil Service and industrial sectors.',
    fullBio: [
      'Daniel Oku Adamah brings decades of administrative insight, public service expertise, and industrial foundational knowledge to African-Caribbean Manufacturing Ltd.',
      'His career includes early machine shop operations at ALFA Manufacturing Company Ltd, followed by a distinguished tenure of nearly four decades within the Ghana Civil Service.',
      'Formally trained in Human Resource Management at the Ghana Institute of Management and Public Administration (GIMPA), Daniel contributes critical guidance in workforce governance, institutional management, and regulatory compliance.',
    ],
    credentials: ['Public Service Administration', 'Workforce Governance', 'GIMPA'],
  },
  {
    id: 'john-kwabena-arthur',
    name: 'John Kwabena Arthur',
    role: 'Director',
    image: '/directors/Authur.png',
    shortBio: 'Educator, environmental researcher, and administrator with over three decades of public-sector and scientific experience at GAEC and MESTI.',
    fullBio: [
      'John Kwabena Arthur is an educator, environmental researcher, and administrator with over three decades of public-sector and scientific experience.',
      'He holds a Master of Philosophy in Nuclear and Environmental Protection from the University of Ghana, as well as a Bachelor of Education in Physics and Integrated Science.',
      'His career includes substantial research at the Ghana Atomic Energy Commission (GAEC)—where he also served as Scientific Secretary—and administrative service at the Ministry of Environment, Science, Technology, and Innovation (MESTI).',
      'A trained alternative dispute resolution (ADR) mediator and active researcher in biochar technology, John steers the company’s environmental stewardship, technical standards, and sustainable manufacturing practices.',
    ],
    credentials: ['MPhil Nuclear & Env. Protection', 'Former Scientific Secretary, GAEC', 'Environmental Stewardship'],
  },
  {
    id: 'priscilla-akpabey',
    name: 'Priscilla Akpabey',
    role: 'Director',
    image: '/directors/Priscilla.jpg',
    shortBio: 'Operations and finance professional with extensive multinational experience across investment operations, corporate banking, and cross-border trade administration.',
    fullBio: [
      'Priscilla Akpabey is an operations and finance professional with extensive multinational experience across investment operations, corporate banking, and cross-border trade administration.',
      'She holds an MBA in Finance from Rockhurst University, an MA in Economics from the University of Missouri–Kansas City, and a Bachelor of Science in Computer Science.',
      'Priscilla’s career includes key roles in portfolio operations and investment accounting in the United States, commercial banking, international account coordination for major consumer brands, and enterprise HR systems.',
      'She leads African-Caribbean Manufacturing Ltd in financial strategy, systems optimization, and international business operations.',
    ],
    credentials: ['MBA Finance (Rockhurst)', 'MA Economics (UMKC)', 'Investment Operations & Strategy'],
  },
  {
    id: 'emmanuel-gemegah',
    name: 'Emmanuel Gemegah',
    shortName: 'E. Gamegah',
    role: 'Director',
    image: '/directors/Gamega.png',
    shortBio: 'Public administrator, educator, and former Municipal Chief Executive (Mayor) of Keta with deep expertise in governance and stakeholder engagement.',
    fullBio: [
      'Emmanuel Gemegah is a public administrator, educator, and governance professional with extensive leadership across local government and institutional development.',
      'He holds a Master of Arts in Human Rights, Conflict, and Peace Studies from the University of Education, Winneba, and a Bachelor of Science in Entomology & Wildlife from the University of Cape Coast.',
      'Emmanuel’s career includes serving as the Municipal Chief Executive (Mayor) for the Keta Municipal Assembly, coordinating regional workforce programs under NABCO, and managing basic and secondary academic institutions.',
      'At African-Caribbean Manufacturing Ltd, he contributes strategic expertise in public-sector relations, stakeholder engagement, community governance, and operational compliance.',
    ],
    credentials: ['Former MCE (Mayor), Keta', 'MA Human Rights & Conflict Studies', 'Public Administration'],
  },
];
