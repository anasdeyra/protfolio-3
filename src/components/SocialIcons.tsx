import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IconType } from "react-icons";

export default function SocialIcons() {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.5, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col fixed top-[50%] mt-[-120px] max-lg:left-2 max-xl:left-8 left-8 text-neutral-900 max-md:hidden"
      >
        {SOCIALS.map((props, i) => (
          <SocialLink key={i} {...props} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function SocialLink({ link = "#", Icon }: { link: string; Icon: IconType }) {
  return (
    <Link passHref href={link}>
      <motion.a
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        target="_blank"
        className="p-3"
      >
        <Icon size={24} />
      </motion.a>
    </Link>
  );
}

const SOCIALS = [
  {
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/in/anas-deyra-7015b9240/",
  },
  { Icon: BsGithub, link: "https://github.com/anasdeyra" },
  { Icon: BsFacebook, link: "https://www.facebook.com/anassdeyra/" },
  { Icon: BsInstagram, link: "https://www.instagram.com/anas_deyra/" },
  { Icon: BsTwitter, link: "https://twitter.com/anasdeyra" },
];
