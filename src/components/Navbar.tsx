import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AnimatePresence>
        <motion.nav
          transition={{ duration: 0.5, delay: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-[1920px] mx-auto flex flex-row items-center justify-between mt-6 max-md:px-4 max-lg:px-16 px-40 max-xl:px-24 text-neutral-900"
        >
          <Link passHref href={"/"}>
            <motion.a
              whileTap={{ scale: 0.95 }}
              className="font-black text-2xl"
            >
              Deyra
            </motion.a>
          </Link>
          <ul className="flex flex-row gap-8 max-md:hidden">
            {NAVLINKS.map((props, i) => (
              <NavItem key={i} {...props} />
            ))}
          </ul>
          <button
            onClick={() => {
              setOpened(true);
            }}
            className="md:hidden p-1"
          >
            <FiMenu size={24} />
          </button>
        </motion.nav>
      </AnimatePresence>
      <AnimatePresence>
        {opened && (
          <NavModal
            close={() => {
              setOpened(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ label, link }: { label: string; link: string }) {
  const { pathname } = useRouter();
  const active = pathname === link ? "font-bold" : "";
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
      whileTap={{ scale: 0.95 }}
    >
      {link.includes("#") ? (
        <a href={link} className={`${active} py-2`}>
          {label}
        </a>
      ) : (
        <Link passHref href={link}>
          <a className={`${active} py-2`}> {label}</a>
        </Link>
      )}
      <motion.div
        initial={{ width: "0" }}
        animate={{ width: isHovered ? "100%" : "0" }}
        className="absolute bg-[#111] rounded-md h-[3px] "
      />
    </motion.li>
  );
}

const NAVLINKS = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/#contact" },
  { label: "About", link: "/#about" },
];

function NavModal({ close }: { close: () => void }) {
  const { pathname } = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ type: "tween" }}
      id="drawer-example"
      className="fixed right-0 top-0 z-40 h-screen pt-6 px-4 overflow-y-auto bg-white w-full rounded-3xl "
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <div className=" flex flex-row justify-between">
        <h2 className="font-bold text-2xl">Naviagtion</h2>
        <button
          onClick={close}
          type="button"
          data-drawer-dismiss="drawer-example"
          aria-controls="drawer-example"
          className=" text-neutral-900 bg-transparent rounded-lg text-sm p-1 inline-flex items-center "
        >
          <FiX size={24} />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 mt-12"
      >
        {NAVLINKS.map(({ label, link }, i) => (
          <motion.li
            onClick={() => {
              close();
            }}
            key={i}
            variants={item}
            className="relative"
          >
            <a
              href={link}
              className={`${
                pathname === link ? "font-extrabold" : "font-medium "
              } py-2 text-xl`}
            >
              {label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
