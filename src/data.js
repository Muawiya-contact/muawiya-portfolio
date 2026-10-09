export const data = {
  name: 'Muawiya Amir',
  title: 'Software Engineer · Full Stack & Open Source',
  tagline:
    'I build practical apps and reliable systems, and contribute to open-source tools people use.',
  location: 'Multan, Pakistan',
  university: 'NFC IET, Multan',
  email: 'contactmuawia@gmail.com',
  resume: 'Muawiya-Amir-Resume.pdf',
  links: {
    github: 'https://github.com/Muawiya-contact',
    linkedin: 'https://linkedin.com/in/contactmuawia',
    leetcode: 'https://leetcode.com/u/Moavia_Amir/',
    youtube: 'https://www.youtube.com/@Coding_Moves',
  },

  hero: {
    status: 'building & contributing in open source',
    terminal: [
      { prompt: '$', cmd: 'whoami', output: 'muawiya-amir' },
      { prompt: '$', cmd: 'role --current', output: 'software engineer · full stack + systems' },
      { prompt: '$', cmd: 'oss --orgs', output: 'drt-hub · Apache · Linux Foundation' },
      { prompt: '$', cmd: 'drt-hub --status', output: 'Triage Collaborator' },
      { prompt: '$', cmd: 'gh contrib --year 2025', output: '1,201 contributions' },
      { prompt: '$', cmd: 'building', output: 'One Concept (mobile learning)' },
    ],
    contributionGrid: [
      0, 1, 2, 1, 3, 2, 0, 1, 3, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 4, 3, 2, 1, 3, 4, 3, 2, 1,
      0, 1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 1, 4, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 3, 4, 2, 1, 0, 1,
      2, 3, 4, 3, 2, 1, 0, 2, 3, 4, 4, 3, 1, 2, 0, 1, 3, 2, 1, 3, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0,
      1, 2, 4, 3, 2, 1, 0, 2, 1, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, 2, 3, 1, 1, 2, 0, 3,
      4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 3, 4, 2, 3,
    ],
  },

  about: [
    "I build apps and backend systems, and contribute to production open-source tooling. I'm completing dual degrees in Artificial Intelligence and Mathematics, and I spend most of my time in real codebases where the work has to hold up to review.",
    "My strongest work is open source. I'm a Triage Collaborator on drt-hub/drt, a Python Reverse ETL engine, where I designed the dynamic connector registry, added connectors and JSON Schema validation, and shipped its OpenTelemetry support. I've also landed CI and infrastructure fixes in Apache HugeGraph and the Linux Foundation's crowd.dev.",
    'At SudoStudy, I helped teachers run quizzes and understand how their students were doing, from classroom publishing and grading to clear performance reports. Now I am building One Concept, a mobile app for learning something new each day, and Diskern, a desktop tool for understanding what is safe to clean. I also run Coding Moves, a YouTube channel where I teach programming and AI.',
    "On a personal note, I'm a Hafiz-e-Quran — the same daily discipline behind memorizing the Qur'an is what keeps me consistent and careful in my work.",
    "I care about clean engineering, code other people can build on, and shipping things that actually work — whether it's a backend service, an ML pipeline, or a connector in someone else's codebase.",
  ],

  experience: [
    {
      role: 'Software Engineer (Full Stack)',
      org: 'SudoStudy',
      period: 'Sep 2025 — Oct 2026',
      points: [
        'Built teacher tools to create section-based quizzes, assign students, publish to Google Classroom, and return grades.',
        'Developed scoring and student performance reports with charts and PDF exports.',
        'Improved the Gemini study assistant with streaming replies and conversation history.',
        'Made teacher dashboards easier to use on mobile, fixed authentication and grading issues, and contributed to a read-only analytics integration that protects student contact details.',
      ],
      link: 'https://sudostudy.com/',
      linkLabel: 'visit SudoStudy',
    },
    {
      role: 'Open-Source Engineer & Triage Collaborator',
      org: 'drt-hub/drt',
      period: 'Apr 2026 — Present',
      points: [
        'Promoted to Triage Collaborator; review pull requests, triage issues, and shape feature design alongside maintainers.',
        'Designed the dynamic connector registry, added connectors and JSON Schema validation, and shipped OpenTelemetry tracing and metrics.',
      ],
      link: 'https://github.com/drt-hub/drt/pulls?q=is%3Apr+author%3AMuawiya-contact',
      linkLabel: 'view my pull requests',
    },
  ],

  books: [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      tag: 'Data Systems',
      status: 'in progress',
      takeaway: 'Changing how I reason about storage, replication, and failure modes.',
    },
    {
      title: 'Operating System Concepts',
      author: 'Silberschatz, Galvin & Gagne',
      tag: 'Systems',
      status: 'completed',
      takeaway: 'Deepening my understanding of scheduling, memory, and concurrency.',
    },
    {
      title: 'Practical MLOps',
      author: 'Noah Gift & Alfredo Deza',
      tag: 'MLOps',
      status: 'pending',
      takeaway: 'Taking ML past the notebook: pipelines, deployment, and monitoring.',
    },
    {
      title: 'Ultralearning',
      author: 'Scott H. Young',
      tag: 'Learning',
      status: 'completed',
      takeaway: 'A deliberate framework for picking up hard skills fast.',
    },
    {
      title: 'The Way of the Superior Man',
      author: 'David Deida',
      tag: 'Personal Growth',
      status: 'pending',
      takeaway: 'On purpose, presence, and integrity in work and relationships.',
    },
  ],

  education: [
    {
      degree: 'BS Artificial Intelligence',
      institute: 'NFC Institute of Engineering & Technology, Multan',
      cgpa: '3.33 / 4.0',
      note: 'Coursework across machine learning, systems, and algorithms.',
    },
    {
      degree: 'BS Mathematics',
      institute: 'Virtual University of Pakistan',
      cgpa: '',
      note: 'Linear algebra, probability, and proof-based foundations for ML.',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'C / C++', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'x86_64 Assembly'],
    },
    {
      category: 'AI / ML',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Computer Vision', 'NLP'],
    },
    {
      category: 'Web & Backend',
      items: ['React', 'Node.js', 'Flask', 'REST APIs', 'HTML / CSS'],
    },
    {
      category: 'Systems & DevOps',
      items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'pytest', 'JSON Schema', 'OpenTelemetry'],
    },
    {
      category: 'CS Foundations',
      items: [
        'Operating Systems',
        'Data Structures',
        'Algorithms',
        'Linear Algebra',
        'Probability',
      ],
    },
  ],

  projects: [
    {
      type: 'mobile',
      name: 'One Concept',
      desc: 'An Android app that teaches one short technical concept each day. It rotates topics, sends timely reminders, and keeps a synced record of what you have learned.',
      tags: ['React Native', 'Expo', 'FastAPI', 'Gemini'],
      link: 'https://github.com/Coding-Moves/one-concept',
      year: '2026',
    },
    {
      type: 'systems',
      name: 'Diskern',
      desc: 'A desktop app that explains what is safe to clean before moving files into a recoverable quarantine. Built with a Rust rules engine and a Tauri/React interface.',
      tags: ['Rust', 'Tauri', 'React', 'Systems Programming'],
      link: 'https://github.com/Coding-Moves/diskern',
      year: '2026',
    },
    {
      type: 'systems',
      name: 'Arion OS',
      desc: 'A 64-bit operating system built in C and Assembly, with a custom kernel, memory management, and system calls.',
      tags: ['C', 'Assembly', 'Operating Systems'],
      link: 'https://github.com/Coding-Moves/Arion_OS',
      year: '2026',
    },
    {
      type: 'edtech',
      name: 'SudoStudy',
      desc: 'Teacher tools for quizzes, Google Classroom publishing, grading, and student performance reports on an education platform.',
      tags: ['React', 'Backend', 'EdTech'],
      link: 'https://sudostudy.com/',
      year: '2025–26',
      includeInResume: false,
    },
    {
      type: 'academic',
      name: 'BSAI University Projects (NFC-Projects)',
      desc: 'Structured collection of semester-wise coursework and systems projects for my BS in Artificial Intelligence at NFC IET Multan. Includes data structures, algorithms, IoT simulators, search engine implementations, and AI academic tools.',
      tags: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Data Structures', 'Algorithms'],
      link: 'https://github.com/Coding-Moves/BSAI-Projects',
      year: '2025',
    },
  ],

  openSource: [
    {
      org: 'drt-hub',
      name: 'drt — Reverse ETL',
      desc: 'Triage Collaborator on a Python Reverse ETL engine. Designed the dynamic connector registry, added connectors and config validation, and shipped observability support.',
      prs: [
        'Implement dynamic connector registry for auto-discovery',
        'Add Jira connector with create/update support',
        'Add JSON Schema validation infrastructure',
        'Ship OpenTelemetry tracing & metrics (+680 lines)',
      ],
      highlight: 'Triage Collaborator',
      link: 'https://github.com/drt-hub/drt',
    },
    {
      org: 'Apache Software Foundation',
      name: 'hugegraph-ai',
      desc: 'Upgraded the Python client CI from 1.3.0 to 1.7.0 and migrated from manual Docker runs to GitHub service containers with health checks.',
      prs: [
        'Upgrade HugeGraph Python client CI from 1.3.0 to 1.7.0',
        'Restore strict assertion for backend_metrics',
      ],
      highlight: 'CI & infrastructure',
      link: 'https://github.com/apache/hugegraph-ai',
    },
    {
      org: 'Linux Foundation',
      name: 'crowd.dev',
      desc: 'Audited and corrected outdated technical documentation, Node version, and repository URLs across the project.',
      prs: ['docs: update outdated technical specs, Node version, and repository URLs'],
      highlight: 'Docs & specs audit',
      link: 'https://github.com/linuxfoundation/crowd.dev',
    },
  ],

  contact: {
    intro:
      'Always happy to talk about open source, systems, or an interesting engineering problem. Email is the fastest way to reach me.',
    links: [
      { label: 'email', href: 'mailto:contactmuawia@gmail.com' },
      { label: 'github', href: 'https://github.com/Muawiya-contact' },
      { label: 'linkedin', href: 'https://linkedin.com/in/contactmuawia' },
      { label: 'leetcode', href: 'https://leetcode.com/u/Moavia_Amir/' },
      { label: 'youtube', href: 'https://www.youtube.com/@Coding_Moves' },
    ],
  },

  footer: {
    line: 'Built and maintained by Muawiya Amir — Multan, Pakistan.',
    email: 'contactmuawia@gmail.com',
  },

  nav: [
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'books', label: 'bookshelf' },
    { id: 'open-source', label: 'open source' },
    { id: 'contact', label: 'contact' },
  ],

  // Consumed only by scripts/generate-resume.mjs. The print resume carries a
  // few things the site doesn't (phone, certifications, interests) and states
  // the experience in more detail than the site's two-line summaries.
  // Distinct from `resume` above, which is the download filename.
  resumeContent: {
    title: 'Software Engineer · Full Stack & Open Source',
    phone: '+92 329 7316882',
    summary:
      'Software engineer with full-stack experience at SudoStudy and a strong open-source background. I built tools that help teachers create quizzes, grade work, and understand student progress. As a Triage Collaborator on drt-hub/drt, I build connectors and observability tools and review community contributions. I study Artificial Intelligence and Mathematics and enjoy making complex systems useful to people.',
    // Keyed by the `org` field of data.experience; entries without a match fall
    // back to that role's site-facing `points`.
    points: {
      'drt-hub/drt': [
        'Promoted to Triage Collaborator after sustained, high-quality contributions; review pull requests, triage issues, and shape feature design with maintainers.',
        'Designed and built the dynamic connector registry that auto-discovers sources and destinations, removing hardcoded dispatch maps across the engine.',
        'Added the Jira connector (create/update), JSON Schema validation for config files, and data-quality tests (freshness, unique, accepted_values).',
        'Shipped OpenTelemetry tracing and metrics with lazy, idempotent providers (+680 lines) and dry-run row-count diffs for safe sync previews.',
      ],
      SudoStudy: [
        'Built teacher workflows for section-based quizzes, student assignment, Google Classroom publishing, and grade return.',
        {
          before: 'Developed scoring and ',
          text: 'performance reports',
          after: ' with charts and PDF exports.',
          href: 'https://sudostudy.com/',
        },
        'Improved a Gemini study assistant with streaming responses and conversation history.',
        'Improved mobile teacher dashboards, fixed authentication and grading issues, and contributed to read-only teacher analytics that protects student contact details.',
      ],
    },
    certifications: [
      'Applied Machine Learning — Verified',
      'Python AI Developer — Mimo',
      'Google Cloud Specialization — NAVTTC (ongoing)',
    ],
    competitive: '400+ problems solved on LeetCode, focused on DSA & algorithm optimization.',
    // Retained but not printed: the ATS resume omits an interests section to
    // stay on one page. Re-add a block in generate-resume.mjs to restore it.
    interests: [
      'ML research paper (in progress)',
      'Open-source security & infrastructure',
      'Math × AI intersection',
    ],
  },
}
