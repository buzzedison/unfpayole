export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
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
    question: "What is the purpose of the Critical Path Method in resource allocation?",
    options: [
      "To use only the available resources",
      "To carry out multiple tasks at a time",
      "To identify tasks that can be delayed to free up resources",
      "To ensure tasks are prioritized by team stress"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    question: "What does the term 'Agile' emphasize in project risk management?",
    options: [
      "Strict adherence to plans",
      "Rigidity",
      "Flexibility",
      "Control"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "In Agile, what role do User Stories play in risk identification?",
    options: [
      "To outline the budget for a project",
      "To prioritize tasks for development",
      "To define project scope and value while highlighting assumptions",
      "To review the status of the project"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is the main purpose of Backlog Grooming in Agile risk identification?",
    options: [
      "To set clear goals for a sprint",
      "To prioritize tasks in the product backlog",
      "To discuss ongoing risks",
      "To determine the impact of risks"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is the primary goal of Sprint Planning meetings in Agile?",
    options: [
      "Review past actions",
      "Prioritize the riskiest tasks",
      "Define the scope and objectives for the sprint",
      "Talk about future projects"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "In Agile, what happens during Daily Stand-Ups?",
    options: [
      "Teams discuss strategy",
      "Teams discuss their pay",
      "Team members share updates on their progress",
      "Teams talk about personal topics"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
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
    id: 12,
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
  {
    id: 14,
    question: "In the PESTLE Framework, what do 'Legal Factors' involve?",
    options: [
      "The laws and regulations governing business operations",
      "Consumer trends",
      "New technology releases",
      "Political stability"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
    question: "What is the suggested way to use Google Drive & Docs for project planning?",
    options: [
      "Use google translate",
      "Use for time real collaboration",
      "Use it as a storage device",
      "Send documents via email"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What should you use the '@' symbol for in Google Docs?",
    options: [
      "To add your email",
      "To add placeholder chips",
      "To add comments",
      "To link to another document"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
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
    id: 22,
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
    id: 23,
    question: "In Google Sheets, what keyboard shortcut can you use to easily select more rows?",
    options: [
      "CTRL + SHIFT + UP ARROW",
      "CTRL + ALT + DOWN ARROW",
      "CTRL + SHIFT + DOWN ARROW",
      "CTRL + TAB"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
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
    id: 25,
    question: "What is the purpose of Data Validation in Google Sheets?",
    options: [
      "To protect data from cyber attacks",
      "To restrict the types of data inserted in the columns",
      "To hide the data from the public",
      "To copy and paste data"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "What function should you use to find the sum of all cells that match a criteria in google sheets?",
    options: [
      "Arrayformula",
      "SUMIF",
      "Vlookup",
      "Conditional formatting"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What is the function VLOOKUP used for?",
    options: [
      "look for specific cell information",
      "find data in a particular range of cells",
      "calculate the sum of the column",
      "change the look of a specific cell"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "How do you visualize data in Google Sheets?",
    options: [
      "By copying the data into another document",
      "By creating charts",
      "By highlighting them in different colours",
      "By using Google Translate"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What does the 'Marketing' section of the presentation recommend using for a sign up process?",
    options: [
      "Use Google Docs",
      "Use Google Sheets",
      "Use Google Forms",
      "Use email"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "How do you create a new form in Google Drive according to the presentation?",
    options: [
      "Use 'forms.new' in the web browser",
      "Use the 'file new' function",
      "Download a form and re-upload it",
      "Use the +New button and then select 'Forms'"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "What should you add to a Google Form to get more responses?",
    options: [
      "add a video in the description",
      "make it longer",
      "add more pages",
      "take away the description section"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "What should you do to add relevant questions to a sign up form?",
    options: [
      "use open ended questions",
      "ask leading questions",
      "ask very long questions",
      "add lots of sections"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "In Google Forms what does Response validation do?",
    options: [
      "Creates a summary of answers",
      "Sends email notifications",
      "Restricts the type of responses",
      "Collects email addresses"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "According to the presentation, why is it a good idea to create sections in a google form?",
    options: [
      "To make it easier to fill out",
      "To make it harder to fill out",
      "To group your questions",
      "None of the above"
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "What are Conditional Questions?",
    options: [
      "Questions that have no answers",
      "Questions that you skip over",
      "Questions you ask based on the responses you get",
      "Questions you add later"
    ],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "What does the presentation say to do after people fill out a Google Form?",
    options: [
      "Link the form to Google Sheets",
      "Send them an email",
      "Download the responses",
      "Nothing they will all be stored safely"
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "What do you need to do to get email notifications when someone fills out your Google Form?",
    options: [
      "select the option to 'get email notifications for new responses'",
      "add your email to every question",
      "contact google",
      "contact the people who filled it out"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "What is one option to extend the functionality of Google Forms?",
    options: [
      "Generate a qr code",
      "Using add-ons",
      "Adding questions",
      "Changing the colours"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "According to the presentation what does white space do for slides?",
    options: [
      "it makes it look empty",
      "it is unnecessary",
      "leaves room for better understanding",
      "makes it hard to read"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "What did the presentation say you should use to make a presentation more interesting?",
    options: [
      "White space",
      "Images",
      "Bullet points",
      "Audio"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "What is one way you can start a new presentation?",
    options: [
      "by using old slides",
      "by using a template",
      "by downloading images",
      "by using only text"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "In Google Slides how do you add a transition?",
    options: [
      "Select transition in the menu",
      "Download it and re-upload it",
      "Copy it from another slide",
      "Do nothing"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
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
    id: 44,
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
    id: 45,
    question: "What was the major impact of the 2022 ICRC breach?",
    options: [
      "Loss of funding",
      "Compromised personal information of 515,000 vulnerable individuals",
      "Disrupted aid distribution in specific regions",
      "Closure of ICRC offices"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "What did cybercriminals target in the UNDP attack this year?",
    options: [
      "Beneficiary databases",
      "Financial records",
      "HR and procurement data",
      "Communication systems"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "Which type of cyberattack involves deceptive emails that appear to be from trusted sources?",
    options: [
      "Ransomware",
      "Phishing",
      "Supply chain attack",
      "DDoS attack"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
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
    id: 49,
    question: "What is the 'ripple effect' described in supply chain attacks?",
    options: [
      "The spreading of rumors through social media",
      "The cascading effects of a breach across multiple organizations",
      "The delay in delivery of aid supplies",
      "The financial impact on donor organizations"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "What is a major consequence of cyberattacks on humanitarian organizations, beyond the loss of data and disruption of systems?",
    options: [
      "Increased public awareness",
      "Erosion of trust between the organizations and the people they serve",
      "More funding",
      "Improved operational efficiency"
    ],
    correctAnswer: 1
  }
];
