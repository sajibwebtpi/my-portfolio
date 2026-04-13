/**
 * একটিমাত্র ফাইল এডিট করলেই পুরো পোর্টফোলিও আপডেট হবে।
 * ছবি ও PDF: public/ ফোল্ডারে রাখুন (যেমন public/assets/images/..., public/MD_Sajib_Resume.pdf)
 */
export const portfolioData = {
  personal: {
    name: "MD SAJIB",
    heroImg: "/assets/images/hero-only.png",
    img: "/assets/images/nature-img.png",
    initials: "MS",
    role: "Full Stack Web Developer",
    tagline: "Building beautiful, responsive web experiences",
    about:
      "I'm a passionate Full Stack Web Developer dedicated to building modern, responsive, and user-friendly web applications. I love transforming complex ideas into clean, efficient, and intuitive digital experiences using the latest web technologies. Currently, I am seeking opportunities to enhance my skills, grow as a developer, and contribute to impactful and meaningful projects.",
    email: "sajibbhuyantangail2024@gmail.com",
    phone: "+880 1902759535",
    location: "Dhaka, Bangladesh",
    github: "https://github.com/sajibwebtpi",
    linkedin: "https://www.linkedin.com/in/md-bhuyan-6a099b393/",
    facebook: "https://www.facebook.com/profile.php?id=100028299583080",
    instagram: "https://www.instagram.com/sajib_tpi/?hl=en",
    availability: "Open to work",
    resumeUrl: "/MD_Sajib_Resume.pdf",
  },

  skills: [
    {
      language: "HTML / CSS",
      topics: ["Semantic HTML", "CSS Grid & Flexbox", "Responsive Design", "Animations"]
    },
    {
      language: "JavaScript",
      topics: ["ES6+", "DOM Manipulation", "Async/Await", "Promises", "Modules"]
    },
    {
      language: "Tailwind CSS",
      topics: ["Utility Classes", "Responsive Design", "Custom Configurations", "Dark Mode"]
    },
    {
      language: "React",
      topics: ["Components", "Hooks", "State Management", "Context API", "React Router"]
    },

    {
      language: "PHP",
      topics: ["Object-Oriented Programming", "PDO/MySQLi", "Sessions & Cookies", "File Handling"]
    },
    
    {
      language: "Laravel",
      topics: ["MVC Architecture", "Eloquent ORM", "Blade Templates", "Authentication","Authorization","JWT-Token", "API Development"]
    },
    {
      language: "MySQL",
      topics: [
        "SQL queries (SELECT, INSERT, UPDATE, DELETE)",
        "JOINs, indexes & query optimization",
        "Database design & normalization",
        "Primary / foreign keys & relationships",
        "Working with Laravel Eloquent & raw SQL",
      ],
    },
    {
      language: "Git / GitHub",
      topics: ["Version Control", "Branching & Merging", "Pull Requests", "GitHub Actions"]
    }
  ],

  tools: [
    "VS Code",
    "npm",
    "Vite",
    "REST API",
    "Postman",
    "Axios",
    "Xampp",
    "Cursor",
    "claude",
    "chatgpt",
  ],

  education: [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Tangail Polytechnic Institute",
      period: "2013 — 2026",
      result: "CGPA: 3.50 / 4.00",
      desc: "Focused on software engineering, algorithms, and web development.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shaheed Salam High School, Tangail , Ghatail",
      period: "2020 — 2022",
      result: "GPA: 5.00 / 5.00",
      desc: "Science group.",
    },
  ],

  experience: [
    // {
    //   role: "Junior Frontend Developer",
    //   company: "TechSoft Bangladesh Ltd.",
    //   period: "Jan 2024 — Present",
    //   desc: "Building responsive UIs with React and Tailwind CSS. Integrating Laravel REST APIs.",
    // },
  ],

  projects: [

    {
      icon: "▶️",
      name: "Youtube Homepage clone",
      desc: "Front-end project use proper html and css like grid ,flexbox",
      tags: ["HTML", "CSS", "Grid", "Flexbox"],
      live: "https://youtube-homepage-uhpn.vercel.app/",
      github: "https://github.com/sajibwebtpi/Youtube-homepage.git",
    },
    {
      icon: "🛒",
      name: "Inventory Management System",
      desc: "Full-stack online shop with  authentication",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      live: "#",
      github: "https://github.com/sajibwebtpi/Inventory-Project.git",
    },
    {
      icon: "📋",
      name: "Task Manager",
      desc: "Drag-and-drop kanban board for managing daily tasks and team projects.",
      tags: ["Vue.js", "Tailwind", "REST API"],
      live: "#",
      github: "https://github.com/sajibwebtpi/Task-Management-App.git",
    },
    {
      icon: "🌦",
      name: "Online book store",
      desc:
        "An online bookstore where users can browse, search, and purchase books. Features include book categories, detailed book descriptions, shopping cart, and secure checkout.",
      tags: ["React", "API", "CSS"],
      live: "#",
      github: "https://github.com/sajibwebtpi/online-book-store.git",
    },
    {
      icon: "💬",
      name: "Chat Application",
      desc: "Real-time chat app with rooms, user authentication, and WebSocket.",
      tags: ["Vue.js", "Laravel", "WebSocket"],
      live: "#",
      github: "#",
    },
  ],
};
