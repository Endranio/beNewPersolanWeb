import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create user
  const user = await prisma.profile.create({
    data: {
      headers: "Hi I'm Endra 👋",
          description: `Hi! I'm an aspiring fullstack developer currently learning modern web development.
I've been working with technologies like React, TypeScript, Next.js, and Express, as well as UI frameworks such as ShadCN UI, Tailwind CSS, and Chakra UI.
I'm also familiar with tools like React Router DOM and TanStack Query to build responsive and efficient web applications.
This portfolio is a showcase of my learning journey and a stepping stone as I seek opportunities to start my career in the tech industry.`,
          location: "Depok,Sawangan,Indonesia",
          position: "Fullstack Developer",
          available: true,
          whatsapp: "+621234567890",
          cv: "https://example.com/cv.pdf",
          image: "profile.jpg",
    },
  });

  console.log("✅ Seed success! Created user:");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
