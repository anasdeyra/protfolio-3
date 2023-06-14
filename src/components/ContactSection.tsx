import { motion } from "framer-motion";
import { useSocials } from "../context/socials";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      id="contact"
      className="flex text-white flex-col justify-center w-full rounded-3xl p-6 bg-[#111] "
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-bold text-5xl max-md:text-3xl my-10 md:my-16"
      >
        Lets Get in Touch
      </motion.h2>
      <Socials />
      <motion.div
        whileInView="show"
        viewport={{ once: true }}
        initial="hidden"
        className="flex flex-col mt-4"
        layout
        variants={container}
      >
        <motion.h3 variants={item} className="text-xl md:text-2xl">
          anasdoura607@gmail.com
        </motion.h3>
        <motion.h3 variants={item} className="text-xl md:text-2xl mt-1">
          (+216) 93 028 674
        </motion.h3>
      </motion.div>
      <div className="grid lg:grid-cols-2 mt-8 md:mt-16 overflow-visible">
        <div className="relative grid items-start justify-center max-lg:hidden overflow-visible">
          {IMAGES.map(({ src, delay, ...styles }, i) => (
            <motion.img
              key={i}
              height={128}
              width={128}
              initial={{ y: -15, ...styles }}
              animate={{ y: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                delay,
              }}
              className="absolute"
              src={src}
            />
          ))}
          <motion.img
            height={300}
            width={300}
            initial={{
              rotateZ: 60,
            }}
            animate={{ rotateZ: 40 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            src={"/illustrations/t.png"}
          />
        </div>
        <form
          className="flex flex-col  text-start gap-6 text-white"
          action="https://formsubmit.co/anasdoura607@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name" className="block mb-3 text-sm font-medium  ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-white placeholder:text-neutral-500 font-medium focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-3 text-sm font-medium  ">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white placeholder:text-neutral-500 font-medium focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-3 text-sm font-medium  "
            >
              Message
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              className="resize-none bg-white focus:outline-none border placeholder:text-neutral-500 font-medium border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
              placeholder="Lets work together!"
              required
            />
          </div>

          <button
            className="bg-white text-[#111] px-6 py-2 rounded-md font-bold mt-6"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}

function Socials() {
  const socials = useSocials();
  if (socials.length === 0) return null;
  return (
    <motion.div
      whileInView="show"
      viewport={{ once: true }}
      initial="hidden"
      className="flex flex-row justify-center"
      layout
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
          },
        },
      }}
    >
      {socials.map(({ Icon, link }, i) => (
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -5, rotateZ: -45, x: -5 },
            show: { opacity: 1, y: 0, rotateZ: 0, x: 0 },
          }}
          whileHover={{ scale: 1.2 }}
          key={i}
          href={link}
          className=" p-4 "
          rel="noreferrer"
          target="_blank"
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  );
}

const IMAGES = [
  {
    src: "/illustrations/ill.png",
    top: -60,
    left: -60,
    delay: 0,
    rotateZ: -25,
  },
  {
    src: "/illustrations/ill (2).png",

    bottom: -70,
    right: 40,
    delay: 0.6,
    rotateZ: 140,
  },
  {
    src: "/illustrations/ill (2).webp",
    bottom: 0,
    left: -100,
    delay: 0.2,
  },
  {
    src: "/illustrations/ill (4).png",
    top: -60,
    right: 0,
    delay: 0.8,
  },
];
