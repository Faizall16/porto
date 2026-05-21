export const EXPERIENCES = [
  {
    title: `Frontend Engineer`,
    company: `Wings Group Indonesia`,
    period: `September 2025 - Current`,
    location: `Jakarta, Indonesia`,
    type: `Full Time`,
    current: true,
    responsibilities: [
      `Architected and implemented a centralized Master Data Governance (MDG) module within a satellite application ecosystem, seamlessly integrated with SAP to ensure data synchronization across enterprise-wide systems.`,
      `Engineered complex data transformation layers to bridge frontend inputs with SAP’s rigid data structures, maintaining high data integrity and reducing sync errors.`,
      `Developed a standardized and highly reusable UI component library using Material UI (MUI), ensuring design consistency and significantly reducing development time for new internal modules.`,
      `Engineered an efficient global state management architecture using Zustand, facilitating seamless data flow and improving application performance across intricate governance forms.`,
      `Optimized server-side data fetching and caching through TanStack Query, ensuring high availability of master data records while minimizing server overhead during heavy SAP-integrated workloads.`,
    ],
  },
  {
    title: `Frontend Engineer`,
    company: `Synpasis Sinergi Digital`,
    period: `February 2023 - August 2025`,
    location: `Jakarta, Indonesia`,
    type: `Full Time`,
    current: false,
    responsibilities: [
      `Developed and maintained a comprehensive Workshop Monitoring System using JavaScript, focusing on tracking equipment maintenance cycles and workshop throughput for industrial operations.`,
      `Architected and developed a mission-critical Fleet Management System (FMS), enabling real-time tracking and productivity analysis through a modern Next.js and TypeScript stack.`,
      `Engineered an interactive geospatial dashboard using Leaflet.js, implementing real-time vehicle movement tracking, geofencing, and dynamic map markers to visualize complex mining site logistics.`,
      `Optimized map rendering performance by managing high-frequency data streams for vehicle coordinates, ensuring smooth and accurate real-time updates without compromising browser responsiveness.`,
      `Engineered a robust server-state management strategy using TanStack Query, significantly reducing redundant API requests and ensuring low-latency data updates for real-time industrial dashboards.`,
      `Optimized application performance and reliability by integrating Zod for rigorous schema validation, effectively eliminating runtime errors during complex data-fetching processes.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Ciptadra Softindo`,
    period: `Juny 2022 - December 2022`,
    location: `Depok, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Develope a CRM web application called Onebox, designed to streamline customer relationship management processes.`,
      `Built using Phalcon PHM framework with PostgreSQL database for efficient backend performance and scalability.`,
      `Collaborated with design team using Figma to translate UI/UX designs into responsives, user-friendly interfaces.`,
      `Contributed to both frontend and backend development, ensuring seamless integration between the system's components.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: "Pomodoro Focus - Stay Productive",
    description:
      "Boost your productivity with this elegant Pomodoro timer featuring task management and progress analytics.",
    images: ["/pomo1.jpeg", "/pomo2.jpeg", "/pomo3.jpeg"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS", "HTML5"],
    liveDemo: "https://pomodoro.pragusga.com",
    sourceCode: "https://github.com/pragusga25/pomodoro",
    carouselDelay: 5300,
  },
  {
    title: "AI Resume Reviewer",
    description:
      "Get instant, professional feedback on your resume with AI-powered analysis",
    images: [
      "/rev0.jpeg",
      "/rev1.jpeg",
      "/rev2.jpeg",
      "/rev5.jpeg",
      "/rev3.jpeg",
      "/rev4.jpeg",
    ],
    techStack: [
      "Google Vertex",
      "Node.js",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    liveDemo: "https://resume-reviewer.pragusga.com",
    sourceCode: "https://github.com/pragusga25/ai-resume-reviewer",
    carouselDelay: 4500, // 3 seconds
  },
  {
    title: "Adhan",
    description:
      "Adhan is a web app visualizing the continuous cycle of the Islamic call to prayer across global time zones.",
    images: ["/adhand.jpeg", "/adhan3.jpeg", "/adhanw.jpeg", "/adhan4.jpeg"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS", "Three.js"],
    liveDemo: "https://adhan.pragusga.com",
    sourceCode: "https://github.com/pragusga25/adhan",
    carouselDelay: 6000, // 6 seconds
  },
  {
    title: "Image Watermarker",
    description:
      "Easily create custom watermarks for your images. Adjust text, size, position, and style to personalize your watermark.",
    images: ["/wm-banner-1.png", "/wm-banner-2.png", "/wm-banner.png"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    liveDemo: "https://wm.pragusga.com",
    carouselDelay: 5500, // 3 seconds
  },
  {
    title: "Resonance",
    description:
      "Enjoy real-time canvas animations, mood-responsive wave patterns, color therapy, and binaural beat visualization.",
    images: ["/resonance-banner.png", "/resonance-banner-1.png"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    liveDemo: "https://resonance.pragusga.com",
    carouselDelay: 4000, // 4 seconds
  },
  {
    title: "Snake Game",
    description:
      "Play the classic Snake game. Control the snake to eat food and grow longer without hitting the walls or itself.",
    images: ["/snake.jpeg", "/snake2.jpeg"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    sourceCode: "https://github.com/pragusga25/snake",
    liveDemo: "https://snake.pragusga.com",
    carouselDelay: 5000, // 5 seconds
  },
  {
    title: "Earthquake Early Warning System (EEWS)",
    description:
      "The EEWS project developed a scalable, event-driven system using deep learning and Apache Kafka for real-time earthquake detection.",
    images: ["/eews.jpeg", "/eews1.jpeg"],
    techStack: [
      "Python",
      "Go",
      "Kafka",
      "Docker",
      "MongoDB",
      "Prometheus",
      "Grafana",
    ],
    carouselDelay: 7000, // 6 seconds
  },
  {
    title: "Quiz Islam",
    description: "Test your knowledge of Islam with this quiz app.",
    images: ["/quiz-islam1.jpeg", "/quiz-islam2.jpeg", "/quiz-islam3.jpeg"],
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
    ],
    liveDemo: "https://quiz-islam.pragusga.com",
    carouselDelay: 5900, // 6 seconds
  },
  {
    title: "CariKajian",
    description: "Search for Islamic lectures and events in Indonesia.",
    images: ["/carikajian.png"],
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    liveDemo: "https://carikajian.com",
    carouselDelay: 9000, // 6 seconds
  },

  {
    title: "Sudoku",
    description:
      "Play Sudoku online. Choose from easy, medium, and hard difficulty levels.",
    images: ["/sudoku.png", "/sudoku2.jpeg"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    sourceCode: "https://github.com/pragusga25/sudoku",
    liveDemo: "https://sudoku.pragusga.com",
    carouselDelay: 6200, // 3.5 seconds
  },
  {
    title: "Tic Tac Toe",
    description: "Play Tic Tac Toe against the computer. Try to win!",
    images: ["/tictactoe1.jpeg", "/tictactoe.jpeg"],
    techStack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    sourceCode: "https://github.com/pragusga25/tictactoe",
    liveDemo: "https://tictactoe.pragusga.com",
    carouselDelay: 4500, // 4.5 seconds
  },

  {
    title: "CryptoBot",
    description:
      "CryptoBot is an AI chatbot that specializes in cryptocurrency topics. Ask CryptoBot about the latest prices and can send you email!",
    images: ["/cryptobot.jpeg"],
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Google Vertex",
    ],
    liveDemo: "https://cryptobot.pragusga.com",
    carouselDelay: 3300, // 6 seconds
  },
];
