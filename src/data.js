export const data = {
  name: 'Muawiya Amir',
  title: 'Software Engineer · Systems, ML & Open Source',
  tagline: 'I work the whole stack — from x86_64 kernel code to ML pipelines and production open-source tooling.',
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
      { prompt: '$', cmd: 'role --current', output: 'software engineer · systems + ML' },
      { prompt: '$', cmd: 'oss --orgs', output: 'drt-hub · Apache · Linux Foundation · RocketChat' },
      { prompt: '$', cmd: 'drt-hub --status', output: 'Triage Collaborator' },
      { prompt: '$', cmd: 'gh contrib --year 2025', output: '1,201 contributions' },
      { prompt: '$', cmd: 'building', output: 'SudoStudy (edtech) · Arion OS (x86_64)' },
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
    { num: '5+', label: 'open-source orgs' },
    { num: 'Triage', label: 'drt-hub collaborator' },
    { num: '1,201', label: 'gh contributions 2025' },
    { num: '89', label: 'public repos' },
  ],

  about: [
    "I'm a software engineer who likes the whole stack — from x86_64 kernel code up to machine-learning pipelines. I'm completing dual degrees in Artificial Intelligence and Mathematics, and I spend most of my time in real open-source codebases where the work has to hold up to review.",
    "My strongest work is open source. I'm a Triage Collaborator on drt-hub/drt, a Python Reverse ETL engine, where I designed the dynamic connector registry, added connectors and JSON Schema validation, and shipped its OpenTelemetry support. I've also landed CI and infrastructure fixes in Apache HugeGraph, the Linux Foundation's crowd.dev, and RocketChat's homeserver.",
    "On the product side I work part-time at SudoStudy, an education platform, building backend services and shipping features to real students. I also run Coding Moves, a YouTube channel where I teach programming and AI.",
    "On a personal note, I'm a Hafiz-e-Quran — the same daily discipline behind memorizing the Qur'an is what keeps me consistent and careful in my work.",
    "I care about clean engineering, code other people can build on, and shipping things that actually work — whether it's a kernel, an ML pipeline, or a connector in someone else's codebase.",
  ],

  experience: [
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
    {
      role: 'Full-Stack Developer (Part-Time)',
      org: 'SudoStudy',
      period: 'Sep 2025 — Present',
      points: [
        'Build backend services and databases for a live education platform and integrate third-party APIs.',
        'Shipped student-facing features including native mobile-camera capture and quiz-attempt review for teachers.',
      ],
      link: 'https://github.com/SudoStudy/SudoStudy',
      linkLabel: 'SudoStudy on GitHub',
    },
    {
      role: 'Python Developer Intern',
      org: 'CodeAlpha',
      period: 'Feb 2025 — Apr 2026',
      points: [
        'Automated data-processing pipelines and built scalable Flask backends; improved script efficiency and reliability.',
      ],
      link: '',
      linkLabel: '',
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
      status: '',
      takeaway: 'The foundation under Arion OS — scheduling, memory, and concurrency.',
    },
    {
      title: 'Practical MLOps',
      author: 'Noah Gift & Alfredo Deza',
      tag: 'MLOps',
      status: '',
      takeaway: 'Taking ML past the notebook: pipelines, deployment, and monitoring.',
    },
    {
      title: 'Ultralearning',
      author: 'Scott H. Young',
      tag: 'Learning',
      status: '',
      takeaway: 'A deliberate framework for picking up hard skills fast.',
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
      items: ['Operating Systems', 'Data Structures', 'Algorithms', 'Linear Algebra', 'Probability'],
    },
  ],

  projects: [
    {
      type: 'systems',
      name: 'Arion OS',
      desc: 'A learning-focused x86_64 operating system built from scratch — bootloader, kernel, memory management, and system calls, all without a framework.',
      tags: ['C', 'x86_64 Asm', 'OS'],
      link: 'https://github.com/Coding-Moves/Arion_OS',
      year: '2025',
    },
    {
      type: 'ai',
      name: 'MedGemma Sentinel',
      desc: 'A health-assistant prototype built on Google\u2019s MedGemma, focused on grounded responses and safety guardrails around medical advice.',
      tags: ['Python', 'MedGemma', 'Health AI'],
      link: 'https://github.com/Muawiya-contact/MedGemma-Sentinel',
      year: '2025',
    },
    {
      type: 'math',
      name: 'Linear Algebra Library',
      desc: 'A Python numerical library built only from primitive types — no math libraries — implementing core linear-algebra routines by hand.',
      tags: ['Python', 'Numerical'],
      link: 'https://github.com/Coding-Moves/Linear-Algebra',
      year: '2025',
    },
    {
      type: 'ml',
      name: 'ML Predictor',
      desc: 'An end-to-end ML pipeline covering data cleaning, feature engineering, and model training — the production-shaped parts, not just a notebook.',
      tags: ['Python', 'Scikit-learn'],
      link: 'https://github.com/Muawiya-contact/ML_Predictor',
      year: '2024',
    },
    {
      type: 'edtech',
      name: 'SudoStudy',
      desc: 'Backend services and mobile-facing features for a live education platform, including native camera capture for long-answer questions.',
      tags: ['React', 'Backend', 'EdTech'],
      link: 'https://github.com/SudoStudy/SudoStudy',
      year: '2024',
    },
    {
      type: 'cv',
      name: 'Face Mask Detection',
      desc: 'Real-time mask detection using OpenCV and a convolutional neural network, trained and tuned for live webcam inference.',
      tags: ['OpenCV', 'Deep Learning'],
      link: 'https://github.com/Muawiya-contact/FaceMaskDetection',
      year: '2023',
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
    {
      org: 'RocketChat',
      name: 'homeserver',
      desc: 'Refactored a confusing getter (origin to senderDomain) in EventWrapper for a clearer, less error-prone event API.',
      prs: ['refactor: rename origin getter to senderDomain in EventWrapper'],
      highlight: 'API clarity',
      link: 'https://github.com/RocketChat/homeserver',
    },
  ],

  contact: {
    intro: "Always happy to talk about open source, systems, or an interesting engineering problem. Email is the fastest way to reach me.",
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
}
