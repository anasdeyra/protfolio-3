const PROJECTS: ProjectType[] = [
  {
    name: "AscFi",
    slug: "a Solana token generator",
    description:
      "This is a project where the client wanted to make a simple website that make it easy for anyone to create solana tokens.",
    images: ["/projects/solana.png"],
    demoUrl: "https://nextform-eight.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/nextform",
    isBig: false,
  },

  {
    name: "Coiner Impact",
    slug: "a crypto & web3 tech magazine",
    description:
      "Coiner Impact is a magazine specializing in crypto, blockchain, web3, and cyber security.",
    images: ["/projects/ci.png", "/projects/ci2.png", "/projects/ci3.png"],
    demoUrl: "https://www.coinerimpact.com/",
    repoUrl: "https://github.com/anasdeyra/coiner-impact",
    isBig: true,
  },
  {
    name: "Tutors street",
    slug: "An education platform.",
    description:
      "This is an E-learning platform that matches peoples with the best tutor.",
    images: ["/projects/tut.png"],
    demoUrl: "https://tutors-street.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/edu",
    isBig: false,
  },
  {
    name: "ArtBeat",
    slug: "A web3 atrworks marketplace.",
    description:
      "ArtBeat is curated art marketplace that aims to connect people who appriciate arts and the artists who are working with physical or digital medium",
    images: [
      "/projects/artbeat.png",
      "/projects/artbeat2.png",
      "/projects/artbeat3.png",
      "/projects/artbeat4.png",
      "/projects/artbeat5.png",
      "/projects/artbeat6.png",
    ],
    demoUrl: "https://artbeat.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/artbeat",
    isBig: true,
  },
  {
    name: "Tweeter",
    slug: "a twitter clone",
    description:
      "Tweeter is a Twitter clone i made with my colleague for an online challenge.",
    images: ["/projects/tweeter.jpg"],
    demoUrl: "https://tweeter-sand.vercel.app/login",
    repoUrl: "https://github.com/anasdeyra/tweeter-clone-front-",
    isBig: false,
  },
  {
    name: "Offline web app",
    slug: "A todo list that works offline",
    description:
      "This is a simple to-do app to demonstrate the ability to make an offline PWA (Progressive web app) that can be installed and work offline.",
    images: ["/projects/todo.jpg"],
    demoUrl: "https://todo-anasdeyra.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/todo",
    isBig: false,
  },
  {
    name: "Shortify",
    slug: "a link shortner",
    description:
      "A link shortener project I made to learn new technologies such as TypeScript, Zod, Prisma, and Tailwind CSS.",
    images: ["/projects/shortify.png"],
    demoUrl: "https://shrtify.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/shortify",
    isBig: false,
  },
  {
    name: "Venix",
    slug: "an NFT marketplace",
    description:
      "Venix is a personal project I made to learn Next.js and Thirdweb",
    images: ["/projects/venix.png"],
    demoUrl: "https://venix-nft.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/Venix-NFT-marketplace",
    isBig: true,
  },

  {
    name: "Balacy",
    slug: "a real-estate app",
    description:
      "This project why my entry for the web Development hackathon that I won first place. It featured my ability to make a dark and light mode, mobile-friendly design, proper forms and request handling.I used React, react-hook-form, react-query, Chakra-UI, react-icons.",
    images: [
      "/projects/balacy4.png",
      "/projects/balacy2.png",
      "/projects/balacy3.png",
      "/projects/balacy5.png",
      "/projects/balacy.png",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/anasdeyra/balacy-front",
    isBig: false,
  },
  {
    name: "PenParty",
    slug: "a CTF event website",
    description:
      "A club from my college was hosting a cyber security event so purposed to make them a website to feature their event and handle participants.\nIn this project I took the chance to learn a new robust UI library (Mantine) and to furthermore sharpen my skills.I was using react-router for routing, react-hook-form for handling forms (errors, validation, etc..), react-query for handling request (caching and etc..).",
    images: [
      "/projects/PenParty.png",
      "/projects/PenParty2.png",
      "/projects/PenParty3.png",
      "/projects/PenParty4.png",
    ],
    demoUrl: "https://penparty.netlify.app/",
    repoUrl: "https://github.com/anasdeyra/penparty",
    isBig: false,
  },

  {
    name: "Chess-game",
    slug: "a chess game",
    description:
      "I made this chess game to sharpen my problem solving skill and develop a chess AI in the future.",
    images: ["/projects/chess.png"],
    demoUrl: "https://chess-game-eight.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/chess-game",
    isBig: false,
  },
  {
    name: "Wordle-ar",
    slug: "an arabic words gessing game clone",
    description: "Wordle-ar is an arabic words gessing game clone",
    images: [
      "/projects/wordle-ar.png",
      "/projects/wordle-ar2.png",
      "/projects/wordle-ar3.png",
    ],
    demoUrl: "https://wordle-ar.vercel.app/",
    repoUrl: "https://github.com/anasdeyra/wordle-ar",
    isBig: false,
  },
];
export default PROJECTS;

export interface ProjectType {
  name: string;
  slug: string;
  description: string;
  images: string[];
  isBig: boolean;
  demoUrl: string | null;
  repoUrl: string;
}
