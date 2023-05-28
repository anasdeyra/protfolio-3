import React, { useContext, useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { createContext } from "react";
import { gql, useQuery } from "@apollo/client";

export const socialsContext = createContext<SocialContextValue[]>([
  {
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/in/anas-deyra-7015b9240/",
  },
  { Icon: BsGithub, link: "https://github.com/anasdeyra" },
  { Icon: BsFacebook, link: "https://www.facebook.com/anassdeyra/" },
  { Icon: BsInstagram, link: "https://www.instagram.com/anas_deyra/" },
  { Icon: BsTwitter, link: "https://twitter.com/anasdeyra" },
]);

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
      }
    }
  `);

  const [socials, setSocials] = useState<SocialContextValue[]>([]);

  useEffect(() => {
    if (!data) return;
    setSocials([
      {
        Icon: BsLinkedin,
        link: data.social.linkedInUrl,
      },
      { Icon: BsGithub, link: data.social.githubUrl },
      { Icon: BsFacebook, link: data.social.facebookUrl },
      { Icon: BsInstagram, link: data.social.instagramUrl },
      { Icon: BsTwitter, link: data.social.twitterUrl },
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
  };
}
