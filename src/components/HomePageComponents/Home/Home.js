import ArticleSection from "../ArticleSection/ArticleSection";
import EventSection from "../EventSection/EventSection";

import {
  AboutGrid,
  BecomeAMember,
  MediaSection,
  NewsSection,
  TopSlider,
  SkipToMenusHome,
} from "../../index";


const Home = ({ toggleTheme }) => {
  return (
    <>
      <SkipToMenusHome />
      <TopSlider />
      <AboutGrid />
      <ArticleSection/>
      <BecomeAMember />
      <EventSection/>
      <MediaSection />
      <NewsSection />
    </>
  );
};

export default Home;
