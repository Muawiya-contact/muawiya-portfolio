export const data = {
  name: 'Muawiya Amir',
  title: 'Software Engineer · Systems, ML & Open Source',
  tagline: 'I work across backend systems, machine learning pipelines, and production open-source tooling.',
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
      { prompt: '$', cmd: 'oss --orgs', output: 'drt-hub · Apache · Linux Foundation' },
      { prompt: '$', cmd: 'drt-hub --status', output: 'Triage Collaborator' },
      { prompt: '$', cmd: 'gh contrib --year 2025', output: '1,201 contributions' },
      { prompt: '$', cmd: 'building', output: 'SudoStudy (edtech)' },
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
    "I work across backend systems, machine learning pipelines, and production open-source tooling. I'm completing dual degrees in Artificial Intelligence and Mathematics, and I spend most of my time in real open-source codebases where the work has to hold up to review.",
    "My strongest work is open source. I'm a Triage Collaborator on drt-hub/drt, a Python Reverse ETL engine, where I designed the dynamic connector registry, added connectors and JSON Schema validation, and shipped its OpenTelemetry support. I've also landed CI and infrastructure fixes in Apache HugeGraph and the Linux Foundation's crowd.dev.",
    "On the product side I work part-time at SudoStudy, an education platform, building backend services and shipping features to real students. I also run Coding Moves, a YouTube channel where I teach programming and AI.",
    "On a personal note, I'm a Hafiz-e-Quran — the same daily discipline behind memorizing the Qur'an is what keeps me consistent and careful in my work.",
    "I care about clean engineering, code other people can build on, and shipping things that actually work — whether it's a backend service, an ML pipeline, or a connector in someone else's codebase.",
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
      type: 'math',
      name: 'Linear Algebra Library',
      desc: 'A Python numerical library built only from primitive types — no math libraries — implementing core linear-algebra routines by hand.',
      tags: ['Python', 'Numerical'],
      link: 'https://github.com/Coding-Moves/Linear-Algebra',
      year: '2025',
    },
    {
      type: 'edtech',
      name: 'SudoStudy',
      desc: 'Backend services and mobile-facing features for a live education platform, including native camera capture for long-answer questions.',
      tags: ['React', 'Backend', 'EdTech'],
      link: 'https://github.com/SudoStudy/SudoStudy',
      year: '2024',
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

  // Consumed only by scripts/generate-resume.mjs. The print resume carries a
  // few things the site doesn't (phone, certifications, interests) and states
  // the experience in more detail than the site's two-line summaries.
  // Distinct from `resume` above, which is the download filename.
  resumeContent: {
    title: 'Software Engineer · Backend, ML & Open Source',
    phone: '+92 329 7316882',
    summary:
      'Artificial Intelligence and Mathematics student and active open-source contributor. Triage Collaborator on drt-hub/drt, a Python Reverse ETL engine shipped across 30+ PyPI releases, where I build connectors, configuration validation, and observability tooling and review community pull requests. I work across backend systems, machine-learning infrastructure, and production open-source tooling, and I am drawn to problems that need both engineering depth and clean execution.',
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
        'Build backend services and databases for an education platform and integrate third-party APIs.',
        'Shipped student features including native mobile-camera capture for long-answer questions and quiz-attempt review for teachers.',
        'Debugged cross-stack failures across quiz, subject, and group-management flows.',
      ],
    },
    certifications: [
      'Applied Machine Learning — Verified',
      'Python AI Developer — Mimo',
      'Google Cloud Specialization — NAVTTC (ongoing)',
    ],
    competitive: '400+ problems solved on LeetCode, focused on DSA & algorithm optimization.',
    interests: [
      'ML research paper (in progress)',
      'Open-source security & infrastructure',
      'Math × AI intersection',
    ],
  },
}
