import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function InfoSegments() {
  const [active, setActive] = useState("About");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
      className={"w-full text-[#111]"}
    >
      <div>
        <motion.nav
          layout
          className="flex flex-wrap flex-row font-bold gap:4 md:gap-8 md:text-xl text-lg   max-lg:justify-between"
        >
          {SEGEMENTS.map(({ title }) => (
            <motion.div key={title} className="flex flex-col">
              <motion.div
                initial={{ color: "#aaa" }}
                animate={{ color: title === active ? "#111" : undefined }}
                className={`cursor-pointer `}
                onClick={() => {
                  setActive(title);
                }}
              >
                {title}
              </motion.div>
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

const EDUCATION: Event[] = [
  {
    title: "Bac Degree in computer science",
    slug: "Bardo high school - 2021",
    body: "Graduated in july 2021 at Bardo high school with 80% score.",
  },
];
const WORK: Event[] = [
  {
    title: "CTO at Coiner Impact",
    slug: "September 2022 - Present",
    body: "Coiner Impact is a magazine specializing in crypto, blockchain, web3, and cyber security.",
  },
  {
    title: "Web Developer at Engineering SPARK club",
    slug: "April 2022 - September 2022",
    body: "Engineering SPARK is a cybersecurity club that hosts CTF events, cybersecurity, web development and ai workshops, etc...    ",
  },
];

const EXPERIENCE: Event[] = [
  {
    title: "1st place at IEEE hackathon",
    slug: "Faculty of Sciences of Tunis - 2022",
    body: "The goal of this hackathon was to build a real estate renting management solution in 24 hours. I worked on the front-end part where I managed to create multiple pages and a dashboard with a modern and user-friendly UI using Chakra-UI.",
  },
  {
    title: "2nd place at INFO+ hackathon",
    slug: "Faculty of Sciences of Tunis - 2022",
    body: "The goal of this hackathon was to build a web-developers freelancing platform where its easy for clients and freelancers to find the right match on the local scale. I was responssible for the front-end part where I created multiple pages and implemented a real-time chat feature using socket.io.",
  },
];

const SEGEMENTS: { title: string; children: React.ReactNode }[] = [
  {
    title: "About",
    children: (
      <h3 className="md:text-xl text-lg font-medium text-left">
        Anas Ben Deyra, {_calculateAge()} years old computer science student
        born and based in Tunisia, Have been developing web apps with react for
        2 years. And I also love cycling and making bad music.
      </h3>
    ),
  },
  {
    title: "Education",
    children: <EventsList events={EDUCATION} />,
  },
  {
    title: "Work",
    children: <EventsList events={WORK} />,
  },
  { title: "Experience", children: <EventsList events={EXPERIENCE} /> },
];

function EventsList({ events }: Props) {
  return (
    <div className="flex flex-col gap-10 text-left">
      {events.map(({ body, slug, title }) => (
        <div key={title} className="flex flex-col items-start ">
          <h3 className="md:text-xl text-lg font-extrabold ">{title}</h3>
          <h4 className="md:text-md text- font-medium text-neutral-500  mt-3 md:mt-4">
            {slug}
          </h4>
          <h4 className="md:text-lg text-md font-medium  ">{body}</h4>
        </div>
      ))}
    </div>
  );
}

interface Event {
  title: string;
  body: string;
  slug: string;
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
