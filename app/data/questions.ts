export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  // Project Management & Resource Allocation (5 Questions)
  {
    id: 1,
    question: "What is the purpose of resource planning in Project Management?",
    options: [
      "To find the cheapest resources",
      "To allocate resources and teams based on their availability, skills, and best fit",
      "To reduce project budgets",
      "To hire new staff"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What does the 'fast-tracking' resource allocation technique involve?",
    options: [
      "Using only available resources to meet a deadline",
      "Delaying tasks to free up resources for others",
      "Carrying out multiple tasks at once for a single project",
      "Prioritizing tasks based on importance"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What should your project's resource plan consider?",
    options: [
      "Worktime only",
      "Distractions only",
      "Worktime, vacations, and distractions",
      "Future projects only"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which of these is a tip for effective resource allocation?",
    options: [
      "Make project needs optimistic",
      "Project needs should be realistic",
      "Ignore the gaps in resources",
      "Prioritize the easiest task"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the primary goal of Sprint Planning meetings in Agile?",
    options: [
      "Review past actions",
      "Prioritize the riskiest tasks",
      "Define the scope and objectives for the sprint",
      "Talk about future projects"
    ],
    correctAnswer: 2
  },
  // Risk Management (4 Questions)
  {
    id: 6,
    question: "What is the first step in risk mitigation?",
    options: [
      "Blaming someone",
      "Ignoring the risks",
      "Implementing actions",
      "Creating a response plan"
    ],
    correctAnswer: 3
  },
  {
    id: 7,
    question: "What does Risk Assessment involve?",
    options: [
      "Planning the risk",
      "Determining where to put blame for risks",
      "Assessing the likelihood and impact of risks",
      "Completely ignoring risk"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is a method to promote transparency and accountability during Risk Monitoring?",
    options: [
      "Daily stand ups",
      "Sprint reviews",
      "Sprint retrospectives",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "What does the term 'Agile' emphasize in project risk management?",
    options: [
      "Strict adherence to plans",
      "Rigidity",
      "Flexibility",
      "Control"
    ],
    correctAnswer: 2
  },
  // PESTLE Framework (4 Questions)
  {
    id: 10,
    question: "What is a 'Political Factor' according to the PESTLE Framework?",
    options: [
      "Demographic trends",
      "Consumer behavior",
      "Advancements in technology",
      "Government policies"
    ],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "Which factors relate to demographic trends, cultural attitudes, and lifestyle changes, according to the PESTLE Framework?",
    options: [
      "Economic factors",
      "Social factors",
      "Technological factors",
      "Legal Factors"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "According to the PESTLE Framework, what is the focus of 'Environmental Factors'?",
    options: [
      "Economic growth rates",
      "Political stability",
      "Ecological considerations",
      "Cultural attitudes"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "According to the PESTLE Framework, what is the potential impact of rapid technological changes?",
    options: [
      "Increased government stability",
      "More secure legal systems",
      "Reduced environmental risks",
      "Creation of opportunities, but also introduces risks if organizations fail to adapt"
    ],
    correctAnswer: 3
  },
  // Google Tools (4 Questions)
  {
    id: 14,
    question: "What does the presentation recommend you use to create a list of tasks?",
    options: [
      "@date",
      "@time",
      "@checklist",
      "@tasks"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Which Google tool should you use to create a budget tracker?",
    options: [
      "Google Docs",
      "Google Slides",
      "Google Sheets",
      "Google Forms"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "In Google Sheets what does the function ARRAYFORMULA do?",
    options: [
      "apply a formula to a cell",
      "applies a formula to a wider range with one formula",
      "applies multiple formulas to one cell",
      "hides formulas in cells"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the purpose of Data Validation in Google Sheets?",
    options: [
      "To protect data from cyber attacks",
      "To restrict the types of data inserted in the columns",
      "To hide the data from the public",
      "To copy and paste data"
    ],
    correctAnswer: 1
  },
  // Cybersecurity in Humanitarian Work (5 Questions)
  {
    id: 18,
    question: "What is a key challenge facing digital humanitarian work?",
    options: [
      "Lack of funding",
      "Cybersecurity threats",
      "Limited access to technology",
      "Staff shortages"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What does the term 'dark side of digital humanitarian work' refer to?",
    options: [
      "The lack of transparency in aid distribution",
      "The ethical implications of using technology",
      "The vulnerability of humanitarian organizations to cyberattacks",
      "The difficulty of implementing new digital tools"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "What is the main effect of ransomware attacks?",
    options: [
      "Theft of personal information",
      "Disruption of online communications",
      "Locking down of computer systems and encryption of files",
      "Misinformation campaigns"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "What is the biggest security vulnerability for many humanitarian organizations, according to the text?",
    options: [
      "Their technology",
      "Their mindset",
      "Lack of training",
      "Limited funding"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "What is a key step to help improve cybersecurity?",
    options: [
      "Ignoring old systems and focusing on new ones",
      "Avoiding any outside collaboration",
      "Implementing training, planning, and partnerships",
      "Focusing solely on internal IT departments"
    ],
    correctAnswer: 2
  },
  // Leadership, Decision-Making & Networking (7 Questions)
  {
    id: 23,
    question: "What is the core definition of leadership in the context of this lesson?",
    options: [
      "Making important decisions for a group",
      "Inspiring and guiding others towards a common goal",
      "Managing a group to complete a project",
      "Holding position of authority in an organization"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "What is the key idea behind a structured approach to decision-making?",
    options: [
      "Making quick decisions based on gut feeling",
      "Avoiding any pre-planned steps",
      "Using clear, repeatable steps to evaluate options",
      "Relying only on experience and intuition"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "What is effective networking about?",
    options: [
      "Only meeting with extroverts",
      "Building genuine relationships",
      "Exchanging favors",
      "Limiting yourself to work events"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "What is an 'elevator pitch'?",
    options: [
      "A formal presentation for a job",
      "A brief summary of who you are and your interests",
      "A way to sell products",
      "A public speaking practice"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What is the most important quality in creating your personal brand?",
    options: [
      "Being fake and trying to please everyone",
      "Being vague and open to interpretation",
      "Authenticity",
      "Copying other people's brands"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "What is the main benefit of a well-established personal brand?",
    options: [
      "To make more money",
      "To become a social media influencer",
      "To establish a reputation as an expert in your field",
      "To have lots of followers"
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "Which of the following is an important step when positioning yourself for speaking engagements?",
    options: [
      "Do not share your unique perspectives",
      "Avoid connecting online",
      "Be Ready and well read",
      "Share your personal story"
    ],
    correctAnswer: 2
  },
  // High-Performing Teams (4 Questions)
  {
    id: 30,
    question: "According to the document, what is required for high performance in a team?",
    options: [
      "Just having a strong leader",
      "Only good individual skills",
      "Wanting it, knowing what it takes, and taking action daily",
      "A high budget and resources"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "What does psychological safety allow team members to do?",
    options: [
      "Stay silent",
      "Take risks, admit mistakes, and have difficult conversations",
      "Hide mistakes",
      "Avoid challenges"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "According to the text, what is a main reason teams might not develop trust?",
    options: [
      "They are not using data",
      "They subtly punish mistakes",
      "They only focus on the positive",
      "They don't do team building activities"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "According to the presentation what should leaders do to impact their teams performance positively?",
    options: [
      "create an environment for people to work at their best",
      "ask what the team can do for them",
      "only do what the boss wants",
      "control all the aspects of a teams workflow"
    ],
    correctAnswer: 0
  },
  // Diplomatic Protocol (4 Questions)
  {
    id: 34,
    question: "What is the core definition of diplomacy?",
    options: [
      "The art of making laws",
      "The practice of conducting international trade",
      "The art and practice of conducting negotiations",
      "The science of international politics"
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "Which theory of international relations emphasizes power and national interests?",
    options: [
      "Liberalism",
      "Realism",
      "Constructivism",
      "Idealism"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "In diplomatic protocol, what is the foundation of all interactions?",
    options: [
      "Reciprocity",
      "Precedence",
      "Respect",
      "Etiquette"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "What does 'Precedence' refer to in diplomatic protocol?",
    options: [
      "Cultural norms in diplomatic contexts",
      "Hierarchical order in diplomatic settings",
      "Communication across cultural barriers",
      "Mutual exchange of courtesies"
    ],
    correctAnswer: 1
  },
  // Change Management (7 Questions)
  {
    id: 38,
    question: "What is the first step in creating urgency for change?",
    options: [
      "Target audience identification",
      "Core message development",
      "Communication frequency planning",
      "Immediate action implementation"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Which component is critical to building a guiding coalition?",
    options: [
      "Selecting communication channels",
      "Finding key influencers",
      "Aligning stakeholder vision",
      "Setting measurable goals"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "What should a vision statement for change include?",
    options: [
      "Key performance indicators",
      "A clear and inspiring goal",
      "Resource allocation details",
      "Communication plans"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "What is a strategic pillar in change management?",
    options: [
      "Clear deadlines for initiatives",
      "Identifying focus areas like training and resources",
      "Crafting a measurable vision",
      "Tracking feedback from stakeholders"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Which step involves gathering and addressing stakeholder feedback?",
    options: [
      "Audience segmentation",
      "Feedback collection",
      "Message crafting",
      "Communication frequency"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "What is the purpose of short-term wins in change management?",
    options: [
      "To allocate large resources for a single milestone",
      "To create achievable, specific short-term goals that show progress",
      "To replace long-term sustainability strategies",
      "To focus on stakeholder communication exclusively"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Why is flexibility important in change implementation?",
    options: [
      "To maintain urgency throughout the initiative",
      "To adjust strategies when challenges arise",
      "To ensure that roles are clearly defined",
      "To allocate sufficient resources for quick wins"
    ],
    correctAnswer: 1
  },
  // Personal Branding (2 questions)
  {
    id: 45,
    question: "What is a definition of personal branding according to this material?",
    options: [
      "Just making a logo for a business",
      "Building a reputation that represents the best version of yourself",
      "Copying the personal brand of someone else",
      "The act of becoming a celebrity"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "Which of the four C's emphasizes the importance of consistently representing values across platforms?",
    options: [
      "Clarity",
      "Consistency",
      "Content",
      "Communication"
    ],
    correctAnswer: 1
  },
  // Leadership Reimagined (4 Questions)
  {
    id: 47,
    question: "According to the document, what is the reality of leadership?",
    options: [
      "Leadership is about charisma and personal abilities",
      "Leadership focuses on solving challenges, not tools or attributes",
      "Leadership depends on positions of authority",
      "Leadership requires followers to succeed"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which key step contributes to 80% of leadership success in problem-solving?",
    options: [
      "Implementing the solution",
      "Choosing the right action",
      "Understanding the problem",
      "Building a team"
    ],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "What is the first step in the leadership learning cycle?",
    options: [
      "Reflect on outcomes",
      "Do—take action and lead initiatives",
      "Correct mistakes based on insights",
      "Repeat successful approaches"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which capability allows leaders to inspire and organize people toward solutions?",
    options: [
      "Reflective practice",
      "Diagnostic skills",
      "Mobilisation ability",
      "Analytical thinking"
    ],
    correctAnswer: 2
  }
];
