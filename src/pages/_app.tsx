import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import ScrollUp from "../components/ScrollUp";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SocialsProvider } from "../context/socials";
import { Analytics } from "@vercel/analytics/react";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfs8yutb1p2v01ui99dv6t12/master",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anas Deyra: front-end developer</title>
        <meta
          name="description"
          content="A Web developer specializing in building (and occasionally designing)
          exceptional digital experiences mostly using Next js. Currently, I am
          a part time freelancer."
        />

        {/* OG TAGS */}
        <meta property="og:title" content="Anas Deyra: front-end developer" />
        <meta property="og:url" content="https://anasdeyra.vercel.app/" />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:website" content="website" />
        <meta
          name="og:description"
          content="A Web developer specializing in building (and occasionally designing)
          exceptional digital experiences mostly using Next js. Currently, I am
          a part time freelancer."
        />

        {/* TWITTER TAGS */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@anasdeyra" />
        <meta
          name="twitter:description"
          content="A Web developer specializing in building (and occasionally designing)
          exceptional digital experiences mostly using Next js. Currently, I am
          a part time freelancer."
        />
        <meta name="twitter:title" content="Anas Deyra: front-end developer" />
        <meta name="twitter:image" content="/banner.jpg" />
      </Head>
      <ApolloProvider client={client}>
        <SocialsProvider>
          <Navbar />
          <div className="max-w-[1920] mx-auto">
            <Component {...pageProps} />
          </div>
          <SocialIcons />
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg"
              style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                zIndex: -1,
                top: 0,
                left: 0,
                backgroundSize: "450px 450px",
              }}
            />
          </AnimatePresence>
          <ScrollUp />
        </SocialsProvider>
      </ApolloProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
