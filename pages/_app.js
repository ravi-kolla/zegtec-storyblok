import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../layouts/components/Feature";
import Grid from "../layouts/components/Grid";
import Page from "../layouts/components/Page";
import Teaser from "../layouts/components/Teaser";
import FeatureCard from "../layouts/components/FeatureCard";
import Section from "../layouts/components/Section";
import ServicesCarousel from "../layouts/components/ServicesCarousel";
import AllArticles from '../layouts/components/AllArticles';
import Article from '../layouts/components/Article';
import Video from '../layouts/components/Video';
import PopularArticles from '../layouts/components/PopularArticles';
import StackedCard from '../layouts/components/StackedCard';
import UserProfile from '../layouts/components/UserProfile';
import UserImageProfile from '../layouts/components/UserImageProfile';
import TextBlock from '../layouts/components/TextBlock';
import Clients from '../layouts/components/Clients';
import Image from '../layouts/components/Image';
import Jobs from '../layouts/components/Jobs';
import JobPost from '../layouts/components/JobPost';
import HeroCarousel from '../layouts/components/HeroCarousel';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  featureCard: FeatureCard,
  section: Section,
  servicesCarousel: ServicesCarousel,
  video: Video,
  stackedCard: StackedCard,
  userProfile: UserProfile,
  textBlock: TextBlock,
  userImageProfile: UserImageProfile,
  clients: Clients,
  image: Image,
  jobs:Jobs,
  jobPost: JobPost,
  heroCarousel: HeroCarousel,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACESSTOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

const App = ({ Component, pageProps }) => {
  // default theme setup

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
