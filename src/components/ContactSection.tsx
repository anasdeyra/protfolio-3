import { motion } from "framer-motion";
import { SOCIALS } from "./SocialIcons";

export default function ContactSection() {
  return (
    <motion.div
      id="contact"
      className="flex text-white flex-col justify-center w-full rounded-3xl p-6 bg-[#111] "
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-5xl max-md:text-3xl mb-10 md:mb-16"
      >
        Lets Get in Touch
      </motion.h2>
      <Socials />
      <div className="flex flex-col mt-4">
        <h3 className="text-xl md:text-2xl">anasdoura607@gmail.com</h3>
        <h3 className="text-xl md:text-2xl mt-1">(+216) 93 028 674</h3>
      </div>
      <form
        className="flex flex-col mt-8 text-start gap-6 text-white"
        action="https://formsubmit.co/anasdoura607@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium  ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-white focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium  ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium  ">
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            className=" bg-white focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Lets work together!"
            required
          />
        </div>

        <button
          className="bg-white text-[#111] px-6 py-2 rounded-lg font-bold "
          type="submit"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

function Socials() {
  return (
    <div className="flex flex-row justify-center">
      {SOCIALS.map(({ Icon, link }) => (
        <a href={link} className=" p-4" target="_blank">
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
