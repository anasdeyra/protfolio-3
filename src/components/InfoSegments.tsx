import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AboutReturn } from "../pages/index";

export default function InfoSegments({
  aboutSection: { about, education, experience, work },
}: AboutReturn) {
  const [active, setActive] = useState("About");

  const SEGEMENTS: { title: string; children: React.ReactNode }[] = [
    {
      title: "About",
      children: about.split("\n\n").map((s)=><p className="md:text-xl text-lg font-medium text-left max-w-2xl">{s}</p>),
    },
    {
      title: "Education",
      children: <EventsList events={education} />,
    },
    { title: "Experience", children: <EventsList events={work} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
      className={"w-fit text-[#111]"}
    >
      <div>
        <motion.nav
          layout
          className="flex flex-wrap flex-row font-bold gap:4 md:gap-8 md:text-xl text-lg   max-lg:justify-between"
        >
          {SEGEMENTS.map(({ title }) => (
            <motion.div key={title} className="flex flex-col">
              <motion.h3
                initial={{ color: "#aaa" }}
                animate={{ color: title === active ? "#111" : undefined }}
                className={`cursor-pointer `}
                onClick={() => {
                  setActive(title);
                }}
              >
                {title}
              </motion.h3>
              {title === active && (
                <motion.span
                  initial={{ scaleX: 0, backgroundColor: "#aaa" }}
                  animate={{
                    scaleX: 1,
                    backgroundColor: title === active ? "#111" : undefined,
                  }}
                  style={{ borderRadius: "8px 8px 0 0" }}
                  className=" w-full h-1 mt-[2px]"
                />
              )}
            </motion.div>
          ))}
        </motion.nav>
        <AnimatePresence mode="wait">
          {SEGEMENTS.map(
            ({ title, children }) =>
              title === active && (
                <motion.div
                  className="mt-8"
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  exit={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function EventsList({ events }: Props) {
  return (
    <div className="flex flex-col gap-10 text-left">
      {events.map(({ event: { body, timeStamp, title } }) => (
        <div key={title} className="flex flex-col items-start ">
          <h3 className="md:text-xl text-lg font-extrabold ">{title}</h3>
          <span className="md:text-md text- font-medium text-neutral-500  mt-3 md:mt-4">
            {timeStamp}
          </span>
          <p className="md:text-lg text-md font-medium max-w-2xl">{body}</p>
        </div>
      ))}
    </div>
  );
}

interface Event {
  event: {
    timeStamp: string;
    title: string;
    body: string;
  };
}

interface Props {
  events: Event[];
}
function _calculateAge() {
  // birthday is a date
  var ageDifMs = Date.now() - new Date("2002/10/8").getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
