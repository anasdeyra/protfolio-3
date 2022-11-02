import { motion } from "framer-motion";
import React from "react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
export default function SkillsSection() {
  return (
    <div id="skills">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="font-bold text-5xl max-md:text-3xl"
      >
        My skills
      </motion.h2>
      <motion.div
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        initial="hidden"
        layout
        className="flex mt-16 md:justify-center md:mt-24 flex-row flex-wrap md:gap-12 gap-6 "
      >
        {SKILLS.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </motion.div>
    </div>
  );
}

function Skill({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ color: "#111", backgroundColor: "#ddd" }}
      className="font-semibold cursor-pointer  bg-neutral-700 text-white py-2 px-4 rounded-full"
    >
      {children}
    </motion.div>
  );
}

const SKILLS = [
  "React",
  "Next.js",
  "SEO-optimization",
  "UI/UX",
  "Front-end developement",
  "Typescript",
  "Full-stack developement",
  "Firebase",
  "Supabase",
  "Prisma",
  "tRPC",
  "Mantine-UI",
  "TailwindCSS",
  "Chakra-UI",
  "Storybook",
  "Web 3.0",
  "Vercel",
];
