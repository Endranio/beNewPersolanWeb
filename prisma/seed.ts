// prisma/seed.ts
import { PrismaClient } from '../generated/prisma'
const prisma = new PrismaClient()

async function main() {
  await prisma.profile.create({
    data: {
      image: "profile.jpg",
      headers: "Hi I'm Endra 👋",
      description: "Hi! I'm an aspiring fullstack developer currently learning modern web development.\nI've been working with technologies like React, TypeScript, Next.js, and Express, as well as UI frameworks such as ShadCN UI, Tailwind CSS, and Chakra UI.\nI'm also familiar with tools like React Router DOM and TanStack Query to build responsive and efficient web applications.\nThis portfolio is a showcase of my learning journey and a stepping stone as I seek opportunities to start my career in the tech industry.",
      location: "Depok,Sawangan,Indonesia",
      position: "Fullstack Developer",
      available: true,
      email: "endranio123@gmail.com",
      whatsapp: "+621234567890",
      cv: "https://example.com/cv.pdf"
    }
  })

  await prisma.techStack.createMany({
    data: [
      { tech: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name: "React" },
      { tech: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", name: "Node.js" },
      { tech: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", name: "TypeScript" },
      { tech: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", name: "Tailwind CSS" },
      { tech: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", name: "Express.js" }
    ]
  })

  await prisma.experience.createMany({
    data: [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG",
        position: "Frontend Developer",
        company: "Google",
        jobDesk: ["Developed user-facing features\nOptimized web performance\nCollaborated with designers"],
        tech: ["React,TypeScript,Redux"],
        startDate: "2022-06-01",
        endDate: "2022-12-2",
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        position: "Software Engineer",
        company: "Amazon",
        jobDesk: ["Built scalable APIs\nImproved database queries\nWorked with cross-functional teams"],
        tech: ["Node.js,Express,PostgreSQL"],
        startDate:"2020-01-15",
        endDate: "2022-05-30"
      }
    ]
  })

  await prisma.project.createMany({
    data: [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my work and skills.",
        tech: ["Next.js,Tailwind CSS,Vercel"],
        linkGithub: "https://github.com/example/portfolio",
        linkDemo: "https://example-portfolio.vercel.app",
        isDemo: true,
        isGithub: false
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        title: "Task Manager App",
        description: "A fullstack task manager application.",
        tech: ["React,Node.js,MongoDB"],
        linkGithub: "https://github.com/example/portfolio",
        linkDemo: "",
        isDemo: false,
        isGithub: true
      }
    ]
  })
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
