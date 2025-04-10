
export interface CourseType {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  imageSrc: string;
  category: string;
  price: number;
  discount?: number;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  features: string[];
  curriculum: {
    module: string;
    lessons: {
      title: string;
      duration: string;
      isPreview: boolean;
    }[];
  }[];
}

export const popularCourses: CourseType[] = [
  {
    id: "web-development-fundamentals",
    title: "Web Development Fundamentals",
    description:
      "Learn the core technologies of web development: HTML, CSS, and JavaScript. Build responsive websites from scratch.",
    level: "Beginner",
    duration: "10 weeks",
    rating: 4.8,
    imageSrc: "https://source.unsplash.com/random/800x600/?coding,web",
    category: "Web",
    price: 89.99,
    discount: 20,
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Senior Web Developer with 10+ years of experience building modern web applications.",
    },
    features: [
      "24 video lessons",
      "4 coding projects",
      "Downloadable resources",
      "Certificate of completion",
      "Lifetime access",
    ],
    curriculum: [
      {
        module: "Getting Started with HTML",
        lessons: [
          {
            title: "Introduction to HTML",
            duration: "15 min",
            isPreview: true,
          },
          {
            title: "HTML Document Structure",
            duration: "20 min",
            isPreview: false,
          },
          {
            title: "Working with Text Elements",
            duration: "25 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Styling with CSS",
        lessons: [
          {
            title: "CSS Basics",
            duration: "30 min",
            isPreview: true,
          },
          {
            title: "Selectors and Properties",
            duration: "35 min",
            isPreview: false,
          },
          {
            title: "Layouts and Positioning",
            duration: "40 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "javascript-mastery",
    title: "JavaScript Mastery: From Basics to Advanced",
    description:
      "Master JavaScript from the ground up. Learn modern ES6+ features, async programming, and DOM manipulation.",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.9,
    imageSrc: "https://source.unsplash.com/random/800x600/?javascript,code",
    category: "Web",
    price: 99.99,
    instructor: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "JavaScript expert and tech lead at a Fortune 500 company with a passion for teaching.",
    },
    features: [
      "30 video lessons",
      "5 practical projects",
      "Code challenges",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "JavaScript Fundamentals",
        lessons: [
          {
            title: "Variables and Data Types",
            duration: "25 min",
            isPreview: true,
          },
          {
            title: "Functions and Scope",
            duration: "30 min",
            isPreview: false,
          },
          {
            title: "Arrays and Objects",
            duration: "35 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Advanced JavaScript",
        lessons: [
          {
            title: "ES6+ Features",
            duration: "40 min",
            isPreview: true,
          },
          {
            title: "Asynchronous JavaScript",
            duration: "45 min",
            isPreview: false,
          },
          {
            title: "Working with APIs",
            duration: "50 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "react-for-beginners",
    title: "React for Beginners: Build Modern UIs",
    description:
      "Learn React from scratch. Understand components, hooks, state management, and build real-world applications.",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.7,
    imageSrc: "https://source.unsplash.com/random/800x600/?react,programming",
    category: "Web",
    price: 79.99,
    discount: 15,
    instructor: {
      name: "Alex Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Frontend Engineer specializing in React, previously worked at Facebook and Airbnb.",
    },
    features: [
      "22 video lessons",
      "3 project-based assignments",
      "Code reviews",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "React Basics",
        lessons: [
          {
            title: "Introduction to React",
            duration: "20 min",
            isPreview: true,
          },
          {
            title: "Components and Props",
            duration: "25 min",
            isPreview: false,
          },
          {
            title: "State and Lifecycle",
            duration: "30 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Hooks and State Management",
        lessons: [
          {
            title: "useState and useEffect",
            duration: "35 min",
            isPreview: true,
          },
          {
            title: "Context API",
            duration: "40 min",
            isPreview: false,
          },
          {
            title: "Custom Hooks",
            duration: "45 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "python-data-science",
    title: "Python for Data Science and Analysis",
    description:
      "Master Python for data analysis. Learn pandas, NumPy, matplotlib and start analyzing real-world datasets.",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.6,
    imageSrc: "https://source.unsplash.com/random/800x600/?python,data",
    category: "Data",
    price: 94.99,
    instructor: {
      name: "Emma Thompson",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      bio: "Data Scientist with PhD in Applied Mathematics and experience at top tech companies.",
    },
    features: [
      "28 video lessons",
      "4 data analysis projects",
      "Real-world datasets",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "Python Basics for Data Science",
        lessons: [
          {
            title: "Python Fundamentals",
            duration: "30 min",
            isPreview: true,
          },
          {
            title: "Working with NumPy",
            duration: "35 min",
            isPreview: false,
          },
          {
            title: "Data Manipulation with Pandas",
            duration: "40 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Data Visualization",
        lessons: [
          {
            title: "Matplotlib Basics",
            duration: "25 min",
            isPreview: true,
          },
          {
            title: "Advanced Visualizations",
            duration: "35 min",
            isPreview: false,
          },
          {
            title: "Interactive Dashboards",
            duration: "45 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "mobile-app-development-flutter",
    title: "Mobile App Development with Flutter",
    description:
      "Build beautiful, natively compiled apps for iOS and Android from a single codebase using Flutter.",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    imageSrc: "https://source.unsplash.com/random/800x600/?mobile,app",
    category: "Mobile",
    price: 109.99,
    discount: 10,
    instructor: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Mobile developer with experience building apps for startups and enterprises using Flutter.",
    },
    features: [
      "32 video lessons",
      "5 app projects",
      "UI/UX design principles",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "Flutter Basics",
        lessons: [
          {
            title: "Introduction to Flutter",
            duration: "25 min",
            isPreview: true,
          },
          {
            title: "Dart Programming Language",
            duration: "30 min",
            isPreview: false,
          },
          {
            title: "Building UI with Widgets",
            duration: "40 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Advanced Flutter",
        lessons: [
          {
            title: "State Management",
            duration: "45 min",
            isPreview: true,
          },
          {
            title: "Working with APIs",
            duration: "35 min",
            isPreview: false,
          },
          {
            title: "Publishing Your App",
            duration: "30 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    description:
      "Master AWS cloud services. Learn to deploy, scale, and manage applications in the cloud environment.",
    level: "Advanced",
    duration: "10 weeks",
    rating: 4.7,
    imageSrc: "https://source.unsplash.com/random/800x600/?cloud,server",
    category: "DevOps",
    price: 129.99,
    instructor: {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      bio: "AWS Certified Solutions Architect with extensive experience in cloud infrastructure.",
    },
    features: [
      "26 video lessons",
      "3 hands-on projects",
      "AWS certification preparation",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "AWS Fundamentals",
        lessons: [
          {
            title: "Introduction to Cloud Computing",
            duration: "30 min",
            isPreview: true,
          },
          {
            title: "AWS Core Services",
            duration: "45 min",
            isPreview: false,
          },
          {
            title: "Setting Up Your AWS Account",
            duration: "20 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Deploying Applications",
        lessons: [
          {
            title: "EC2 and Virtual Servers",
            duration: "40 min",
            isPreview: true,
          },
          {
            title: "Working with S3",
            duration: "35 min",
            isPreview: false,
          },
          {
            title: "Database Services",
            duration: "50 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    description:
      "Learn the basics of machine learning algorithms and implement them using Python's scikit-learn library.",
    level: "Advanced",
    duration: "14 weeks",
    rating: 4.9,
    imageSrc: "https://source.unsplash.com/random/800x600/?ai,machine",
    category: "Data",
    price: 149.99,
    discount: 10,
    instructor: {
      name: "Sophia Lee",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "AI Researcher with a PhD in Machine Learning and publications in top conferences.",
    },
    features: [
      "36 video lessons",
      "5 ML projects",
      "Mathematics refresher modules",
      "Downloadable resources",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "ML Foundations",
        lessons: [
          {
            title: "Introduction to Machine Learning",
            duration: "35 min",
            isPreview: true,
          },
          {
            title: "Linear Regression",
            duration: "45 min",
            isPreview: false,
          },
          {
            title: "Classification Algorithms",
            duration: "50 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Advanced ML Topics",
        lessons: [
          {
            title: "Decision Trees and Random Forests",
            duration: "40 min",
            isPreview: true,
          },
          {
            title: "Clustering Algorithms",
            duration: "45 min",
            isPreview: false,
          },
          {
            title: "Model Evaluation",
            duration: "35 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
  {
    id: "fullstack-node-react",
    title: "Full-Stack Development with Node.js and React",
    description:
      "Build complete web applications using Node.js for the backend and React for the frontend.",
    level: "Advanced",
    duration: "16 weeks",
    rating: 4.8,
    imageSrc: "https://source.unsplash.com/random/800x600/?fullstack,developer",
    category: "Web",
    price: 139.99,
    instructor: {
      name: "Robert Martinez",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      bio: "Full-stack developer with experience building enterprise applications and scaling startups.",
    },
    features: [
      "40 video lessons",
      "Full e-commerce project",
      "Authentication implementation",
      "Deployment strategies",
      "Certificate of completion",
    ],
    curriculum: [
      {
        module: "Backend Development",
        lessons: [
          {
            title: "Node.js Fundamentals",
            duration: "40 min",
            isPreview: true,
          },
          {
            title: "Building RESTful APIs",
            duration: "45 min",
            isPreview: false,
          },
          {
            title: "Database Integration",
            duration: "50 min",
            isPreview: false,
          },
        ],
      },
      {
        module: "Frontend Integration",
        lessons: [
          {
            title: "React Frontend Setup",
            duration: "35 min",
            isPreview: true,
          },
          {
            title: "State Management with Redux",
            duration: "50 min",
            isPreview: false,
          },
          {
            title: "Connecting Frontend to Backend",
            duration: "40 min",
            isPreview: false,
          },
        ],
      },
    ],
  },
];
