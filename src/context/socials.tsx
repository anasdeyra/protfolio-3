import React, { useContext, useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiUpwork,
} from "react-icons/si";
import { createContext } from "react";
import { gql, useQuery } from "@apollo/client";

const DEFAULT_VALUE = [
  {
    Icon: SiLinkedin,
    link: "https://www.linkedin.com/in/anas-deyra-7015b9240/",
  },
  { Icon: SiGithub, link: "https://github.com/anasdeyra" },
  { Icon: SiFacebook, link: "https://www.facebook.com/anassdeyra/" },
  { Icon: SiInstagram, link: "https://www.instagram.com/anas_deyra/" },
  { Icon: SiTwitter, link: "https://twitter.com/anasdeyra" },
  {
    Icon: SiUpwork,
    link: "https://www.upwork.com/freelancers/~0141d0cac0eb05dc40",
  },
];

export const socialsContext =
  createContext<SocialContextValue[]>(DEFAULT_VALUE);

export const SocialsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useQuery<SocialsResponse>(gql`
    query MyQuery {
      social(where: { id: "clfs9wpxz7fdu0bw77of2r3il" }) {
        facebookUrl
        githubUrl
        instagramUrl
        linkedInUrl
        twitterUrl
        upworkUrl
      }
    }
  `);

  const [socials, setSocials] = useState<SocialContextValue[]>(DEFAULT_VALUE);

  useEffect(() => {
    if (!data) return;
    setSocials([
      {
        Icon: SiLinkedin,
        link: data.social.linkedInUrl,
      },
      { Icon: SiGithub, link: data.social.githubUrl },
      { Icon: SiFacebook, link: data.social.facebookUrl },
      { Icon: SiInstagram, link: data.social.instagramUrl },
      { Icon: SiTwitter, link: data.social.twitterUrl },
      { Icon: SiUpwork, link: data.social.upworkUrl },
    ]);
  }, [data]);

  return (
    <socialsContext.Provider value={socials}>
      {children}
    </socialsContext.Provider>
  );
};

export const useSocials = () => {
  const socials = useContext(socialsContext);
  return socials;
};

export interface SocialContextValue {
  Icon: IconType;
  link: string;
}

interface SocialsResponse {
  social: {
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
    linkedInUrl: string;
    githubUrl: string;
    upworkUrl: string;
  };
}
