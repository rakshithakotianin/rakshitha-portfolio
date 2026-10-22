import { Project, SkillCategory, EducationItem, SoftSkill, ContactInfo, SplineConfig } from '../types';

/**
 * Spline 3D Scene Configuration
 * Paste your exported scene URL (ending in .splinecode) into `sceneUrl`.
 * Example: 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
 */
export const splineConfig: SplineConfig = {
  // Insert your exported Spline URL here:
  sceneUrl: '', 
  creatorName: 'Spline Community / Rakshitha Kotian',
  creatorUrl: 'https://spline.design',
  enableMobileScene: false, // Disables heavy 3D rendering on mobile devices for smooth performance
};

export const contactInfo: ContactInfo = {
  name: 'Rakshitha Kotian',
  headline: 'Aspiring Software Developer | AI & ML Student',
  location: 'Mangaluru, Karnataka, India',
  email: 'rakshitha.kotian.in@gmail.com',
  phone: '9108322183',
  phoneFormatted: '+91 91083 22183',
  linkedInUrl: 'https://www.linkedin.com/in/rakshitha-r-kotian-a5566637b',
  linkedInDisplay: 'linkedin.com/in/rakshitha-r-kotian-a5566637b',
  availability: 'Open to Internship & Entry-Level Opportunities',
};

export const heroData = {
  name: 'RAKSHITHA KOTIAN',
  title: 'Aspiring Software Developer | AI & ML Student',
  tagline: 'Building practical software solutions while exploring Artificial Intelligence, Machine Learning, and web development.',
  summaryPoints: [
    'Focused on Python, C, SQL & Data Structures',
    'AI & ML Specialization at AJIET, Mangaluru',
    'Practical Project Development Mindset',
  ],
};

export const aboutData = {
  greeting: "Hello, I'm Rakshitha Kotian",
  paragraphs: [
    "I am an Artificial Intelligence and Machine Learning student with a solid foundation in Python, SQL, C, and Data Structures and Algorithms. I am deeply interested in applying my technical knowledge to real-world projects, developing practical AI/ML skills, and contributing to innovative technology solutions.",
    "My goal is to build useful software applications, strengthen my computer science fundamentals, and actively explore opportunities across software development, web development, and AI/ML.",
  ],
  pillars: [
    {
      title: 'Programming Foundations',
      description: 'Strengthening core computer science, algorithmic thinking, and clean code principles in Python and C.',
    },
    {
      title: 'AI & ML Exploration',
      description: 'Investigating real-world machine learning techniques, NLP, speech-to-text, and modern data-driven systems.',
    },
    {
      title: 'Practical Project Development',
      description: 'Transforming theoretical knowledge into working software applications and database management solutions.',
    },
    {
      title: 'Continuous Growth',
      description: 'Driven by curiosity, quick adaptation to new tools, and disciplined problem-solving methodologies.',
    },
  ],
  quickStats: [
    { label: 'Degree', value: 'B.E. in CSE (AI & ML)' },
    { label: 'Current GPA', value: '8.67 / 10' },
    { label: 'Location', value: 'Mangaluru, India' },
    { label: 'Target Roles', value: 'Software & AI/ML Intern' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for problem solving, algorithmic coding, and backend logic.',
    skills: [
      { name: 'Python', category: 'Programming Languages', icon: 'Terminal' },
      { name: 'C', category: 'Programming Languages', icon: 'Code' },
      { name: 'SQL', category: 'Programming Languages', icon: 'Database' },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'Essential concepts supporting reliable, efficient, and well-structured software architecture.',
    skills: [
      { name: 'Data Structures and Algorithms', category: 'Computer Science Fundamentals', icon: 'GitFork' },
      { name: 'Object-Oriented Programming', category: 'Computer Science Fundamentals', icon: 'Boxes' },
      { name: 'Database Management Systems', category: 'Computer Science Fundamentals', icon: 'Server' },
    ],
  },
  {
    title: 'AI and Development',
    description: 'Explorations in artificial intelligence paradigms and web interface foundations.',
    skills: [
      { name: 'Artificial Intelligence and Machine Learning Fundamentals', category: 'AI and Development', icon: 'Cpu' },
      { name: 'HTML', category: 'AI and Development', icon: 'Layout' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'ai-lecture-summariser',
    title: 'AI Lecture Summariser',
    status: 'Ongoing',
    statusBadge: 'Active Development',
    description:
      'Developing an AI-based lecture summarization tool that converts recorded lecture audio into text and generates concise, structured summaries. The system uses speech-to-text and natural language processing techniques to identify key points and present important information in an easy-to-understand format, helping students save time and improve revision efficiency.',
    capabilities: [
      'Lecture audio transcription',
      'Text summarization',
      'Natural language processing',
      'Structured summaries',
      'Support for student revision',
    ],
    technologies: [
      { name: 'Python', type: 'confirmed' },
      { name: 'Artificial Intelligence', type: 'planned' },
      { name: 'Natural Language Processing', type: 'planned' },
      { name: 'Speech-to-Text', type: 'planned' },
    ],
    // Repository URLs can be populated here once made public by Rakshitha
    githubUrl: '',
    demoUrl: '',
    notes: 'Currently in active research and prototyping phase. Source code repository will be linked upon public release.',
  },
  {
    id: 'interview-management-system',
    title: 'Interview Management System',
    status: 'Completed',
    statusBadge: 'Project Implementation',
    description:
      'A database-driven Interview Management System designed to manage candidate profiles, interview panels, schedules, feedback, scores, and selection status. The system uses a relational database with SQL to support efficient data storage, retrieval, and reporting of interview-related information.',
    capabilities: [
      'Candidate profile management',
      'Interview scheduling',
      'Interview panel management',
      'Feedback and score management',
      'Selection status tracking',
      'Database storage and reporting',
    ],
    technologies: [
      { name: 'SQL', type: 'confirmed' },
      { name: 'Database Management Systems', type: 'confirmed' },
      { name: 'Relational Databases', type: 'confirmed' },
    ],
    // Repository URLs can be populated here once made public by Rakshitha
    githubUrl: '',
    demoUrl: '',
    notes: 'Relational database schema and queries designed for streamlined recruitment workflows.',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'be-cse-aiml',
    degree: 'Bachelor of Engineering',
    branch: 'Computer Science and Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'A.J. Institute of Engineering and Technology',
    period: '2023 – Present',
    gradeLabel: 'Current CGPA',
    gradeValue: '8.67',
    highlights: [
      'Specialized coursework in AI/ML fundamentals and software systems',
      'Hands-on laboratory training in Data Structures, Algorithms, and DBMS',
      'Active participation in technical projects and development initiatives',
    ],
  },
  {
    id: 'pu-canara',
    degree: 'Pre-University Education',
    institution: 'Canara Pre-University College',
    board: 'KSEAB / Department of School Education',
    period: 'Completed 2023',
    gradeLabel: 'Percentage',
    gradeValue: '88.0%',
    highlights: [
      'Strong academic foundation in science and mathematics',
      'Rigorous analytical preparation leading to engineering admissions',
    ],
  },
  {
    id: 'sslc-nithyadar',
    degree: 'Secondary School Education',
    institution: 'Nithyadar English Medium School',
    board: 'KSEAB / Karnataka School Examination and Assessment Board',
    period: 'Completed 2021',
    gradeLabel: 'Percentage',
    gradeValue: '94.72%',
    highlights: [
      'Graduated with distinction and academic excellence',
      'Developed early passion for logical reasoning and technology',
    ],
  },
];

export const softSkillsData: SoftSkill[] = [
  {
    name: 'Problem Solving',
    description: 'Methodical approach to debugging, algorithmic reasoning, and decomposing complex questions.',
    iconName: 'Brain',
  },
  {
    name: 'Communication',
    description: 'Clear documentation, structured idea presentation, and collaborative dialogue.',
    iconName: 'MessageSquare',
  },
  {
    name: 'Teamwork',
    description: 'Active contribution in group academic projects, peer learning, and shared code development.',
    iconName: 'Users',
  },
  {
    name: 'Quick Learning',
    description: 'Enthusiastic grasp of emerging AI tools, programming paradigms, and modern workflows.',
    iconName: 'Zap',
  },
  {
    name: 'Adaptability',
    description: 'Flexible mindset when adjusting to novel project requirements, tech stacks, and feedback.',
    iconName: 'Compass',
  },
  {
    name: 'Time Management',
    description: 'Disciplined scheduling balancing coursework, semester exams, and self-directed coding projects.',
    iconName: 'Clock',
  },
];

export const interestsData: string[] = [
  'Exploring Artificial Intelligence and Machine Learning',
  'Coding and Programming',
  'Building Mini Projects',
  'Problem Solving',
  'Exploring AI Tools',
  'Learning New Technologies',
];

export const languagesData: string[] = [
  'English',
  'Kannada',
  'Hindi',
  'Tulu',
];
