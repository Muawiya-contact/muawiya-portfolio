export const data = {
  name: 'Muawiya Amir',
  title: 'BS AI + BS Math · Hafiz-e-Quran · Open source person',
  quote: '"A Mathematician is a Magician."',
  location: 'Multan, Pakistan',
  university: 'NFC IET, Multan',
  email: 'contactmuawia@gmail.com',
  links: {
    github: 'https://github.com/Muawiya-contact',
    linkedin: 'https://linkedin.com/in/contactmuawia',
    leetcode: 'https://leetcode.com/u/Moavia_Amir/',
    youtube: 'https://www.youtube.com/@Coding_Moves',
    kaggle: 'https://www.kaggle.com/',
    website: 'https://muawiya-contact.github.io/coding-moves-authentication/',
  },

  hero: {
    status: 'open to collab & internships',
    terminal: [
      { prompt: '$', cmd: 'whoami', output: 'muawiya-amir' },
      { prompt: '$', cmd: 'leetcode --stats', output: '415 solved · 170E / 177M / 68H' },
      { prompt: '$', cmd: 'leetcode --streak', output: '58-day max streak · 264 active days' },
      { prompt: '$', cmd: 'gh contrib --year 2025', output: '1,201 contributions' },
      { prompt: '$', cmd: 'gh repo list --count', output: '89 public repos' },
      { prompt: '$', cmd: 'cat identity.txt', output: 'Hafiz-e-Quran · Multan, PK' },
    ],
    contributionGrid: [
      0, 1, 2, 1, 3, 2, 0, 1, 3, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0,
      1, 2, 4, 3, 2, 1, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1,
      2, 3, 1, 4, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 3, 4, 2, 1,
      0, 1, 2, 3, 4, 3, 2, 1, 0, 2, 3, 4, 4, 3, 1, 2, 0, 1, 3, 2,
      1, 3, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 4, 3, 2, 1, 0,
      2, 1, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, 2, 3, 1,
      1, 2, 0, 3, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 3, 4, 2, 3,
    ],
  },

  stats: [
    { num: '415+', label: 'leetcode' },
    { num: '1,201', label: 'gh contrib 2025' },
    { num: '89', label: 'repos' },
    { num: '58', label: 'day streak (max)' },
  ],

  about: [
    "I'm Muawiya — undergrad at NFC IET in Multan, somehow doing a BS in AI and a BS in Mathematics at the same time. People ask why both. Honestly? I don't think you can understand machine learning without understanding the math underneath it. The quote I live by is \"A Mathematician is a Magician\" — and I mean that literally. Proofs feel like spells. Matrix multiplications feel like incantations.",
    "I'm Hafiz-e-Quran. That discipline carries into everything — memorizing 6,236 verses taught me what daily consistency actually means. It's the same muscle I use for my 58-day LeetCode streak (yeah, I'm still proud of that one) and for showing up to open source PRs even when the CI is broken.",
    "I contribute to Apache HugeGraph (43 comments on a single CI upgrade PR — ask me about dependency hell), got promoted to Triage Collaborator at drt-hub, shipped docs fixes to Linux Foundation's crowd.dev, and refactored getters in RocketChat's homeserver. I don't collect badges. I just like fixing things that aren't mine.",
    "When I'm not in a textbook or a GitHub issue, I run Coding Moves on YouTube — teaching AI and programming to people who learn the way I do: by building messy things first and cleaning them up later.",
    "The endgame? Machine Learning Engineer at OpenAI or Google DeepMind. Not because they sound cool on a LinkedIn headline — because that's where the hardest problems live, and I want to be in the room where the math actually matters.",
  ],

  education: [
    {
      degree: 'BS Artificial Intelligence',
      institute: 'NFC Institute of Engineering & Technology',
      cgpa: '3.33+',
      note: '8-semester curriculum, still grinding',
    },
    {
      degree: 'BS Mathematics',
      institute: 'NFC Institute of Engineering & Technology',
      cgpa: '2.8+',
      note: 'Started Spring 2025 — proofs at 2am hit different',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'C++', 'Java', 'C#', 'SQL', 'Assembly (8086)'],
    },
    {
      category: 'AI / ML',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Computer Vision', 'NLP / TF-IDF', 'Kaggle'],
    },
    {
      category: 'Web',
      items: ['React', 'Node.js', 'HTML / CSS', 'REST APIs', 'TypeScript', 'Dart / Flutter'],
    },
    {
      category: 'DevOps',
      items: ['Git', 'GitHub Actions', 'Docker', 'pytest', 'CI/CD', 'JSON Schema'],
    },
    {
      category: 'Math',
      items: ['Linear Algebra', 'Calculus', 'Discrete Math', 'Probability', 'Optimization', 'Proofs'],
    },
    {
      category: 'DSA',
      items: ['Dynamic Programming', 'Backtracking', 'Segment Trees', 'Greedy', 'Binary Search', 'Hash Tables'],
    },
  ],

  projects: [
    {
      type: 'ai',
      name: 'MedGemma Sentinel',
      desc: "I built this to see if I could make a model explain what's wrong with you better than a Google search. Uses Google's MedGemma — still iterating on the 'don't give medical advice' guardrails.",
      tags: ['Python', 'MedGemma', 'Health AI'],
      link: 'https://github.com/Muawiya-contact/MedGemma-Sentinel',
      year: '2025',
    },
    {
      type: 'iot',
      name: 'Smart Home Simulator',
      desc: 'Wanted to understand IoT without buying $400 of sensors. Built a full home simulation with automation logic — turns out virtual light switches are still satisfying to toggle.',
      tags: ['IoT', 'Simulation'],
      link: '#',
      year: '2024',
    },
    {
      type: 'ml',
      name: 'ML Predictor',
      desc: 'My first end-to-end ML pipeline that didn\'t live in a Kaggle notebook. Data cleaning, feature engineering, model training — the boring parts that actually matter in production.',
      tags: ['Python', 'Scikit-learn'],
      link: 'https://github.com/Muawiya-contact/ML_Predictor',
      year: '2024',
    },
    {
      type: 'cv',
      name: 'Face Mask Detection',
      desc: 'Real-time mask detection with OpenCV and a CNN. Built during COVID-era curiosity — still works, still occasionally misidentifies my beard as a mask.',
      tags: ['OpenCV', 'Deep Learning'],
      link: 'https://github.com/Muawiya-contact/FaceMaskDetection',
      year: '2023',
    },
    {
      type: 'edtech',
      name: 'SudoStudy',
      desc: 'Contributed camera integration and modal flows for mobile users on this EdTech platform. First time my code shipped to real students — terrifying and addictive.',
      tags: ['React', 'EdTech'],
      link: 'https://github.com/SudoStudy/SudoStudy',
      year: '2024',
    },
    {
      type: 'hardware',
      name: 'IoT RC Car',
      desc: 'RC car with sensors, embedded firmware, and way too many late nights soldering things I probably shouldn\'t have. The crash rate was 100%. The learning rate was higher.',
      tags: ['Embedded', 'IoT', 'Hardware'],
      link: '#',
      year: '2024',
    },
  ],

  openSource: [
    {
      org: 'Apache Software Foundation',
      name: 'hugegraph-ai',
      desc: 'Upgraded the Python client CI from 1.3.0 to 1.7.0. That PR alone got 43 comments — mostly me arguing with dependency resolution.',
      prs: [
        'Upgrade HugeGraph Python Client CI from 1.3.0 to 1.7.0 (43 comments)',
        'Bug fix: restore strict assertion for backend_metrics',
      ],
      highlight: '43 PR comments on CI upgrade',
      link: 'https://github.com/apache/hugegraph-ai',
    },
    {
      org: 'drt-hub',
      name: 'drt — Reverse ETL',
      desc: 'Started contributing connectors and JSON Schema validation. Got promoted to Triage Collaborator — which basically means I now tell other people their PRs need work. Karma.',
      prs: [
        'Add Jira connector with create/update support',
        'Implement dynamic connector registry system',
        'Add JSON Schema validation infrastructure',
      ],
      highlight: 'Triage Collaborator',
      link: 'https://github.com/drt-hub/drt',
    },
    {
      org: 'Linux Foundation',
      name: 'crowd.dev',
      desc: 'Their docs were lying about the Node version and repo URLs. I fixed it. 26 comments of "are you sure this URL is right?" Yes. Yes I am.',
      prs: ['docs: update outdated technical specs and Node version (26 comments)'],
      highlight: '26 PR comments',
      link: 'https://github.com/linuxfoundation/crowd.dev',
    },
    {
      org: 'RocketChat',
      name: 'homeserver',
      desc: 'Renamed a confusing getter from `origin` to `senderDomain` in EventWrapper. Small change, 15 comments, much clearer codebase. This is the open source I love.',
      prs: ['refactor: rename origin getter to senderDomain in EventWrapper (15 comments)'],
      highlight: '15 PR comments',
      link: 'https://github.com/RocketChat/homeserver',
    },
  ],

  leetcode: {
    total: 415,
    easy: 170,
    medium: 177,
    hard: 68,
    maxStreak: 58,
    activeDays: 264,
    acceptanceRate: '78.55%',
    intro: "I solve problems on LeetCode the way I memorize Quran — same time every day, no excuses. 415 down, infinity to go. The hard ones still humble me.",
    languages: [
      { name: 'Python', count: 253 },
      { name: 'Python3', count: 121 },
      { name: 'JavaScript', count: 31 },
    ],
    skills: [
      { name: 'Array', count: 230, max: 230 },
      { name: 'Math', count: 90, max: 230 },
      { name: 'String', count: 86, max: 230 },
      { name: 'Hash Table', count: 84, max: 230 },
      { name: 'Dynamic Programming', count: 62, max: 230 },
      { name: 'Sorting', count: 56, max: 230 },
      { name: 'Greedy', count: 51, max: 230 },
      { name: 'Backtracking', count: 9, max: 230 },
    ],
  },

  books: [
  { title: 'Ultralearning', author: 'Scott H. Young', status: 'done', note: 'made me rethink how I learn anything new' },
  { title: 'Deep Work', author: 'Cal Newport', status: 'done', note: 'the reason I stopped checking Twitter during problem sets' },
  { title: 'Atomic Habits', author: 'James Clear', status: 'done', note: '1% better every day — cheesy but it works' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'reading', note: 'this changed how I think about data' },
  { title: 'The Little OS Book', author: 'Erik Helin & Adam Renberg', status: 'done', note: 'finally understood what happens below your Python code' },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'done', note: 'I name my variables better now. mostly.' },
  { title: 'Hands-On Machine Learning', author: 'Aurélien Géron', status: 'reading', note: 'my go-to when a paper is too abstract' },
  { title: 'Mathematics for Machine Learning', author: 'Deisenroth, Faisal & Ong', status: 'reading', note: 'the math textbook I actually enjoy' },
  { title: 'Pattern Recognition & ML', author: 'Christopher Bishop', status: 'queued', note: 'on the shelf, waiting for MML to click fully' },
  { title: 'Introduction to Algorithms (CLRS)', author: 'Cormen et al.', status: 'reading', note: 'heavy. slow. worth every page.' },
  { title: 'How to Prove It', author: 'Daniel J. Velleman', status: 'done', note: 'taught me that proofs are just careful arguments' },
  { title: 'Concrete Mathematics', author: 'Knuth, Graham & Patashnik', status: 'queued', note: 'Knuth intimidates me and that\'s the point' },
  ],

  goals: {
    intro: "I don't do five-year plans. I do next-hard-thing plans.",
    items: [
      {
        label: 'now',
        text: 'Ship a portfolio that doesn\'t look AI-generated (ironic, I know). Keep contributing to Apache and drt-hub. Finish DDIA.',
      },
      {
        label: 'next',
        text: 'Google ML Engineer cert. Stronger research reading habits. A project that uses math I learned in class, not just on LeetCode.',
      },
      {
        label: 'eventually',
        text: 'MLE role where the problems are hard. OpenAI. Google DeepMind. Somewhere the work matters.',
      },
    ],
  },

  contact: {
    intro: "If you're building something interesting, maintaining an open source project that needs help, or just want to talk about why CLRS chapter 4 hits different — email me.",
    links: [
      { label: 'email', href: 'mailto:contactmuawia@gmail.com' },
      { label: 'github', href: 'https://github.com/Muawiya-contact' },
      { label: 'linkedin', href: 'https://linkedin.com/in/contactmuawia' },
      { label: 'leetcode', href: 'https://leetcode.com/u/Moavia_Amir/' },
      { label: 'youtube', href: 'https://www.youtube.com/@Coding_Moves' },
      { label: 'kaggle', href: 'https://www.kaggle.com/' },
    ],
  },

  footer: {
    line: 'Made at 2am in Multan, probably while solving a LeetCode hard.',
    email: 'contactmuawia@gmail.com',
  },

  nav: [
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'stack' },
    { id: 'projects', label: 'builds' },
    { id: 'open-source', label: 'oss' },
    { id: 'leetcode', label: 'dsa' },
    { id: 'books', label: 'reading' },
    { id: 'contact', label: 'say hi' },
  ],
}
