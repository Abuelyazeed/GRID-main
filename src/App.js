import React, { useEffect, useState } from 'react';
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.scss';
import {
  AboutGrid,
  AboutGridAR,
  ArticlePageListing,
  BecomeAMemberAR,
  EventDetailsPage,
  EventPageListing,
  Footer,
  Header,
  HeaderAR,
  Home,
  HomeAR,
  MediaPage,
  NewsSection,
  NotFoundPage,
  ScrollToTop,
  SettingsButton,
  SuccessStories,
} from './components';

import Directory from './utilities/Directory';
import MediaDetails from './components/InnerPageComponents/MediaPage/Details/details';

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    !localStorage.getItem('theme') ? 'light' : localStorage.getItem('theme')
  );

  useEffect(() => {
    if (!sessionStorage.getItem('language')) {
      navigate(Directory.EN);
      sessionStorage.setItem('language', Directory.EN);
    }
  }, []);

  const location = useLocation().pathname.substring(0, 3);

  const toggleHeader = () => {
    if (location === '/en') {
      sessionStorage.setItem('language', Directory.EN);
      return <Header />;
    } else if (location === '/ar') {
      sessionStorage.setItem('language', Directory.AR);
      return <HeaderAR />;
    }
  };

  const toggleTheme = () => {
    setTheme((curr) => {
      if (curr === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      } else {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
    });
  };

  return (
    !loading && (
      <div className="App" id={theme}>
        {toggleHeader()}
        <SettingsButton toggleTheme={toggleTheme} />
        <ScrollToTop>
          <Routes>
            <Route path={Directory.EN} element={<Outlet />}>
              <Route
                path={Directory.EMPTY_CHILD}
                element={<Home toggleTheme={toggleTheme} />}
              />
              <Route path={Directory.ABOUT_GRID} element={<AboutGrid />} />
              <Route
                path={Directory.EVENT_LISTING}
                element={<EventPageListing />}
              />
              <Route
                path={Directory.EVENT_LISTING + '/' + Directory.EVENT_DETAILS}
                element={<EventDetailsPage />}
              />
              <Route
                path={Directory.ARTICLE_LISTING}
                element={<ArticlePageListing />}
              />

              <Route path={Directory.SUCCESS_STORIES} element={<Outlet />}>
                <Route
                  path={Directory.EMPTY_CHILD}
                  element={<SuccessStories />}
                />
                <Route path={Directory.NEWS} element={<NewsSection />} />
              </Route>

              <Route
                path={'media-gallery-page'}
                element={<MediaPage />}
              ></Route>

              <Route path={'media-details'} element={<MediaDetails />}></Route>
            </Route>

            <Route path={Directory.AR} element={<Outlet />}>
              <Route
                path={Directory.EMPTY_CHILD}
                element={<HomeAR toggleTheme={toggleTheme} />}
              />
              <Route path={Directory.ABOUT_GRID} element={<AboutGridAR />} />
              <Route
                path={Directory.BECOME_MEMBER}
                element={<BecomeAMemberAR />}
              />
              {/*<Route path={Directory.MEDIA_GALLERY} element={<MediaGallery/>}/>*/}

              {/*<Route path={Directory.SUCCESS_STORIES} element={<Outlet/>}>*/}
              {/*    <Route path={Directory.EMPTY_CHILD} element={<SuccessStories/>}/>*/}
              {/*    <Route path={Directory.NEWS} element={<NewsSection/>}/>*/}
              {/*</Route>*/}
            </Route>

            <Route path={Directory.ERROR} element={<NotFoundPage />} />
            {/*<Route path={""} element={}></Route>*/}
          </Routes>
        </ScrollToTop>
        <Footer toggleTheme={toggleTheme} />
      </div>
    )
  );
};

export default App;
