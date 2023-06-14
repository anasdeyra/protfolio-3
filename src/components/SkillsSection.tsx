import { motion, useInView } from "framer-motion";
import ProgressRing from "./ProgressRing";
import { SkillsReturn } from "../pages";
import { useEffect, useRef, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function SkillsSection({ skills }: SkillsReturn) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInview = useInView(ref);

  const [once, setOnce] = useState(false);

  useEffect(() => {
    if (isInview) setOnce(true);
  }, [isInview]);

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

      <div className="mt-16 md:mt-24 flex gap-8 items-start flex-wrap">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={ref}
          className="grid grid-cols-2 w-max mx-auto basis-[336px] lg:order-2"
        >
          {once && (
            <>
              <ProgressRing
                skill="Front-end"
                progress={92}
                radius={84}
                stroke={13}
              />
              <div className="hidden lg:block">
                <ProgressRing
                  skill="React"
                  progress={95}
                  radius={84}
                  stroke={13}
                />
              </div>
              <ProgressRing
                skill="Back-end"
                progress={81}
                radius={84}
                stroke={13}
              />
              <div className="hidden lg:block">
                <ProgressRing
                  skill="UI design"
                  progress={76}
                  radius={84}
                  stroke={13}
                />
              </div>
            </>
          )}
        </motion.div>

        <div className="flex flex-col gap-12 shrink lg:basis-[400px] grow lg:order-1">
          {skills.map(({ name, tags }, i) => (
            <div key={i}>
              <motion.h2
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl font-bold text-start"
              >
                {name}
              </motion.h2>
              <motion.div
                layout
                variants={container}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="flex gap-x-4 gap-y-2 mt-4 flex-wrap"
              >
                {tags.map((skill, j) => (
                  <SkillChip key={j}>{skill.name}</SkillChip>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillChip({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={item}
      className="transition-colors  hover:bg-neutral-50 bg-white cursor-default block rounded-full text-neutral-900 border px-3 py-2 md:px-[18px] md:py-[10px] font-semibold text-xs md:text-base border-neutral-200"
    >
      {children}
    </motion.span>
  );
}
