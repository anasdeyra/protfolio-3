import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SocialContextValue, useSocials } from "../context/socials";
import { getWebsiteName } from "./ContactSection";

export default function SocialIcons() {
  const socials = useSocials();
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.5, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col fixed top-[50%] mt-[-120px] max-lg:left-2 max-xl:left-8 left-8 text-neutral-900 max-md:hidden"
      >
        {socials.map((props, i) => (
          <SocialLink key={i} {...props} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function SocialLink({ link = "#", Icon }: SocialContextValue) {
  return (
    <Link passHref href={link}>
      <motion.a
        rel="noreferrer"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        target="_blank"
        className="p-3"
      >
        <Icon size={24} />
        <span className="sr-only">{getWebsiteName(link) + " link"}</span>
      </motion.a>
    </Link>
  );
}
