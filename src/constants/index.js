export const myProjects = [
  {
    id: 1,
    title: "CarvAI – Personalized AI Mentor",
    description:
      "AI-driven career mentorship platform focused on helping users prepare for job applications through personalized guidance",
    subDescription: [
      "Developed using Next.js, Gemini AI, Inngest, and Clerk Authentication for scalable AI-powered workflows",
      "Provides features such as a resume builder, mock interviews, and AI-generated cover letters, improving preparation efficiency by 40%.",
      "Designed responsive dashboards using Recharts to deliver weekly industry insights and trends",
      "Built a modern and intuitive interface using Shadcn UI and Tailwind CSS.",
    ],
    href: "https://carv-ai-iota.vercel.app/",
    logo: "",
    image: "/assets/projects/carvai.jpg",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/logos/js.png",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "OpenAi Api",
        path: "/assets/logos/openai.png",
      },
    ],
  },
  {
    id: 2,
    title: "MockMeet – Real-Time AI Powered Agent Interaction Platform",
    description:
      "Real-time AI-powered interaction platform designed for video and voice-based mock meetings with personalized AI agents.",
    subDescription: [
      "Built using Next.js, React, and TypeScript, enabling scalable and responsive real-time interactions.",
      "Supports auto-generated meeting summaries, searchable transcripts, and actionable insights, improving meeting efficiency by up to 30%.",
      "Handled post-call background processing with Inngest for efficient asynchronous workflows.",
      "Managed structured data using PostgreSQL with Drizzle ORM, reducing manual processing and improving session reliability.",
    ],
    href: "https://mock-meet.vercel.app/",
    logo: "",
    image: "/assets/projects/mockmeet.jpg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Clerk-Auth",
        path: "/assets/logos/clerk.png",
      },
      {
        id: 4,
        name: "Typescript",
        path: "/assets/logos/typescript.png",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "Gemini Api",
        path: "/assets/logos/gemini.png",
      },
    ],
  },
  {
    id: 3,
    title:
      "Camouflage Detector: Military Objectss Camouflage Detection Web App",
    description:
      "Built a full-stack AI web app to detect camouflaged objects using YOLOv5/YOLOv8 models.",
    subDescription: [
      "Integrated Flask backend with PyTorch inference and OpenCV visualization pipeline.",
      "Enabled real-time image upload with annotated detection results and confidence scores.",
      "Optimized inference workflow for low-latency object detection and efficient image processing.",
    ],
    href: "https://github.com/Varshanth2025/military-camouflaged-object-detection",
    logo: "",
    image: "/assets/projects/detection.png",
    tags: [
      {
        id: 1,
        name: "OpenCV",
        path: "/assets/logos/opencv.png",
      },
      {
        id: 2,
        name: "flask",
        path: "/assets/logos/flask.png",
      },
      {
        id: 3,
        name: "Pytroch",
        path: "/assets/logos/pytorch.png",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/VARSHANTH_02/",
    icon: "/assets/socials/leetcode.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/varshanth-g-60181529a",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Varshanth2025",
    icon: "/assets/socials/github.png",
  },
];

export const experiences = [
  {
    title: "Salesforce Developer",
    job: "@SmartBridge",
    date: "2024",
    contents: [
      "Completed Salesforce Developer Virtual Internship with SmartBridge, gaining hands-on experience in Salesforce platform development and ecosystem fundamentals.",
      "Built custom objects, workflows, and automation using declarative tools such as Process Builder, Flow Builder, and validation rules.",
      "Developed Apex classes, triggers, and Lightning Web Components (LWC) to implement tailored functionality and extend platform capabilities.",
      "Collaborated with real use cases and practice projects to apply CRM solutions in scenarios such as lead management, service automation, and data model optimization.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "@Acclaim Coding Solutions",
    date: "2025",
    contents: [
      "Designed and integrated RESTful APIs for assignment management and student progress tracking, ensuring secure data exchange between frontend and backend systems.",
      "Optimized MongoDB queries and indexing strategies to improve data retrieval performance and reduce response latency in high-usage scenarios.",
      "Implemented authentication and role-based access control to manage permissions for students, mentors, and administrators.",
      "Collaborated in Agile sprints, participating in code reviews, feature planning, and testing cycles to deliver scalable and maintainable solutions.",
      "Improved UI responsiveness and state management in the React dashboard, enhancing user experience for 2,000+ active learners.",
    ],
  },
];
export const reviews = [
  {
    name: "Ideas & Projects for Future Generation",
    username: "@Hackathon",
    body: "1st place among 200+ teams in a national-level hackathon.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Hive: Next Big Thing Hackathon",
    username: "@Hackathon",
    body: "Finalist out of 120+ teams with a high-impact product prototype.",
    img: "https://robohash.org/jill",
  },
  {
    name: "AWS Cloud Foundations – AWS",
    username: "@Certification",
    body: "Core knowledge of AWS services, cloud architecture, and deployment models.",
    img: "https://robohash.org/john",
  },
  {
    name: "Artificial Intelligence Foundation – Infosys",
    username: "@Certification",
    body: "Fundamentals of AI workflows, model evaluation, and real-world applications.",
    img: "https://robohash.org/alice",
  },
  {
    name: "Python Foundation – Infosys",
    username: "@Certification",
    body: "Strong foundation in Python, data structures, and problem solving.",
    img: "https://robohash.org/bob",
  },
  {
    name: "SQL Advanced – HackerRank",
    username: "@Certification",
    body: "Advanced SQL including joins, aggregations, and query optimization.",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Advanced Machine Learning – Stanford",
    username: "@Certification",
    body: "Advanced ML concepts in optimization and supervised learning.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Data Structures & Algorithms (LeetCode)",
    username: "@Problem-Solving",
    body: "Solved 150+ DSA problems across arrays, trees, graphs, and DP.",
    img: "https://robohash.org/eve",
  },
];
