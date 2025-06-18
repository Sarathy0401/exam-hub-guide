
export const examsData = [
  {
    id: "upsc-cse",
    name: "UPSC CSE 2024",
    fullName: "Union Public Service Commission - Civil Services Examination",
    organization: "UPSC",
    category: "Central Government",
    eligibility: "Graduate degree from recognized university, Age: 21-32 years",
    applicationStart: "February 15, 2024",
    applicationEnd: "March 5, 2024",
    examDate: "June 16, 2024",
    vacancies: 1012,
    status: "upcoming" as const,
    description: "The premier examination for recruitment to various Central Civil Services including IAS, IPS, IFS and other Group A & B services.",
    syllabus: [
      "Preliminary Exam: General Studies Paper I & II (CSAT)",
      "Main Exam: Essay, General Studies (4 Papers), Optional Subject (2 Papers), Language Papers",
      "Personality Test: Interview"
    ],
    examPattern: "Preliminary (Objective) + Main (Descriptive) + Interview",
    officialWebsite: "https://upsc.gov.in",
    importantDates: {
      "Application Start": "February 15, 2024",
      "Application End": "March 5, 2024",
      "Preliminary Exam": "June 16, 2024",
      "Main Exam": "September 20-28, 2024",
      "Interview": "January-March 2025"
    }
  },
  {
    id: "ssc-cgl",
    name: "SSC CGL 2024",
    fullName: "Staff Selection Commission - Combined Graduate Level",
    organization: "SSC",
    category: "Central Government",
    eligibility: "Bachelor's degree, Age: 18-30 years (varies by post)",
    applicationStart: "June 24, 2024",
    applicationEnd: "July 24, 2024",
    examDate: "September 9-26, 2024",
    vacancies: 17727,
    status: "ongoing" as const,
    description: "Recruitment for various Group B and Group C posts in different Ministries/Departments/Organizations.",
    syllabus: [
      "Tier I: General Intelligence, General Awareness, Quantitative Aptitude, English Comprehension",
      "Tier II: Quantitative Abilities, English Language & Comprehension, Statistics, General Studies",
      "Tier III: Descriptive Paper (Essay/Letter/Application Writing)",
      "Tier IV: Computer Proficiency Test/Skill Test"
    ],
    examPattern: "Multi-tier examination (Tier I to IV)",
    officialWebsite: "https://ssc.nic.in",
    importantDates: {
      "Application Start": "June 24, 2024",
      "Application End": "July 24, 2024",
      "Tier I Exam": "September 9-26, 2024",
      "Tier II Exam": "November 18-20, 2024"
    }
  },
  {
    id: "ibps-po",
    name: "IBPS PO 2024",
    fullName: "Institute of Banking Personnel Selection - Probationary Officer",
    organization: "IBPS",
    category: "Banking",
    eligibility: "Graduate degree, Age: 20-30 years",
    applicationStart: "August 7, 2024",
    applicationEnd: "August 28, 2024",
    examDate: "October 19-20, 2024",
    vacancies: 3955,
    status: "ongoing" as const,
    description: "Recruitment of Probationary Officers in 11 Public Sector Banks participating in IBPS.",
    syllabus: [
      "Preliminary: English Language, Quantitative Aptitude, Reasoning Ability",
      "Main: Reasoning & Computer Aptitude, General/Economy/Banking Awareness, English Language, Quantitative Aptitude, Data Analysis & Interpretation",
      "Interview: Personal Interview"
    ],
    examPattern: "Preliminary + Main + Interview",
    officialWebsite: "https://ibps.in",
    importantDates: {
      "Application Start": "August 7, 2024",
      "Application End": "August 28, 2024",
      "Preliminary Exam": "October 19-20, 2024",
      "Main Exam": "November 30, 2024"
    }
  },
  {
    id: "rrb-ntpc",
    name: "RRB NTPC 2024",
    fullName: "Railway Recruitment Board - Non-Technical Popular Categories",
    organization: "RRB",
    category: "Railway",
    eligibility: "12th Pass to Graduate (varies by post), Age: 18-36 years",
    applicationStart: "September 14, 2024",
    applicationEnd: "October 13, 2024",
    examDate: "December 2024",
    vacancies: 11558,
    status: "upcoming" as const,
    description: "Recruitment for various non-technical posts in Indian Railways including Clerk, Traffic Assistant, etc.",
    syllabus: [
      "Stage I: Mathematics, General Intelligence & Reasoning, General Awareness, General Science",
      "Stage II: Mathematics, General Intelligence & Reasoning, General Awareness, General Science (Higher Level)",
      "Skill Test: Typing Test for specific posts"
    ],
    examPattern: "Two-stage CBT + Skill Test (if applicable)",
    officialWebsite: "https://rrbcdg.gov.in",
    importantDates: {
      "Application Start": "September 14, 2024",
      "Application End": "October 13, 2024",
      "Stage I CBT": "December 2024",
      "Stage II CBT": "March 2025"
    }
  },
  {
    id: "neet-pg",
    name: "NEET PG 2024",
    fullName: "National Eligibility cum Entrance Test - Post Graduate",
    organization: "NTA",
    category: "Medical",
    eligibility: "MBBS degree, Age: No upper age limit",
    applicationStart: "February 15, 2024",
    applicationEnd: "March 15, 2024",
    examDate: "June 23, 2024",
    vacancies: 25000,
    status: "closed" as const,
    description: "National level entrance exam for admission to MD/MS/PG Diploma courses in medical colleges.",
    syllabus: [
      "Pre-clinical subjects: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Forensic Medicine",
      "Para-clinical subjects: Community Medicine, Medicine and allied subjects, Surgery and allied subjects",
      "Clinical subjects: Obstetrics & Gynecology, Pediatrics"
    ],
    examPattern: "Single paper with 200 MCQs (3.5 hours)",
    officialWebsite: "https://nta.ac.in",
    importantDates: {
      "Application Start": "February 15, 2024",
      "Application End": "March 15, 2024",
      "Exam Date": "June 23, 2024",
      "Result": "June 28, 2024"
    }
  },
  {
    id: "gate-2025",
    name: "GATE 2025",
    fullName: "Graduate Aptitude Test in Engineering",
    organization: "IIT Roorkee",
    category: "Engineering",
    eligibility: "BE/BTech or equivalent, Final year students eligible",
    applicationStart: "August 24, 2024",
    applicationEnd: "September 26, 2024",
    examDate: "February 1-2, 8-9, 15-16, 2025",
    vacancies: 0,
    status: "upcoming" as const,
    description: "National level examination for admission to PG programs and recruitment in PSUs.",
    syllabus: [
      "Engineering Mathematics: Common for all papers",
      "Subject-specific topics: Based on chosen engineering discipline",
      "General Aptitude: Verbal ability and Numerical ability"
    ],
    examPattern: "Computer-based test (3 hours, 65 questions)",
    officialWebsite: "https://gate.iitr.ac.in",
    importantDates: {
      "Application Start": "August 24, 2024",
      "Application End": "September 26, 2024",
      "Exam Date": "February 1-16, 2025",
      "Result": "March 17, 2025"
    }
  },
  {
    id: "bpsc-69th",
    name: "BPSC 69th CCE",
    fullName: "Bihar Public Service Commission - 69th Combined Competitive Examination",
    organization: "BPSC",
    category: "State Government",
    eligibility: "Graduate degree, Age: 20-37 years",
    applicationStart: "September 17, 2024",
    applicationEnd: "October 25, 2024",
    examDate: "December 13-14, 2024",
    vacancies: 2035,
    status: "ongoing" as const,
    description: "State-level examination for recruitment to various administrative posts in Bihar government.",
    syllabus: [
      "Preliminary: General Studies (Indian History, Geography, Polity, Economy, General Science)",
      "Main: General Hindi, General Studies Paper I & II, Optional Subject (2 Papers)",
      "Interview: Personality Test"
    ],
    examPattern: "Preliminary + Main + Interview",
    officialWebsite: "https://bpsc.bih.nic.in",
    importantDates: {
      "Application Start": "September 17, 2024",
      "Application End": "October 25, 2024",
      "Preliminary Exam": "December 13-14, 2024",
      "Main Exam": "April 2025"
    }
  },
  {
    id: "dsssb-prt",
    name: "DSSSB PRT 2024",
    fullName: "Delhi Subordinate Services Selection Board - Primary Teacher",
    organization: "DSSSB",
    category: "Teaching",
    eligibility: "12th + 2-year Diploma in Elementary Education (D.El.Ed), Age: 18-30 years",
    applicationStart: "March 18, 2024",
    applicationEnd: "April 17, 2024",
    examDate: "May 26, 2024",
    vacancies: 7236,
    status: "closed" as const,
    description: "Recruitment of Primary Teachers (PRT) in schools under Directorate of Education, GNCT of Delhi.",
    syllabus: [
      "Child Development and Pedagogy",
      "Language I (Hindi): Comprehension and Pedagogy",
      "Language II (English): Comprehension and Pedagogy",
      "Mathematics: Content and Pedagogy",
      "Environmental Studies: Content and Pedagogy"
    ],
    examPattern: "Single paper CBT (150 questions, 3 hours)",
    officialWebsite: "https://dsssb.delhi.gov.in",
    importantDates: {
      "Application Start": "March 18, 2024",
      "Application End": "April 17, 2024",
      "Exam Date": "May 26, 2024",
      "Result": "June 15, 2024"
    }
  }
];
