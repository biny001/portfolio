import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Binyamin Tamirat",
  initials: "BT",
  url: "https://github.com/biny001",
  location: "Addis Ababa, Piassa",
  locationLink: "",
  description:
    "Software Engineer. I love building things and helping people.  ",
  summary:
    "I am a Comp Sci undergrad  and passionate Full Stack/Frontend Developer with hands-on experience in designing and developing scalable, user-friendly web applications. With a strong foundation in modern web technologies like React, Next.js, TypeScript, and Node.js, I bring a holistic approach to building intuitive and high-performance solutions.",
  avatarUrl: "/benji2.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "GraphQL",
    "Postgres",
    "Docker",
    "Prisma",

    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "biny01amin@gmail.com",
    tel: "+251942580385",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biny001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/binyamin-tamirat-594044283/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "telegram",
        url: "https://t.me/biny001",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "biny01amin@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Efuye-gela",
      href: "https://www.linkedin.com/company/efuye-gela/posts/",
      badges: [],
      location: "Remote",
      title: "FullStack Developer",
      logoUrl: "/efuye-gela.jpeg",
      start: "June 2024",
      end: "Dec 2024",
      description:
        "As a Full-Stack and Web Developer at Efuye Gela, I create and maintain web applications that enhance user experience. My role involves both front-end and back-end development to ensure smooth functionality and a user-friendly interface. With attention to detail and a focus on innovative solutions, I deliver high-quality code that supports our business goals and satisfies our users.",
    },
    {
      company: "MedLink",
      badges: [],
      href: "#",
      location: "Remote",
      title: "FullStack Developer",
      logoUrl: "/vardas.png",
      start: "August 2024",
      end: "Nov 2024",
      description:
        "Built an intuitive, user-friendly interface using modern frameworks like  Next.js to ensure seamless navigation and accessibility for diverse user roles,Ensured high performance and responsiveness across all devices by optimizing UI components and leveraging best practices in web development",
    },
    {
      company: "Vardac Inc",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Frontend Developer",
      logoUrl: "/vardas.png",
      start: "Nov 2024",
      end: "present",
      description:
        "Designed and developed a visually engaging and responsive landing page using Next.js to effectively showcase there brand and services,Built a fully functional e-commerce site with seamless navigation, optimized product listings, and a streamlined checkout process to enhance user experience and drive sales",
    },
  ],
  education: [
    {
      school: "Addis Ababa University",
      href: "https://grand.aau.edu.et/",
      degree: "Bachler's Degree of Computer Science (BCS)",
      logoUrl: "/aau.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "STEMpower Ethiopia(FOKA STEM CENTER)",
      href: "https://www.stempower.org/",
      degree: "Robotics local and regional competition",
      logoUrl: "/foka.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Austriali Mines",
      href: "#",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Austriali Mines is a mining company that mines gold, silver, and other precious metals. Built there landing page and There ecommer-app that uses Crypto currency for exchange",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stellar sdk",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://australiamines-client-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/detached17/australiamines-client",

          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/australiaminessss.jpg",
    },
    {
      title: "MedLink",
      href: "#",
      dates: "August 2024 - Nov 2024",
      active: true,
      description:
        "Built an intuitive, user-friendly interface using modern frameworks like  Next.js to ensure seamless navigation and accessibility for diverse user roles,Ensured high performance and responsiveness across all devices by optimizing UI components and leveraging best practices in web development",

      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.fiverr.com/yohanneslegessu?source=gig_page&gigs=slug%3Adesign-develop-and-deploy-your-full-stack-web-application%2Cpckg_id%3A1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/medlinkk/medlink/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medlink.png",
    },
    {
      title: "Golden-pizza",
      href: "https://golden-pizza.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Golden Pizza is a pizza delivery service that allows users to order pizza online and have it delivered to their doorsteps. (frontend only)",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://golden-pizza.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biny001/Golden-pizza",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hotpizza.png",
    },
  ],
  hackathons: [],
} as const;
