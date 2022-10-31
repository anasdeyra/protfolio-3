import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  return (
    <AnimatePresence>
      <motion.nav
        transition={{ duration: 0.5, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-row items-center justify-between mt-6 max-5xl max-md:mx-4 max-lg:mx-16 mx-40 max-xl:mx-24 text-neutral-900"
      >
        <Link passHref href={"/"}>
          <motion.a whileTap={{ scale: 0.95 }} className="font-black text-2xl">
            Deyra
          </motion.a>
        </Link>
        <ul className="flex flex-row gap-8 max-md:hidden">
          {NAVLINKS.map((props, i) => (
            <NavItem key={i} {...props} />
          ))}
        </ul>
        <button className="md:hidden p-1">
          <FiMenu size={24} />
        </button>
      </motion.nav>
    </AnimatePresence>
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
      <Link passHref href={link}>
        <a className={`${active} py-2`}> {label}</a>
      </Link>
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
  { label: "Contact", link: "/contact" },
  { label: "About", link: "/about" },
];
